---
layout: default
title: Events
name: Events
permalink: /events/
---

<div class="table-responsive">
	<table class="table table-bordered table-hover"> 
		<thead class="thead-light">
			<tr>
				<th> Name </th>
				<th> Type </th>
				<th> Date </th>
				<th> Status </th>
			</tr>
		</thead>
		<tbody>
			{% for event in site.events reversed%}
			<tr> 
				<td scope="row" >
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
				<td>
					{{ event.status }}
				</td>
			</tr>
			{% endfor %}
		</tbody>
	</table>
</div>