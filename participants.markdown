---
layout: default
title: Participants
permalink: /about/participants
---

<h4>Participants with live data portals</h4>

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
			{% for participant in site.participants%}
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

{%- include carousel-people.html -%}
		
<h4>Other participants and status of their data portals</h4>		

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
			{% for participant in site.data.participant_development %}
			<tr> 
				<td scope="row" >
					{{ participant.institution }}
				</td>
				<td> 
					{{ participant.country }}
				</td>
				<td>
					{{ participant.language }}
				</td>
				<td>
					{{ participant.status }}
				</td>
			</tr>
			{% endfor %}
		</tbody>
	</table>
</div>
