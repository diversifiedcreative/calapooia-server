const express = require('express');
const Route = require('../models/route');
// const authenticate = require('../authenticate');
const cors = require('./cors');

const routeRouter = express.Router();

routeRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		Route.find()
			.then((routes) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(routes);
			})
			.catch((err) => next(err));
	})
    .post(cors.corsWithOptions, (req, res, next) => {
        Route.create(req.body)
        .then(route => {
            console.log('Route Created ', route);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(route);
        })
        .catch(err => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /routes');
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        Route.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    });
    
module.exports = routeRouter;