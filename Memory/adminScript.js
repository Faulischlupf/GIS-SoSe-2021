"use strict";
var Memory;
(function (Memory) {
    let displayHTML = document.getElementById("displayResponse");
    window.addEventListener("load", loadPictures);
    document.getElementById("submitPicture").addEventListener("click", handelButtonClickSubmitPicture);
    let url;
    let showPicture = document.getElementById("showPictures");
    function urlFunction() {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function handelButtonClickSubmitPicture() {
        urlFunction();
        console.log("Submited");
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query = new URLSearchParams(formData);
        url = url + "/submit?" + query.toString();
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);
        console.log(query.toString());
        loadPictures();
    }
    async function loadPictures() {
        showPicture.innerHTML = "";
        urlFunction();
        url = url + "/show?";
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.json();
        for (let i = 0; i < responseString.length; i++) {
            let picture = document.createElement("img");
            picture.setAttribute("src", responseString[i].picture);
            showPicture.appendChild(picture);
            console.log(responseString[i].picture);
            let deletePicture = document.createElement("button");
            deletePicture.setAttribute("type", "button");
            deletePicture.innerHTML = "Delete Picture";
            showPicture.appendChild(deletePicture);
            deletePicture.addEventListener("click", handelButtonClickDelete);
            async function handelButtonClickDelete() {
                urlFunction();
                console.log("TERMINIERT");
                url = url + "/delete?picture=" + responseString[i].picture;
                let serverResponseDelete = await fetch(url);
                let responseStringDelete = await serverResponseDelete.text();
                displayHTML.innerHTML = responseStringDelete;
                loadPictures();
            }
        }
        console.log(responseString);
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=adminScript.js.map