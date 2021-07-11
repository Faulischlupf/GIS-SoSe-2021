import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { ParsedUrlQuery } from "querystring";

export namespace Memory {

    let memoryPictures: Mongo.Collection;
    let memoryScore: Mongo.Collection;

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
        memoryPictures = mongoClient.db("Database").collection("memoryPictures");
        console.log("Database connection", memoryPictures != undefined);
        memoryScore = mongoClient.db("Database").collection("memoryScore");
        console.log("Database connection", memoryScore != undefined);
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

        //Saves picture in database
        if (task == "submit") {
            console.log(url.path.toString());

            let duplicate: Pictures = await memoryPictures.findOne({ "picture": url.query.picture });
            if (duplicate != undefined) {
                _response.write("Sorry Duuuuude no Duplicates");
            }
            else {
                if (url.path.includes(".jpg") || url.path.includes(".png")) {

                    console.log("itsa me", url.query);
                    memoryPictures.insertOne(url.query);
                    _response.write("Picture Submitted");
                }
                else {

                    _response.write("Ich esse nur JPG oder PNG. Deinen Dreck fress ich nicht.");
                }


            }
        }
        //Loads pictures after loading the admin page
        if (task == "show") {
            let cursor: Mongo.Cursor = memoryPictures.find();
            let result: Pictures[] = await cursor.toArray();
            console.log(result);
            _response.write(JSON.stringify(result));
        }
        //Deletes selectet picture
        if (task == "delete") {
            let picture: Pictures = await memoryPictures.findOne({ "picture": url.query.picture });
            memoryPictures.deleteOne(picture);
            _response.write("TERMINIERT");

        }
        //Loads pictures in memory page
        if (task == "showMemory") {
            let cursor: Mongo.Cursor = memoryPictures.aggregate([{ $sample: { size: 8 } }]);
            let result: Pictures[] = await cursor.toArray();

            console.log(result);
            _response.write(JSON.stringify(result));
        }
        //Loads scores after loading score page
        if (task == "score") {
            let cursor: Mongo.Cursor = memoryScore.find().sort({ "time": 1 });
            let result: Score[] = await cursor.toArray();
            console.log(result);
            _response.write(JSON.stringify(result));
        }
        //Write new score
        if (task == "writeScore") {
            _response.write(url.query.name.toString());
            if (url.query.name.toString() == "" || url.query.name.toString() == " ") {
                _response.write("No name no score");

            }
            else {
                memoryScore.insertOne(url.query);
                _response.write("Score saved");
            }
        }
        _response.end();
    }
}
