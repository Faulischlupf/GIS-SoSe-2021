"use strict";
var dreivier;
(function (dreivier) {
    document.getElementById("submitButton").addEventListener("click", handelButtonClickSubmit);
    document.getElementById("showList").addEventListener("click", handelButtonClickShow);
    let displayHTML = document.getElementById("HTMLdisplay");
    let url;
    function urlFunction() {
        url = "https://gis2021.herokuapp.com";
        //url = "http://localhost:8100";
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
        console.log(query.toString());
    }
    async function handelButtonClickShow() {
        urlFunction();
        url = url + "/show?";
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.json();
        let submitTable = document.createElement("table");
        displayHTML.appendChild(submitTable);
        let tableHead = document.createElement("tr");
        submitTable.appendChild(tableHead);
        let theadName = document.createElement("th");
        tableHead.appendChild(theadName);
        let theadRuleset = document.createElement("th");
        tableHead.appendChild(theadRuleset);
        let theadLocation = document.createElement("th");
        tableHead.appendChild(theadLocation);
        let theadDate = document.createElement("th");
        tableHead.appendChild(theadDate);
        theadName.innerText = "Name";
        theadRuleset.innerText = "Ruleset";
        theadLocation.innerText = "Location";
        theadDate.innerText = "Date";
        for (let i = 0; i < responseString.length; i++) {
            let tableRow = document.createElement("tr");
            submitTable.appendChild(tableRow);
            let tableName = document.createElement("td");
            tableRow.appendChild(tableName);
            let tableRuleset = document.createElement("td");
            tableRow.appendChild(tableRuleset);
            let tableLocation = document.createElement("td");
            tableRow.appendChild(tableLocation);
            let tableDate = document.createElement("td");
            tableRow.appendChild(tableDate);
            tableName.innerText += responseString[i].Name;
            tableRuleset.innerText += responseString[i].Ruleset;
            tableLocation.innerText += responseString[i].Location;
            tableDate.innerText += responseString[i].Date;
        }
    }
})(dreivier || (dreivier = {}));
//# sourceMappingURL=script.js.map