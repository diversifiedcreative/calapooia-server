const express = require('express');
const UserRecSite = require('../models/userRecSite');
// const authenticate = require('../authenticate');
const cors = require('./cors');

const userRecSiteRouter = express.Router();

userRecSiteRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		UserRecSite.find()
			.then((userRecSites) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(userRecSites);
			})
			.catch((err) => next(err));
	})
    .post(cors.corsWithOptions, (req, res, next) => {
        UserRecSite.create(req.body)
        .then(userRecSite => {
            console.log('Rec Site submitted ', userRecSite);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(userRecSite);
        })
        .catch(err => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /userrecsites');
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        UserRecSite.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    });
    
module.exports = userRecSiteRouter;