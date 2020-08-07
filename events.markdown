---
layout: default
title: Events
name: Events
permalink: /events/
---

# {{ page.title }}

<table> 
	<thead>
		<tr>
			<th> Name </th>
			<th> Type </th>
			<th> Date </th>
		</tr>
	</thead>
	<tbody>
		{% for event in site.events %}
		<tr> 
			<td>
				<a href="{{ event.url }}">
					{{ event.title }}
				</a>
			</td>
			<td> 
				{{ event.type }}
			</td>
			<td>
				{{ event.date_shown }}
			</td>
		</tr>
		{% endfor %}
	</tbody>
</table>