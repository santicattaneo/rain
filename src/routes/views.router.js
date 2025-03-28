import { Router } from 'express';
import hablemosModel from '../dao/mongo/models/hablemos.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.render('home', { title: 'estudio creativo' });
    } catch (error) {
        res.status(500).render('error', { title: 'oops :(' });
    };
});

router.get('/hablemos', async (req, res) => {
    try {
        res.render('hablemos', { title: 'hablemos' });
    } catch (error) {
        res.status(500).render('error', { title: 'oops :(' });
    };
});

router.get('/gracias', async (req, res) => {
    try {
        res.render('gracias', { title: 'gracias' });
    } catch (error) {
        res.status(500).render('error', { title: 'oops :(' });
    };
});

router.get('/error', async (req, res) => {
    try {
        res.render('error', { title: 'oops :(' });
    } catch (error) {
        res.status(500).render('error', { title: 'oops :(' });
    };
});

router.get('/historia', async (req, res) => {
    try {
        res.render('historia', { title: 'historia' });
    } catch (error) {
        res.status(500).render('error', { title: 'oops :(' });
    }
})

router.get('/65b1f3d4a9c27b6f2e8d45fa/admin', async (req, res) => {
    try {
        const { page = 1, limit = 10, sort, query } = req.query;
        const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } = await hablemosModel.paginate({}, {limit, page, sort, query});
        const plainObjets = docs.map(doc => doc.toObject());
        res.render('admin', { title: 'admin', forms: plainObjets, hasPrevPage, hasNextPage, currentPage: parseInt(page), nextPage, prevPage });
    } catch (error) {
        res.status(500).render('error', { title: 'oops :(' });
    }
})

export default router;