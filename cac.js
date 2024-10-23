const http = require("http");
const path = require("path");
const express = require("express");
const JSONdb = require('simple-json-db');

//db
const db = new JSONdb('./db.json');

//express
const app = express();
app.use(express.json());
const httpserver = http.Server(app);

process.on('uncaughtException', console.error);
process.on('uncaughtRejection', console.error);

app.use("/", express.static(path.join(__dirname, "/public/homepage/")));
app.use("/login", express.static(path.join(__dirname, "/public/login/")));
app.use("/volunteer", express.static(path.join(__dirname, "/public/volunteer/")));
app.use("/petitions", express.static(path.join(__dirname, "/public/petitions/")));

httpserver.listen(3000, () => {
	console.log("Server Started");
});
