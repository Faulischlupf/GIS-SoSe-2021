"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { ParsedUrlQuery } from "querystring";
var Memory;
(function (Memory) {
    let memoryPictures;
    let port = Number(process.env.PORT);
    /*giebt port die nummer 8100*/
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb://localhost:27017";
    //let databaseUrl: string = "mongodb+srv://Roell:PnXI1DRwzEe4Qgli@gissose2021.enldi.mongodb.net";
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
        memoryPictures = mongoClient.db("Database").collection("memoryPictures");
        console.log("Database connection", memoryPictures != undefined);
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
            let duplicate = await memoryPictures.findOne({ "picture": url.query.picture });
            if (duplicate != undefined) {
                _response.write("Sorry Duuuuude no Duplicates");
            }
            else {
                if (url.path.includes(".jpg" || ".png")) {
                    console.log("itsa me", url.query);
                    memoryPictures.insertOne(url.query);
                    _response.write("Picture Submitted");
                }
                else {
                    _response.write("Ich esse nur JPG oder PNG. Deinen Dreck fress ich nicht.");
                }
            }
        }
        //Loads Pictures after loading the admin page
        if (task == "show") {
            let cursor = memoryPictures.find();
            let result = await cursor.toArray();
            console.log(result);
            _response.write(JSON.stringify(result));
        }
        if (task == "delete") {
            let picture = await memoryPictures.findOne({ "picture": url.query.picture });
            memoryPictures.deleteOne(picture);
            _response.write("TERMINIERT");
        }
        if (task == "showMemory") {
            let cursor = memoryPictures.aggregate([{ $sample: { size: 8 } }]);
            let result = await cursor.toArray();
            console.log(result);
            _response.write(JSON.stringify(result));
        }
        _response.end();
    }
    /*function storeSubmit(_post: ParsedUrlQuery): void {
        memoryPictures.insertOne(_post);
    }*/
})(Memory = exports.Memory || (exports.Memory = {}));
//# sourceMappingURL=server.js.map