namespace dreieins {

    document.getElementById("theOneButton").addEventListener("click", handelButtonClickHTML);
    document.getElementById("theOtherButton").addEventListener("click", handelButtonClickJSON);
    let displayHTML: HTMLDivElement = <HTMLDivElement>document.getElementById("HTMLdisplay");
    let url: string;

    function urlFunction(): void {
        url = "http://localhost:8100";
    }


    async function handelButtonClickHTML(): Promise<void> {
        urlFunction();
        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let responseString: string = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);


    }


    async function handelButtonClickJSON(): Promise<void> {
        urlFunction();
        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let responseString: string = await serverResponse.text();
        /*responseString = JSON.parse(responseString);*/
        console.log(responseString);

    }
}
