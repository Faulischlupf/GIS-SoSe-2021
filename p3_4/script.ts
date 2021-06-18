export namespace dreivier {

    document.getElementById("submitButton").addEventListener("click", handelButtonClickSubmit);
    document.getElementById("showList").addEventListener("click", handelButtonClickShow);
    let displayHTML: HTMLDivElement = <HTMLDivElement>document.getElementById("HTMLdisplay");
    let url: string;

    function urlFunction(): void {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }


    async function handelButtonClickSubmit(): Promise<void> {
        urlFunction();
        console.log("submit hangout");

        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/submit?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let responseString: string = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);


    }


    async function handelButtonClickShow(): Promise<void> {
        urlFunction();

        url = url + "/show?";
        let serverResponse: Response = await fetch(url);
        let responseString: Submits[] = await serverResponse.json();
        for (let i: number = 0; i < responseString.length; i++){
            
        }

            responseString = JSON.parse(responseString);
        displayHTML.innerText = responseString;
        console.log(responseString);

    }
}
