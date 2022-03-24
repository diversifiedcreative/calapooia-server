# Calapooia River React SPA

## Introduction

This repository contains the backend source code to serve an informational Single-Page-Application website on Oregon's beautiful Calapooia River. The site contains interactive components alongside general information on the geography, history, and recreation opportunities of the Calapooia, which runs 81 miles from it's source below Tidbits Mountain in the *Old Cascades* region of the Cascade Range until its confluence with Willamette River in Albany.

The project has been deployed in some form or another since late-2021 at [calapooiariver.com](https://calapooiariver.com/). The uncompiled frontend React source code can be found in the [calapooia-react](https://github.com/scottalandev/calapooia-react/) public repo on github. 

## Project Info

This repo is a RESTful API for serving site data to/from a MongoDB database for display/interaction on a React frontend client. The API is built with Express and connects the client to a variety of endpoints. Mongoose is used to enforce Object Data Modelling schema.

The entrypoint is **app.js**, and perusing that file will expose the user to the key endpoints and the general structure of the server. Routes are in the **/routes** directory, and Mongoose models/schema in the **/models** directory.

The frontend code in the **/react-build** directory has been compiled by the `build` script of [Create React App](https://github.com/facebook/create-react-app) into a static package of minified/uglified files. It is not human-readable, but the uncompiled frontend React source code can be found in the [calapooia-react](https://github.com/scottalandev/calapooia-react/) public repo on github. 

## To Run

Clone this git repository, run `yarn install` to install dependencies, and `yarn start` to launch a local development server at [http://localhost:8080](http://localhost:8080). Visiting that address will serve up the static React build found in the **/react-build** directory

The server is setup to look for a MongoDB database on port:27017, and there is properly formatted JSON data in **/initialData** which could be used to seed a database with appropriate content. The database file structure is not included in this directory: during development a local MongoDB instance was run with the seed data referenced above, and there is a live MongoDB instance running on the deployment server.

## Development Plans

This app is under ongoing development. In particular, future development plans are focused on replacing the existing Explore Map component, which is populated in an external Google interface. I intend to build a custom component which is populated from data stored and updated in the existing API which serves the other data-based modules of this app.

## Contact

This app is under solo development by full stack developer Scott Alan. Please reach out to him at [scottalandev@gmail.com](mailto:scottalan@gmail.com) with questions/comments.