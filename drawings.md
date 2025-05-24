---
layout: default
title: Drawings
permalink: /drawings/
---

<h1 class="category-heading">Drawings</h1>

<h2 class="section-heading">落書き</h2>

<div class="tile-gallery">
  {% for post in site.posts %}
    {% if post.categories contains "落書き" and post.thumbnail %}
      <a href="{{ post.url | relative_url }}" class="tile-item">
        <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="tile-thumb">
      </a>
    {% endif %}
  {% endfor %}
</div>





<h2 class="section-heading">練習</h2>

<ul class="article-list">
  {% assign date_format = "%Y-%m-%d" %}
  {% assign practice_posts = site.posts | where_exp: "post", "post.categories contains '練習'" %}
  {% for post in practice_posts %}
    <li class="article-item no-thumbnail">
      <div class="article-info horizontal">
        <span class="article-date">{{ post.date | date: date_format }}</span>
        <a class="article-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </div>
    </li>
  {% endfor %}
</ul>




