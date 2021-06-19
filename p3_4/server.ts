import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";


export namespace P_3_4Server {

    let submits: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    /*giebt port die nummer 8100*/
    if (!port)
        port = 8100;

    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl: string = "mongodb+srv://Roell:PnXI1DRwzEe4Qgli@gissose2021.enldi.mongodb.net";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        console.log("Starting server");
        console.log("this is me");

        /*initailisiere server*/
        let server: Http.Server = Http.createServer();
        /*adde anfrage annehmen funktion*/
        server.addListener("request", handleRequest);
        /*giebt aus wen der server anfragen annehmen kann*/
        server.addListener("listening", handleListen);
        /*"hört" ob der spezifische port etwas entgegennimmt*/
        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        submits = mongoClient.db("Database").collection("Submits");
        console.log("Database connection", submits != undefined);
    }

    /*funktion die ausgiebt sobald der server bereit ist*/
    function handleListen(): void {
        console.log("Listening");
    }

    /*funktion die mit anfragen umgeht*/
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let task: string = url.pathname.slice(1, url.pathname.length);
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
            let cursor: Mongo.Cursor = submits.find();
            let result: Submits[] = await cursor.toArray();

            console.log(result);
            _response.write(JSON.stringify(result));
        }
        _response.end();
    }
    function storeSubmit(_post: ParsedUrlQuery): void {
        submits.insert(_post);
    }
}