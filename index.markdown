---
layout: default
---




<div class="row">
  {% for post in site.posts limit:2 %}
  <div class="col col-index">
    <div class="feature">
      <div class="text-center">
        <img src="{{ post.picture | relative_url }}" class="img-fluid" alt="" > 
      </div>
      <div class="feature-content feature-content--centered">
          <div class="feature-date">
            <p>{{ post.date_shown }}</p>
          </div>
          <p>{{ post.title }}</p>
          {% if post.categories %}
            {% for categorie in post.categories %}
              <span class="badge badge-secondary">{{ categorie }}</span>
            {% endfor %}
          {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<div class="row">
  <div class="col col-index">
    <div class="feature">
      <div class="text-center">
        <a href="https://github.com/AtlasOfLivingAustralia/documentation/wiki/LA-Quick-Start-Guide">
          <img src="{{ "/assets/img/home-page/quick-start-guide.png" | relative_url }}" class="img-fluid" alt="" > 
        </a>
      </div>
      <div class="feature-content feature-content--centered">
          <h4>LA Quick Start guide</h4>
          <p>Contact the technical coordinator if you have any questions</p>
      </div>
    </div>
  </div>
  <div class="col col-index">
    <div class="feature">
      <div class="text-center">
        <a href="https://docs.google.com/document/d/1v_j7tHNGmEPu6RH1uv3mCUBc4FzHLmTvcpeLP4MR0o4/edit">
          <img src="{{ "/assets/img/home-page/remote-session-doc.png" | relative_url }}" class="img-fluid" alt="" > 
        </a>
      </div>
      <div class="feature-content feature-content--centered">
        <h4>Technical support sessions</h4>
        <p>Contact the technical coordinator for more information.</p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col col-index">
    <div class="feature-highlight">
      <div class="text-center">
        <a href="">
          <img src="{{ "/assets/img/participants/atlas_living_costa_rica.png" | relative_url }}" class="img-fluid" alt="" > 
        </a>
      </div>
      <div class="feature-content feature-content--centered">
        <h4>
          Highlight on a Living Atlas 
        </h4>
        <p>
          The Atlas of Living Costa Rica was launched in 2006 aiming at providing integrated, free, and open access to data and information about the Costa Rican biodiversity in order to support science, education, and biodiversity conservation. In 2016, it was rebuild with software components developed by the Atlas of Living Australia (ALA). The Atlas is managed by the <b>Biodiversity Informatics Research Center (CRBio)</b> and the <b>National Biodiversity Institute (INBio)</b>.
        </p>
        <p>
          More information <a href="{{ "/participants/atlas_living_costa_rica" | relative_url }}">here</a>
        </p>
      </div>
    </div>
  </div>
</div>	

    