---
layout: default
title: About
permalink: /about/
---

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-about" aria-selected="true">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-lamc-tab" data-toggle="pill" href="#pills-lamc" role="tab" aria-controls="pills-lamc" aria-selected="false">Management Committee</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-coordinators-tab" data-toggle="pill" href="#pills-coordinators" role="tab" aria-controls="pills-coordinators" aria-selected="false">Coordinators</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-participants-tab" data-toggle="pill" href="#pills-participants" role="tab" aria-controls="pills-participants" aria-selected="false">Participants</a>
  </li>
</ul>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
        <h4>About the Living Atlases Community</h4>
        <p>As GBIF nodes, one of our goals is to highlight our publishers and their data. To achieve this, the Atlas of Living Australia (ALA) developed a huge open source platform with several modules re-usable by other organizations. Since 2013, the community around this tool has organized technical workshops to present ALA modules to other institutions that wanted to implement it, to improve already existing national data portals and to learn from each other’s achievements.</p>
       	<p> In order to help new users but also to keep on assisting the experienced ones, we try to arrange at least one workshop per year around specific modules of the platform (e.g. species module, spatial portal, etc.). These meetings are really motivating for new users because they can actually realise that, with some developments, they will be able to have a powerful tool running. And at the same time, these training activities are also very productive for partners with ALA portals already running as they have the opportunity to share doubts and ideas, solve technical issues, get assistance from the ALA developers’ team and -in consequence - move forward on the developments of their national data portals. Furthermore, during these technical trainings, we get ideas from other projects and allow the nodes to keep on working significantly on their own. </p>
        <p>Thanks to the previous meetings and other engagements arranged around this topic, at least 11 data portals using ALA technology have been released in production since 2014. Other are still under development (some of them are already listed on the new GBIF web page). Katia Cezón from GBIF Spain created a Carto map showing countries with ALA installation or interest in the ALA infrastructure.</p>
        <p>On this website, you will find documentation and information about participants and the community but also ALA tools. You will be able to access the materials from past events but also news about future events and different ways to directly talk with members of the community (through HipChat or mailing list).</p>
        <p>You will also be able to see the community in action because we are a group of developers that love to work together and improve tools to facilitate a free and open access to biodiversity data.</p>
        <h4>The community in action</h4>
    </div>
    <div class="tab-pane" id="pills-lamc" role="tabpanel" aria-labelledby="pills-lamc-rab">
        <h4>About the Living Atlases Management Community</h4>
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
	</div>
    <div class="tab-pane" id="pills-coordinators" role="tabpanel" aria-labelledby="pills-coordinators-tab">
		<h4>Coordinator roles and duties</h4>
        <p> The coordination of the LA is accomplished by two coordinators: </p>
        <ol>
        	<li>The technical coordinator. Their work focuses on all the technical duties with the endorsement  of the community. They are the main contact within the Change Advisory Board from the Atlas of Living Australia team.</li>
        	<li>The administrative coordinator. Their work focuses on all the administrative duties with the endorsement of the community. They are the initial contact for new participants.</li>
        </ol>
        <p>The key duties of these two positions will include supporting the implementation of the Living Atlas Community of Practice, and in particular:</p>
        <p> Technical duties (technical coordinator): </p>
        <ol>
        	<li>Facilitate the development of a shared roadmap;</li>
        	<li>Support developers of the community (technical point of contact);</li>
        	<li>Maintain a profile of implementations of LA;</li>
        	<li>Assist the development of documentation;</li>
        	<li>Be part of the Change Advisory Board of Atlas of Living Australia;</li>
        </ol>
        <p>Administrative duties (administrative coordinator):</p>
        <ol>
        	<li>Work with the LA community to develop a governance model that is acceptable to the current members;</li>
        	<li>Support the development and maintenance of training, documentation;</li>
        	<li>Management of the LA web site and social networks;</li>
        	<li>Coordination of the delivery of regular workshops and conferences;</li>
        	<li>Report to GBIF and other financially contributing partner organisations as required;</li>
        </ol>
    </div>
    <div class="tab-pane" id="pills-participants" role="tabpanel" aria-labelledby="pills-participants-tab">
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
							<a href="{{ participant.url }}">
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
    </div>
</div>

