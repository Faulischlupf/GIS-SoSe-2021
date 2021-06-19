"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    let submits;
    let port = Number(process.env.PORT);
    /*giebt port die nummer 8100*/
    if (!port)
        port = 8100;
    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://Roell:PnXI1DRwzEe4Qgli@gissose2021.enldi.mongodb.net";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        console.log("Starting server");
        console.log("this is me");
        /*initailisiere server*/
        let server = Http.createServer();
        /*adde anfrage annehmen funktion*/
        server.addListener("request", handleRequest);
        /*giebt aus wen der server anfragen annehmen kann*/
        server.addListener("listening", handleListen);
        /*"hört" ob der spezifische port etwas entgegennimmt*/
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        submits = mongoClient.db("Database").collection("Submits");
        console.log("Database connection", submits != undefined);
    }
    /*funktion die ausgiebt sobald der server bereit ist*/
    function handleListen() {
        console.log("Listening");
    }
    /*funktion die mit anfragen umgeht*/
    async function handleRequest(_request, _response) {
        let url = Url.parse(_request.url, true);
        let task = url.pathname.slice(1, url.pathname.length);
        console.log("I hear voices!");
        /*definiert aufmachung der response*/
        _response.setHeader("content-type", "text/html; charset=utf-8");
        /*definiert wer auf den server zugreifen darf*/
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(task);
        if (task == "submit") {
            storeSubmit(url.query);
            _response.write("Session Submitted");
        }
        if (task == "show") {
            let cursor = submits.find();
            let result = await cursor.toArray();
            console.log(result);
            _response.write(JSON.stringify(result));
        }
        _response.end();
    }
    function storeSubmit(_post) {
        submits.insert(_post);
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=server.js.map