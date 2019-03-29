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
keinen Fall wollten, ist die Nutzung einer Proof-of-Work-Blockchain wie Bitcoin oder
Ethereum, da diese enorm viel Energie verbrauchen (siehe [hier](#blockchain-energie)).
Eine Option sind Delegated-Proof-of-Stake-Blockchains wie EOS oder Loom, die uns
aber recht kompliziert erschienen und außerdem (wie Proof-of-Work auch)
undemokratische Tendenzen haben, weil Knoten, die mehr besitzen (höherer Stake),
mehr Macht bekommen.

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

Wofür wir uns letztlich entschieden haben, ist das Blockchain-Framework
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
der bewussten bösartigen Manipulation.

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
etwas anderes zu ersetzen.

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
geringeren Ressourcenbedarf hat, zeigt das Paper "".


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
