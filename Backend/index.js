import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import commonRoutes from './routes/commonRoutes.js';

dotenv.config();

const app = express();

/* ================== ENV ================== */
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI not defined');
  process.exit(1);
}

/* ================== MIDDLEWARES ================== */
app.use(helmet());

app.use(cors({
  origin: [
    'https://gpghaziabad.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

/* ================== ROUTES ================== */
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🚀 GPG Backend is running successfully'
  });
});

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/common', commonRoutes);

/* ================== 404 ================== */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '❌ Route not found'
  });
});

/* ================== DB ================== */
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error('❌ MongoDB error:', err.message);
    process.exit(1);
  });

/* ================== SAFETY ================== */
process.on('unhandledRejection', err => {
  console.error('❌ Unhandled Rejection:', err.message);
  process.exit(1);
});
