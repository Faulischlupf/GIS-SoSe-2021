
namespace Memory {

    let displayHTML: HTMLDivElement = <HTMLDivElement>document.getElementById("displayResponse");
    window.addEventListener("load", loadScore);

    let url: string;

    let showScore: HTMLDivElement = <HTMLDivElement>document.getElementById("showScore");
    let registerScore: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registerScore");
    registerScore.addEventListener("click", handelClickRegisterScore);
    let enterScore: HTMLFormElement = <HTMLFormElement>document.getElementById("enterScore");

    let lableTime: HTMLLabelElement = <HTMLLabelElement>document.getElementById("labelTime");
    lableTime.innerText += sessionStorage.getItem("endTime");

    function urlFunction(): void {
        url = "https://gis2021.herokuapp.com";
        //url = "http://localhost:8100";
    }

    async function loadScore(): Promise<void> {
        showScore.innerHTML = "";
        urlFunction();

        toShowOrNotToShow();

        url = url + "/score?";
        let serverResponse: Response = await fetch(url);
        let responseString: Score[] = await serverResponse.json();

        let scoreTable: HTMLTableElement = document.createElement("table");
        showScore.appendChild(scoreTable);
        let tableHead: HTMLTableRowElement = document.createElement("tr");
        scoreTable.appendChild(tableHead);
        let theadNumber: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadNumber);
        let theadName: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadName);
        let theadScore: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadScore);

        theadNumber.innerText = "Position";
        theadName.innerText = "Name";
        theadScore.innerText = "Time in Seconds";

        for (let i: number = 0; i < 10; i++) {
            let score: HTMLTableRowElement = document.createElement("tr");
            scoreTable.appendChild(score);
            let tableNumber: HTMLTableCellElement = document.createElement("td");
            score.appendChild(tableNumber);
            let tableName: HTMLTableCellElement = document.createElement("td");
            score.appendChild(tableName);
            let tableScore: HTMLTableCellElement = document.createElement("td");
            score.appendChild(tableScore);

            tableNumber.innerText += (i + 1) + ".";
            tableName.innerText += responseString[i].name;
            tableScore.innerText += responseString[i].time;

        }
        console.log(responseString);

    }
    async function handelClickRegisterScore(): Promise<void> {
        urlFunction();

        let formData: FormData = new FormData(enterScore);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/writeScore?" + query.toString() + "&time=" + sessionStorage.getItem("endTime");
        let serverResponse: Response = await fetch(url);
        let responseString: string = await serverResponse.text();
        displayHTML.innerText = responseString;

        enterScore.classList.add("blank");
        sessionStorage.clear();

        loadScore();
    }
    //mmmh griffig und wunderschön deskriptiv
    function toShowOrNotToShow(): void {

        let swich: string = sessionStorage.getItem("switch");
        if (swich == "memory") {
            enterScore.classList.remove("blank");
        }
    }

}
