const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message: "récupération utilisateur"});
});

router.post('/', (req, res, next) => {
    res.status(201).json({message: "création utilisateur"});
});

module.exports = router;