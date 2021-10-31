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
	});

module.exports = routeRouter;