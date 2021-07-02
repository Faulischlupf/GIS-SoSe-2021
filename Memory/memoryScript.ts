
namespace Memory {

    let url: string;
    let memoryDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("memory");
    let counter: number = 0;
    let scoreCounter: number = 0;
    let cardOne: string = "";
    let cardTwo: string = "";

    window.addEventListener("load", loadPictures);

    function urlFunction(): void {
        //url = "https://gis2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function loadPictures(): Promise<void> {
        memoryDiv.innerHTML = "";
        urlFunction();

        url = url + "/show?";
        let serverResponse: Response = await fetch(url);
        let responseString: Pictures[] = await serverResponse.json();
        console.log(responseString);

        for (let i: number = 0; i < 8; i++) {
            //Card One
            for (let j: number = 0; j < 2; j++) {
                let memoryCard: HTMLDivElement = document.createElement("div");
                memoryCard.setAttribute("id", i + "card" + j);
                memoryDiv.appendChild(memoryCard);

                let picture: HTMLImageElement = document.createElement("img");
                picture.setAttribute("src", responseString[i].picture);
                picture.classList.add("blank");
                memoryCard.appendChild(picture);

                let back: HTMLImageElement = document.createElement("img");
                back.setAttribute("src", "./MarieGoldFish.png");
                memoryCard.appendChild(back);

                back.addEventListener("click", handelButtonClickFlipp);

                function handelButtonClickFlipp(_event: Event): void {

                    if (counter >= 2) return;

                    if (cardOne == "") {
                        let target: HTMLElement = <HTMLElement>_event.target;
                        cardOne = target.parentElement.id;
                        console.log(cardOne);

                    }
                    else {
                        let target: HTMLElement = <HTMLElement>_event.target;
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
                            /*if (scoreCounter = 8) {

                            }*/

                        }
                        else {
                            setTimeout(backFlip, 1000);

                        }
                    }
                }

                function backFlip(): void {
                    console.log("hab ich doch gesagt");

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
    }
}