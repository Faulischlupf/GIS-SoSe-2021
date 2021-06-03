import * as Http from "http";
import * as Url from "url";

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

    interface Query {
        Name: string;
        Strasse: string;
        PLZ: string;
        Ort: string;
    }

    /*funktion die mit anfragen umgeht*/
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let task: string = url.pathname.slice(1, url.pathname.length);
        console.log("I hear voices!");
        /*definiert aufmachung der response*/
        _response.setHeader("content-type", "text/html; charset=utf-8");
        /*definiert wer auf den server zugreifen darf*/
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let query: Query = JSON.parse(JSON.stringify(url.query));

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
}