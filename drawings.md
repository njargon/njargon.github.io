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

<div class="tile-gallery">
  {% for post in rakugaki_posts %}
    {% if post.thumbnail %}
      <div class="tile-item-wrapper">
        <a href="{{ post.url | relative_url }}" class="tile-item">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="tile-thumb">
        </a>
        {% if post == latest_updated_rakugaki and post.last_modified_at %}
          <div class="updated-label">更新日：{{ post.last_modified_at | date: "%Y-%m-%d" }}</div>
        {% endif %}
      </div>
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
