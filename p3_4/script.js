"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dreivier = void 0;
var dreivier;
(function (dreivier) {
    document.getElementById("submitButton").addEventListener("click", handelButtonClickSubmit);
    document.getElementById("showList").addEventListener("click", handelButtonClickShow);
    let displayHTML = document.getElementById("HTMLdisplay");
    let url;
    function urlFunction() {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function handelButtonClickSubmit() {
        urlFunction();
        console.log("submit hangout");
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query = new URLSearchParams(formData);
        url = url + "/submit?" + query.toString();
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);
    }
    async function handelButtonClickShow() {
        urlFunction();
        url = url + "/show?";
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.json();
        for (let i = 0; i < responseString.length; i++) {
        }
        responseString = JSON.parse(responseString);
        displayHTML.innerText = responseString;
        console.log(responseString);
    }
})(dreivier = exports.dreivier || (exports.dreivier = {}));
//# sourceMappingURL=script.js.map