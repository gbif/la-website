---
layout: single-page
title: International ALA Workshop 2016
date: 2016-10-03
date_shown: 2016-10-03 to 2016-10-07
type: Workshop
status: Finished
---

## {{ page.title }}

#### Description 

The 3-day International ALA Workshop was held in Madrid (Spain) between the 3rd and 5th of October 2016. This workshop brought together software developers from GBIF Nodes of Australia, France, Germany, Mexico, Portugal, Spain, Sweden as well as the member organization Canadensys to enhance the development of national data portals based on the [Atlas of Living Australia](http://www.ala.org.au/). The Australian, French and Spanish Nodes assisted the other Nodes based on their previous experience. The host for this course was GBIF Spain ([GBIF.ES](http://www.gbif.es/)).

Following this 3-day workshop, a 2-day workshop was proposed for members of the CoopBioPlat project. The main goal was to review the state of each national data portal based on ALA and move forward on the developments of Species and Geospatial modules.

#### Participants 


| Name | Organization | Country |
|------|--------------|---------|
{% for participant in site.data.events.workshop-2016 -%}
| {{ participant.name }}  | {{ participant.organisation }}  | {{ participant.country }}
{% endfor %}


#### Resources 

##### Presentations
- Presentation: [Canadensys on read to Atlas of Living Australia](/assets/presentation/workshop-2016/10-Canadensys-ALA.pdf) (PDF) by Jérémy Goinard (Canadensys)
- Presentation: [Atlas of Living Australia Integration GBIF Sweden](/assets/presentation/workshop-2016/10-ala-gbif-sweden.pdf) (PDF) by Manash Shah (GBIF Sweden)
- Presentation: [International ALA Workshop: current status, biocache-hub, taxonomy, security, internationalization and future steps](/assets/presentation/workshop-2016/10-ala-workshop-sp) (PDF) by Santiago Martinez de la Riva (GBIF Spain)
- Presentation: [GBIF Germany and ALA implementation](/assets/presentation/workshop-2016/10-ALA-Workshop-BGBM.pdf) (PDF) by Jörg Holetschek (GBIF Germany - BGBM)
- Presentation: [Atlas of Living France](/assets/presentation/workshop-2016/10-GBIF-France.pdf) (PDF) by Marie-Elise Lecoq (GBIF France)
- Presentation: [Documentation & wiki of ALA](/assets/presentation/workshop-2016/10-Documentation.pdf) (PDF) by Fabien Cavière (GBIF France)
- Presentation: [Collectory module](/assets/presentation/workshop-2016/10-Collectory.pdf) (PDF) by Marie-Elise Lecoq (GBIF France)
- Presentation: [Skinning your ALA instance](/assets/presentation/workshop-2016/10-Customization.pdf) (PDF) by Marie-Elise Lecoq (GBIF France)
- Presentation: [Security in ALF](/assets/presentation/workshop-2016/10-Security.pdf) (PDF) by FMarie-Elise Lecoq (GBIF France)
- Presentation: [International ALA workshop](/assets/presentation/workshop-2016/10-ALA-Madrid-DM.pdf) (PDF) by FMarie-Elise Lecoq (GBIF France)

##### Resources 
- GBIF.es: [International ALA Workshop](https://www.gbif.es/en/talleres/taller-internacional-ala/)
