"use strict";
var p2_KA;
(function (p2_KA) {
    let sword;
    async function getData(_url) {
        let response = await fetch(_url);
        let jsonObject = await response.json();
        console.log(jsonObject);
        sword = JSON.parse(JSON.stringify(jsonObject));
        console.log(jsonObject);
    }
    async function pingServer(_url) {
        let browserCacheData = JSON.parse(JSON.stringify(sessionStorage));
        let query = new URLSearchParams(browserCacheData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let text = await response.text();
        let displayResponse = JSON.parse(text);
        if (displayResponse.error != undefined) {
            return displayResponse.error + " \n Hier gibt es wirklich nichts zu sehen. Der Screen ist tot wie Bozos Oma.";
        }
        if (displayResponse.message != undefined) {
            return displayResponse.message + "\n Hier gibt es wirklich nichts zu sehen. Der Screen ist tot wie Bozos Oma.";
        }
        return "Hier gibt es wirklich nichts zu sehen. Der Screen ist tot wie Bozos Oma.";
    }
    let h1 = document.createElement("h1");
    h1.innerText = "Der Schwertinator";
    document.body.appendChild(h1);
    let display = document.createElement("div");
    display.setAttribute("id", "display");
    document.body.appendChild(display);
    let flexbox = document.createElement("div");
    flexbox.setAttribute("id", "flexbox");
    document.body.appendChild(flexbox);
    let addbox = document.createElement("div");
    addbox.setAttribute("id", "addbox");
    document.body.appendChild(addbox);
    function displaySword() {
        let picture1 = document.createElement("img");
        picture1.setAttribute("height", 100 + "px");
        picture1.setAttribute("src", sessionStorage.getItem("picture1"));
        let picture2 = document.createElement("img");
        picture2.setAttribute("width", 100 + "px");
        picture2.setAttribute("src", sessionStorage.getItem("picture2"));
        let picture3 = document.createElement("img");
        picture3.setAttribute("height", 300 + "px");
        picture3.setAttribute("src", sessionStorage.getItem("picture3"));
        if (getSubpage() == "guard.html") {
            display.appendChild(picture1);
        }
        if (getSubpage() == "blade.html") {
            display.appendChild(picture1);
            display.appendChild(picture2);
        }
        if (getSubpage() == "sword.html") {
            display.appendChild(picture1);
            display.appendChild(picture2);
            display.appendChild(picture3);
        }
    }
    function addition() {
        let addName = "";
        let addAtk = 0;
        let addDurability = 0;
        let addPrice = 0;
        for (let i = 1; i < 4; i++) {
            addName += sessionStorage.getItem("name" + i);
            addAtk += Number(sessionStorage.getItem("atk" + i));
            addDurability += Number(sessionStorage.getItem("durability" + i));
            addPrice += Number(sessionStorage.getItem("price" + i));
        }
        let addNameLine = document.createElement("p");
        addNameLine.innerText = "Name: " + addName;
        addbox.appendChild(addNameLine);
        let addAtkLine = document.createElement("p");
        addAtkLine.innerText = "Attack Value: " + addAtk;
        addbox.appendChild(addAtkLine);
        let addDurabilityLine = document.createElement("p");
        addDurabilityLine.innerText = "Durability: " + addDurability;
        addbox.appendChild(addDurabilityLine);
        let addPriceLine = document.createElement("p");
        addPriceLine.innerText = "Price: " + addPrice + "G";
        addbox.appendChild(addPriceLine);
    }
    async function displayServerResponse() {
        let showServerResponse = document.createElement("div");
        showServerResponse.innerText = await pingServer("https://gis-communication.herokuapp.com");
        flexbox.appendChild(showServerResponse);
    }
    function buildSword(_parts, _index) {
        let partsBlock = document.createElement("div");
        flexbox.appendChild(partsBlock);
        let picture = document.createElement("img");
        picture.setAttribute("src", _parts.picture);
        if (_index == 1) {
            picture.setAttribute("height", 200 + "px");
        }
        if (_index == 2) {
            picture.setAttribute("height", 50 + "px");
        }
        if (_index == 3) {
            picture.setAttribute("height", 300 + "px");
        }
        partsBlock.appendChild(picture);
        let name = document.createElement("p");
        name.innerText = "Name: " + _parts.name;
        partsBlock.appendChild(name);
        let atk = document.createElement("p");
        atk.innerText = "Attack Value: " + _parts.atk;
        partsBlock.appendChild(atk);
        let durabality = document.createElement("p");
        durabality.innerText = "Durability: " + _parts.durability;
        partsBlock.appendChild(durabality);
        let price = document.createElement("p");
        price.innerText = "Price: " + _parts.price;
        partsBlock.appendChild(price);
        let buttons = document.createElement("button");
        buttons.innerText = "Choose";
        partsBlock.appendChild(buttons);
        buttons.addEventListener("click", handelClickButton);
        function handelClickButton(_event) {
            sessionStorage.setItem("picture" + _index, _parts.picture);
            sessionStorage.setItem("name" + _index, _parts.name);
            sessionStorage.setItem("atk" + _index, "" + _parts.atk);
            sessionStorage.setItem("durability" + _index, "" + _parts.durability);
            sessionStorage.setItem("price" + _index, "" + _parts.price);
            if (_index == 1) {
                window.open("../p2_KA/guard.html", "_self");
            }
            if (_index == 2) {
                window.open("../p2_KA/blade.html", "_self");
            }
            if (_index == 3) {
                window.open("../p2_KA/sword.html", "_self");
            }
        }
    }
    function getSubpage() {
        return window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    }
    async function buildPage() {
        await getData("../p2_KA/data.json");
        if ("hilt.html" == getSubpage()) {
            for (let i = 0; i < sword.hilt.length; i++) {
                buildSword(sword.hilt[i], 1);
            }
        }
        if ("guard.html" == getSubpage()) {
            displaySword();
            for (let i = 0; i < sword.guard.length; i++) {
                buildSword(sword.guard[i], 2);
            }
        }
        if ("blade.html" == getSubpage()) {
            displaySword();
            for (let i = 0; i < sword.blade.length; i++) {
                buildSword(sword.blade[i], 3);
            }
        }
        if ("sword.html" == getSubpage()) {
            displayServerResponse();
            displaySword();
            addition();
        }
    }
    buildPage();
})(p2_KA || (p2_KA = {}));
/*

c) Fügen Sie der “Display Seite” (die in der alle ausgewählten Dinge gemeinsam am Ende angezeigt werden) eine Funktion hinzu, welche die Daten,
die im Browsercache gespeichert sind, an die URL https://gis-communication.herokuapp.com verschickt und dessen JSON Antwort wohlformatiert auf Ihrer Webseite anzeigt.
Die Antwort auf die erste Anfrage kann unter Umständen bis zu 15 Sekunden dauern, da der Server erst hochfahren muss.

Die möglichen Antworten der Seite sind entweder:

{
  "error": "<Fehlermeldung hier>"
}
oder

{
  "message": "<Nachricht des Servers hier>"
}
Formatieren Sie die Ausgaben unterschiedlich, je nach dem ob error oder message zurückgegeben wird.

Nutzen Sie diesen Codeschnipsel, um die Daten zu versenden (Erklärung dazu gibt es in 3.1)).
Um die Antwort auszulesen, muss die letzte Zeile dieses Schnipsels verändert werden, wie es in der Lektion diese Woche dargestellt wurde.
Außerdem müssen Sie browserCacheData mit dem Speichermedium Ihrer Wahl ersetzen. broswerCacheData sollte ein (komplexes) JS Objekt sein, also nicht nur eine Zahl oder String.

let query: URLSearchParams = new URLSearchParams(<any>browserCacheData);
url = url + "?" + query.toString();
await fetch(url);
*/ 
//# sourceMappingURL=script.js.map