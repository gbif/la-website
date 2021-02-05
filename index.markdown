---
layout: default
---



<div class="container row">
    <div class="col">
    	{% for post in site.posts limit:1 %}
	    	<a href="{{ post.url | relative_url }}">
	    		<img src="{{ "/assets/img/news-2.png" | relative_url }}" class="img-fluid" alt="" > 
	    	</a>
	    	<div class="carousel-caption d-none d-md-block">
	              <h5>News</h5>
	              <p>{{ post.title }}</p>
	        </div>

		{% endfor %}
   	</div>
    <div class="col">
    	<a href="https://github.com/AtlasOfLivingAustralia/documentation/wiki/LA-Quick-Start-Guide">
    		<img src="{{ "/assets/img/quick-start-guide.png" | relative_url }}" class="img-fluid" alt="" > 
    	</a>
    	<div class="carousel-caption d-none d-md-block">
              <h5>LA Quick Start guide</h5>
              <p>Contact the coordinators for more information</p>
        </div>
    </div>
</div>	

<div class="container row">
    <div class="col">
    	<a href="https://docs.google.com/document/d/1v_j7tHNGmEPu6RH1uv3mCUBc4FzHLmTvcpeLP4MR0o4/edit">
    		<img src="{{ "/assets/img/remote-session-doc.png" | relative_url }}" class="img-fluid" alt="" > 
    	</a>
    	<div class="carousel-caption d-none d-md-block">
              <h5>Technical support sessions</h5>
              <p>Contact the technical coordinator for more information.</p>
        </div>
   	</div>
    <div class="col align-items-center">
    	<a href="https://github.com/AtlasOfLivingAustralia/documentation/wiki/LA-Quick-Start-Guide">
    		<img src="{{ "/assets/img/slack.png" | relative_url }}" class="img-fluid" alt="" > 
    	</a>
    	<div class="carousel-caption d-none d-md-block">
              <h5>Slack channel</h5>
              <p>Please contact the coordinators in order to receive an invitation.</p>
        </div>
    </div>
</div>	

<div class="container row">
    <div class="col">
    	<a href="">
    		<img src="{{ "/assets/img/participants/atlas_living_costa_rica.png" | relative_url }}" class="img-fluid" alt="" > 
    	</a>
   	</div>
    <div class="col">
    	<p>
    		The Atlas of Living Costa Rica was launched in 2006 aiming at providing integrated, free, and open access to data and information about the Costa Rican biodiversity in order to support science, education, and biodiversity conservation. In 2016, it was rebuild with software components developed by the Atlas of Living Australia (ALA). The Atlas is managed by the <b>Biodiversity Informatics Research Center (CRBio)</b> and the <b>National Biodiversity Institute (INBio)</b>.
    	</p>
    </div>
</div>	

    