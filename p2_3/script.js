"use strict";
var twoThree;
(function (twoThree) {
    let buttonRect = document.getElementById("newRectangle");
    let resetPage = document.getElementById("clear");
    let rectSpace = document.getElementById("rectangleSpace");
    function handelButton(_event) {
        let rectangle = document.createElement("div");
        let color = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
        rectangle.setAttribute("style", "position: relative; background-color:" + color + "; height:" + Math.random() * 100 + "px; width: " + Math.random() * 100 + "px;top:" + Math.random() * 100 + "px; left: " + Math.random() * 1000 + "px;");
        rectSpace.appendChild(rectangle);
    }
    function handelClear(_event) {
        window.open("index.html", "_self");
    }
    buttonRect.addEventListener("click", handelButton);
    resetPage.addEventListener("click", handelClear);
})(twoThree || (twoThree = {}));
//# sourceMappingURL=script.js.map