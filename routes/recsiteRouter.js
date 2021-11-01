const express = require('express');
const Recsite = require('../models/recsite');
// const authenticate = require('../authenticate');
const cors = require('./cors');

const recsiteRouter = express.Router();

recsiteRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		Recsite.find()
			.then((recsites) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(recsites);
			})
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, (req, res, next) => {
		Recsite.create(req.body)
			.then((recsite) => {
				console.log('Recsite Created ', recsite);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(recsite);
			})
			.catch((err) => next(err));
	})
	.put(cors.corsWithOptions, (req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /recsites');
	})
	.delete(cors.corsWithOptions, (req, res, next) => {
		Recsite.deleteMany()
			.then((response) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(response);
			})
			.catch((err) => next(err));
	});

module.exports = recsiteRouter;
