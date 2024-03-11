import { Router } from "express";

import * as CategoryControllers from "../controllers/category";

const router = Router();

router.get('/', CategoryControllers.getCategories);

router.get('/:id', CategoryControllers.getCategory);

router.post('/', CategoryControllers.createCategory);

router.put('/:id', CategoryControllers.updateCategory);

router.delete('/:id', CategoryControllers.deleteCategory);

export default router;