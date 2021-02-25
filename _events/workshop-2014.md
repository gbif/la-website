---
layout: single-page
title: ALA/GBIF Software Workshop
date: 2014/07/20
date_shown: 2014-07-20 to 2014-07-20
type: Workshop
status: Finished
---

## {{ page.title }}

#### Description 

The second workshop linked to the community had been hosted by Atlas of Living Australia (ALA). It was open for developers interested by ALA platform. There were people from Argentina, Brazil, Costa Rica, France, Malaysia and Spain.

During this week, we focused our work in:
a) exchange knowledge amongst developers
b) collate wiki documentation on data management, and customization of the web portal
c) discuss and make progress in the processes surrounding source code management - e.g. potentially moving to Github and defining procedures for contribution, and releases

#### Participants 


| Name | Organization | Country |
|------|--------------|---------|
{% for participant in site.data.events.workshop-2014 -%}
| {{ participant.name }}  | {{ participant.organisation }}  | {{ participant.country }}
{% endfor %}

