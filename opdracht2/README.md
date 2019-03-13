# frontend voor designers - opdracht 2
Voor de tweede opdracht van Front-end voor designers heb ik gekozen voor de opdracht "Carousel met vakantiefoto's: Een carousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord". Ik had niet direct voor deze opdracht gekozen en was eerst begonnen aan een opdracht die ik zelf had bedacht. Echter ging mij dit te veel tijd kosten in combinatie met het project en heb vervolgens toch voor deze gekozen.

Ik ben begonnen met het opzetten van de HTML en CSS. Hier heb ik meerdere foto's in een div geplaatst en knoppen gemaakt met een pijl naar links (vorige foto) en een pijl naar rechts (volgende foto).

De [eerste versie] die ik was begonnen wilde ik de foto's in laten sliden. Foto 1 had ik een left: 0% gegeven, foto 2 left:100% en foto  3 left:200%. Ik had het voor elkaar gekregen dat de eerste naar links slide maar kwam er achter dat dit heel veel werk en dubbele code zal opleveren als ik dit zou willen uitbreiden.

Voor de [tweede verise] ben ik het anders op gaan zetten. Nu vervang ik de plaatjes bij het wisselen zodat ik niet hoefte te denken aan alle horizontale transforms.

In de javascript heb ik twee functies gemaakt. Een die zorgt dat de vorige foto komt en een die zorgt dat de volgende foto komt. Dit heb ik gedaan met nextElementSibling en previousElementSibling zodat ik later nog meer foto's kan toevoegen zonder dat de code stuk gaat. De volgende stap was het checken of er wel een volgende sibling was zodat er geen wit scherm verscheen.

On click op de pijlen heb ik de functies laten starten. Linker pijl voor vorige foto en rechter pijl voor volgende foto.

De laatste stap van de opdracht was het toevoegen van een keyboard event. Dit deed ik met de eventListener "keydown". Daar gebruikte ik 2x het if statement waarin de links en rechts pijl toetsen in een getal aangegeven stonden. Bij het drukken op die toetsen start nu dezelfde functie als bij het klikken op de links en rechts pijlen op het scherm.

