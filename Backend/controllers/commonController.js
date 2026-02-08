
import Notice from '../models/Notice.js';
import User from '../models/User.js';

export const getHeadStudent = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const headStudent = await User.findOne({
            role: 'student',
            isHeadStudent: true,
            gender: user.gender
        }).select('name email role dob department gender roomNumber profileImage');
        
        res.json(headStudent || null);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getNotices = async (req, res) => {
  try {
    const role = req.user.role;
    let query = {};
    if (role === 'teacher') {
      query = { visibility: { $in: ['teacher', 'both'] } };
    } else if (role === 'student') {
      query = { visibility: { $in: ['student', 'both'] } };
    }
    // Admin sees all (handled in adminController, but logic here covers it too if reused)
    
    const notices = await Notice.find(query).sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
