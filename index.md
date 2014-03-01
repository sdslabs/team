---
title: Team SDSLabs
layout: home
---
{% for member in site.data.team %}
<div class="box photo sdslabs col4">
 <img src="pics/{{ member.pic }}" alt="{{ member.name }}">
  <div class="img-bar">
    <span class="img-title">{{ member.name }}</span>
    <span class="img-icons">
      {% for link in member.links %}
      <a href="{{ link[1] }}"><img src="assets/{{ link[0]|downcase }}.png" title="{{ link[0] }}"></a>
      {% endfor %}
    </span>
  </div>
</div>
{% endfor %}