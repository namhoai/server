/*
    create by NamVH
*/ 

import express from 'express';
import * as note from './app/routes/note_routes';

const routes = express.Router();

routes.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

routes.use('/notes', note);

export default routes;
