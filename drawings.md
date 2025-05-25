---
layout: default
title: Drawings
permalink: /drawings/
---

<nav class="top-nav">
    <a href="/about/" class="top-nav-link">about</a>
    <a href="/texts/" class="top-nav-link">texts</a>
    <a href="/drawings/" class="top-nav-link">drawings</a>
</nav>

<h2 class="section-heading">落書き</h2>

{% assign rakugaki_posts = site.posts | where_exp: "post", "post.categories contains '落書き'" %}
{% assign latest_updated_rakugaki = rakugaki_posts | sort: "last_modified_at" | reverse | first %}

<div class="portfolio-grid row-one">
  {% assign count = 0 %}
  {% for post in rakugaki_posts %}
    {% assign count = count | plus: 1 %}
    {% if count <= 2 and post.thumbnail %}
      <div class="portfolio-thumb-wrapper">
        <a href="{{ post.url | relative_url }}">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail" class="portfolio-thumb">
        </a>
        {% if post == latest_updated_rakugaki and post.last_modified_at %}
          <div class="updated-label">更新日：{{ post.last_modified_at | date: "%Y-%m-%d" }}</div>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>


