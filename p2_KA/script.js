"use strict";
var p2_KA;
(function (p2_KA) {
    let h1 = document.createElement("h1");
    h1.innerText = "Der Schwertinator";
    document.body.appendChild(h1);
    let flexbox = document.createElement("div");
    flexbox.setAttribute("id", "flexbox");
    document.body.appendChild(flexbox);
    for (let i = 0; i < p2_KA.arrayHilt.length; i++) {
        let hiltBlock = document.createElement("div");
        flexbox.appendChild(hiltBlock);
        let picture = document.createElement("img");
        picture.setAttribute("src", p2_KA.arrayHilt[i].picture);
        picture.setAttribute("height", 300 + "px");
        hiltBlock.appendChild(picture);
        let name = document.createElement("p");
        name.innerText = "Name: " + p2_KA.arrayHilt[i].name;
        hiltBlock.appendChild(name);
        let length = document.createElement("p");
        length.innerText = "Hilt Length: " + p2_KA.arrayHilt[i].length;
        hiltBlock.appendChild(length);
        let grip = document.createElement("p");
        grip.innerText = "Grip Value: " + p2_KA.arrayHilt[i].grip;
        hiltBlock.appendChild(grip);
        let buttons = document.createElement("button");
        buttons.innerText = "Choose";
        hiltBlock.appendChild(buttons);
        buttons.addEventListener("click", handelClickButton);
        function handelClickButton(_event) {
            console.log(p2_KA.arrayHilt[i]);
        }
    }
})(p2_KA || (p2_KA = {}));
//# sourceMappingURL=script.js.map