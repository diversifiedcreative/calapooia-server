const express = require('express');
const UserRoute = require('../models/userRoute');
// const authenticate = require('../authenticate');
const cors = require('./cors');

const userRouteRouter = express.Router();

userRouteRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		UserRoute.find()
			.then((userRoutes) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(userRoutes);
			})
			.catch((err) => next(err));
	})
    .post(cors.corsWithOptions, (req, res, next) => {
        UserRoute.create(req.body)
        .then(userRoute => {
            console.log('User Route submitted ', userRoute);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(userRoute);
        })
        .catch(err => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /userroutes');
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        UserRoute.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    });
    
module.exports = userRouteRouter;