---
date: "2019-03-26T23:17:04+01:00"
noshowdate: yes
author: ["mvoge", "dvandoren"]
#tags:
#- technical
title: Technisches
toc: true
---

In diesem Artikel wird erläutert,
**für welche technischen Lösungen bzw. technische Architektur sich das Projekt entschieden hat und warum**.

Um die im [Whitepaper](/paper) genannten Ziele zu erreichen (Internalisierung
externer Kosten), möchte das Viridian-Projekt ein soziales Netzwerk entwickeln,
mit dem die Nachhaltigkeit von Produkten und Unternehmen bewertet und verglichen werden kann.
Die Bewertungen können zunächst die Transparenz für bewussten nachhaltigen
Konsum erhöhen. Später könnten dann die wahren Preise der Produkte abgebildet
werden (siehe **[Timeline](#timeline)**).

Das Netzwerk soll [**dezentral**](#warum-dezentral) organisiert sein.
Um das Netzwerk vor Manipulation zu schützen soll ein "Distributed Ledger", also
[**eine Blockchain**](#warum-blockchain) zum Einsatz kommen.
Außerdem soll die Bewertung nicht von einer geschlossenen Gruppe, sondern
[**gemeinschaftlich**](#warum-gemeinschaftlich) von allen Usern vorgenommen werden.
Wie das konkret funktionieren soll und wie die Datenstruktur aussehen muss, erklärt
[**ein weiterer Abschnitt**](#netzwerk-funktion). Zum Abschluss gibt es einen
[**Vergleich von Viridian mit bestehenden anderen Projekten**](#vergleich), was
diesen Plattformen fehlt, bzw. wie Viridian diese ergänzt.

Zunächst folgt ein Überblick über den zeitlichen Ablauf des Viridian-Projekts.


## Timeline

Das Projekt besteht aus mehreren Phasen, von denen die erste abgeschlossen und
die zweite weitgehend abgeschlossen ist. **Aktuell beginnt Phase 3**, in der
die Überlegungen in die Implementierung eines ersten Prototyps einfließen.

- In **Phase 1** wurden konzeptionelle Ideen gesammelt. Vor allem wurde die Idee von
  der Transition zu einer nachhaltigen postfossilen Wirtschaft mit dem Konzept von
  alternativen Währungen und Kryptowährungen verknüpft. Zusammen mit dem Konzept
  von externen Kosten und dem erweiterten Marktmodell, bei dem diese eingepreist sind,
  entstand das Viridian-Projekt. Das Ergebnis war das konzeptionelle [Whitepaper](/paper).

- In **Phase 2** wurden die eher abstrakten Ideen in möglichst konkrete Überlegungen
  zur technischen Architektur des Systems übersetzt. Es wurde klar, dass der erste
  Schritt die Entwicklung einer Plattform, bzw. eines sozialen Netzwerks sein muss.
  Das Ergebnis von Phase 2 war dieser Artikel.

- In **Phase 3** soll nach Festlegung der Design-Entscheidungen ein erster Prototyp
  implementiert werden, der die wesentlichen Funktionen enthalten soll: das
  kollaborative Bearbeiten von Nachhaltigkeitsbewertungen durch User auf einem
  dezentral organisierten Blockchain-Netzwerk.

- In **Phase 4** kann an der automatisierten Integration von Daten aus anderen
  Plattformen und Datenbanken gearbeitet werden (u.a. die im [Vergleich](#vergleich)
  aufgeführten). Außerdem kann die Plattform
  weiterentwickelt und nutzerfreundlicher gemacht werden. Mittelfristig sollte auch
  eine Lösung gefunden werden, wie die Identität der User automatisiert geprüft
  werden kann, ohne dass der Datenschutz dabei zu kurz kommt. Mehr dazu [hier](#identitaet).
  
<!-- , uns sind aber viele weitere bekannt -->

- In **Phase 5** kann ein Algorithmus entwickelt werden, der aus den Bewertungen
  der User alternative Preise errechnet, die möglichst die beinhalteten externen
  Kosten widerspiegeln. Hier ist es wichtig, dass die User diesem Prozess vertrauen
  und zustimmen (Transparenz!), bzw. ihn sogar selbst mit beeinflussen. Wenn die
  User ihre Bewertungen abgeben, sollten sie sehen können, welche monetären
  Auswirkungen diese haben. Dann kann sich jede\(r\) überlegen, wie viel ihm/ihr
  persönlich die Nachhaltigkeit wert ist.
  
- In **Phase 6** können die in Phase 5 errechneten Preise tatsächlich angewendet
  werden. Denkbar ist dann die Schaffung einer digitalen Währung, evtl. auch
  Kryptowährung, die die Preise automatisch anpasst.
  Eine Alternative wäre ein Bezahlsystem, das die konventionelle Währung
  verwendet, aber entsprechend der berechneten externen Kosten einen Teil des
  Kaufpreises abführt und in einen Fonds einzahlt bzw. ggf. aus diesem auszahlt.





## Vergleich mit alternativen Plattformen {#vergleich}

Ziel von Viridian ist es, eine Plattform zu entwickeln, mit der Informationen dezentral erfasst werden können, um die Nachhaltigkeitsleistung von Produkten zu bewerten und zu vergleichen. Dies kann die Grundlage für eine nachhaltige Wirtschaft bilden.

Es gibt andere Initiativen, die verschiedene Konzepte oder Prinzipien von Viridian teilen. Im Folgenden werden drei Beispiele für solche Initiativen gegeben, einschließlich einer kurzen Beschreibung, wie diese Initiativen aussehen oder von Viridian abweichen.

### Questionmark

[Questionmark] (https://www.thequestionmark.org/) zielt darauf ab, eine unabhängige Plattform zu entwickeln, die die Verbraucher*innen über die Ernährungs- und Nachhaltigkeitsaspekte von Lebensmittelprodukten informiert. Es enthält eine große Datenbank mit über 50.000 Produktgütezeichen. Questionmark arbeitet mit verschiedenen Partnern zusammen, um wissenschaftliche Unterstützung, Zuverlässigkeit der Daten, Richtlinien für gesunde Ernährung, Messung der Nachhaltigkeit von Verbraucherprodukten und Dialog mit Stakeholdern zu gewährleisten.

#### Vorteile:

- Große Produktdatenbank
- Entwickelte App zum Scannen von Barcodes
- Bietet Bewertungen zu Produkten und zeigt Alternativen auf, einschließlich derer, wo diese erworben werden können

#### Nachteile:

- Zentrale Plattform
- Begrenzte interaktive Community-basierte Beteiligung
- Eingeschränkte Bewertung der Nachhaltigkeit (der bestehende vereinfachte Ansatz zur Bewertung der Nachhaltigkeit von Produkten wird derzeit weiterentwickelt, um eine bessere wissenschaftliche Grundlage zu schaffen)
- Nur Lebensmittelprodukte abgedeckt

### WikiRate

[WikiRate](https://wikirate.org/) ist ein offenes und kollaboratives Tool, mit dem Auswirkungen von Unternehmen auf Umwelt und Gesellschaft ("Corporate Social Responsibility", CSR) sichtbar gemacht werden sollen. Das Ziel von WikiRate ist es, Unternehmen dabei zu unterstützen, sich mit Umwelt-, Sozial- und Governance-Anliegen zu befassen, durch Crowd-basiertes Sammeln von Informationen, umfassende Datenstrukturierung sowie durch die Entwicklung standardisierter Metriken, mit denen die Leistung von Unternehmen bewertet werden kann. Die Entwicklung von WikiRate wird von der Europäischen Kommission unterstützt.

#### Vorteile:

- Größte öffentlich zugängliche und editierbare Datenbank für Unternehmensinformationen in Bezug auf die Ziele der Nachhaltigkeitsentwicklung, Lieferketten und bestehende gesetzliche Rahmenbedingungen
- Daten zu >30.000 Unternehmen. Hat viele Umwelt- und Sozialkennzahlen, die von Usern beigetragen wurden.

#### Nachteile:

- Keine Produktdaten
- Daten werden nicht in Unternehmensleistungswerten zusammengefasst

### Kompass Nachhaltigkeit

Die Plattform ["Kompass Nachhaltigkeit"](https://www.kompass-nachhaltigkeit.de) bietet vielfältige Informationen zur nachhaltigen öffentlichen Beschaffung. Zu den auf der Plattform enthaltenen Informationen gehören Nachhaltigkeitsstandards und -zertifizierungssysteme, gekennzeichnete Produkte, Gesetze und gesetzliche Rahmenbedingungen auf Bundes- und Länderebene sowie Informationen zu bewährten Verfahren, Richtlinien und Verordnungen. Der Kompass Nachhaltigkeit ist ein Kooperationsprojekt von GIZ (Deutsche Gesellschaft für internationale Zusammenarbeit) und Engagement Global. Seine Entwicklung wird vom Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung unterstützt.

#### Vorteile:

- Detaillierte Informationen zu Gütezeichen, einschließlich einer Vielzahl von Nachhaltigkeitskriterien
- Viele Produktgruppen werden abgedeckt
- Interaktive Karte mit regionalen und lokalen Initiativen
- Umfassende Datensammlung zur Förderung nachhaltiger Beschaffungsprozesse

#### Nachteile:

- Gütezeichen auf der Plattform decken nicht das gesamte Spektrum nachhaltiger Produktion ab (z. B. keine Lebensmittelgütezeichen, keine Klimakriterien)
- Hauptsächlich informativ mit eingeschränkter Benutzerinteraktivität
- Plattform noch in der Entwicklung

### Fazit

Obwohl viele der identifizierten Initiativen einige der Hauptmerkmale von Viridian aufweisen – wie kollektive Intelligenz und Bewertung der Nachhaltigkeit von Produkten und dezentrales Datenbankmanagement – war keine dieser Initiativen bisher in der Lage, diese Merkmale in einem einzigen Produkt zu kombinieren. Viridian kann so eine wichtige Lücke in der Landschaft einer nachhaltigen Wirtschaft schließen, indem es eine unabhängige, interaktive und zuverlässige Plattform für alle bietet, die fundierte Verbraucherentscheidungen basierend auf der Nachhaltigkeitsleistung von Produkten treffen möchten. Viele Daten existierender Plattformen können dabei integriert werden und Viridian ergänzen.




## Wie soll das Netzwerk funktionieren? {#netzwerk-funktion}

Anhand der geplanten Struktur der Datenbank soll hier die technische Funktionalität
des Viridian-Netzwerks erklärt werden. Im Zentrum stehen die **Produkte**, um deren
Bewertungen es geht. Weitere wichtige Elemente sind die **Unternehmen**, von denen
die Produkte hergestellt bzw. angeboten werden. Als dritte Ebene gibt es **Gütezeichen**
oder Siegel, die meist Produkte, seltener auch Unternehmen, zertifizieren. Um diese
drei Elemente sind alle **Informationen** angeordnet, die durch **Bewertungen**
mit dem Produkt/Unternehmen/Gütezeichen verknüpft werden. Die User können alle
diese Elemente selbst erstellen und bearbeiten und können sich entweder vorhandenen
Bewertungen anschließen oder eigene erstellen. Über einen Peer-Review-Prozess
werden ein gewisser Schutz vor Vandalismus (Stichwort Internet-Trolle) und
Qualitätsmanagement gewährleistet.

Der folgende Abschnitt erklärt die Prinzipien im Detail mit Hilfe eines Graphen.

### Datenbankschema als Graph {#graph}

Eine hilfreiche Darstellung des Datenbankschemas ist die in Form eines Graphen:

<a href="/images/technical/database_schema_graph.svg">
  <img src="/images/technical/database_schema_graph.svg" alt="Datenbankschema als Graph", style="height:600px;">
</a>

**Legende:**

- Rote dicke Linie = Erstellung eines Elements
- Blaue dicke Linie = Up-/Downvote auf Bewertung
- Schwarze dicke Linie = sonstiges Up-/Downvote bzw. Entscheidung im Peer-Review

#### Elemente

Die Dreiteilung in **Produkte** (rosa), **Unternehmen** (orange) und **Gütezeichen/Siegel/Labels** (türkis)
spiegelt sich auch in den Daten zur Nachhaltigkeit. Üblicherweise bezieht sich
jede Datenquelle entweder auf Produkte (bspw. Lebenszyklusanalysen (LCA) oder
Informationen zu den Inhaltsstoffen eines Produkts) oder auf Unternehmen (bspw.
Berichte zur Corporate Social Responsibility (CSR) oder Studien von Dritten)
oder auf Gütezeichen. Auch vorhandene Plattformen mit Nachhaltigkeitsdaten (siehe
[Vergleich](#vergleich)) lassen sich meist in eine der drei Kategorien einteilen:
es gibt Produktdatenbanken wie [Questionmark](https://www.thequestionmark.org/) oder
[OpenFoodFacts](https://world.openfoodfacts.org/),
Unternehmensdatenbanken wie [WikiRate](https://wikirate.org) oder
[Rank-a-brand]() und Siegeldatenbanken wie
[Kompass Nachhaltigkeit](https://www.kompass-nachhaltigkeit.de) und
[Label online](https://label-online.de/). Deren Daten könnten später
evtl. eingebunden werden (siehe [Timeline](#timeline)).

Um die Produkte, Unternehmen und Gütezeichen herum gruppieren sich **Informationen**
(im Graph verschiedene Farben: gelb, grün, petrol, ocker, ...).
Außerdem gibt es Verbindungen zwischen Unternehmen (die Produkte herstellen) und
ihren Produkten sowie zwischen Gütezeichen und Produkten. Die Bewertung von
Unternehmen und Gütezeichen fließt also in die Bewertung eines Produkts mit ein.

Informationen sind zunächst einmal nur wertfreie Fakten über ein Produkt/Unternehmen/Gütezeichen
und sollten mit einer oder mehreren verifizierbaren **Quellen** versehen sein.
Jede Informationen kann und sollte aber zu einer Bewertung führen. Die **Bewertung**
(im Graphen rot) ist quasi die Einordnung der Information auf einer ethischen Werteskala.
Dafür erstellt ein User (im Graphen blau) eine neue Bewertung und ordnet die
Information nach eigenem Ermessen auf einer Skala ein. Andere User können sich
dieser Bewertung anschließen, indem sie sie positiv markieren (+1, "upvote"). Wenn sie
anderer Meinung sind, können sie sie negativ markieren (-1, "downvote") und eine
alternative eigene Bewertung erstellen.

Außerdem können User **Kommentare** (im Graphen grau) zu Informationen anlegen, in denen sie
z.B. erläutern, warum sie diese Information besonders wichtig oder gar nicht
wichtig finden. Im Kommentar kann auch eine bestimmte Bewertung begründet werden.

#### User bestimmen die Relevanz durch Upvotes und Downvotes

User können nicht nur Bewertungen mit +1/-1 markieren (Upvote und Downvote), sondern auch Informationen.
Die Summe dieser Markierungen ergibt einen **Gradmesser der Relevanz** für die
Gesamtheit der User. Entsprechend dieser Relevanz werden die Informationen
auf der Produktprofilseite standardmäßig sortiert, sodass die für die meisten
User relevanten Informationen ganz oben erscheinen. Bei den Bewertungen hat die
Relevanz eine besondere Bedeutung: Sie entspricht dem **Gewicht**, mit dem diese
Bewertung in die Gesamtbewertung eingeht. Das arithmetische Mittel aller
Bewertungen von alles Usern, jeweils gewichtet mit der Bilanz der +1/-1-Markierungen,
ergibt die Gesamtbewertung des Produkts/Unternehmens/Gütezeichens.

Die Möglichkeit, sich existierenden Bewertungen anschließen zu können, könnte als
eine gewisse Form von **Liquid Democracy** im Sinne eines Antwort-Empfehlungs-Systems
("answer recommendation", siehe [hier](https://uniteddiversity.coop/2013/07/19/liquid-democracy-is-not-delegative-democracy/)
und [hier](http://web.archive.org/web/20160403043216/https://seed.sourceforge.net/ld_k5_article_004.html))
angesehen werden. Jedoch würde eine wirkliche Liquid Democracy bedeuten, dass
man die Antwortempfehlungen (also hier Bewertungen) zu einem bestimmten Thema
(Produktkategorie?) einer bestimmten Person abonniert, was hier nicht vorgesehen ist.

#### Peer-Review

Eine weitere wichtige Komponente des Viridian-Netzwerks ist der **Peer-Review-Prozess (PR)**.
Um Missbrauch und Vandalismus (z.B. durch "Trolle") vorzubeugen, sollen die User
neue Inhalte gegenprüfen. Zum Beispiel könnte gefordert werden, dass neu eingestellte
Produkte/Unternehmen/Gütezeichen oder Informationen zunächst von einer bestimmten
Anzahl User bestätigt werden müssen, um sichtbar zu werden. Im PR sollen die User
prüfen, ob bestimmte Regeln eingehalten wurden. Informationen sollten etwa immer
verifizierbare Quellen aufweisen und ohne nicht veröffentlich werden.
Je nach Anzahl und Aktivität der User könnte man die Anfrage zum PR z.B. fünf zufällig
ausgewählten Usern (zufällig ist wichtig, um Absprachen zu vermeiden) zuschicken,
von denen mindestens drei bestätigen müssen, bis der Inhalt freigeschaltet wird.

Den PR-Prozess bei allen Inhalten zu fordern, etwa auch bei Kommentaren
und Bewertungen, könnte die Plattform zu träge machen und die User mit
PR-Anfragen überlasten. Es könnte aber z.B. bei Kommentaren die
Möglichkeit geben, sie nach der Veröffentlichung **als ungeeignet zu markieren**.
Erst dann wird ein PR angestoßen und der Kommentar wird entfernt, wenn genug
User zustimmen.

Auch mit PR können Inhalte natürlich fehlerhaft sein oder schlichtweg veraltet.
Deshalb sollte es für User die Möglichkeit geben, die **Bearbeitung** oder
**Löschung** von Inhalten beantragen. In einem weiteren PR-Prozess wird dann
darüber entschieden.

Es bleibt abzuwarten, wie reibungslos die Plattform mit den PR-Mechanismen funktoniert.
Bei zu wenig Beteiligung der User oder zu viel Missbrauch müssen die Regeln
angepasst oder verändert werden. Es sollte auch Mechanismen geben, die bei
ausbleibender Antwort eines Users die PR-Anfrage an einen anderen zufällig
ausgewählten User weitergibt. Reagiert ein User mehrfach nicht auf PR-Anfragen,
sollte die Wahrscheinlichkeit, dass er/sie für ein PR ausgewählt wird, sinken.
Auch hier muss ein guter Kompromiss und eine Balance zwischen Resilienz und
Effizienz gefunden werden.

#### Gamification

Jede Aktivität eines Users könnte seine **Reputation** im Netzwerks beeinflussen.
Dadurch könnten User, die eine Information beisteuern oder an einem Peer-Review
teilnehmen, durch Reputationspunkte belohnt werden. Auf der Reputation aufbauend
könnten Gamification-Elemente die User anspornen. Zum Beispiel könnten bei einem
bestimmten Punktestand Medaillen verliehen werden oder Auszeichnungen
für bestimmte Tätigkeiten, z.B. für die erste beigetragene Information oder das
erste Peer-Review.



### Die Bewertungsskala

Für die Nachhaltigkeitsbewertung ist es sinnvoll, verschiedene Dimensionen der
Nachhaltigkeit zu unterscheiden. Eine mögliche Einteilung ist:

- **Umwelt:** beinhaltet Luftverschmutzung, Wasserverschmutzung, Bodenverschmutzung, Abfall, in die Umwelt entlassene schädliche Substanzen (ohne Treibhaushase), ...
- **Klima:** Treibhausgase und andere klimarelevante Handlungen wie veränderte Landnutzung, ...
- **Gesellschaft:** Arbeitsbedingungen, fairer Lohn, Kinderarbeit, Gleichstellung, Umgang mit den Lieferanten, Einfluss auf Gesellschaft z.B. über gemeinnützige Projekte, ...
- **Gesundheit:** gemeint ist Einfluss auf die Gesundheit der Verbraucher*innen, z.B. Gehalt von Zucker und Fett in Lebensmitteln oder toxische Substanzen in Textilien und Spielzeug
- **Tierwohl:** wenn Tiere an der Produktion beteiligt waren, wurden sie mit angemessenem Respekt behandelt? Können sie ein angenehmes, gesundes Leben führen?
- **Ökonomie:** aus Verbraucherperspektive, im Sinne von 'Preis-/Leistungsverhältnis', z.B.: Wie langlebig ist das Produkt? Ist der Preis zu hoch auf Grund des Markenimage?

Eine Nachhaltigkeitsbewertung kann in jeder dieser Dimensionen mit einer
**Zahl auf einer Skala von -100 (besonders schlecht) über 0 (durchschnittlich) bis +100 (besonders gut)**
bewertet werden. Falls gewünscht, können diese Zahlen sehr einfach in Schulnoten
nach dem deutschen System (1 bis 6) oder dem amerikanischen System (A bis F) umgerechnet werden.

Eine Information wird üblicherweise nur einen Teil der Dimensionen betreffen. Die übrigen
Dimensionen werden dann auf NULL gesetzt (oder im JSON-Dokument einfach weggelassen) werden, sodass
sie nicht in die Gesamtbewertung, also das gewichtete arithmetische Mittel aller Bewertungen,
eingehen.

Zwar kann man leicht eine Gesamtbewertung erstellen, die noch alle Dimensionen enthält, indem man
für jede Dimension einzeln über alle Bewertungen mittelt. Eine viel schwierigere und kritischere
Aufgabe ist es, die einzelnen Dimensionen auf eine einzelne Skala zu projizieren, also zu einer
einzigen Zahl zusammenzufassen (Stichwort ["multikriterielle Analyse"](https://de.wikipedia.org/wiki/Multi_Criteria_Analysis)). Hierfür gibt es eigentlich
keine sinnvolle objektive Lösung, bzw. ist diese nur unter extremem Aufwand zu finden.
Jede(r) Einzelne wird andere Präferenzen setzen. Daher ist es denkbar, dass
jeder User ihre/seine Präferenzen selbst festlegt, nach denen dann die verschiedenen
Dimensionen zu einer Zahl zusammengefasst werden. Die Zusammenfassung in einer
einzigen Skala macht die Vergleichbarkeit von Produkten sehr viel leichter und
ist daher wichtig. Jeder User wird dann also auf Basis ihrer/seiner Präferenzen
eine andere zusammengefasste Bewertung angezeigt bekommen und auch andere Vorschläge
für Produkte mit besseren Bewertungen erhalten.




### Datenbankschema in JSON {#json}

Da eine dokumentbasierte Datenbank mit JSON verwendet werden soll, muss das Datenbankschema
in JSON forumliert werden. Der aktuelle Stand (im Moment noch unvollständig) kann unter
https://github.com/viridian-project/database-schema/tree/master/asJSON angesehen werden.

Hier als Beispiel ein JSON-Dokument für ein Produkt:

```js
{
  "data": {
    "id": "61b744a3-7f5d-4500-8c59-959913762ecd",
    "gtin": "7612100055557",
    "createdBy": "user123",
    "createdAt": "2018-12-24 12:11:54 UTC",
    "updatedBy": "user123",
    "updatedAt": "2018-02-10 18:33:39 UTC",
    "producer": "Wander AG",
    "containedProducts": [],
    "labels": [
      {"id": "H2892sKSksksdkwops9", "name": {"de": "UTZ zertifiziert", "en": "UTZ certified"}}
    ],
    "locale": [
      {
        "lang": "de",
        "name": "Ovomaltine crunchy cream — 400 g",
        "price": "4.99",
        "currency": "€",
        "description": "Brotaufstrich mit malzhaltigem Getränkepulver Ovomaltine",
        "quantity": "400 g",
        "ingredients": "33% malzhaltiges Getränkepulver: Ovomaltine (Gerstenmalzextrakt, kondensierte Magermilch, kondensiertes Milchserum, fettarmer Kakao, Zucker, Fruktose, Magnesiumcarbonat, Calciumphosphat, Rapsöl, Vitamine [A, E, B1, B2, Pantothensäure, B6, Folsäure, B12, C, Biotin, Niacin], Kochsalz, Aroma Vanillin), Zucker, Pflanzenöle (Raps- und Palmöl), 2.6% Haselnüsse, Calciumphosphat, fettarmer Kakao, Emulgator Sonnenblumenlecithin, Aroma Vanillin.",
        "packaging": ["Glas", "Plastik"],
        "categories": ["Brotaufstriche", "Frühstück", "Nougatcremes"],
        "image": "products/1/de_1.png",
        "productUrl": "http://www.ovomaltine.de/produkte/ovomaltine-crunchy-cream-1/"
      }
    ]
  },
  "signature": "0x1f62a52c86fe9021b2834cd838392ed0192991a3",
  "score": {"environment": -34,
            "climate": -46,
            "society": -7,
            "health": -78,
            "economy": 21},
  "status": "active"
}
```





## Warum gemeinschaftlich?

Das Viridian-Projekt glaubt an das "Wikipedia-Prinzip", dass Resultate durch
Beteiligung vieler besser und nicht schlechter werden. Es geht also um die
Nutzung [kollektiver Intelligenz](https://de.wikipedia.org/wiki/Kollektive_Intelligenz)
oder eine Demokratisierung von Information.

Natürlich ist der kollaborative Ansatz nicht perfekt und hat mit einigen Problemen
zu kämpfen, z.B. Versuche der Einflussnahme oder mangelnde Qualität. Der Erfolg des
Projekts Wikipedia zeigt aber, dass das Prinzip letztlich funktioniert und sich gute
Qualität am Ende auch bei vollkommen offener gemeinschaftlicher Redaktion durchsetzt.
Auf lange Sicht können Projekte wie Wikipedia sogar kommerzielle, proprietäre Lösungen
übertreffen, weil sie meist agiler sind und mit der Unterstützung der Crowd auf
größere Ressourcen zurückgreifen können. So entsteht ein "Commons", also ein Gemeingut
oder eine Allmende, das alle gemeinsam pflegen und von dem alle profitieren. Ein
ähnlicher Ansatz, in Bezug auf Software statt Information, wird von Open-Source-Communities
verfolgt. Wir unterstützen und glauben an diese Philiosophie.

Daher glauben wir, dass bisherige Nachhaltigkeitsbewertungslösungen (siehe [Vergleich](#vergleich))
nicht ausreichen, weil ihnen dieses wichtige Prinzip fehlt. Entweder werden Informationen
und Bewertungen nur von einer kleinen Gruppe Experten zusammengetragen wie bei Questionmark
oder WeGreen (bereits offline). Andere Plattformen wie WikiRate können zwar gemeinschaftlich
bearbeitet werden, sind aber auf Grund der Komplexität eher nur für Experten zugänglich.

Das Viridian-Projekt verfolgt einen Ansatz, der neben Wikipedia stark von StackOverflow
beeinflusst ist. Je nach Interesse und Wissen können die User entweder sehr tief einsteigen
und detaillierte Informationen eingeben oder sich nur die relevantesten Informationen
ansehen und sie mit Upvotes/Downvotes annehmen oder ablehnen. So kann man auch dann noch
mit der Plattform interagieren, wenn man nur wenig Zeit oder Wissen hat. Dadurch wird
die Plattform für eine breite Zielgruppe zugänglich und erhält eine demokratische
Legitimierung gegenüber einer rein expertenbasierten Plattform.






## Warum dezentral?

Das Viridian-Netzwerk soll dezentral organisiert sein. Das heißt, es soll keinen
zentralen Server geben, auf dem allein die Daten gespeichert sind und der von einer
einzigen Organisation betrieben wird. Stattdessen sollen die Daten auf mehrere
Teilnehmer des Netzwerks (Knoten) verteilt sein.

Wir glauben, dass Dezentralität wichtig ist, bzw. dass
**zu viel Zentralität schlecht ist**. Nach dem belgischen Ökonom
[Bernard Lietaer](https://de.wikipedia.org/wiki/Bernard_Lietaer)
glauben wir, dass zentralisierte Systeme zwar hocheffizient sein können, aber
nicht sehr resilient sind. Daher gilt es, eine Balance zwischen den beiden zu
finden. Unsere heutige Welt wird aber zunehmend von zentralistischen Systemen
dominiert: in der Wirtschaft teilen häufig eine Handvoll Konzerne fast den
gesamten Markt unter sich auf und können ihn dadurch beeinflussen. Oft zum
Leidwesen von Verbrauchern, Arbeitern und Umwelt.

<!--
Die Zentralität der Wirtschaft nimmt durch Lobbyarbeit und Medien auch Einfluss auf die
politische Meinung von Volksvertretern und der Bevölkerung im allgemeinen. Somit
geht das Problem letztlich uns alle an.
-->

<!--
Auch in der Finanzwirtschaft geben wenige große Privatbanken den Ton an. Und nutzen
nicht selten ihre Macht, um Einfluss auf Politik zu nehmen und Regulierungen zum
Wohle der Gesellschaft zu umgehen.
-->

<!--
In vielen Wirtschaftszweigen dominieren wenige Konzerne
den gesamten Markt. Beispielsweise im Bereich Lebensmittel die großen Player
Nestlé, Unilever und Kraft Foods. Ähnlich sind Konzerne wie Bayer-Monsanto und
Syngenta bei der Saatgutproduktion marktbeherrschend. Auch im Einzelhandel nimmt
die Diversität ab. Bsp. dominieren in Deutschland Supermärkte der
Unternehmen EDEKA (u.a. auch Netto), Schwarz-Gruppe (u.a. Kaufland, Lidl) und
REWE Group (u.a. auch Penny), die zusammen im Jahr 2016 bereits einen Marktanteil
von fast 50% (47,5%) auf sich vereinten. Die Top 5 (zusätzlich Aldi und der Metro Group)
nahmen bereits fast 70% des Marktes ein (68,1%).
Quelle: https://www.businessinsider.de/diese-30-supermaerkte-beherrschen-den-deutschen-markt-2017-3 (Zugriff 2019-03-27)
mit Daten aus der Studie https://www.lebensmittelzeitung.net/handel/Ranking-Top-30-Lebensmittelhaendler-Deutschland-2017-128262?crefresh=1
Diese Marktkonzentration nimmt in vielen Branchen stetig zu und ist ein gefährlicher
Trend. Siehe dazu z.B. die Artikel https://www.wiwo.de/politik/deutschland/anders-gesagt-das-buendnis-der-maechtigen-/24109190.html und
https://www.wiwo.de/politik/europa/tauchsieder-tipping-point-and-no-return/24109296.html.
-->

Zwar löst ein dezentrales Viridian-Netzwerk diese Probleme nicht wirklich (obwohl
die negative Bewertung großer Konzerne indirekt Einfluss nehmen könnte). Jedoch
wird es bei einem System, dessen Bewertungen irgendwann über Wohl und Wehe
von Betrieben entscheiden könnten, wichtig sein, **Missbrauch** zu verhindern, der
**durch Zentralität stark vereinfacht wird**.

Dezentralisierung kann auf mehreren Ebenen, bzw. in mehreren Bereichen stattfinden.
Im Artikel ["The Meaning of Decentralization"](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274)
unterscheidet Vitalik Buterin, der Gründer von Ethereum, v.a. zwischen physischer
Dzentralisierung (wie viele physisch getrennte Rechner betreiben das Netz?) und
politischer Dezentralisierung (wie viele Personen oder Organisationen kontrollieren
diese Rechner?). Buterin nennt weiter drei wichtige Vorteile von Dezentralisierung,
von denen die ersten beiden eher durch die physische, der dritte durch die politische
Dezentralisierung zustande kommt:

1. **Fehlertoleranz, bzw. Ausfallsicherheit**: Je mehr Knoten am Netzwerk teilnehmen,
  umso unwahrscheinlicher wird es, dass so viele Knoten gleichzeitig ausfallen, dass
  davon das Netz zum Erliegen kommt. Im Gegensatz dazu kann es in zentralisierten
  Systemen einen "Single Point of Failre" geben. Selbst wenn die Last auf mehr
  als einen Rechner verteilt wird: Das System bricht zusammen, wenn alle Server
  in unmittelbarer Nähe stehen und es einen Brand, einen Stromausfall o.ä. gibt.
2. **Angriffsresistenz**: Je verteilter das System ist, umso schwieriger wird es,
  auf das Netz von außen Einfluss zu nehmen (z.B. es zu "hacken"), da man den
  Angriff auf viele oder alle Knoten gleichzeitig ausführen müsste.
3. **"Klüngelresistenz"**: (engl. "collusion resistance", "collusion" =
  "geheime Absprache") Ein zentralisiertes System führt häufig zu einem Machtmonopol,
  das von den Inhabern dieser Macht zu ihrem eigenen Vorteil ausgenutzt werden kann.
  Ist die Macht jedoch auf viele Knoten verteilt, macht es das den Netzwerkbetreiber*innen
  schwerer, Kartelle zum Schaden der Allgemeinheit zu bilden.

Das Netzwerk sollte also von mehreren Akteuren betrieben werden, die durchaus
unterschiedliche Interessen haben können und sich gegenseitig kontrollieren,
bzw. gemeinsam das Netz sicher halten. Die Teilnahme am Netzwerk sollte prinzipiell
**jedem Interesierten offenstehen**, um Cliquenbildung und Klüngel vorzubeugen. Es ist
jedoch wichtig, dass nicht mehrere Knoten von derselben Person oder Institution
kontrolliert werden, um Einflussnahme zu verhindern. Daher sollte im Gegensatz zu
dezentralisierten Netzwerken wie Bitcoin [**auf Anonymität verzichtet werden**](#identitaet),
damit das Netz nicht über [Unmengen von (teurer und ökologisch katastrophaler) Rechenleistung](#blockchain-energie)
abgesichert werden muss. Bitcoin ist ja nur dadurch manipulationssicher, dass kein
Individuum und keine Clique so viel Rechenleistung bezahlen kann, wie alle anderen
(ehrlichen) Teilnehmer zusammen.



## Warum Blockchain?

### Einfach nur eine verteilte Datenbank?

Wir sind primär an einem dezentralen System interessiert, eine Blockchain muss
es da nicht unbedingt sein. Wir haben uns daher verschiedene verteilte Datenbanken
angesehen wie Apache Cassandra oder Elasticsearch. Am besten gefallen hat uns
CouchDB, weil sie einerseits gut dokumentiert und andererseits sehr skalierbar ist,
vom mobilen Endgerät bis hin zum Rechenzentrum. Außerdem kann CouchDB sogar mit
temprären Offline-Zeiten umgehen und synchronisiert Änderungen einfach, sobald
der Knoten wieder online ist. Das hat uns gefallen, denn die anderen Lösungen
scheinen primär auf High-End-Rechner in Rechenzentren ausgelegt zu sein, die
immer online sind.

### Konsens und Fehlertoleranz

Trotzdem stellt sich auch bei CouchDB die Frage: Wie genau synchronisiert man
die Knoten und stellt sicher, dass nicht ein bösartiger Teilnehmer einfach
Daten ohne Erlaubnis verändert und diese Änderung ins Netz einspeist? Wenn man
etwas recherchiert, landet man ziemlich schnell bei
[Konsens-Algorithmen](https://en.wikipedia.org/wiki/Consensus_(computer_science)), die
sicherstellen, dass die verschiedenen Versionen der Datenbank konsistent sind
und sich die (hoffentlich ehrliche) Mehrheit durchsetzt. Ein sicherer Konsens-
Algorithmus sollte eine sogenannte "byzantinische Fehlertoleranz"
(BFT, engl. [Byzantine Fault Tolerance](https://en.wikipedia.org/wiki/Byzantine_fault))
aufweisen. Bei dieser Art von Fehlertoleranz können manche Knoten (bis zu 1/3)
unzuverlässig bzw. unehrlich sein (sowohl ungewollt durch technische Fehler
als auch gewollt), ohne dass dies Auswirkungen für das gesamte Netz hat.

BFT ist [eine Kernkompetenz](https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419)
[von Blockchain-Netzwerken](https://medium.com/loom-network/understanding-blockchain-fundamentals-part-2-proof-of-work-proof-of-stake-b6ae907c7edb),
die darauf ausgelegt sind, in einem fehlerbehafteten Umfeld ausgeführt zu werden.
BFT wird in einer Blockchain durch Proof-of-Work o.ä. Prinzipien hergestellt.
Wenn man also eine verteilte Datenbank mit BFT-Replikation sucht, landet man
fast unweigerlich bei Blockchains.

Außerdem hat eine Blockchain den zusätzlichen Vorteil gegenüber gewöhnlichen
Datenbanktransaktionen, dass die Transaktionen ja in Blöcken zusammengefasst
aneinander gekettet werden (über den Hash-Wert des Vorgängerblocks miteinander
verknüpft). Die Verkettung führt dazu, dass Modifikationen in der Blockchain
automatisch Modifikationen in allen späteren Blöcken notwendig machen. Es ist
also aufwendig, die Chronik der Transaktionen im Nachhinein zu verändern.
Bei Bitcoin wäre die Modifikation der Chronik durch den hohen Rechenaufwand
von Proof-of-Work quasi unmöglich: Schon einen einzelnen modifizierten Block
schneller abzuschließen als die Konkurrenz im Netzwerk ist extrem schwierig,
geschweige denn auch noch in derselben Zeit alle nachfolgenden Blöcke.
Ohne rechenintensives Proof-of-Work wäre es zwar nicht sehr aufwendig für einen
Angreifer, trotzdem würde jede Modifikation sich bis zum aktuellesten Block
auswirken und wäre sichtbarer als ohne Blockchain.

<!--
### Decentralized applications

Im Zusammenhang mit Blockchains spricht man auch häufig von "Decentralized
Applications" (Dapps), welche auf Blockchains aufbauen und manipulationssichere
IT-Dienstleistungen anbieten, z.B. ein Computerspiel oder ein soziales Netzwerk.
Das ist genau, was das Viridian-Projekt tun will: eine Dapp anbieten!

Für Dapps gibt es bereits mehrere Blockchain-Frameworks, so dass man nicht bei Null
anfangen und seine eigene Blockchain programmieren muss. Allen voran gibt es das
berühmte Ethereum-Netzwerk (mit der Kryptowährung Ether) mit seinem großen Ökosystem,
in dem sich auch Tools finden, um Dapps zu entwickeln. Ein Problem daran ist, dass
man das Ethereum-Netzwerk mit seinem Beschränkungen nutzen muss. Da es sich bei
Ethereum um eine Proof-of-Work-Blockchain handelt (siehe [hier](#blockchain-energie)),
sind Transaktionen mit hohem Energieaufwand und daher hohen Kosten verbunden. Damit
ein Vorgang in einer Dapp ausgeführt wird, muss man erst mal Rechenzeit auf der
Blockchain (genannt "Gas") kaufen. Die Miner, die die Transaktion validieren und
in die Blockchain aufnehmen, brauchen einen finanziellen Anreiz, ihre Rechenleistung
dafür aufzuwenden. Da eine Proof-of-Work-Blockchain extrem ineffizient ist und die
meiste Rechenzeit keinen praktischen Nutzen hat, ist auch die Transaktionsrate, die
verarbeitet werden kann, sehr niedrig. Sie liegt bei Netzwerken wie Bitcoin oder
Ethereum bei unter 100 Transaktionen pro Sekunde. Wenn viele Spiele oder soziale
Netzwerke gleichzeitig ausgeführt werden sollen, wird das also schnell zu einem
Flaschenhals.

Um dieses Problem zu umgehen, wurden neue Frameworks entwickelt, z.B. EOS, die nicht
mit Proof-of-Work arbeiten, sondern mit Delegated-Proof-of-Stake (DPoS). Dabei wird die
"Arbeit" des Proof-of-Work, wo der Knoten einen Block abschließen darf, der als erster
ein schwieriges Rätsel löst, ersetzt durch eine zufällige Auswahl des nächsten Knotens,
die jedoch davon abhängt, wie viele Tokens der Kryptowährung ein Knoten hält. Als
Alternative zu EOS gibt es u.a. Loom, das DPoS-Blockchains aufbauend auf dem
Ethereum-Netzwerk anbietet. Kritische Transaktionen können dann auf das sicherere
Proof-of-Work von Ethereum zurückgreifen, während die Mehrheit der Transaktionen das
viel performantere DPoS verwenden kann.
-->

### Blockchain-Frameworks

Wir haben uns verschiedene Optionen von Blockchain-Frameworks angesehen. Was wir auf
keinen Fall wollen, ist die Nutzung einer Proof-of-Work-Blockchain wie Bitcoin oder
Ethereum, da diese enorm viel Energie verbrauchen (siehe [hier](#blockchain-energie)).
Eine Option sind Delegated-Proof-of-Stake-Blockchains wie EOS oder Loom, die uns
aber recht kompliziert erschienen und außerdem (wie Proof-of-Work auch)
undemokratische Tendenzen haben, weil Knoten, die mehr besitzen (höherer Stake),
mehr Macht bekommen.

Einen sehr guten Ansatz verfolgt [FairCoin](https://fair-coin.org), wo Proof-of-Work
durch Proof-of-Cooperation ersetzt wird. Alle Knoten sind gleichberechtigt und
sichern gemeinsam demokratisch die Blockchain. Es handelt sich bei FairCoin aber
nicht um ein beliebig erweiterbares Framework für Anwendungen auf der Blockchain,
sondern nur um einen Fork von Bitcoin. FairCoin ist daher eher auf Finanztransaktionen
ausgelegt und es würde sehr viel Aufwand bedeuten, damit ein soziales Netzwerk
wie Viridian zu betreiben.

### Exkurs: IOTA und der Tangle

Eine Interessante Alternative zu Blockchains ist IOTA, das statt mit einer Blockchain
mit einem gerichteten azyklischen Graphen (engl. "Directed Acyclic Graph", DAG), auch
genannt "Tangle", arbeitet. In gewisser Hinsicht handelt es sich um eine
Verallgemeinerung der Blockchain, weil jede Transaktion einzeln validiert und mit
anderen Transaktionen verkettet wird, anstatt viele Transaktionen zusammen blockweise.
In einer Blockchain gibt es nur einen gültigen Strang von Blöcken mit Transaktionen,
im Tangle dagegen gibt es viele parallel verlaufende Stränge, die ineinander
verschlungen ("entangled") sein können. Das interessante am Tangle ist die Philosophie
dahinter: Während bei einer Blockchain die Knotenbetreiber, also die Miner, quasi
eine kleine Elite sind und die Validierung von Transaktionen einer größeren Gruppe
von Usern als (fast schon zentralisierte!) Dienstleistung anbietet, gilt beim Tangle
das Do-it-yourself-Prinzip: Jeder User, der/die eine Transaktion abschickt, muss
selbst zwei andere Transaktionen validieren. Das Mining wird sozusagen sozialisiert
und es herrscht eine Art Reziprozität: wenn du eine Leistung willst, musst du erst mal
selbst etwas leisten (anstatt wie beim Mining nur eine Gebühr zu bezahlen).

Wir haben uns letztlich doch gegen IOTA entschieden, v.a. weil der Tangle nicht
darauf ausgelegt ist, große Datenmengen zu speichern und schnell abzurufen. Man müsste
u.U. schauen, ob man den Tangle nur als Kommunikationsmedium benutzen kann, um eine
Zustandsdatenbank, etwa eine CouchDB, fehlertolerant zu synchronisieren. Das wäre
aber vermutlich mit großem Aufwand verbunden.

### Hyperledger Fabric

Wofür wir uns aktuell entschieden haben, ist das Blockchain-Framework
"Hyperledger Fabric" (HLF), das durch die Linux Foundation betreut wird.
Es ist ein sehr modulares und anpassbares Framework für sogenannte
"Permissioned Blockchains" oder "Consortium Blockchains", im Gegensatz
zu "Permissionless Blockchains" wie Bitcoin oder Ethereum. Das bedeutet, dass
nicht jeder an dem Netzwerk als Knoten teilnhemen kann, sondern erst eine
Erlaubnis braucht, die in der Regel mit einer Prüfung der Identität verbunden
ist.

Dadurch kann ganz auf Proof-of-Work und Proof-of-Stake verzichtet werden, es
gibt aber trotzdem Konsens-Algorithmen für die Fehlertoleranz. Aktuell unterstützt
HLF leider noch keine BFT von Haus aus, sondern nur CFT ("Crash Fault Tolerance").
Das heißt, das Netzwerk ist vor dem Ausfall von Knoten geschützt, nicht aber vor
der bewussten bösartigen Manipulation. Allerdings ist das auf Grund der Architektur
von Hyperledger Fabric ein geringeres Problem als bei anderen Blockchains, da
nicht ein Knoten alle Aufgaben übernimmt, sondern
die Prozesse der Prüfung ("Endorsement"), des Sortierens ("Ordering") und der
nachträglichen Validierung ("Validation") von Transaktionen auf verschiedene Knoten verteilt sind
(siehe dazu auch das [Fabric-Paper](https://arxiv.org/pdf/1801.10228.pdf)). Der
Ordering-Service, der die Transaktionen nur in die Blockchain einfügt, unterstützt
kein BFT, allerdings nimmt er die Prüfung von Transaktionen auch gar nicht vor.
Ein Angreifer müsste also gleich mehrere Knoten kontrollieren, um sowohl die Prüfung,
also auch die Sortierung und Validierung zu manipulieren.

Implementierungen von BFT in HLF sind derzeit in Arbeit (siehe [hier](https://jira.hyperledger.org/browse/FAB-6135)
und [hier](https://jira.hyperledger.org/browse/FAB-378)). Es gibt
bereits ein von Dritten erstelltes [BFT-Plugin](https://github.com/bft-smart/fabric-orderingservice)
(von der Universität von Lissabon), das man bei Bedarf nutzen könnte. Die Dokumentation
von HLF [sagt zu dem Thema](https://hyperledger-fabric.readthedocs.io/en/release-1.4/whatis.html?highlight=byzantine#permissioned-vs-permissionless-blockchains),
dass BFT ja in einem System, das zugangsbeschränkt ("permissioned") ist und in
dem ein gewisses Vertrauen vorhanden ist, prinzipiell ein geringeres Problem als
in einem komplett offenen. Sollte Fehlverhalten auftreten, so ist auf der Blockchain
genau dokumentiert, wer dafür verantwortlich war und kann vom Netzwerk ausgeschlossen
werden. Der angerichtete Schaden könnte im Nachhinein behoben werden. Bei einem
wachsenden Netzwerk, in dem sich die Knotenbetreiber immer weniger untereinander
kennen, könnte das aber schnell lästig und gefährlich werden, falls Manipulationen
lange unentdeckt bleiben.

Es bleibt zu prüfen, mit welcher Konfiguration HLF in Viridan optimal eingesetzt
werden kann. Dies betrifft nicht nur die Konfiguration des Konsens-Algorithmus,
also des sog. Ordering Service, sondern auch der anderen Komponenten von HLF,
insebsondere die Peers, der Membership Service Provider und die Certificate
Authority. Da HLF so modular und generisch ist, gibt es viele Stellschrauben
und Entscheidungen, die getroffen werden müssen. Dies ist Teil von Phase 3 des
Viridian-Projekts (siehe [Timeline](#timeline)).

Eine Alternative zu Hyperledger Fabric, auf die man eventuell wechseln könnte, ist
[BigchainDB](https://www.bigchaindb.com/), die auf [Tendermint](https://tendermint.com)
aufbaut und MongoDB (anstatt CouchDB) verwendet. BigchainDB bzw. Tendermint
unterstützt BFT. Wenn es zudem einfacher zu konfigurieren und warten ist als
Hyperledger Fabric, könnte es eine gute Alternative sein.

<!-- Siehe auch: -->
<!-- https://www.skcript.com/svr/consensus-hyperledger-fabric/ -->
<!-- http://vukolic.com/iNetSec_2015.pdf -->
<!-- https://www.usenix.org/legacy/events/hotdep08/tech/full_papers/preguica/preguica.pdf -->
<!-- https://github.com/davebryson/bftdb -->

 
### Verbraucht die Blockchain nicht unglaublich viel Energie? {#blockchain-energie}

Es stimmt, dass die Netzwerke von Permissionless Proof-of-Work-Blockchains enorme
Energiemengen verschlingen. Dies wird für Bitcoin und Ethereum sehr anschaulich
dargestellt auf https://digiconomist.net/bitcoin-energy-consumption: Bsp. ca.
50 - 70 TWh/a, das ist etwa so viel wie der Stromverbrauch mancher europäischer
Länder.

Allerdings ist die Blockchain selbst nicht für den hohen Energieverbrauch verantwortlich.
Die Blockchain ist nur eine Aneinanderreihung von Blöcken, die jeweils Daten
enthalten (meist Transaktionen, bei Bitcoin etwa Überweisungen von Bitcoins).
Jeder Block besteht aus den Daten und einem [Hashwert](https://en.wikipedia.org/wiki/Hash_function)
der Daten. Der Hashwert ist im Grunde einfach eine große Zahl, die immer gleich
groß ist, egal wie groß die Datenmenge ist. Sie ist wie eine Art Fingerabdruck.
Ändert sich auch nur eine Kleinigkeit in den Daten, ergibt sich ein vollkommen
anderer Hashwert. Die Blockchain wird dadurch zur "Kette", dass jeweils der
Hashwert des vorherigen Blocks zu den Daten des neuen Blocks hinzugefügt wird.
Dadurch hat auch dieser Hashwert Einfluss auf den neuen Hashwert. Ändert man die
Daten in einem Block, verändert das ja seinen Hashwert. Weil der Hashwert auch
Teil des nächsten Blocks ist, wird auch sein Hashwert verändert und so weiter.
Dadurch wird die Blockchain relativ stabil: Daten lassen sich nachträglich nicht
ändern, ohne alle nachfolgenden Blöcke mit zu ändern.

#### Wettrüsten der Rechenpower: Proof-of-Work

Woher kommt jetzt der hohe Stromverbrauch? Von der Erstellung der Blockchain
selbst eigentlich nicht: Um neue Blöcke zu erstellen, muss man einen neuen
Hashwert berechnen. Das geht sehr schnell und verbraucht so gut wie keinen Strom.
Schon als Bitcoin im Jahr 2009 geschaffen wurde, konnten mit Standard-CPUs
[1 bis 25 Millionen Hashwerte pro Sekunde](https://www.heise.de/select/ct/2019/02/1546924642860309)
berechnet werden. Das bedeutet aber auch, dass es ziemlich leicht ist, selbst
eine Blockchain mit Millionen von Blöcken nach Belieben zu modifizieren und alle
Hashes neu zu berechnen.

Daher wird bei Bitcoin eine zusätzliche Hürde eingebaut: Es werden nur Blöcke
akzeptiert, deren Daten eine Zufallszahl enthalten (die sog. Nonce), durch die der
Hashwert kleiner als ein bestimmter Schwellwert wird. Was die Bitcoin-Miner tun,
ist permanent Nonces zu erzeugen und den Hashwert zu berechnen. So lange, bis der
Hash durch Zufall unter der Schwelle liegt. Wer es als erstes schafft, hat Glück
gehabt und darf den Block abschließen. Als Belohnung erhält der Miner eine kleine
Gebühr. Das Verfahren nennt sich Proof-of-Work, weil man für das Privileg des
Block-Abschlusses beweisen muss, dass man Arbeit geleistet hat.

Das Blockchain-Netzwerk kontrolliert, wer das Recht hat, Blöcke abzuschließen.
Denn dazu gehört zum einen die Prüfung, ob Transaktionen valide sind, ob z.B.
kein Geld überwiesen wird, das bereits ausgegeben wurde (sog. "Double Spend").
Zum anderen die Entscheidung darüber, welche Transaktionen auf der Blockchain
landen, und damit gültig werden, und welche nicht.

Bitcoin wird also dadurch abgesichert, dass man, um das Netzwerk zu kontrollieren,
mehr Rechenleistung aufbringen müsste als alle anderen Netzwerkteilnehmer zusammen.
Denn je mehr Rechenleistung, umso öfter darf man einen Block abschließen. Das Problem
an der Sache ist, dass man auch öfter belohnt wird, wenn man mehr Rechenleistung
besitzt. Das führt zu einem Wettrüsten der Rechenleistung und treibt den
Stromverbrauch extrem in die Höhe. Man könnte denken, je höher die Rechenleistung
ist, umso effizienter arbeitet das Netzwerk, weil Blöcke nun schneller abgeschlossen
werden können. Das ist aber nicht der Fall. Der Schwellwert, unter dem der Hashwert
liegen muss (die sog. "Difficulty") wird regelmäßig der aktuellen Rechenleistung
des Netzwerks angepasst. Je mehr Rechenpower vorhanden ist, umso schwerer wird
das Rätsel, so dass es immer etwa gleich lang dauert (ca. 10 Minuten), bis ein
Block abgeschlossen ist.

Bitcoin ist also extrem ineffizient. Millionen Chips berechnen parallel unnützes
Zeug, nur damit am Ende einer von ihnen den Block validieren und abschließen
darf. Eine Möglichkeit der Effizienzerhöhung wäre, dass sich die Knoten die Arbeit
aufteilen und mehrere Blöcke parallel bearbeitet werden. Das ist aber mit der
Struktur der Blockchain schwer zu vereinbaren. Eine andere Möglichkeit besteht
darin, das rechenintensive Auswahlverfahren des blockabschließenden Knotens durch
etwas anderes zu ersetzen. Beide Ansätze werden in Hyperledger Fabric umgesetzt.

#### Eine mögliche Lösung

Die naheliegendste Alternative zu Proof-of-Work ist ein einfaches Round-Robin-Verfahren
des Block-Abschlusses: Alle Knoten des dezentralen Netzwerks sind nacheinander
an der Reihe. Das Privileg des Block-Abschlusses wird einfach gleichmäßig auf
alle verteilt. Bei Permissionless Blockchains wir Bitcoin ist das keine gute
Option: anstelle von hoher Rechenpower wäre nun die Maxime eine hohe Anzahl
teilnehmender Knoten. Wer die meisten Knoten kontrolliert, kontrolliert das Netz.
Das würde den lediglich dazu führen, dass anstatt viel Strom viel Elektronik
benötigt wird (jedoch würde es den Ressourcenverbrauch vermutlich schon senken,
weil man existierende Elektronik verwenden könnte, die nebenbei weiterhin
andere Tätigkeiten ausführen kann). Ein Problem, das auch schon bei Proof-of-Work
vorhanden ist, bleibt bestehen: Wer viel besitzt, bekommt viel Macht (und Belohnung).
Genauso ist es auch bei der von Ethereum und anderen Kryptowährung bevorzugten
Lösung Proof-of-Stake: wer viel (Kryptowährung) besitzt, bekommt viel Macht über
das Netzwerk. Das soll die Hürde für Missbrauch hochsetzen, hat aber nach wie vor
Tendenzen zu einer Oligarchie.

Ein sinnvoller und einfacher demokratischer Ansatz wäre: Ein Mensch, ein Stimmrecht.
Man könnte das Round-Robin-Verfahren einsetzen, zusammen mit der Beschränkung,
dass jeder real existierende Mensch nur genau einen Knoten betreiben darf. Das
entspräche in etwa dem Unterschied zwischen Aktiengesellschaften und Genossenschaften:
in einer Genossenschaft hat jeder Anteilseigner genau eine Stimme, egal wie viel
er/sie besitzt. In einer Aktiengesellschaft dagegen wächst das Stimmrecht mit den
Anteilen (entspricht etwa Proof-of-Stake).

Der einzige Nachteil wäre die Aufgabe der Anonymität der Knotenbetreiber. Und das
ist auch der Grund, warum die Anhänger von Bitcoin oder Ethereum diesen Ansatz
niemals verfolgen werden. Es gibt jedoch die Kryptowährung [FairCoin](https://fair-coin.org),
die genau diesem Ansatz folgt.

Auch eine Permissioned Blockchain wie Hyperledger Fabric (siehe [hier](#warum-blockchain)),
die wir im Viridian-Projekt verwenden wollen, geht diesen sinnvollen Kompromiss ein.
Der Verlust an Anonmyität, der nicht unbedingt mit der Aufdeckung der kompletten
Identität verbunden sein muss (siehe [hier](#identitaet)), ist ein kleiner Preis
gegenüber der enormen Einsparung von Ressourcen.

Dass Hyperledger Fabric viel effizienter arbeitet als Bitcoin und einen viel
geringeren Ressourcenbedarf hat, zeigt das Paper
["Hyperledger Fabric: A Distributed Operating System for Permissioned Blockchains"](https://arxiv.org/abs/1801.10228):
Auf Seite 12 (Figure 7) sieht man die Transaktionsrate pro Sekunde als Funktion
der CPU-Anzahl. Mit 4 CPUs werden ca. 1300 - 1500 Transaktionen pro Sekunde (tps) erreicht.
Angenommen jede CPU hat bei Maximalauslastung einen (großzügig geschätzten) Vebrauch von
[einigen 100 W](https://www.intel.com/content/www/us/en/products/processors/xeon/e7-processors/e7-8855-v4.html),
ergibt das einen Vebrauch von rund 1000 W für 1000 tps, bzw. 1 W/tps (oder 1 J/Transaktion).
Dies steht einer Bitcoin-Transaktionsrate von
[bis zu ca. 10 tps](https://en.bitcoin.it/wiki/Maximum_transaction_rate)
(siehe auch [hier](https://www.blockchain.com/charts/transactions-per-second))
bei einem Stromverbrauch von [50 - 70 TWh/a](https://digiconomist.net/bitcoin-energy-consumption),
also ca. 6 - 8 GW, gegenüber. Bitcoin hat also einen Energiebedarf von etwa 600 - 800 MW/tps
oder 600 - 800 MJ/Transaktion. Das entspricht also dem 600 bis 800 Millionenfachen
Verbrauch des Hyperledger-Benchmarks.

Auch wenn man aus Resilienzgründen vermutlich mehr als 4 Knoten im Netzwerk haben
möchte, was den Verbrauch leicht erhöht, zeigen diese Daten, dass die Knoten erst
bei deutlich mehr als 100 Transaktionen pro Sekunde ausgelastet wären und bei
kleineren Raten wohl die meiste Zeit nur Ruhelast hätten. Wenn also die Zahl der Knoten
und damit die Ruhelast nicht ins Unermessliche steigt, sollte der Energiebedarf
in sehr vernünfitgem Rahmen bleiben und sich durch die Verwendung einer Blockchain
nicht wesentlich erhöhen. Allerdings soll hier nicht unerwähnt bleiben, dass
Hyperledger Fabric standardmäßig kein BFT verwendet und durch die Verwendung von
BFT die Transaktionsrate etwas sinken und der Ressourcenbedarf etwas steigen könnte.





## Warum müsst ihr die Identität der Netzwerkteilnehmer kennen? {#identitaet}

Im Grunde brauchen wir die Identität unserer User und sogar Knotenbetreiber*innen nicht
zu kennen. Es muss aber sichergestellt sein, dass sich eine real existierende Person
nur einmal (oder höchstens ein paar mal) im Netzwerk registrieren kann, um
Beeinflussung zu verhindern. Wir wollen keine Bot-Armeen, die die öffentliche Meinung
verzerren oder gar bestimmen (siehe etwa
[1](https://www.nytimes.com/2016/11/18/technology/automated-pro-trump-bots-overwhelmed-pro-clinton-messages-researchers-say.html),
[2](https://comprop.oii.ox.ac.uk/)).
<!-- [3](https://www.wired.com/2016/05/twitterbots-2/)). -->

Es handelt sich um einen weiteren Kompromiss, den man eingeht: Man bewegt sich weg
von dem komplett anonymen, vertrauenslosen, trotzdem durch Mining abgesicherten
System von Bitcoin/Ethereum und geht ein Stück in Richtung herkömmlicher
zentralisierter Systeme. Beispielsweise wäre es denkbar, dass man sich der
zentralen staatlichen Instanz bedient und die Identität der User über den
Personalausweis oder Reisepass prüft. Der Preis ist ein bisschen Verlust von
Dezentralität/Autonomie, jedoch überwiegt der gewonnene Schutz vor Manipulation
(und bei den Knotenbetreiber*innen der [Verzicht auf energiehungriges Mining](#blockchain-energie))
den Preis aus unserer Sicht bei weitem.

Wir interessieren uns gar nicht für identifizierende Daten der User, noch nicht einmal
deren Namen müssen wir kennen. Es würde vollkommen reichen, wenn wir ein eindeutiges
Merkmal, bzw. nur einen Hash dieses Merkmals, abspeichern, um sicherzugehen, dass
diese Person sich nicht mehr als einmal registrieren kann.

Mögliche Merkmale, die verwendet werden könnten:

- Die Ausweis- oder Reisepassnummer. Praktisch wäre eine automatisierte und
  möglichst fälschungssichere Einlesefähigkeit der Nummer, z.B. mittels Bilderkennung
  von einem Foto des Ausweises. Es sollte möglichst kein Kartenlesegerät benötigt
  werden, das fast kein Bürger besitzt.

- Automatische Gesichtserkennung. Biometrische Daten wie der Abstand von Augen,
  Mundwinkeln etc. können ausreichen, um ein Gesicht eindeutig zu identifizieren.
  Da nur der Hash dieser Daten gespeichert werden muss, gibt es keine Möglichkeit
  des Missbrauchs dieser Daten. Allerdings muss sichergestellt sein, dass die User
  wirklich ihr echtes Gesicht präsentieren und nicht etwa ein zufälliges Foto aus
  dem Internet oder ein von einer KI generiertes. Daher wäre ein Ausweisfoto, das
  man eher nicht online findet, vorzuziehen, vorausgesetzt, es lässt sich nur mit
  hohem Aufwand zufallsgenerieren.

- Die Mobiltelefonnummer. Ein Bestätigungscode wird per SMS an diese Nummer gesendet,
  um zu beweisen, dass man über die Nummer verfügt. Zwar kann man mehr als eine
  SIM-Karte besitzen, dies ist aber i.d.R. mit Kosten verbunden und es ist
  unwahrscheinlich, dass eine einzelne Person über mehr als ein paar Telefonnummern
  verfügt. Leider ist auch der SMS-Versand mit Kosten für die Plattform verbunden.

Die E-Mail-Adresse wäre eine kostenfreie Alternative zur Telefonnummer. Es ist aber
ohne Aufwand möglich, sich hunderte oder tausende Fake-E-Mail-Adressen anzulegen,
sodass E-Mail keine Option ist.

**Schlussbemerkung:** Das System muss und kann natürlich nicht zu 100% sicher sein.
Es muss aber ein ausgewogenes Maß an Sicherheit geben, sodass Missbrauch zwar nicht
unmöglich ist (denn das kann kein System garantieren), aber aufwendig genug, so
dass er nur selten stattfindet.
