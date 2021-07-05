
namespace Memory {

    let displayHTML: HTMLDivElement = <HTMLDivElement>document.getElementById("displayResponse");
    window.addEventListener("load", loadPictures);

    document.getElementById("submitPicture").addEventListener("click", handelButtonClickSubmitPicture);
    let url: string;

    let showPicture: HTMLDivElement = <HTMLDivElement>document.getElementById("showPictures");


    function urlFunction(): void {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    
    async function handelButtonClickSubmitPicture(): Promise<void> {
        urlFunction();
        console.log("Submited");

        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/submit?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let responseString: string = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);
        console.log(query.toString());
        loadPictures();



    }
    
    async function loadPictures(): Promise<void> {
        showPicture.innerHTML = "";
        urlFunction();

        url = url + "/show?";
        let serverResponse: Response = await fetch(url);
        let responseString: Pictures[] = await serverResponse.json();
        for (let i: number = 0; i < responseString.length; i++) {
            let picture: HTMLImageElement = document.createElement("img");
            picture.setAttribute("src", responseString[i].picture);
            showPicture.appendChild(picture);
            console.log(responseString[i].picture);
            let deletePicture: HTMLButtonElement = document.createElement("button");
            deletePicture.setAttribute("type", "button");
            deletePicture.innerHTML = "Delete Picture";
            showPicture.appendChild(deletePicture);

            deletePicture.addEventListener("click", handelButtonClickDelete);

            async function handelButtonClickDelete(): Promise<void> {
                urlFunction();
                console.log("TERMINIERT");

                url = url + "/delete?picture=" + responseString[i].picture;
                let serverResponseDelete: Response = await fetch(url);
                let responseStringDelete: string = await serverResponseDelete.text();
                displayHTML.innerHTML = responseStringDelete;
                loadPictures();


            }


        }
        console.log(responseString);

    }
}
