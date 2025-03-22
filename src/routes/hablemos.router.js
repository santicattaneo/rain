import { Router } from 'express';
import HablemosController from '../controllers/hablemos.controller.js';

const router = Router();
const hablemosController = new HablemosController();


router.get('/', async(req, res) => {await hablemosController.getForms(req, res)});
router.post('/', async(req, res) => {await hablemosController.postForm(req, res)});
router.delete('/:hid', async(req, res) => {await hablemosController.deleteFormById(req, res)});

export default router;