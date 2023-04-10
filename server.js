"use strict";

//external imports
import express from "express";
import cors from "cors"
import helmet from "helmet";
//internal imports
import { env_constants } from "./src/configs/env.configs.js";
import homeRoute from "./src/routes/home.route.js";

const app = express();

app.disable('x-powered-by');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static("public"));
app.use(cors({
  origin: ['https://code.jquery.com', 'https://cdnjs.cloudflare.com'],
  exposedHeaders: 'Coep-Report-To'
}));
app.use(helmet());

app.use(homeRoute);

app.set("view engine", "ejs");
app.set("views", "./views/containers");

app.listen(env_constants.PORT, () => {
  console.log("\n" + "SERVER INITIALIZED ON:")
  console.log(env_constants.LOCAL_HOST + "\n");
});
