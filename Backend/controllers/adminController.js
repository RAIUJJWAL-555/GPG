
import Notice from '../models/Notice.js';
import User from '../models/User.js';
import SystemSettings from '../models/SystemSettings.js';

// Get Dashboard Stats
export const getDashboardStats = async (req, res) => {
  try {
    const totalTeachers = await User.countDocuments({ role: 'teacher' });
    const totalStudents = await User.countDocuments({ role: 'student' });
    const pendingTeachers = await User.countDocuments({ role: 'teacher', isApproved: false });
    const pendingStudents = await User.countDocuments({ role: 'student', isApproved: false });
    
    res.json({ totalTeachers, totalStudents, pendingTeachers, pendingStudents });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// System Settings
export const getSettings = async (req, res) => {
  try {
    let settings = await SystemSettings.findOne();
    if (!settings) settings = await SystemSettings.create({});
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSettings = async (req, res) => {
  try {
    let settings = await SystemSettings.findOne();
    if (!settings) settings = new SystemSettings();
    
    settings.teacherRegistrationEnabled = req.body.teacherRegistrationEnabled ?? settings.teacherRegistrationEnabled;
    settings.studentRegistrationEnabled = req.body.studentRegistrationEnabled ?? settings.studentRegistrationEnabled;
    
    await settings.save();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User Management
export const getUsers = async (req, res) => {
  try {
    const { role, isApproved } = req.query;
    const query = {};
    if (role) query.role = role;
    if (isApproved !== undefined) query.isApproved = isApproved === 'true';
    
    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isApproved, isActive } = req.body;
    
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    if (isApproved !== undefined) user.isApproved = isApproved;
    if (isActive !== undefined) user.isActive = isActive;
    
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Notices
export const createNotice = async (req, res) => {
  try {
    const { title, description, visibility } = req.body;
    const attachment = req.file ? `/uploads/${req.file.filename}` : null;
    const notice = await Notice.create({
      title,
      description,
      visibility,
      attachment,
      createdBy: req.user.id
    });
    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });
        res.json(notices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
