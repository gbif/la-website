---
layout: default
title: News
permalink: /news/
---


{% for post in site.posts %}
<div class="news row feature">
	<div class="col">
		 <h3>
		 	<a href="{{ post.url | relative_url }}">
		 		{{ post.title }}
		 	</a>
		 </h3>
		 <p class="short-description">{{ post.summary }}</p>
		 <p class="published-by"> Published {{ post.date_shown }} by {{ post.authors}} </p>
	</div>
</div>
{% endfor %}