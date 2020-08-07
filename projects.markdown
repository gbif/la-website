---
layout: default
title: Projects
name: Projects
permalink: /projects/
---

# {{ page.title }}

<table> 
	<thead>
		<tr>
			<th> Name </th>
			<th> Funding </th>
			<th> Lead </th>
			<th> Year </th>
			<th> Type </th>
		</tr>
	</thead>
	<tbody>
		{% for project in site.projects %}
		<tr> 
			<td>
				<a href="{{ project.url }}">
					{{ project.title }}
				</a>
			</td>
			<td> 
				{{ project.funding }}
			</td>
			<td>
				{{ project.lead }}
			</td>
			<td> 
				{{ project.year }}
			</td>
			<td>
				{{ project.type }}
			</td>
		</tr>
		{% endfor %}
	</tbody>
</table>