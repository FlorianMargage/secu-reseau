const express = require('express');
const app = express();
const userRouter = require ('./route/user.route.js');

app.use('/user', userRouter);

module.exports = app;