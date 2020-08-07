---
layout: default
title: Workshop 2019
date: 2019/04/01
date_shown: 2019/04/01 - 2019/04/05
type: workshop
---

# {{ page.title }}

## Description 


Description of the events:

- main goals,
- partners,
- founding, 
- general information, 
- date, 
- ... 


## Participants / Speakers 


| Name | Organization | 
|------|--------------|
{% for participant in site.data.events.workshop-2019 -%}
| {{ participant.name }}  | {{ participant.organisation }}  | 
{% endfor %}


## Resources 

- Agenda,
- Presentation, 
- General Information Document, 
- Photos,
-  ... 