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


