import { Router } from "express";

import * as ProductControllers from "../controllers/product";

const router = Router();

router.get('/', ProductControllers.getProducts);

router.get('/:id', ProductControllers.getProduct);

router.post('/', ProductControllers.createProduct);

router.put('/:id', ProductControllers.updateProduct);

export default router;