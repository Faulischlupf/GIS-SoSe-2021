"use strict";
var p2_KA;
(function (p2_KA) {
    let sword = JSON.parse(p2_KA.mySword);
    let h1 = document.createElement("h1");
    h1.innerText = "Der Schwertinator";
    document.body.appendChild(h1);
    let flexbox = document.createElement("div");
    flexbox.setAttribute("id", "flexbox");
    document.body.appendChild(flexbox);
    function buildSword(_parts, index) {
        let partsBlock = document.createElement("div");
        flexbox.appendChild(partsBlock);
        let picture = document.createElement("img");
        picture.setAttribute("src", _parts.picture);
        picture.setAttribute("height", 300 + "px");
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
            sessionStorage.setItem("npicture" + index, _parts.picture);
            sessionStorage.setItem("name" + index, _parts.name);
            sessionStorage.setItem("atk" + index, "" + _parts.atk);
            sessionStorage.setItem("durability" + index, "" + _parts.durability);
            sessionStorage.setItem("Price" + index, "" + _parts.price);
            console.log(_parts);
        }
    }
    for (let i = 0; i < sword.hilt.length; i++) {
        buildSword(sword.hilt[i], 1);
    }
    for (let i = 0; i < sword.guard.length; i++) {
        buildSword(sword.guard[i], 2);
    }
    for (let i = 0; i < sword.blade.length; i++) {
        buildSword(sword.blade[i], 3);
    }
})(p2_KA || (p2_KA = {}));
/*
Aufgabe 1

c) Sorgen Sie dafür, dass jede Kategorie auf einer eigenen Seite auswählbar wird.
Versuchen Sie dabei sich an den “Code kopieren ist schlecht” Grundsatz zu halten (vorallem für den TS Code, weniger für den HTML Code). Dafür bieten sich zwei Vorgehensweisen an:
Entweder Sie kopieren die HTML Seiten und finden einen Weg, wie sie dem TypeScript miteilen können, welche Seite gerade geöffnet ist / welche Kategorie geladen werden soll oder
Sie finden eine Möglichkeit, auf der gleichen Seite die drei Unterschiedlichen Kategorien eine nach der anderen, und nur eine auf einmal anzuzeigen.

d) Sofern noch nicht passiert, zeigen Sie auf der Auswahlseite an, welche Teilaspekte bereits in vorherigen Schritten ausgewählt wurden.

Aufgabe 2
Entwickeln Sie eine weitere Seite, auf die nachdem (je) ein Element aus allen Kategorieren ausgewählt wurde weitergeleitet wird.
Auf dieser Seite sollte die grafische Darstellung zusammengeführt werden. Nutzen Sie dazu die Daten die Sie im Browser Cache abgelegt haben sowie die Daten aus der daten.ts Datei.*/ 
//# sourceMappingURL=script.js.map