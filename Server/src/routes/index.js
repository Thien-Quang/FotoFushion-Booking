const express = require('express');
const router = express.Router();



const account = require('./account.js')
const role = require('./role.js')
const blogPost = require('./blog_post.js')
const user = require('./user_routes.js')


const index = (app) => {

    app.use("/", account);
    app.use("/", role);
    app.use("/", blogPost);
    app.use("/", user);


}

module.exports = index