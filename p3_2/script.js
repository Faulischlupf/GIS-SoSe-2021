"use strict";
var dreieins;
(function (dreieins) {
    document.getElementById("theOneButton").addEventListener("click", handelButtonClickHTML);
    document.getElementById("theOtherButton").addEventListener("click", handelButtonClickJSON);
    let displayHTML = document.getElementById("HTMLdisplay");
    let url;
    function urlFunction() {
        url = "http://localhost:8100";
    }
    async function handelButtonClickHTML() {
        urlFunction();
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query = new URLSearchParams(formData);
        url = url + "/html?" + query.toString();
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);
    }
    async function handelButtonClickJSON() {
        urlFunction();
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query = new URLSearchParams(formData);
        url = url + "/json?" + query.toString();
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.text();
        /*responseString = JSON.parse(responseString);*/
        console.log(responseString);
    }
})(dreieins || (dreieins = {}));
//# sourceMappingURL=script.js.map