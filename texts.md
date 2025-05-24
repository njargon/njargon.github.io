---
layout: default
title: Texts
permalink: /texts/
---

<h1 class="category-heading">Articles</h1>

<ul class="article-list">
  {% assign date_format = "%Y-%m-%d" %}
  {% for post in site.posts %}
    <li class="article-item">
      <span class="article-date">{{ post.date | date: date_format }}</span>
      <a class="article-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="article-category">
        {% for category in post.categories %}
          <span class="badge">{{ category }}</span>
        {% endfor %}
      </span>
    </li>
  {% endfor %}
</ul>

