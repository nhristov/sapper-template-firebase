const functions = require("firebase-functions");
const { expressServer } = require("./__sapper__/build/server/server");

exports.ssr = functions.https.onRequest(expressServer);
