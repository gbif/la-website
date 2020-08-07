---
layout: default
title: Resources
permalink: /resources/
---

# {{ page.title }}

<table> 
	<thead>
		<tr>
			<th> Name </th>
			<th> Type </th>
			<th> Year </th>
		</tr>
	</thead>
	<tbody>
		{% for resource in site.data.resources %}
		<tr> 
			<td>
				<a href="{{ resource.link }}">
					{{ resource.name }}
				</a>
			</td>
			<td> 
				{{ resource.type }}
			</td>
			<td>
				{{ resource.year }}
			</td>
		</tr>
		{% endfor %}
	</tbody>
</table>