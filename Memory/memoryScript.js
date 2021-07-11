"use strict";
var Memory;
(function (Memory) {
    let url;
    let memoryDiv = document.getElementById("memory");
    let counter = 0;
    let scoreCounter = 0;
    let timeCounter = 0;
    let cardOne = "";
    let cardTwo = "";
    window.addEventListener("load", loadPictures);
    let timer = document.getElementById("startTimer");
    timer.addEventListener("click", startTimer);
    function startTimer() {
        memoryDiv.classList.remove("blank");
        timer.classList.add("blank");
        setInterval(timerCount, 1000);
    }
    function timerCount() {
        timeCounter += 1;
        Math.round(timeCounter);
        console.log(timeCounter);
    }
    function urlFunction() {
        url = "https://gis2021.herokuapp.com";
        //url = "http://localhost:8100";
    }
    async function loadPictures() {
        memoryDiv.innerHTML = "";
        urlFunction();
        memoryDiv.classList.add("blank");
        url = url + "/showMemory?";
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.json();
        console.log(responseString);
        //Create Cards
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 2; j++) {
                let memoryCard = document.createElement("div");
                memoryCard.setAttribute("id", i + "card" + j);
                memoryDiv.appendChild(memoryCard);
                let picture = document.createElement("img");
                picture.setAttribute("src", responseString[i].picture);
                picture.classList.add("blank");
                memoryCard.appendChild(picture);
                let back = document.createElement("img");
                back.classList.add("back");
                back.setAttribute("src", "./Pictures/cryptid-creations.png");
                memoryCard.appendChild(back);
                back.addEventListener("click", handelButtonClickFlipp);
                function handelButtonClickFlipp(_event) {
                    if (counter >= 2)
                        return;
                    if (cardOne == "") {
                        let target = _event.target;
                        cardOne = target.parentElement.id;
                        console.log(cardOne);
                    }
                    else {
                        let target = _event.target;
                        cardTwo = target.parentElement.id;
                        console.log(cardTwo);
                    }
                    back.classList.add("blank");
                    picture.classList.remove("blank");
                    counter++;
                    console.log("FLIPP");
                    if (counter >= 2) {
                        if (cardOne.slice(0, 1) == cardTwo.slice(0, 1)) {
                            scoreCounter++;
                            console.log(scoreCounter);
                            counter = 0;
                            cardOne = "";
                            cardTwo = "";
                            if (scoreCounter == 8) {
                                sessionStorage.setItem("endTime", timeCounter.toString());
                                sessionStorage.setItem("switch", "memory");
                                window.open("./score.html", "_self");
                            }
                        }
                        else {
                            setTimeout(backFlip, 1000);
                        }
                    }
                }
                function backFlip() {
                    document.getElementById(cardOne).firstElementChild.classList.add("blank");
                    document.getElementById(cardOne).lastElementChild.classList.remove("blank");
                    document.getElementById(cardTwo).firstElementChild.classList.add("blank");
                    document.getElementById(cardTwo).lastElementChild.classList.remove("blank");
                    counter = 0;
                    cardOne = "";
                    cardTwo = "";
                }
            }
        }
        //From stack overflow, interpreted in TS: https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
        for (let i = memoryDiv.children.length; i >= 0; i--) {
            memoryDiv.appendChild(memoryDiv.children[Math.random() * i | 0]);
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memoryScript.js.map