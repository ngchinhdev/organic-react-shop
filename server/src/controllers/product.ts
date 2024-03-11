import { RequestHandler } from "express";

import ProductModel from "../models/Product";

export const getProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await ProductModel.find().exec();

        if (products.length === 0) {
            throw Error("Products not found");
        }

        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const getProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id).exec();
        if (!product) {
            throw Error("Product not found");
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
};

export const createProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = new ProductModel(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

export const updateProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id).exec();
        if (!product) {
            throw Error("Product not found");
        }
        product.set(req.body);
        await product.save();
        res.json(product);
    } catch (error) {
        next(error);
    }
};
