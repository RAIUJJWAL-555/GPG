import mongoose from 'mongoose';

const timeTableSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: String, required: true }, // e.g., "Monday"
  startTime: { type: String, required: true }, // e.g., "10:00"
  endTime: { type: String, required: true }, // e.g., "11:00"
  subjectName: { type: String, required: true },
  className: { type: String, required: true }, // e.g., "BCA 2nd"
  roomNo: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('TimeTable', timeTableSchema);
