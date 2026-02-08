
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getNotices, getProfile, getHeadStudent } from '../controllers/commonController.js';
import { getTimetableByTeacher, getTimetableByClass, getAvailableClasses } from '../controllers/timetableController.js';

const router = express.Router();

router.use(protect);

router.get('/notices', getNotices);
router.get('/head-student', getHeadStudent);
router.get('/profile', getProfile);

// Common Timetable Routes
router.get('/timetable/teacher/:teacherId', getTimetableByTeacher);
router.get('/timetable/class/:className', getTimetableByClass);
router.get('/timetable/classes', getAvailableClasses);

export default router;
