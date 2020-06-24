import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const main = require.main === module || require.main.filename.match(/__sapper__\/build\/index.js$/);
const local = dev || main;

const expressServer = express().use(
	compression({ threshold: 0 }),
	sirv("static", { dev }),
	sapper.middleware()
);

if (local) {
	expressServer.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
}

export { expressServer };
