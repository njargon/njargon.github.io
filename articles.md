---
layout: default
title: Articles
permalink: /articles/
---

<h1 class="category-heading">記事一覧</h1>
<div class="post-content">

{% for category in site.categories %}
  {% assign category_name = category[0] %}
  {% assign posts_in_category = category[1] %}
  
  <h2>{{ category_name }}</h2>

  {% assign sorted = posts_in_category | sort: "date" | reverse %}
  {% assign current_ym = "" %}

  {% for post in sorted %}
    {% assign post_ym = post.date | date: "%Y年%m月" %}
    {% if post_ym != current_ym %}
      {% assign current_ym = post_ym %}
      <h3>{{ current_ym }}</h3>
    {% endif %}

    <ul>
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="font-size: 0.85em; color: #888;">（{{ post.date | date: "%Y-%m-%d" }}）</span>
      </li>
    </ul>
  {% endfor %}

{% endfor %}

</div>
