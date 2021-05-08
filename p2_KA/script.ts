namespace p2_KA {


    export interface Blade {
        name: string;
        bns: string;
        atk: number;
        price: number;
    }

    export interface CrossGuard {
        name: string;
        guard: string;
        durability: number;
        price: number;
    }

    export interface Hilt {
        name: string;
        lenght: string;
        gripp: number;
        price: number;
    }
    export interface Sword {
        blade: Blade;
        guard: CrossGuard;
        hilt: Hilt;
    }
}


/*
Aufgabe 3
Nachdem in Aufgabe 2 nun die Vorarbeit geleistet wurde, sollen Sie in dieser Aufgabe nun eine dieser Unterseiten Umsetzen.

a) Entwerfen Sie zunächst ihre Seite mit reinem HTML (und CSS). Füllen Sie die Daten der ersten Seite noch manuell in die Seite ein,
um so das Layout und die Gestaltung zu testen.

b) Verlagern Sie nun nach und nach die Abschnitte, die mit den Daten befüllt werden aus dem HTML in ihr TS und generieren Sie diese Abschnitte automatisch,
abhängig von den Daten. Achten Sie dabei auf Variabilität: Die Seitengenerierung sollte auch weiterhin funktionieren,
wenn Sie eine Auswahlmöglichkeit hinzufügen oder entfernen!

c) Belegen Sie die geeigneten Elemente (z.B. Buttons) in ihrer generierten Seite mit Eventlistenern,
welche die zugehörige Auswahlmöglichkeit auswählt. Geben Sie die Variable, in der die Auswahl gespeichert ist, auf der Konsole aus. */