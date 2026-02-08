
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'teacher', 'student'], required: true },
  isApproved: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  profileImage: { type: String },
  enrollmentNumber: { type: String },
  dob: { type: Date },
  department: { type: String },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  roomNumber: { type: String },
  isHeadStudent: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
