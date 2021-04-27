


/* Aufgabe 1 - Mehr “langweilige” Konsolenausgaben
a) Schreiben Sie eine Funktion min(...), welche eine beliebige Anzahl an Übergabeparametern entgegen nimmt und aus allen übergebenen Zahlen das Minimum zurück gibt.

b) Schreiben Sie eine Funktion isEven(...), welche durch Rekursion nach folgender Beschreibung Berechnet,
ob eine Zahl gerade ist und entweder true oder false zurück gibt.

0 ist gerade
1 ist ungerade
Für jede andere Zahl N gilt, dass das Ergebnis gleich ist wie N - 2
Testen Sie Ihre Funktion mit 50 und 75. Was passiert bei -1? Warum? Können Sie eine Lösung dafür finden? (K)

c) Stellen Sie sich vor, Sie sollen ein System für die Hochschule entwickeln, ihre Studierenden abzuspeichern und zu verwalten.

Definieren Sie einen komplexen Datentyp (interface) für einen solchen Studierenden. Wie könnte dieser aussehen, welche Eigenschaften sollte dieser haben?
Erschaffen Sie drei verschiedene Studierende, befüllen Sie diese mit sinnvollen Werten und speichern Sie diese in Variablen.
Erschaffen Sie aus diesen drei Studierenden ein Studierenden Array (Typisierung!).
Fügen Sie dem Array einen weiteren Studierenden hinzu ohne diesen zunächst in einer Variable abzulegen.
Geben Sie einige Attribute / Eigenschaften dieser Studierenden auf der Konsole aus.
Schreiben sie eine Funktion showInfo(...) mit geeigneten Übergabeparametern, welche wichtige Infos über einen Studierenden auf der Konsole ausgibt.
Rufen Sie diese Funktion einmal für jeden Studierenden auf.
Wenn Sie können, ändern Sie das interface in eine Klasse mit Konstruktur.
Verschieben Sie außerdem die showInfo Funktion innerhalb die Klasse und machen Sie damit eine Methode daraus.

Aufgabe 2 - Arrays
⚠️ Für die folgende Aufgabe sollen die übergebenen Arrays nicht verändert werden, sondern das Ergebnis als neues Array zurückgegeben werden.
Lesen Sie dazu im Zweifelsfall nochmal den Abschnitt Call by reference / call by value in 2.2 noch einmal durch.

Die meisten dieser Funktionen sind in einem Array bereits Standardmäßig enthalten. Sie sollen diese Funktionen aber selbstverständlich selbst implementieren.
Gehen Sie von number Arrays aus.

a) Schreiben Sie eine Funktion backwards(...), welche ein Array entgegen nimmt und in umgekehrter Reihenfolge zurück gibt.

b) Schreiben Sie eine Funktion join(...), welche zwei Arrays zusammenfügt indem es das zweite hinter das erste hängt. Bonus: Können Sie diese Funktion so umschreiben,
dass Sie beliebig viele Arrays entgegen nimmt?

c) Eine Funktion split(...), die ein Array und zwei Indexe entgegen nimmt und das Array zwischen diesen beiden Indexen zurück gibt.
Bonus: Hier wäre eine Prüfung der übergebenen Indizes angebracht. Welche Prüfungen sind dies? Implementieren Sie auch das.

Testcode

Wenn Sie alle diese Aufgaben erledigt haben, können Sie diesen Code zum testen nutzen. Funktioniert alles wie erwartet?

let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)


Aufgabe 3 - Endlich was visuelles!
Für diese Aufgabe soll der Canvas genutzt werden (siehe Canvas in 2.2).

a) Experimentieren Sie ein wenig mit dem Canvas und machen Sie sich damit vertraut. Malen Sie Linien, machen Sie diese Linien farbig oder gekrümmt,
malen Sie Kreise, Kurven und Rechtecke und füllen Sie diese mit Farben. Zeichnen Sie damit eine einfache Landschaft (grüner Boden, blauer Himmel mit ein paar Wolken,
    ein Haus und ein Baum im Bild). Machen Sie Gebrauch von Html5CanvasTutorials.

b) Entwerfen Sie ein Interface, welches auf sinnvolle Weise ein beliebiges Rechteck abbilden kann.
Bonus: Machen Sie statt einem Interface eine Klasse und, statt globaler Funktionen denen die Rechtecke übergeben werden in den folgenden Teilaufgaben, Methoden der Klasse selbst.

c) Schreiben Sie eine Funktion createRect(), welche Ihnen ohne Übergabeparameter ein zufällig (aber sinnvoll) befülltes Rechteck zurück gibt.
 Für die Klasse wäre dies der Konstruktor.

d) Schreiben Sie eine Funktion drawRect(...), welche das ihr übergebene Rechteck auf dem Canvas malt.

e) Lassen Sie jedes Mal, wenn die Seite neu geladen wird, einige Rechtecke generieren und zeichnen.
Legen Sie die Rechtecke dafür in einem Array an und rufen für jedes im Array vorhandene Rechteck die drawRect Funktion auf.

f) Bonus: Nutzen sie die setTimeout Funktion um alle 50 Millisekeunden den Canvas neu zu bemalen (Sie können ihn über context.clearRect() leeren).
Damit es auch interessante Änderungen zu sehen gibt, fügen sie den Rechtecken eine Bewegungsrichtung für beide Achsen hinzu und bewegen Sie diese pro Zyklus um diese Werte.

g) Bonus: Ändern Sie ihre Rechteck-Klasse so ab, dass diese von einer neuen, Zeichenobjekt Klasse erbt.
Lassen Sie außerdem von Zeichenobjekt eine neue Klasse Kreis erben, welche statt einem Rechteck einen Kreis zeichnet.
Duplizieren Sie keinen (oder so wenig wie möglich) Code und nutzen Sie die Vererbung von Klassen voll aus.*/