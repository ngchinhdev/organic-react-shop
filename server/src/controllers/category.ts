import { RequestHandler } from "express";

import createHttpError from "http-errors";
import mongoose from "mongoose";

import CategoryModel from "../models/Category";
import { type CategoryParams, type CategoryBody } from "../types/categories";

export const getCategories: RequestHandler = async (req, res, next) => {
    try {
        const categories = await CategoryModel.find().exec();

        if (categories.length === 0) {
            throw createHttpError(404, "Categories not found");
        }

        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

export const getCategory: RequestHandler = async (req, res, next) => {
    const categoryId = req.params.id;

    try {
        if (!mongoose.isValidObjectId(categoryId)) {
            throw createHttpError(400, "Invalid category ID");
        }

        const category = await CategoryModel.findById(categoryId).exec();

        if (!category) {
            throw createHttpError(404, "Category not found");
        }

        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
};

export const createCategory: RequestHandler<unknown, unknown, CategoryBody, unknown> = async (req, res, next) => {
    const name = req.body.name;
    const image = req.body.image;

    try {
        if (!name || !image) {
            throw createHttpError(400, "Category's name and image are required");
        }

        const category = new CategoryModel({ name, image });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

export const updateCategory: RequestHandler<CategoryParams, unknown, CategoryBody, unknown> = async (req, res, next) => {
    const id = req.params.id;
    const newName = req.body.name;
    const newImage = req.body.image;

    try {
        if (!mongoose.isValidObjectId(id)) {
            throw createHttpError(400, "Invalid category ID");
        }

        const category = await CategoryModel.findById(id).exec();

        if (!category) {
            throw createHttpError(404, "Category not found");
        }

        category.set({ newName, newImage });
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
};

export const deleteCategory: RequestHandler = async (req, res, next) => {
    const id = req.params.id;
    try {
        if (!mongoose.isValidObjectId(id)) {
            throw createHttpError(400, "Invalid category ID");
        }

        const category = await CategoryModel.findByIdAndDelete(id).exec();

        if (!category) {
            throw createHttpError(404, "Category not found");
        }

        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
};