// routes/pageRoute.js

import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

// Ana sayfa rotası
router.get('/', pageController.getLoginPage);

// Ders ekle sayfası rotası
router.get('/dersEkle', pageController.getAddLessonPage);

export default router;
