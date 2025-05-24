---
layout: default
title: Drawings
permalink: /drawings/
---

<h1 class="category-heading">Drawings</h1>

<ul class="article-list">
  {% assign date_format = "%Y-%m-%d" %}
  {% for post in site.posts %}
    {% if post.categories contains "練習" or post.categories contains "落書き" %}
      <li class="article-item">
        {% if post.thumbnail %}
            <div class="thumbnail-wrapper">
            <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail" class="practice-thumb">
            </div>
        {% endif %}

        <div class="article-info">
            <span class="article-date">{{ post.date | date: date_format }}</span>
            <a class="article-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="article-category">
            {% for category in post.categories %}
                <span class="badge">{{ category }}</span>
            {% endfor %}
            </span>
        </div>
    　</li>
    {% endif %}
  {% endfor %}
</ul>
