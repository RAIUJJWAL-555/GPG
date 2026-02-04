
import mongoose from 'mongoose';

const systemSettingsSchema = new mongoose.Schema({
  teacherRegistrationEnabled: { type: Boolean, default: false },
  studentRegistrationEnabled: { type: Boolean, default: false },
});

export default mongoose.model('SystemSettings', systemSettingsSchema);
