const express = require('express');
const TripReport = require('../models/tripReport');
// const authenticate = require('../authenticate');
const cors = require('./cors');

const tripReportRouter = express.Router();

tripReportRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		TripReport.find()
			.then((tripReports) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(tripReports);
			})
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, (req, res, next) => {
		TripReport.create(req.body)
			.then((tripReport) => {
				console.log('TripReport Created ', tripReport);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(tripReport);
			})
			.catch((err) => next(err));
	})
	.put(cors.corsWithOptions, (req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /tripreports');
	})
	.delete(cors.corsWithOptions, (req, res, next) => {
		TripReport.deleteMany()
			.then((response) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(response);
			})
			.catch((err) => next(err));
	});

tripReportRouter
	.route('/:tripReportId')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		TripReport.findById(req.params.tripReportId)
			.then((tripReport) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(tripReport);
			})
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, (req, res) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on /tripreports/${req.params.tripReportId}`);
	})
	.put(cors.corsWithOptions, (req, res, next) => {
		TripReport.findByIdAndUpdate(
			req.params.tripReportId,
			{
				$set: req.body,
			},
			{ new: true }
		)
			.then((tripReport) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(tripReport);
			})
			.catch((err) => next(err));
	})
	.delete(cors.corsWithOptions, (req, res, next) => {
		TripReport.findByIdAndDelete(req.params.tripReportId)
			.then((response) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(response);
			})
			.catch((err) => next(err));
	});

module.exports = tripReportRouter;
