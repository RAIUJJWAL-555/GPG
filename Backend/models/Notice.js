
import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  visibility: { type: String, enum: ['teacher', 'student', 'both'], required: true },
  attachment: { type: String }, // Path to uploaded file
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Notice', noticeSchema);
