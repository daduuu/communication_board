"use strict";

const api = require("./api");
const path = require("path");
const inert = require('@hapi/inert');


module.exports.register = async server => {

    await api.register(server);

    server.route({
        method:"GET",
        path:"/",
        handler: async (request, h) => {
            return h.file('./views/forum.html');
        }
    });

    server.route({
        method:"GET",
        path:"/create_post2.html",
        handler: async (request, h) => {
            return h.file('./views/create_post2.html');
        }
    });

    server.route({
        method:"GET",
        path:"/create_forum.html",
        handler: async (request, h) => {
            return h.file('./views/create_forum.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/public/css/main.css',
        handler: async (request, h) => {
            return h.file('./public/css/main.css');
        }
    });

    server.route({
        method: 'GET',
        path: '/images/chemistry.jpeg',
        handler: async (request, h) => {
            return h.file('./images/chemistry.jpeg');
        }
    });

    server.route({
        method: 'GET',
        path: '/images/icon.png',
        handler: async (request, h) => {
            return h.file('./images/icon.png');
        }
    });

    server.route({
        method: 'GET',
        path: '/postQues.html',
        handler: async (request, h) => {
            return h.file('./views/postQues.html');
        }
    });

};