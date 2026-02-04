
import User from '../models/User.js';
import SystemSettings from '../models/SystemSettings.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
};

export const register = async (req, res) => {
  const { name, email, password, role, enrollmentNumber, dob, department } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Check system settings for registration
    if (role !== 'admin') {
      let settings = await SystemSettings.findOne();
      if (!settings) {
         settings = await SystemSettings.create({});
      }
      if (role === 'teacher' && !settings.teacherRegistrationEnabled) {
        return res.status(403).json({ message: 'Teacher registration is currently disabled' });
      }
      if (role === 'student' && !settings.studentRegistrationEnabled) {
        return res.status(403).json({ message: 'Student registration is currently disabled' });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const isApproved = true; // Auto-approve if registration is enabled
    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      isApproved,
      enrollmentNumber,
      dob,
      department
    });

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password, enrollmentNumber, dob } = req.body;

  try {
    let user;
    if (enrollmentNumber && dob) {
       user = await User.findOne({ enrollmentNumber });
       if (!user) return res.status(401).json({ message: 'Invalid enrollment number' });
       
       if (user.role !== 'student') return res.status(401).json({ message: 'Enrollment login only for students' });

       const inputDate = new Date(dob).toISOString().split('T')[0];
       const userDate = new Date(user.dob).toISOString().split('T')[0];
       
       if (inputDate !== userDate) return res.status(401).json({ message: 'Invalid Date of Birth' });
    } else {
       user = await User.findOne({ email });
       if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ message: 'Invalid email or password' });
       }
    }

    if (!user.isActive) return res.status(403).json({ message: 'Account is deactivated' });
    if (!user.isApproved) return res.status(403).json({ message: 'Account pending approval' });

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
