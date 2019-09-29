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
enter the implementation of a first prototype.

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
  ratings, they should be able to see what the monetary impact is. Then, everyone
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
and their ratings. They are supplemented by **product categories** that aggregate
information that is general for a category of product, but not specific to one
exact product. Other important elements are the **companies** that
manufacture or sell the products. As a third level, there are (sustainability)
**labels** that certify mostly products, but some also companies.
Around these four elements, all **information** is arranged that is associated with the
product/category/company/label via users' **ratings**. Users can create and edit all these
elements and can either agree/disagree with (upvote/downvote) existing ratings or
create their own. A peer-review process ensures some protection against vandalism
(internet trolls) and provides basic quality management.

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

The division into the elements **products** (pink), **product categories** (lavender),
**companies** (orange) and **labels** (turquoise) is also reflected in the data
on sustainability. Typically, each data source refers to either a single product/product category
(e.g. information on the ingredients of a product or Life Cycle Assessments (LCA)),
companies (e.g. Corporate Social Responsibility (CSR) reports or third-party studies)
or labels (e.g. label recommendations). Also existing platforms with sustainability
data (see [comparison](#comparison)) can usually be divided into one of these
categories: there are product databases such as [Questionmark](https://www.thequestionmark.org/) or
[OpenFoodFacts](https://world.openfoodfacts.org/), company databases such as
[WikiRate](https://wikirate.org) or [Rank a Brand](https://www.rankabrand.org/)
and label databases like [Kompass Nachhaltigkeit](https://www.kompass-nachhaltigkeit.de)
and [Label online](https://label-online.de/). Their data could possibly be
integrated later (see [Timeline](#timeline)).

**Information** is grouped around the products/categories, companies and labels (different
colors in the graph: yellow, green, petrol, ocher, ...). There are also links
between companies (who manufacture products) and their products, as well as between
labels and products (displayed as red "Inherit" nodes). The rating of companies
and labels thus influences the evaluation of a product.

First of all, information is only value-free facts about a product/company/label
and should be provided with one or several verifiable **sources**. Any information
can and should lead to a rating. The **rating** (in the graph red) corresponds to
the mapping of the information onto an ethical value scale. For this, a user
(blue in the graph) creates a new rating and arranges the information on their
own accord on a scale. Other users can agree to this rating by voting it up (+1).
If they disagree, they can vote it down (-1) and create an alternative rating.
The score inherited from e.g. the manufacturing company or a label is also voted
up or down to determine its weight.

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

The ability to agree to existing ratings via upvote could be considered a form of
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
the hash value of the preceding block). Thanks to the concatenation,
modifications in the blockchain necessitate modifications in all later blocks as
well. It is therefore time-consuming to change the history of transactions after
the fact. With Bitcoin, a modification would be almost impossible
due to the high computational cost of proof-of-work: To complete a single modified
block faster than the competition in the network is extremely difficult---completing
in the same time span all subsequent blocks as well is merely impossible. Without
a computationally intensive proof-of-work, it would not be very costly for an attacker,
nevertheless each modification would propagate to the most recent block and would
be more visible than without blockchain.

### Block Chain frameworks

We looked at various options of blockchain frameworks. What we definitely do not
want is the use of a proof-of-work blockchain like Bitcoin or Ethereum, since they
consume enormous amounts of energy (see [here](#blockchain-energy)). One option are
delegated proof-of-stake blockchains like EOS or Loom, which however seemed quite complicated
to us and also have (like proof-of-work) undemocratic tendencies because nodes that
own more (higher stakes) have more power.

A very good approach is used by [FairCoin](https://fair-coin.org), where
proof-of-work is replaced by proof-of-cooperation. All nodes have equal rights and
together democratically secure the blockchain. However, FairCoin is not an
arbitrarily extensible framework for blockchain applications, it's just a fork of
bitcoin. FairCoin is therefore more geared towards financial transactions and it would
take a lot of effort to run a social network like Viridian on it.

### Excursus: IOTA and the Tangle

An interesting alternative to blockchains is IOTA, which works with a directed
acyclic graph (DAG) instead of a blockchain, also called "tangle". In a sense,
it is a generalization of the blockchain because each transaction is individually
validated and concatenated with other transactions, rather than many transactions
together in blocks. In a blockchain, there is only one valid strand of blocks of
transactions, but in the Tangle there are many parallel strands that can be
entangled. The interesting thing about the Tangle is the philosophy behind it:
In a blockchain, the node operators, i.e. the miners, are a small elite that
offers the service of transaction validation to a larger group of users (almost
centralized!). Instead, the Tangle adheres to the do-it-yourself principle: Every
user who sends a transaction must validate two other transactions. In a way,
mining is socialized and there is a kind of reciprocity: if you want something,
first you have to do a favor yourself (instead of just paying a fee like in case
of mining).

Ultimately, we decided against IOTA, especially because the Tangle is not designed
to store large amounts of data and retrieve them quickly. One would have to check
if one can use the Tangle only as a communication medium to synchronize a state
database, such as a CouchDB, in a fault tolerant way. But that would probably be
associated with great effort.


### Hyperledger Fabric

We have decided for using the Hyperlinkger Fabric (HLF) blockchain framework,
which is maintained by the Linux Foundation. It is a very modular and customizable
framework for so-called "permissioned blockchains" or "consortium blockchains",
as opposed to "permissionless blockchains" like Bitcoin or Ethereum. This means
that one cannot directly participate in the network as a node, but first needs a
permission, which is usually associated with an identity check.

This eliminates the need for proof-of-work and proof-of-stake, but still provides
consensus algorithms for fault tolerance. Unfortunately, HLF currently does not
support BFT, but only CFT (Crash Fault Tolerance). That is, the network is protected
from node failure, but not deliberate malicious manipulation. However, due to
Hyperledger Fabric's architecture, this is less of a problem compared to other blockchains
since a single node does not perform all tasks, but the processes of endorsement,
ordering, and subsequent validation of transactions are distributed to different
nodes (see also the [Fabric paper](https://arxiv.org/pdf/1801.10228.pdf)). The
ordering service, which inserts the transactions only in the blockchain, does not
support BFT, however it does not even audit transactions. An attacker would have to
control and coordinate several nodes in order to manipulate endorsement as well as
ordering and validation.

Implementations of BFT in HLF are currently in progress (see [here](https://jira.hyperledger.org/browse/FAB-6135)
and [here](https://jira.hyperledger.org/browse/FAB-378)). There is already a third
party created [BFT plugin](https://github.com/bft-smart/fabric-orderingservice)
(from the University of Lisbon) that could be used if needed. The documentation
from HLF [says on the subject](https://hyperledger-fabric.readthedocs.io/en/release-1.4/whatis.html?highlight=byzantine#permissioned-vs-permissionless-blockchains)
that BFT is in principle a lesser problem in a system that is "permissioned" and
in which there exists more mutual trust than in a completely open one. Should misconduct
occur, then the blockchain has documented exactly who was responsible for it and
the node can be excluded from the network. The damage done could be remedied afterwards.
In a growing network, in which the node operators know each other less and less,
this could quickly become annoying and dangerous, if manipulation remains undetected
for a long time.

It remains to be determined with which configuration HLF can be optimally used in Viridan.
This not only affects the configuration of the consensus algorithm, that is the so-called
ordering service, but also the other components of HLF, in particular the peers, the
membership service provider and the certificate authority. Because HLF is so modular and
generic, there are many levers and decisions that need to be made. This is part
of Phase 3 of the Viridian project (see [timeline](#timeline)).

<!--
An alternative to Hyperledger Fabric that could possibly be switched to is
BigchainDB, which builds on Tendermint and uses MongoDB (instead of CouchDB).
BigchainDB or rather Tendermint supports BFT. Also, if it is easier to configure
and maintain than Hyperledger Fabric, it could be a good alternative.
However, BigchainDB turned out to be no viable option because its asset-based
data model is not suited for an open, editable social network. It is better for
a system of value exchanged where ownership is transferred between users.
-->

<!-- See also: -->
<!-- https://www.skcript.com/svr/consensus-hyperledger-fabric/ -->
<!-- http://vukolic.com/iNetSec_2015.pdf -->
<!-- https://www.usenix.org/legacy/events/hotdep08/tech/full_papers/preguica/preguica.pdf -->
<!-- https://github.com/davebryson/bftdb -->


### Doesn't the blockchain consume an incredible amount of energy? {#blockchain-energy}

It's true that permissionless proof-of-work blockchain networks consume enormous
amounts of energy. This is illustrated very clearly for Bitcoin and Ethereum at
https://digiconomist.net/bitcoin-energy-consumption: e.g. approx. 50 -- 70 TWh/a,
which is about as much as the power consumption of some entire European countries.

However, the blockchain itself is not responsible for the high energy consumption.
The blockchain is just an arrangement of blocks, each containing data (mostly
transactions, for example digital cash transfers in case of Bitcoin). Each
block consists of the data and a [hash value](https://en.wikipedia.org/wiki/Hash_function)
of the data. The hash value is basically just a large number that always has about
the same number of digits, no matter how big the dataset is. It's like some kind
of fingerprint. Even a small change in the data results in a completely different
hash value. The blockchain turns into a "chain" by adding the hash value of the
previous block to the data of the new block. As a result, this hash value also
influences the new hash value. If you change the data in one block, it alters
its hash value. Because the hash value is also part of the next block, its hash
value is changed as well and so on. This makes the blockchain relatively stable:
data can not be subsequently changed without changing all subsequent blocks.

#### Arms race of computing power: proof-of-work

So where does the high energy consumption come from? Not really from the creation
of the blockchain itself: To create a new block, you need to calculate a new hash
value. This is very fast and consumes virtually no power. Already when Bitcoin was
created in 2009, a standard CPU was able to calculate
[1 to 25 million hash values per second](https://www.heise.de/select/ct/2019/02/1546924642860309).
But that also means that it's pretty easy to modify a blockchain with even millions
of blocks at will and recalculate all hashes.

Therefore, Bitcoin introduces an additional obstacle: Only blocks are accepted whose
data contain a random number (the so-called nonce) such that the hash value becomes
smaller than a certain threshold. What the bitcoin miners do is permanently generating
random nonces and calculating the corresponding hash value. They do this until the hash
falls by chance below the threshold. Whoever achieves that first, obtains the privilege
to complete the block. As a reward, the miner receives a small fee. The process is
called proof-of-work, because you have to prove that you have done some work in exchange
for the privilege of block-completion.

The Blockchain network is controlled by whom who has the right to complete blocks.
Beacause block completion includes checking whether transactions are valid, e.g.
whether no money is transferred that has already been spent (so-called "double spend").
Furthermore, it includes the decision about which transactions end up on the blockchain
and thus become valid, and which not.

Bitcoin is thus secured by the fact that in order to control the network, one would
have to come up with more computing power than all other network participants together.
Because the more computing power, the more often you can complete a block. The problem
with that is that one is also rewarded more often if one has more computing power.
This incentive leads to an arms race of computing power and drives the energy consumption
into the extreme. One might think that the higher the computing power, the more efficient
the network is because blocks can now be completed faster. That is not the case. The
threshold below which the hash value must lie (the so-called "difficulty") is regularly
adjusted to the current computing power of the network. The more computing power there
is, the harder the puzzle gets. In the end, the time for completing one block is
always roughly the same, about 10 minutes.

So, Bitcoin is extremely inefficient. Millions of computers simultaneously crunch
useless numbers, just for selecting one of them to validate and close the block
in the end. One way to increase efficiency would be for the nodes to split up
the work and process several blocks in parallel. But this is difficult to achieve
with the structure of the blockchain. Another possibility is to replace the
computation-intensive selection method of the block-terminating node with
something else. Both approaches are implemented in Hyperledger Fabric.

#### A possible solution

The most obvious alternative to proof-of-work is a simple round-robin block-completion
approach: all nodes of the network are in turn one after the other. The privilege
of block completion is simply distributed evenly across all nodes. In permissionless
blockchains like Bitcoin this is not an option: instead of high computing power,
the maxim would be a high number of participating nodes. Whoever controls most nodes
controls the network. This would only lead to the need for a lot of electronics instead
of a lot of computing power (but it would probably reduce the consumption of resources,
because it would be possible to use existing hardware, which can continue to perform other
tasks in parallel). A problem that exists even with proof-of-work remains: who owns a lot,
gets a lot of power (and reward). Proof-of-stake, the solution preferred by Ethereum and
other cryptocurrencies, has the same flaw: whoever owns a lot (of cryptocurrency) has
a lot of power over the network. This raises the hurdle for abuse, but it still
has tendencies towards an oligarchy.

A sensible and simple democratic approach would be: one person, one vote. One
could use the round-robin method, along with the restriction that every real
human being may only operate one node at a time. That would be roughly equivalent
to the difference between corporations and cooperatives: in a cooperative, each
shareholder has exactly one vote, no matter how much she/he owns. In a stock
corporation, on the other hand, the voting rights increase with the shares
(corresponding to proof-of-stake).

The only disadvantage would be the abandonment of the anonymity of the participants.
That is why the followers of Bitcoin or Ethereum will never pursue this approach.
However, there is a cryptocurrency called [FairCoin](https://fair-coin.org) going
in this direction.

Also a permissioned blockchain like Hyperledger Fabric (see [here](#why-blockchain)),
which we want to use in the Viridian project, makes this reasonable
compromise. The loss of anonymity, which does not necessarily have to be associated
with revealing the complete identity (see [here](#identitaet)), is a small price
compared to the enormous saving of resources.

The fact that Hyperledger Fabric works much more efficiently than Bitcoin and has
a much lower resource footprint is shown in the paper
["Hyperledger Fabric: A Distributed Operating System for Permissioned Blockchains"](https://arxiv.org/abs/1801.10228):
On page 12 (Figure 7), you can see the transaction rate per second as a function
of the number of CPUs. With 4 CPUs, about 1300 -- 1500 transactions per second (tps)
are achieved. Assuming each CPU has a (conservatively estimated) consumption of
[several 100 W](https://www.intel.com/content/www/us/en/products/processors/xeon/e7-processors/e7-8855-v4.html)
at maximum load, this results in a usage of around 1000 W for 1000 tps,
so 1 W/tps (or 1 J/transaction). This is contrasted with a bitcoin transaction
rate of [up to about 10 tps](https://en.bitcoin.it/wiki/Maximum_transaction_rate)
(see also [here](https://www.blockchain.com/charts/transactions-per-second)) at
an energy consumption rate of [50 -- 70 TWh/a](https://digiconomist.net/bitcoin-energy-consumption),
i.e. approx. 6 -- 8 GW. There, Bitcoin has an energy demand of about 600 -- 800 MW/tps
or 600 -- 800 MJ/transaction. That is equivalent to 600 to 800 million times the
consumption of the Hyperledger benchmark.

Even if one would choose to have more than 4 nodes in the network for reasons of
resilience, which slightly increases the consumption, these data show that the nodes
would be under full load only at significantly more traffic than 100 transactions per second.
At lower transaction rates, they would probably be idle most of the time. So if the
number of nodes and thus the idle consumption does not increase exorbitantly, the energy
requirements should remain in a very reasonable range and do not increase significantly
by the use of a blockchain. However, it should not go unmentioned that Hyperledger Fabric
does not use BFT by default, and by using BFT, the transaction rate may decrease slightly
while resource requirements may go up a little bit.







## Why do you need to know the identity of network participants? {#identity}

In principle, we do not need to know the identity of our users and even node operators.
But it must be ensured that a real existing person can register only once (or at most
very few times) in the network in order to prevent interference. We do not want
bot armies that distort or even determine public opinion (see e.g. [1](https://www.nytimes.com/2016/11/18/technology/automated-pro-trump-bots-overwhelmed-pro-clinton-messages-researchers-say.html),
[2](https://comprop.oii.ox.ac.uk/)).
<!-- [3](https://www.wired.com/2016/05/twitterbots-2/)). -->

This is another compromise: Moving away from Bitcoin's/Ethereum's completely anonymous,
trustless yet mining-secured system, and moving a small step towards traditional
centralized systems. For example, it would be conceivable that one uses the
central legal authority to check the identity of the user with the government-issued
identity card or passport. The price to pay is a small loss of decentralization/autonomy,
but in our view the gained protection against manipulation and the removed burden of
[energy-hungry mining](#blockchain-energy) far outweigh the price.

We are not interested in user data that allow identification, we don't even need to know
their names. It would be quite enough if we store one unique feature, or just a
hash of that feature, to make sure that the person with that feature cannot register
more than once.

Possible features that could be used:

- The ID or passport number. An automated and counterfeit-proof recognition of the
  number would be convenient, for example by means of image recognition of a photo
  of the ID card/passport. If possible no card reader should be required because
  almost no-one owns such a device. Until an algorithm has been developed, the
  passport number could be verified via video chat.

- Automatic face recognition. Biometric data such as the distance between the eyes,
  the corners of the mouth, etc., may be sufficient to uniquely identify a face.
  Since only the hash of these data needs to be stored, there is no way of
  abusing that data. However, it must be ensured that the users present their
  real face and not a random photo from the internet or a portrait generated by
  an AI. Therefore, the photograph of an ID card/passport, rather not to be found
  online, would be preferable (see above), provided that it can only be random-generated
  at great expense.

- The mobile phone number. A verification code will be sent to this number via
  text message (SMS) to prove that you own that number. Although it is possible to
  own more than one SIM card, this is usually linked with costs and it is unlikely
  that a single person has more than a few phone numbers. Unfortunately, sending SMS
  is also associated with costs for the platform.

The email address would be a free alternative to the phone number. But it is trivial
to create hundreds or thousands of fake email addresses, so email is not an option.

**Conclusion:** Of course, the system can not and must not be 100% secure. But there
must be a fair amount of security, such that abuse is not impossible (because no system
can guarantee that), but expensive enough that it happens only rarely.
