---
layout: default
title: Drawings
permalink: /drawings/
---

<h1 class="category-heading">Drawings</h1>

<h2 class="section-heading">落書きのきじ</h2>

<div class="masonry-grid">
  {% for post in site.posts %}
    {% if post.categories contains "落書き" and post.thumbnail %}
      <div class="masonry-item">
        <a href="{{ post.url | relative_url }}" class="masonry-link">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="masonry-img">
          <div class="masonry-caption">
            <span class="masonry-date">{{ post.date | date: "%Y-%m-%d" }}</span><br>
            <span class="masonry-title">{{ post.title }}</span>
          </div>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>



<h2 class="section-heading">練習のきじ</h2>

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




