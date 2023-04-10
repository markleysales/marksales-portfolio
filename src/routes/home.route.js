import express from 'express';

import homeController from '../controllers/home.controller.js';

const route = express.Router();

route.get("/", homeController.homeRender);

export default route;