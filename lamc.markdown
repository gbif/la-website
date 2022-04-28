---
layout: default
title: Management Committee
permalink: /about/lamc/
---

<h4>About the Living Atlases Management Committe</h4>

<p> The LAMC is responsible for the global management of the LA community. It establishes direction for the community with the help of both coordinators. Based on the Kilkenny accord, its responsibilities are:</p>

<ul>
	<li>Setting direction and strategy for the Living Atlas Platform;</li>
	<li>Setting direction and priorities for the Living Atlas Coordinator Role/Positions;</li>
	<li>Liaison with GBIF Secretariat and other GBIF Nodes;</li>
	<li>Advocating and promoting the benefits of the Living Atlas software and community, namely on the Research Infrastructures Landscape on Environment; </li>
	<li>Engaging and developing the community activities including workshops and conferences;</li>
	<li>Discussing and whenever possible addressing nodes and general issues;</li>
	<li>Producing recommendations and (wish list) priorities;</li>
	<li>Forecasting and developing roadmaps;</li>
	<li>Fostering the Community of Practice for collaborative development;</li>
	<li>Looking for opportunities to secure stable funding for ongoing collaborative work;</li>
	<li>Identifying and maintaining communication channels with the community;</li>
	<li>Identifying training needs to the MC;</li>
	<li>Approving any financial expenses.</li>
</ul>

<h4>The Living Atlases Management Committee (LAMC)</h4>

<div class="table-responsive">
	<table class="table table-bordered table-hover">
		<thead class="thead-light">
			<tr>
	    		<th>Name</th>
	    		<th>Institution</th>
	  		</tr>
	  	</thead>
	  	<tbody>	  			
	  		{% for member in site.data.lamc %}
				<tr> 
					<td scope="row" >
						{{ member.name }}
					</td>
					<td> 
						{{ member.institution }}
					</td>					
				</tr>
			{% endfor %}
		</tbody>
	</table>
</div>

    
