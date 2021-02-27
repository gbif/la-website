---
layout: default
title: Resources
permalink: /resources/
---

{% assign technical_resources = site.data.resources | where: "list", "technical" %}
{% assign communication_resources = site.data.resources | where: "list", "communication" %}


#### Technical resources
<div class="table-responsive">
	<table class="table table-bordered table-hover"> 
		<thead class="thead-light">
			<tr>
				<th> Name </th>
				<th> Type </th>
				<th> Year </th>
				<th> Licence </th>
			</tr>
		</thead>
		<tbody>
			{% for resource in technical_resources%}
				<tr> 
					<td scope="row" >
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
					<td>
						{{ resource.licence }}
					</td>
				</tr>
			{% endfor %}
		</tbody>
	</table>
</div>

#### Communication resources
<div class="table-responsive">
	<table class="table table-bordered table-hover"> 
		<thead class="thead-light">
			<tr>
				<th> Name </th>
				<th> Type </th>
				<th> Year </th>
				<th> Licence </th>
			</tr>
		</thead>
		<tbody>
			{% for resource in communication_resources %}
				<tr> 
					<td scope="row" >
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
					<td>
						{{ resource.licence }}
					</td>
				</tr>
			{% endfor %}
		</tbody>
	</table>
</div>
