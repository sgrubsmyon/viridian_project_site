---
date: "2019-03-28T00:19:25+01:00"
noshowdate: yes
authors: ["mvoge", "dvandoren"]
#tags:
#- technical
title: Technical Paper
toc: true
---

## Contents

- [Timeline](#timeline)
- [Comparison of alternative platforms](#comparison)
- [How is the network supposed to work?](#network-how)
  - [Database schema as graph](#graph)
  - [The rating score](#score)
  - [Database schema in JSON](#json)
- [Why community-based?](#why-community)
- [Why decentralized?](#why-decentralized)
- [Why Blockchain?](#why-blockchain)
  - [Doesn't the blockchain consume an incredible amount of energy?](#blockchain-energy)
- [Why do you need to know the identity of network participants?](#identity)

<div class="delimiter"></div>

This paper explains **which technical solutions or technical architecture the project has chosen and why**.

In order to achieve the goals outlined in the [whitepaper](/paper) (internalisation of
external costs), the Viridian project aims to develop a social network to assess
and compare the sustainability of products and companies. First, the evaluations can
increase the transparency for conscious sustainable consumption. Later, the true
prices of the products could be displayed (see [**timeline**](#timeline)).

It is explained [**how the network is supposed to work**](#network-how) and what the data structure
should look like. The evaluation should not be made by a closed group, but
[**collectively**](#why-community) by all users. In addition, the network will be
organized [**decentrally**](#why-decentralized). In order to protect the network
from manipulation, it is planned to use a "distributed ledger", i.e. a
[**blockchain**](#why-blockchain).

First of all, there is an overview of the [timing of the Viridian project](#timeline)
and a [**comparison of Viridian with existing other projects**](#comparison):
what these platforms lack, or how Viridian complements them.





## Timeline

The project consists of several phases, the first of which is completed and the
second largely completed. **Currently, phase 3 begins**, in which the considerations
go into the implementation of a first prototype.

![](/images/technical/timeline.en.svg)

- In **phase 1**, conceptual ideas were collected. Above all, the idea of the
  transition to a sustainable post-fossil economy was linked to the concept of
  alternative currencies and cryptocurrencies. Combined with the concept of
  external costs and the extended market model in which these are priced in, these
  ideas gave birth to the Viridian project. The result was the conceptual
  [whitepaper](/paper).

- In **phase 2**, the rather abstract ideas were translated into concrete
  proposals for the technical architecture of the system. It became clear that
  the first step must be the development of a platform that can be used as a
  social network. The result of phase 2 is this article.

- In **phase 3**, after the design decisions have been made, a first prototype
  will be implemented, having the essential feature: the collaborative editing
  of sustainability assessments by users on a decentralized blockchain network.
  Phase 3 consists of the following milestones:
  
    1. Programming of the backend (e.g. reading/writing of data, validation rules)
    2. Development of a suitable network configuration with several nodes
    3. Implementation of a user workshop for feedback on the frontend concept
    4. Development of a first prototype of the frontend to display and edit the content 
  <p></p>

- In **phase 4**, we can work on the automated integration of data from other
  platforms and databases (including those listed in the [comparison](#comparison)).
  In addition, the platform can be developed further and made more user-friendly.
  In the medium term, a solution should be found to automatically check user identity
  without sacrificing privacy. More [here](#identity).

- In **phase 5**, an algorithm can be developed that calculates alternative prices
  from the user's ratings and votings that should as closely as possible reflect
  the external costs involved. Here it is important that users trust and agree
  with the algorithm, or even influence it themselves. When users submit their
  reviews, they should be able to see what the monetary impact is. Then, everyone
  can think about how much they personally value sustainability.

- In **phase 6**, the prices calculated in phase 5 can be applied in real-life.
  The creation of a digital currency, possibly a cryptocurrency, which automatically
  adjusts the prices, may be a viable solution. An alternative would be a payment
  system that uses the conventional currency, but deposits/withdraws a fraction
  of the purchase price to/from a fund---according to the calculated external costs.





## Comparison with alternative platforms {#comparison}

Viridian aims to develop a platform that allows decentralized collection of information for assessing and comparing the sustainability performance of products, which can be used as a foundation for a sustainable economy.

There are other initiatives that share various of Viridian's concepts or principles. Below, three illustrations of such initiatives are given, including a brief description how these initiatives are like – or differ from – Viridian.

### Provenance

[Provenance](https://www.provenance.org/) is a London-based social enterprise that aims to use blockchain technology to record supply chain data. It creates a secure and open registry that allows to verify identities, claims and proofs concerning product certification. Sustainability certification is extended into the digital world and each product has a record on the blockchain that mirrors its physical counterpart.
Provenance works together with the businesses from the supply chain and with NGOs and organizations studying/auditing the businesses, which deliver first-hand data.

#### Pros:

- Improved visibility for producers regarding the supply chain of products
- Appealing user interface
- The partnering with business/NGOs/auditors can give direct access to insider supply chain information
- The complete supply chain may be tracked with authenticated digital ownership transfer of the product or production materials
- Product information can be provided on a per-batch basis
- Businesses pay in order to add their products, which provides financial means for running the service

<!-- (in fact, also on Viridian, some important information will have to come from the most involved stakeholders) -->

#### Cons:

- There is no or only very restricted community editing of data
- Data coming directly and exclusively from the businesses might be biased and there is a financial dependency on the firms
- Only paying producers are visible on the platform
- Products cannot be added if the producer does not actively do it
- The previous two points can result in a selection bias, so that only the most sustainable products are visible on the platform
- No product rating/ranking, therefore no possibility to compare products

### Questionmark

[Questionmark](https://www.thequestionmark.org/) aims to develop an independent platform that informs consumers regarding the nutritional and sustainability dimensions of food products. It contains a large database of over 50,000 product labels. Questionmark works together with various partners to secure scientific support, reliability of data, healthy diet guidelines, measuring the sustainability of consumer products, and accommodate stakeholder dialogues.

#### Pros:

- Large database of products
- Developed app to scan barcodes
- Provides scores on products and displays alternatives, including were these can be purchased

#### Cons:

- Centralized platform
- Limited interactive community-based involvement
- Limited assessment of sustainability (the existing simplistic approach of assessing the sustainability of products is currently under development to provide a better scientific foundation)
- Only food products covered

### WikiRate

[WikiRate](https://wikirate.org/) is an open and collaborative tool for addressing concerns about corporate impacts (Corporate Social Responsibility, CSR). The aim of WikiRate is to guide companies to address environmental, social and governance concerns, by means of crowd-based collection of information, comprehensive structuring of data, as well as through developing standardized metrics that can be used to assess the performance of companies. The development of WikiRate is supported by the European Commission.

#### Pros:

- Largest openly accessible and editable database for company information related to sustainability development goals, supply chains and existing legislative frameworks
- Data on >30,000 companies. Has many user-contributed environmental and social metrics.

#### Cons:

- No product data
- Data is not aggregated into company performance scores

### Kompass Nachhaltigkeit

The platform ["Kompass Nachhaltigkeit"](https://www.kompass-nachhaltigkeit.de) ("The Sustainability Compass") offers a wide range of information on sustainable public procurement. Information contained within the platform include sustainability standards and certification schemes, labelled products, legislation and legal frameworks at federal and state level, as well as information on best practices, guidelines and directives. Kompass-nachhaltigkeit is a cooperation project of GIZ (Deutsche Gesellschaft für internationale Zusammenarbeit) and Engagement Global; its development is supported by the German Federal Ministry for Economic Cooperation and Development.

#### Pros:

- Detailed information on labels, including a large amount of sustainability criteria
- Many product groups covered
- Interactive map that displays regional and local initiatives
- Comprehensive collection of data for driving sustainable procurement processes

#### Cons:

- Labels on the platform do not cover the complete spectrum of sustainable production (e.g. no food labels, no climate criteria)
- Mainly informative, with limited user-interactivity
- Platform still in development

### Conclusion

Although many of the identified initiatives share some of the key characteristics of Viridian – like crowd-based intelligence, supply of detailed product information, integration of sustainability assessments and decentralized database management – none of these initiatives have so far been able to combine such features into a single product. In doing so, Viridian aims to tackle disadvantages of services that are characterized by undetailed or biased product information, intransparent assessment of sustainability performance, limited participation of consumers, or financial barriers to the offered services. As such, Viridian can address an important gap in the landscape of a sustainable economy. Viridian provides an independent, interactive and reliable platform that can be used both for contributing and obtaining information. This can allow consumers to make well-informed decisions based on objective and comprehensive product information.
<!-- Many data from existing platforms can be integrated and complement Viridian. -->




## How is the network supposed to work? {#network-how}

Based on the planned structure of the database, the technical functionality of
the Viridian network will be explained here. At the center are the **products**
and their reviews. Other important elements are the **companies** that
manufacture or sell the products. As a third level, there are (sustainability)
**labels** that certify mostly products, but some also companies. Around these
three elements, all **information** is arranged that is associated with the
product/company/label via user ratings. Users can create and edit all these
elements and can either join existing ratings or create their own. A peer-review
process ensures some protection against vandalism (internet trolls) and provides
basic quality management.

The following section explains the principles in detail using a graph.

### Database schema as graph {#graph}

A helpful representation of the database schema is in form of a graph:

<a href="/images/technical/database_schema_graph.svg">
  <img src="/images/technical/database_schema_graph.svg" alt="Database schema as graph", style="max-height: 600px;">
</a>

**Legend:**

- Red thick line = creation of an element
- Blue thick line = up/down vote on rating
- Black thick line = other up/down vote or decision in peer review

#### Elements

The division into the three elements **products** (pink), **companies** (orange)
and **labels** (turquoise) is also reflected in the data on sustainability. Typically,
each data source refers to either products (e.g. Life Cycle Assessments (LCA) or
information on the ingredients of a product) or companies (e.g. Corporate Social
Responsibility (CSR) or third-party studies) or labels. Also existing platforms
with sustainability data (see [comparison](#comparison)) can usually be divided
into one of three categories: there are product databases such as
[Questionmark](https://www.thequestionmark.org/) or [OpenFoodFacts](https://world.openfoodfacts.org/),
company databases such as [WikiRate](https://wikirate.org) or [Rank a Brand](https://www.rankabrand.org/)
and label databases like [Kompass Nachhaltigkeit](https://www.kompass-nachhaltigkeit.de)
and [Label online](https://label-online.de/). Their data could possibly be
integrated later (see [Timeline](#timeline)).

**Information** is grouped around the products, companies and labels (different
colors in the graph: yellow, green, petrol, ocher, ...). There are also links
between companies (who manufacture products) and their products, as well as between
labels and products. The rating of companies and labels thus influences the
evaluation of a product.

First of all, information is only value-free facts about a product/company/label
and should be provided with one or several verifiable **sources**. Any information
can and should lead to a rating. The **rating** (in the graph red) corresponds to
the mapping of the information onto an ethical value scale. For this, a user
(blue in the graph) creates a new rating and arranges the information on their
own accord on a scale. Other users can join this rating by voting it up (+1).
If they disagree, they can vote it down (-1) and create an alternative rating.

In addition, users can create **comments** (gray in the graph) on an information
in which they can explain why they find this information particularly
important or not important at all. The comment can also be used to justify a
specific rating.

#### Users determine the relevance via votes

Users can not only vote on ratings with +1/-1 (upvote and downvote), but also on
information. The sum of these votes is a **proxy of the relevance** of the
information to the user community. This relevance provides the default sorting
of information on the product profile page so that the information relevant to
most users appears at the top. For the ratings, relevance has a special
meaning: it corresponds to the **weight** of the rating in the calculation of the
overall evaluation. The arithmetic mean of all ratings by all users, each weighted
with the balance of the +1/-1 votes, gives the overall rating of the
product/company/label.

The ability to join existing ratings via upvote could be considered a form of
**Liquid Democracy** in the sense of an "answer recommendation" system (see
[here](https://uniteddiversity.coop/2013/07/19/liquid-democracy-is-not-delegative-democracy/)
and [here](http://web.archive.org/web/20160403043216/https://seed.sourceforge.net/ld_k5_article_004.html)).
However, a real Liquid Democracy would mean that one subscribes to the answer
recommendations (in this case ratings) on a particular topic (product category?)
from a particular person, which is not intended here.

#### Peer review

Another important component of the Viridian network is the **peer review (PR) process**.
To prevent abuse and vandalism (e.g. by "trolls"), new content should be checked
by other users. For example, it could be required that newly added products/companies/labels
or information have to be confirmed by a certain number of users before they are
published on the platform. In the PR, the users should check whether certain rules
have been adhered to. Information should always include verifiable sources and
should not be published without. Depending on the number and activity of the users,
the PR request could be sent e.g. to five randomly selected users (the
random selection is important to avoid collusion), of which at least three must
approve the content before it is published.

Demanding a PR for all content changes, including comments and ratings, could
be overwhelming and overload users with PR requests. Instead, one could offer the
possibility to mark comments as unsuitable after publication. In this case, a PR
will be triggered and the comment will be removed if enough users agree. To
prevent trolling, a user cannot post content while one or more comments remain
marked and the PR process is still in progess. If a comment was deleted due to the
PR process, the user cannot submit any content for a certain penalty timespan.

Of course, even with PR content can be flawed or simply obsolete. Therefore, it
should be possible for users to request the **edit** or **deletion** of content.
In a subsequent PR process, it will be decided about the edit or deletion.

It remains to be seen how smoothly the platform will work with the PR mechanisms.
With too little involvement of the users or too much abuse, the rules must be
adjusted or changed. There should also be a mechanism for passing the PR request
to another randomly selected user if the first user does not reply. If a user does
not react to PR requests on several occasions, the likelihood that they will be
selected for a PR should decrease. Similar to the question of
[decentralization](#why-decentralized), a good compromise and a balance between
resilience and efficiency must be found.

#### Gamification/Incentives

Every activity of a user could influence their reputation in the network. This
rewards users who contribute information or participate in a peer review with
reputation points. Based on the reputation, gamification elements could spur users.
For example, at a certain score, medals could be awarded or awards for certain
activities, such as the first contributed information or the first peer review.

In the long term, when an alternative Viridian currency is implemented, there
could be financial incentives to reward contributors for their hard work. They
would be paid from a fund that is paid into when products with relatively bad
score are purchased.



### The rating score {#score}

For sustainability assessment, it makes sense to differentiate various dimensions
of sustainability. One possible classification is:

- **Environment:** includes air pollution, water pollution, soil pollution, waste, harmful substances released into the environment (without greenhouse gases), ...
- **Climate:** greenhouse gases and other climate-relevant activities such as land use change, ...
- **Society:** working conditions, fair pay, workers' health, child labor, equal opportunities, treatment of suppliers, impact on society e.g. through charitable projects, ...
- **Health:** means influence on the health of consumers (not workers), e.g. content of sugar and fat in food or toxic substances in textiles and toys
- **Animal welfare:** if animals were involved in the production, were they treated with due respect? Can they lead a pleasant, healthy life?
- **Economy:** from a consumer perspective, in the sense of 'value for money', e.g.: how durable is the product?

A sustainability rating consists in each of these dimensions of a
**number on a scale from -100 (especially bad, color red) over 0 (average, color yellow) to +100 (especially good, color green).**
If desired, these numbers can easily be converted into school grades, e.g.
according to the German system (1 to 6) or the American system (A to F).

Information will usually only affect part of the dimensions. The remaining
dimensions are then set to NULL (or simply omitted in the JSON document) so that
they do not enter the overall score, which is the weighted arithmetic mean of
all scores.

It is easy to create an overall score that includes all dimensions by
averaging individually for each dimension. A much more difficult and critical
task is to project the individual dimensions onto a single scale, that is, to
combine them into a single number (see ["multiple-criteria decision analysis"](https://en.wikipedia.org/wiki/Multiple-criteria_decision_analysis)).
There is no meaningful objective solution. Each individual will set different
priorities. Therefore, one solution is that each user defines her/his own
priorities for combining the dimensions into one number. The reduction to one
single scale simplifies the comparability of products and is therefore important.
Each user will then be shown a different summary rating based on her/his
preferences and will also get other suggestions for products with better ratings.
Users who have no time or no desire to set own priorities can use the
average of all users' priorities.



### Database schema in JSON {#json}

Since a document-based database is to be used with JSON, the database schema must
be written in JSON. The current status (incomplete at the moment) can be viewed at
https://github.com/viridian-project/database-schema/tree/master/asJSON.

Here's an example of a JSON document for a product:

```javascript
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






## Why community-based? {#why-community}

The Viridian project believes in the **"Wikipedia principle"**: that results obtained
via the contribution of many are better and not worse. It's about the use of
[collective intelligence](https://en.wikipedia.org/wiki/Collective_intelligence)
or what could be called a "democratization of information".

Of course, the collaborative approach is not perfect and has several issues, such
as manipulation attempts or lack of quality. However, the success of the Wikipedia
project shows that it ultimately works and good quality prevails in the end,
even with a completely open community-based editorial. In the long run, projects
like Wikipedia can even surpass commercial, proprietary solutions because they
tend to be more agile and can rely on larger resources with the support of the
crowd. This creates a **"commons"**, i.e. a common good that everyone cares for and
benefits from. A similar approach, in terms of software rather than information,
is being pursued by open source communities. We support and believe in this philosphy.

Therefore, we believe that previous sustainability assessment solutions (see
[comparison](#comparison)) are not sufficient because they lack this important
principle. Information and ratings are collected only by a small group of
experts on platforms like Questionmark or WeGreen (already offline). Other platforms,
such as WikiRate, can be community-edited, but they are rather restricted to experts
because of their complexity.

The Viridian project follows an approach that, besides Wikipedia, is heavily
influenced by StackOverflow. Depending on interest and knowledge, users can either
go deep and enter detailed information or just look at the most relevant information
and accept or reject it with upvotes/downvotes. In this way, one can still
interact with the platform even if one has little time or knowledge. This makes
the platform accessible to **a broad target group** and results in democratic
legitimacy compared to a purely expert-based platform.

A socially important topic like sustainability assessment and the inclusion of
external costs should not be driven by individual interests and therefore the
crowd-based Wikipedia principle seems appropriate. With the Viridian project,
we want to **empower civil society** to gain data sovereignty over the sustainability
of the economy. There is a large imbalance in power between producers and consumers
and our project would shift the power a little bit in favor of the consumers.






## Why decentralized?

The Viridian network should be organized decentrally. That means, there should be no
central server that stores the data and is operated by a single organization.
Instead, the data should be distributed over several participants (nodes) of the network.

We believe that decentralization is important and that **too much centrality is bad**.
Following Belgian economist [Bernard Lietaer](https://en.wikipedia.org/wiki/Bernard_Lietaer),
we believe that while centralized systems can be highly efficient, they are not very
resilient. Therefore, it is important to find a balance between the two poles. But
today's world is increasingly dominated by centralized systems: in business, only a
handful of corporations often supply the entire market and can influence it. This
often leads to disadvantages or damages for consumers, workers and the environment.

A decentralized Viridian network does not really solve these problems
(even though a generally negative score for large corporations could indirectly
make a difference). However, in a system whose assessments could eventually
decide on weal and woe of businesses, it will be important to prevent
**abuse, which would be simplified by centrality**.

Decentralization can take place on several levels or in several areas. In the
article ["The Meaning of Decentralization"](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274),
Vitalik Buterin, founder of Ethereum, distinguishes between physical
decentralization (how many physically separate computers operate the network?)
and political decentralization (how many people or organizations control these
computers?). Buterin further mentions three important advantages of
decentralization. The first two are realized rather via physical
decentralization, the third through political decentralization:

1. **Fault tolerance or reliability:** the more nodes participate in the network,
   the less likely it becomes that enough nodes fail at the same time for the network
   to break down. In contrast, in centralized systems there may be a single point
   of failure. Even if the load is distributed over more than one computer: The
   system breaks down when all servers are close to each other and there is a
   fire, a power failure or similar.
2. **Attack resistance:** The more distributed the system is, the more difficult
   it becomes to influence the network from the outside (e.g. to "hack it"),
   since one would have to attack many or all nodes simultaneously.
3. **Collusion resistance:** A centralized system often results in a monopoly of
   power that can be exploited by those in power to their own advantage. However,
   if power is distributed among many nodes, it is more difficult for network
   operators to create cartels that harm the general public.

The network should therefore be operated by several actors, who may well have
different interests and can control each other. Jointly, they keep the network safe.
Participation in the network should in principle be **open to anyone who is interested**---in
order to prevent the formation of cliques (with an environmental restriction to
keep total computing power as low as possible). However, it is important that the same
person or institution cannot control multiple nodes to prevent power imbalance.
Therefore, in contrast to permissionless networks such as Bitcoin, participants
[**should not be completely anonymous**](#identity), so that the network does not
need to be secured via [tons of (expensive and ecologically catastrophic) computing power](#blockchain-energy).
Bitcoin is manipulation-proof only because no individual and no clique can pay as
much computing power as all other (honest) participants together. In our network,
individuals shall not be able to bring up much computing power in the first place.





## Why Blockchain?

### Just a distributed database?

We are primarily interested in a decentralized system, it does not
necessarily have to be a blockchain. So we looked at several distributed databases
like Apache Cassandra or Elasticsearch. CouchDB appealed to us the most because
it's both well-documented and highly scalable, from the mobile device to the
data center. In addition, CouchDB can even deal with temporary offline times and
simply syncs changes as soon as the node is back online. We liked that, because
the other solutions seem to be designed primarily for high-end computers in data
centers that are always online.

### Consensus and fault tolerance

Nevertheless, also with CouchDB there is this question: How exactly can nodes by
synchronized, making sure that a malicious participant does not simply
modify data without permission and feed these changes into the network? After a
little research, one ends up with [consensus algorithms](https://en.wikipedia.org/wiki/Consensus_(computer_science)), making sure that the different versions of the database are consistent and that
the (hopefully honest) majority prevails. A secure consensus algorithm should
have a so-called ["Byzantine Fault Tolerance" (BFT)](https://en.wikipedia.org/wiki/Byzantine_fault).
In this type of fault tolerance, some nodes (up to 1/3) can be unreliable or
dishonest (both unintentionally due to technical errors or intentional), without
affecting the entire network.

BFT is [one of the main features](https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419)
[of blockchain networks](https://medium.com/loom-network/understanding-blockchain-fundamentals-part-2-proof-of-work-proof-of-stake-b6ae907c7edb) that are designed to run in a faulty environment. Classical
blockchains achieve BFT via proof-of-work or similar principles. So, if you're
looking for a distributed database with BFT replication, you'll almost inevitably
end up with blockchains.

In addition, a blockchain has the added advantage over ordinary database
transactions that the transactions are chained in blocks (linked via
the hash value of the predecessor block). The concatenation has the result that
modifications in the blockchain necessitate modifications in all later blocks as
well. It is therefore time-consuming to change the history of transactions after
the fact. With Bitcoin, the modification of the history would be almost impossible
due to the high computational cost of proof-of-work: To complete a single modified
block faster than the competition in the network is extremely difficult, let alone
in the same time all subsequent blocks. Without a computationally intensive
proof-of-work, it would not be very costly for an attacker,




More coming soon...
