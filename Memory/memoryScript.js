"use strict";
var Memory;
(function (Memory) {
    let url;
    let memoryDiv = document.getElementById("memory");
    let counter = 0;
    let cardOne = "";
    let cardTwo = "";
    window.addEventListener("load", loadPictures);
    function urlFunction() {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function loadPictures() {
        memoryDiv.innerHTML = "";
        urlFunction();
        url = url + "/show?";
        let serverResponse = await fetch(url);
        let responseString = await serverResponse.json();
        console.log(responseString);
        for (let i = 0; i < 8; i++) {
            //Card One
            let memoryCardOne = document.createElement("div");
            memoryCardOne.setAttribute("id", i + "cardOne");
            memoryDiv.appendChild(memoryCardOne);
            let picture = document.createElement("img");
            picture.setAttribute("src", responseString[i].picture);
            picture.classList.add("blank");
            memoryCardOne.appendChild(picture);
            let back = document.createElement("img");
            back.setAttribute("src", "./MarieGoldFish.png");
            memoryCardOne.appendChild(back);
            //Card Two
            let memoryCardTwo = document.createElement("div");
            memoryCardTwo.setAttribute("id", i + "cardTwo");
            memoryDiv.appendChild(memoryCardTwo);
            let pictureDuplicate = document.createElement("img");
            pictureDuplicate.setAttribute("src", responseString[i].picture);
            pictureDuplicate.classList.add("blank");
            memoryCardTwo.appendChild(pictureDuplicate);
            let backDuplicate = document.createElement("img");
            backDuplicate.setAttribute("src", "./MarieGoldFish.png");
            memoryCardTwo.appendChild(backDuplicate);
            back.addEventListener("click", handelButtonClickFlipp);
            backDuplicate.addEventListener("click", handelButtonClickFlippDuplicate);
            function handelButtonClickFlipp(_event) {
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
                    setTimeout(backFlip, 1000);
                    back.removeEventListener("click", handelButtonClickFlipp);
                    backDuplicate.removeEventListener("click", handelButtonClickFlippDuplicate);
                }
            }
            function handelButtonClickFlippDuplicate() {
                backDuplicate.classList.add("blank");
                pictureDuplicate.classList.remove("blank");
                console.log("FLIPP");
                counter++;
                if (counter >= 2) {
                    setTimeout(backFlip, 1000);
                    back.removeEventListener("click", handelButtonClickFlipp);
                    backDuplicate.removeEventListener("click", handelButtonClickFlippDuplicate);
                }
            }
            function backFlip() {
                back.classList.remove("blank");
                picture.classList.add("blank");
                backDuplicate.classList.remove("blank");
                pictureDuplicate.classList.add("blank");
                counter = 0;
                back.addEventListener("click", handelButtonClickFlipp);
                backDuplicate.addEventListener("click", handelButtonClickFlippDuplicate);
            }
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memoryScript.js.map