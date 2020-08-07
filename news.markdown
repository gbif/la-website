---
layout: default
title: News
permalink: /news/
---

# {{ page.title }}

{% for post in site.posts %}
 <h2><a href="{{ post.url }}">
 {{ post.title }}
 </a></h2>
  <p>{{ post.summary }}</p>
  <p> Published {{ post.date_shown }} by {{ post.authors}} </p>
{% endfor %}