---
layout: home
---

<div class="container">
<div class="row">
  {% for post in site.posts limit:2 %}
  <div class="col col-index">
    <div class="feature">
      <div class="text-center">
        <a href="{{ post.url | relative_url }}">
          <img src="{{ post.picture | relative_url }}" class="img-fluid" alt="" > 
        </a>
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
</div>
