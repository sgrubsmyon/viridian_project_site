---
date: "2019-03-26T23:17:04+01:00"
noshowdate: yes
author: mvoge
#tags:
#- technical
title: Technisches
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

Wir sind primär an einem dezentralen System interessiert, eine Blockchain muss
es da nicht unbedingt sein. Wir haben uns daher verschiedene verteilte Datenbanken
angesehen wie Apache Cassandra oder Elasticsearch. Am besten gefallen hat uns
CouchDB, weil sie einerseits gut dokumentiert ist und andererseits sehr skalierbar,
vom mobilen Endgerät bis hin zum Rechenzentrum. Außerdem kann CouchDB sogar mit
temprären Offline-Zeiten umgehen und synchronisiert Änderungen einfach, sobald
der Knoten wieder online ist. Das hat uns gefallen, denn die anderen Lösungen
scheinen primär auf High-End-Rechner in Rechenzentren ausgelegt zu sein, die
immer online sind.

Trotzdem stellt sich auch bei CouchDB die Frage: Wie genau synchronisiert man
die Knoten und stellt sicher, dass nicht ein bösartiger Teilnehmer einfach
Daten ohne Erlaubnis verändert und diese Änderung ins Netz einspeist?
 
 
### Verbraucht die Blockchain nicht unglaublich viel Energie? {#blockchain-energie}


## Warum gemeinschaftlich?


## Wie soll das Netzwerk funktionieren? {#netzwerk-funktion}

### Datenbankschema als Graph {#graph}

### Datenbankschema in JSON {#json}

### Warum müsst ihr die Identität der Netzwerkteilnehmer kennen? {#identitaet}

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



## Vergleich mit alternativen Plattformen {#vergleich}

Ziel von Viridian ist es, eine Plattform zu entwickeln, mit der Informationen dezentral erfasst werden können, um die Nachhaltigkeitsleistung von Produkten zu bewerten und zu vergleichen, die als Grundlage für eine nachhaltige Wirtschaft dienen kann.

Es gibt andere Initiativen, die verschiedene Konzepte oder Prinzipien von Viridian teilen. Im Folgenden werden drei Beispiele für solche Initiativen gegeben, einschließlich einer kurzen Beschreibung, wie diese Initiativen aussehen oder von Viridian abweichen.

### Questionmark

[Questionmark] (https://www.thequestionmark.org/) zielt darauf ab, eine unabhängige Plattform zu entwickeln, die die Verbraucher über die Ernährungs- und Nachhaltigkeitsaspekte von Lebensmittelprodukten informiert. Es enthält eine große Datenbank mit über 50.000 Produktetiketten. Questionmark arbeitet mit verschiedenen Partnern zusammen, um wissenschaftliche Unterstützung, Zuverlässigkeit der Daten, Richtlinien für gesunde Ernährung, Messung der Nachhaltigkeit von Verbraucherprodukten und Dialog mit Stakeholdern zu gewährleisten.

#### Vorteile:

- Große Produktdatenbank
- Entwickelte App zum Scannen von Barcodes
- Bietet Bewertungen zu Produkten und zeigt Alternativen auf, einschließlich derer, wo diese erworben werden können

#### Nachteile:

- Zentrale Plattform
- Begrenzte interaktive Community-basierte Beteiligung
- Eingeschränkte Bewertung der Nachhaltigkeit (der bestehende vereinfachte Ansatz zur Bewertung der Nachhaltigkeit von Produkten wird derzeit entwickelt, um eine bessere wissenschaftliche Grundlage zu schaffen)
- Nur Lebensmittelprodukte abgedeckt

### WikiRate

[WikiRate] (https://wikirate.org/) ist ein offenes und kollaboratives Tool, um Bedenken hinsichtlich der Auswirkungen auf Unternehmen auszuräumen. Das Ziel von WikiRate ist es, Unternehmen dabei zu unterstützen, sich mit Umwelt-, Sozial- und Governance-Anliegen zu befassen, durch Crowd-basiertes Sammeln von Informationen, umfassende Datenstrukturierung sowie durch die Entwicklung standardisierter Metriken, mit denen die Leistung von Unternehmen bewertet werden kann. Die Entwicklung von WikiRate wird von der Europäischen Kommission unterstützt.

#### Vorteile:

- Größte öffentlich zugängliche und editierbare Datenbank für Unternehmensinformationen in Bezug auf die Ziele der Nachhaltigkeitsentwicklung, Lieferketten und bestehende gesetzliche Rahmenbedingungen
- Daten zu> 30.000 Unternehmen. Hat viele Umwelt- und Sozialkennzahlen, die vom Benutzer beigetragen wurden.

#### Nachteile:

- Keine Produktdaten
- Daten werden nicht in Unternehmensleistungswerten zusammengefasst

### Kompass Nachhaltigkeit

Die Plattform ["Kompass Nachhaltigkeit"] (https://www.kompass-nachhaltigkeit.de) bietet vielfältige Informationen zur nachhaltigen öffentlichen Beschaffung. Zu den auf der Plattform enthaltenen Informationen gehören Nachhaltigkeitsstandards und -zertifizierungssysteme, gekennzeichnete Produkte, Gesetze und gesetzliche Rahmenbedingungen auf Bundes- und Länderebene sowie Informationen zu bewährten Verfahren, Richtlinien und Richtlinien. Kompass-nachhaltigkeit ist ein Kooperationsprojekt von GIZ (Deutsche Gesellschaft für internationale Zusammenarbeit) und Engagement Global; Seine Entwicklung wird vom Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung unterstützt.

#### Vorteile:

- Detaillierte Informationen zu den Etiketten, einschließlich einer Vielzahl von Nachhaltigkeitskriterien
- Viele Produktgruppen werden abgedeckt
- Interaktive Karte mit regionalen und lokalen Initiativen
- Umfassende umfassende Datensammlung zur Förderung nachhaltiger Beschaffungsprozesse

#### Nachteile:

- Etiketten auf der Plattform decken nicht das gesamte Spektrum nachhaltiger Produktion ab (z. B. keine Lebensmitteletiketten, keine Klimakriterien)
- Hauptsächlich informativ mit eingeschränkter Benutzerinteraktivität
- Plattform noch in der Entwicklung

### Fazit

Obwohl viele der identifizierten Initiativen einige der Hauptmerkmale von Viridian aufweisen - wie Crowd-based Intelligence, Bewertung der Nachhaltigkeit von Produkten und dezentrales Datenbankmanagement -, war keine dieser Initiativen bisher in der Lage, diese Merkmale in einem einzigen Produkt zu kombinieren. Viridian kann so eine wichtige Lücke in der Landschaft einer nachhaltigen Wirtschaft schließen, indem es eine unabhängige, interaktive und zuverlässige Plattform für alle bietet, die fundierte Verbraucherentscheidungen basierend auf der Nachhaltigkeitsleistung von Produkten treffen möchten.
