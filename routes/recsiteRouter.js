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
	});

module.exports = recsiteRouter;