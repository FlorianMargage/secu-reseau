const userModel = require('../model/user.model');

const getAll = (req, res, next) => {
    let result = userModel.getAll();
    res.status(200).json(result);
}

const getById = (req, res, next) => {
    let result = userModel.getById(req.params.id);
    res.status(200).json(result);
}

const update = (req, res, next) => {
    let result = userModel.update(req.params.id, req.body);
    res.status(200).json(result);
}

const remove = (req, res, next) => {
    let result = userModel.remove(req.params.id);
    res.status(200).json(result);
}

const create = (req, res, next) => {
    let result = userModel.create(req.body);
    res.status(201).json(result);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}