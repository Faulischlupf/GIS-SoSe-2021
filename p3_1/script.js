"use strict";
var dreieins;
(function (dreieins) {
    document.getElementById("theOneButton").addEventListener("click", handelButtonClick);
    function handelButtonClick() {
        pingServer("https://https://gis2021.herokuapp.com");
        console.log("jamoin");
    }
    async function pingServer(_url) {
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let serverResponse = await fetch(_url);
        let responseString = await serverResponse.text();
        sessionStorage.setItem("answer", responseString);
    }
    console.log(sessionStorage.getItem("answer"));
})(dreieins || (dreieins = {}));
//# sourceMappingURL=script.js.map