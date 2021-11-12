const express = require('express');
const RecSite = require('../models/recSite');
// const authenticate = require('../authenticate');
const cors = require('./cors');

const recSiteRouter = express.Router();

recSiteRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		RecSite.find()
			.then((recSites) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(recSites);
			})
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, (req, res, next) => {
		RecSite.create(req.body)
			.then((recSite) => {
				console.log('RecSite Created ', recSite);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(recSite);
			})
			.catch((err) => next(err));
	})
	.put(cors.corsWithOptions, (req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /recsites');
	})
	.delete(cors.corsWithOptions, (req, res, next) => {
		RecSite.deleteMany()
			.then((response) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(response);
			})
			.catch((err) => next(err));
	});

recSiteRouter
	.route('/:recSiteId')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		RecSite.findById(req.params.recSiteId)
			.then((recSite) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(recSite);
			})
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, (req, res) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on /recsites/${req.params.recSiteId}`);
	})
	.put(cors.corsWithOptions, (req, res, next) => {
		RecSite.findByIdAndUpdate(
			req.params.recSiteId,
			{
				$set: req.body,
			},
			{ new: true }
		)
			.then((recSite) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(recSite);
			})
			.catch((err) => next(err));
	})
	.delete(cors.corsWithOptions, (req, res, next) => {
		RecSite.findByIdAndDelete(req.params.recSiteId)
			.then((response) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(response);
			})
			.catch((err) => next(err));
	});

module.exports = recSiteRouter;
