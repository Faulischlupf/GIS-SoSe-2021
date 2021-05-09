namespace p2_KA {


    export interface Blade {
        name: string;
        bns: string;
        atk: number;
    }

    export interface CrossGuard {
        name: string;
        guard: string;
        durability: number;
    }

    export interface Hilt {
        picture: string;
        name: string;
        length: string;
        grip: number;
    }
    export interface Sword {
        blade: Blade;
        guard: CrossGuard;
        hilt: Hilt;
    }

    let h1: HTMLSpanElement = document.createElement("h1");
    h1.innerText = "Der Schwertinator";
    document.body.appendChild(h1);

    let flexbox: HTMLDivElement = document.createElement("div");
    flexbox.setAttribute("id", "flexbox");
    document.body.appendChild(flexbox);
    for (let i: number = 0; i < arrayHilt.length; i++) {
        let hiltBlock: HTMLDivElement = document.createElement("div");
        flexbox.appendChild(hiltBlock);
        let picture: HTMLImageElement = document.createElement("img");
        picture.setAttribute("src", arrayHilt[i].picture);
        picture.setAttribute("height", 300 + "px");
        hiltBlock.appendChild(picture);
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerText = "Name: " + arrayHilt[i].name;
        hiltBlock.appendChild(name);
        let length: HTMLParagraphElement = document.createElement("p");
        length.innerText = "Hilt Length: " + arrayHilt[i].length;
        hiltBlock.appendChild(length);
        let grip: HTMLParagraphElement = document.createElement("p");
        grip.innerText = "Grip Value: " + arrayHilt[i].grip;
        hiltBlock.appendChild(grip);
        let buttons: HTMLButtonElement = document.createElement("button");
        buttons.innerText = "Choose";
        hiltBlock.appendChild(buttons);
        buttons.addEventListener("click", handelClickButton);
        function handelClickButton(_event: MouseEvent): void {
            console.log(arrayHilt[i]);
        }
    }

}
