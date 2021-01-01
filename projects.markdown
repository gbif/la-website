---
layout: default
title: Projects
name: Projects
permalink: /projects/
---


<div class="table-responsive">
	<table class="table table-bordered table-hover"> 
		<thead class="thead-light">
			<tr>
				<th> Name </th>
				<th> Funding </th>
				<th> Lead </th>
				<th> Year </th>
				<th> Type </th>
				<th> Status </th>
			</tr>
		</thead>
		<tbody>
			{% for project in site.projects reversed %}
			<tr> 
				<td scope="row" >
					<a href="{{ project.url | relative_url }}">
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
				<td>
					{{ project.status }}
				</td>
			</tr>
			{% endfor %}
		</tbody>
	</table>
</div>