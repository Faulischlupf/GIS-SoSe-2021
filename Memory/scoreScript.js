"use strict";
var Memory;
(function (Memory) {
    let displayHTML = document.getElementById("displayResponse");
    window.addEventListener("load", loadScore);
    let url;
    let showScore = document.getElementById("showScore");
    let registerScore = document.getElementById("registerScore");
    registerScore.addEventListener("click", handelClickRegisterScore);
    let enterScore = document.getElementById("enterScore");
    let lableTime = document.getElementById("labelTime");
    lableTime.innerText += sessionStorage.getItem("endTime");
    function urlFunction() {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function loadScore() {
        showScore.innerHTML = "";
        urlFunction();
        toShowOrNotToShow();
        url = url + "/score?";
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.json();
        let scoreTable = document.createElement("table");
        showScore.appendChild(scoreTable);
        let tableHead = document.createElement("tr");
        scoreTable.appendChild(tableHead);
        let theadNumber = document.createElement("th");
        tableHead.appendChild(theadNumber);
        let theadName = document.createElement("th");
        tableHead.appendChild(theadName);
        let theadScore = document.createElement("th");
        tableHead.appendChild(theadScore);
        theadNumber.innerText = "Position";
        theadName.innerText = "Name";
        theadScore.innerText = "Time in Seconds";
        for (let i = 0; i < responseString.length; i++) {
            let score = document.createElement("tr");
            scoreTable.appendChild(score);
            let tableNumber = document.createElement("td");
            score.appendChild(tableNumber);
            let tableName = document.createElement("td");
            score.appendChild(tableName);
            let tableScore = document.createElement("td");
            score.appendChild(tableScore);
            tableNumber.innerText += (i + 1) + ".";
            tableName.innerText += responseString[i].name;
            tableScore.innerText += responseString[i].time;
        }
        console.log(responseString);
    }
    async function handelClickRegisterScore() {
        urlFunction();
        let formData = new FormData(enterScore);
        //tslint:disable-next-line:no-any
        let query = new URLSearchParams(formData);
        url = url + "/writeScore?" + query.toString() + "&time=" + sessionStorage.getItem("endTime");
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.text();
        displayHTML.innerText = responseString;
        enterScore.classList.add("blank");
        sessionStorage.clear();
        loadScore();
    }
    //mmmh griffig und wunderschön deskriptiv
    function toShowOrNotToShow() {
        let swich = sessionStorage.getItem("switch");
        if (swich == "memory") {
            enterScore.classList.remove("blank");
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=scoreScript.js.map