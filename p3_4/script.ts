namespace dreivier {

    document.getElementById("submitButton").addEventListener("click", handelButtonClickSubmit);
    document.getElementById("showList").addEventListener("click", handelButtonClickShow);
    let displayHTML: HTMLDivElement = <HTMLDivElement>document.getElementById("HTMLdisplay");
    let url: string;

    function urlFunction(): void {
        url = "https://gis2021.herokuapp.com";
        //url = "http://localhost:8100";
    }


    async function handelButtonClickSubmit(): Promise<void> {
        urlFunction();
        console.log("submit hangout");

        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line:no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/submit?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let responseString: string = await serverResponse.text();
        displayHTML.innerText = responseString;
        console.log(responseString);
        console.log(query.toString());


    }


    async function handelButtonClickShow(): Promise<void> {
        urlFunction();

        url = url + "/show?";
        let serverResponse: Response = await fetch(url);
        let responseString: Submits[] = await serverResponse.json();

        let submitTable: HTMLTableElement = document.createElement("table");
        displayHTML.appendChild(submitTable);
        let tableHead: HTMLTableRowElement = document.createElement("tr");
        submitTable.appendChild(tableHead);
        let theadName: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadName);
        let theadRuleset: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadRuleset);
        let theadLocation: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadLocation);
        let theadDate: HTMLTableHeaderCellElement = document.createElement("th");
        tableHead.appendChild(theadDate);

        theadName.innerText = "Name";
        theadRuleset.innerText = "Ruleset";
        theadLocation.innerText = "Location";
        theadDate.innerText = "Date";

        for (let i: number = 0; i < responseString.length; i++) {
            let tableRow: HTMLTableRowElement = document.createElement("tr");
            submitTable.appendChild(tableRow);
            let tableName: HTMLTableCellElement = document.createElement("td");
            tableRow.appendChild(tableName);
            let tableRuleset: HTMLTableCellElement = document.createElement("td");
            tableRow.appendChild(tableRuleset);
            let tableLocation: HTMLTableCellElement = document.createElement("td");
            tableRow.appendChild(tableLocation);
            let tableDate: HTMLTableCellElement = document.createElement("td");
            tableRow.appendChild(tableDate);

            tableName.innerText += responseString[i].Name;
            tableRuleset.innerText += responseString[i].Ruleset;
            tableLocation.innerText += responseString[i].Location;
            tableDate.innerText += responseString[i].Date;
        }
    }
}
