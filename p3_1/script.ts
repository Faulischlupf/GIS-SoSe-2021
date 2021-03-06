namespace dreieins {

    document.getElementById("theOneButton").addEventListener("click", handelButtonClick);

    function handelButtonClick(): void {
        pingServer("https://gis2021.herokuapp.com");
    }
    async function pingServer(_url: RequestInfo): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let serverResponse: Response = await fetch(_url);
        let responseString: string = await serverResponse.text();
        console.log(responseString);
    }
}
