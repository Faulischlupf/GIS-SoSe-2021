import * as Http from "http";

export namespace P_3_1Server {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    /*giebt port die nummer 8100*/
    if (!port)
        port = 8100;

    /*initailisiere server*/
    let server: Http.Server = Http.createServer();
    /*adde anfrage annehmen funktion*/
    server.addListener("request", handleRequest);
    /*giebt aus wen der server anfragen annehmen kann*/
    server.addListener("listening", handleListen);
    /*"hört" ob der spezifische port etwas entgegennimmt*/
    server.listen(port);

    /*funktion die ausgiebt sobald der server bereit ist*/
    function handleListen(): void {
        console.log("Listening");
    }

    /*funktion die mit anfragen umgeht*/
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        /*definiert aufmachung der response*/
        _response.setHeader("content-type", "text/html; charset=utf-8");
        /*definiert wehr auf den server zugreifen darf*/
        _response.setHeader("Access-Control-Allow-Origin", "*");
        /*sended url der response*/
        _response.write(_request.url);
        console.log(_request.url);
        /*beended server responce*/
        _response.end();
    }
}