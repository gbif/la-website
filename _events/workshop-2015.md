---
layout: single-page
title: Atlas of Living Europe Workshop 
date: 2015/05/04
date_shown: 2015/05/04 to 2015/05/05
type: Workshop
status: Finished
---

## {{ page.title }}

#### Description 

Organized as side event of the 2015 European Nodes Meeting, this workshop was a sequel to the 2014 GBIF/ALA Workshop in Canberra and brought together developers and node managers working on national installations of the ALA software. This was the first workshop where developers outside Atlas of Living Australia began to teach about platform future

#### Participants 


| Name | Organization | Country |
|------|--------------|---------|
{% for participant in site.data.events.workshop-2015 -%}
| {{ participant.name }}  | {{ participant.organisation }}  | {{ participant.country }}
{% endfor %}


#### Resources 

##### Presentations
- Presentation : [Architecture](../assets/presentation/workshop-2015/2-architecture.pdf) by David Martin (Atlas of Living Australia) (PDF)
- Presentation : [Operation](../assets/presentation/workshop-2015/2-operation.pdf) by David Martin (Atlas of Living Australia) (PDF)
