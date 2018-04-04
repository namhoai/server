/*
    create by : NamVH
*/
import express from 'express';
const routes = express.Router();

const notes = routes.route('/notes');

notes.post((req, res, next) =>{
    console.log(req.body)
    res.send('Hello')
});

export default routes;
