import { Router } from "express";

const router = Router();

router.get('/products', (req, res, next) => {
    res.json({ title: 'Hello product page' });
});

export default router;