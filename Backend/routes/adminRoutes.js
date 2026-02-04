
import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import { 
  getDashboardStats, 
  getSettings, 
  updateSettings, 
  getUsers, 
  updateUserStatus, 
  createNotice,
  getAllNotices
} from '../controllers/adminController.js';

const router = express.Router();

router.use(protect);
router.use(adminOnly);

import multer from 'multer';
import path from 'path';

// Configure Multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

import { uploadTimetable, getFullTimetable, getTimetableByTeacher, updateTimetableEntry, deleteTimetableEntry } from '../controllers/timetableController.js';

router.get('/stats', getDashboardStats);
router.get('/settings', getSettings);
router.put('/settings', updateSettings);
router.get('/users', getUsers);
router.put('/users/:id', updateUserStatus);
router.post('/notices', upload.single('file'), createNotice);
router.get('/notices', getAllNotices);

// Timetable Routes
router.post('/timetable/upload', upload.single('file'), uploadTimetable);
router.get('/timetable', getFullTimetable);
router.get('/timetable/teacher/:teacherId', getTimetableByTeacher);
router.put('/timetable/:id', updateTimetableEntry);
router.delete('/timetable/:id', deleteTimetableEntry);

export default router;
