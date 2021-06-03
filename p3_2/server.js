"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    /*giebt port die nummer 8100*/
    if (!port)
        port = 8100;
    /*initailisiere server*/
    let server = Http.createServer();
    /*adde anfrage annehmen funktion*/
    server.addListener("request", handleRequest);
    /*giebt aus wen der server anfragen annehmen kann*/
    server.addListener("listening", handleListen);
    /*"hört" ob der spezifische port etwas entgegennimmt*/
    server.listen(port);
    /*funktion die ausgiebt sobald der server bereit ist*/
    function handleListen() {
        console.log("Listening");
    }
    /*funktion die mit anfragen umgeht*/
    function handleRequest(_request, _response) {
        let url = Url.parse(_request.url, true);
        let task = url.pathname.slice(1, url.pathname.length);
        console.log("I hear voices!");
        /*definiert aufmachung der response*/
        _response.setHeader("content-type", "text/html; charset=utf-8");
        /*definiert wer auf den server zugreifen darf*/
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let query = JSON.parse(JSON.stringify(url.query));
        console.log(task);
        if (task == "html") {
            _response.write("Name: " + query.Name + "\n");
            _response.write("Straße: " + query.Strasse + "\n");
            _response.write("PLZ: " + query.PLZ + "\n");
            _response.write("Ort: " + query.Ort);
        }
        if (task == "json") {
            _response.write(JSON.stringify(query));
        }
        console.log(url);
        console.log(_request.url);
        /*beended server responce*/
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map