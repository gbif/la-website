---
layout: default
title: Participants
permalink: /participants/
---
{% assign ps = site.participants | sort: 'institution' %}
{% assign ps3 = site.data.ala-summary-gdocs-sheet1 | where: "LA_web_status", "highlight" | sort: 'Installation' %}
{% assign psd = site.data.ala-summary-gdocs-sheet1 | where: "LA_web_status", "list"  | sort: 'Installation' %}
{% assign psd2 = site.data.participant_development | sort: "institution" %}

### Participants with live data portals

<div class="table-responsive">
	<table class="table table-bordered table-hover"> 
		<thead class="thead-light">
			<tr>
				<th> Institution </th>
				<th> Country </th>
				<th> Language </th>
				<th> Year </th>
			</tr>
		</thead>
		<tbody>
			{% for participant in ps %}
			<tr> 
				<td scope="row" >
					<a href="{{ participant.url | relative_url }}">
						{{ participant.institution }}
					</a>
				</td>
				<td> 
					{{ participant.country }}
				</td>
				<td>
					{{ participant.language }}
				</td>
				<td>
					{{ participant.year }}
				</td>
			</tr>
			{% endfor %}
		</tbody>
	</table>
</div>

### Other participants and status of their data portals

<div class="table-responsive">
	<table class="table table-bordered"> 
		<thead class="thead-light">
			<tr>
				<th> Institution </th>
				<th> Country </th>
				<th> Language </th>
				<th> Status </th>
			</tr>
		</thead>
		<tbody>
			{% for participant in psd %}
			{% if participant["Declared status"] == 'Live' %}
			{% continue %}
			{% endif %}	
			<tr> 
				<td scope="row" >
					{{ participant.Installation }}
				</td>
				<td> 
					{{ participant.Country }}
				</td>
				<td>
					{{ participant.Language }}
				</td>
				<td>
					{{ participant["Declared status"] }}
				</td>
			</tr>
			{% endfor %}
		</tbody>
	</table>
</div>

### The community in action

<section>
{%- include carousel-people.html -%}
</section>
