
namespace Memory {

    let url: string;
    let memoryDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("memory");
    let counter: number = 0;
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
            let memoryCardOne: HTMLDivElement = document.createElement("div");
            memoryCardOne.setAttribute("id", i + "cardOne");
            memoryDiv.appendChild(memoryCardOne);

            let picture: HTMLImageElement = document.createElement("img");
            picture.setAttribute("src", responseString[i].picture);
            picture.classList.add("blank");
            memoryCardOne.appendChild(picture);

            let back: HTMLImageElement = document.createElement("img");
            back.setAttribute("src", "./MarieGoldFish.png");
            memoryCardOne.appendChild(back);

            //Card Two
            let memoryCardTwo: HTMLDivElement = document.createElement("div");
            memoryCardTwo.setAttribute("id", i + "cardTwo");
            memoryDiv.appendChild(memoryCardTwo);

            let pictureDuplicate: HTMLImageElement = document.createElement("img");
            pictureDuplicate.setAttribute("src", responseString[i].picture);
            pictureDuplicate.classList.add("blank");
            memoryCardTwo.appendChild(pictureDuplicate);

            let backDuplicate: HTMLImageElement = document.createElement("img");
            backDuplicate.setAttribute("src", "./MarieGoldFish.png");
            memoryCardTwo.appendChild(backDuplicate);


            back.addEventListener("click", handelButtonClickFlipp);
            backDuplicate.addEventListener("click", handelButtonClickFlippDuplicate);

            function handelButtonClickFlipp(_event: Event): void {
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
                    setTimeout(backFlip, 1000);
                    back.removeEventListener("click", handelButtonClickFlipp);
                    backDuplicate.removeEventListener("click", handelButtonClickFlippDuplicate);
                

                }


            }
            function handelButtonClickFlippDuplicate(): void {
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
            function backFlip(): void {
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

}