# frontend voor designers - opdracht 1
Voor de eerste opdracht van Front-end voor designer heb ik gekozen voor de "sorteer foto's op kleur" opdracht. Ik heb gekozen voor deze opdracht omdat hij me uitdagend leek maar wel iets wat ik vaker zou gaan gebruiken. Ik vond het aanbod aan opdrachten eigenlijk wel goed als eerste opdracht voor dit vak. Je kon het ook zo moeilijk maken als je zelf wilde. Ondanks het niet helemaal gelukt is zoals ik had gewilt heb ik er wel heel erg veel van geleerd.

Ik ben begonnen met het opzetten van de html en css. Hier heb ik checkboxes gebruikt voor het kiezen van de kleuren en articles waar ik de foto's in heb geplaatst.

Nadat de html css klaar was, ben ik de begonnen aan de JavaScript. Hier heb ik eerst helemaal in tekst uitgetypt wat ik wilde en daar ben ik code bij gaan verzinnen.

De [eerste versie] (die ik helaas niet heb opgeslagen) deed precies het tegenovergestelde van wat ik wilde. Hij filterde wel, maar in plaats van dat de kleur waarop je filterde de enige is die overblijft, verdween de gekozen kleur.

Bij de [tweede versie] probeerde ik dit om te draaien. Ik heb elk article een class initial gegeven die een display flex krijgt, dit zorgt ervoor dat ze zichtbaar zijn. Ook heb ik een class show aangemaakt die ook een display flex heeft. Op het moment dat je op een checkbox drukt wordt de class "initial" verwijderd van alle articles en wordt de class "show" toegevoegt aan de foto's met de gekozen kleur.

Omdat de tweede versie uit erg veel dubbele code bestond, ben ik deze gaan inkorten. In de [derde versie] heb ik in plaats van elke kleur apart, .this gebruikt. Hierdoor is de vele dubbele code niet meer nodig.

Er is 1 ding dat in de derde versie nog niet werkt. Wanneer je de filters weer uitklikt blijven er geen foto's over. Om dit op te lossen wil ik een loop gaan gebruiken alle inputs langsloopt of er een is gecheckt.



[Demo voor opdracht 1](https://oege.ie.hva.nl/~litha1/kleurFilter/)


Je kan ook een link plaatsen naar de bron code van de demo:

[Code demo voor opdracht 1](https://github.com/AmyvanLith/frontendvoordesigners/tree/master/opdracht1/v1)
