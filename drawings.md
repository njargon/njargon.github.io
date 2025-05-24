---
layout: default
title: Drawings
permalink: /drawings/
---

<h1 class="category-heading">Drawings</h1>

<!-- 落書きカテゴリ：ポートフォリオ風グリッド -->
<div class="portfolio-grid">
  {% for post in site.posts %}
    {% if post.categories contains "落書き" %}
      {% if post.thumbnail %}
        <a href="{{ post.url | relative_url }}" class="portfolio-thumb-wrapper">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail" class="portfolio-thumb">
        </a>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<h2 class="section-heading">練習のきじ</h2>

<ul class="article-list">
  {% assign date_format = "%Y-%m-%d" %}
  {% assign practice_posts = site.posts | where_exp: "post", "post.categories contains '練習'" %}
  {% assign first_practice = practice_posts[0] %}
  {% for post in practice_posts %}
    <li class="article-item">
      {% if post == first_practice and post.thumbnail %}
        <div class="thumbnail-wrapper">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail" class="practice-thumb">
        </div>
      {% endif %}

      <div class="article-info">
        <span class="article-date">{{ post.date | date: date_format }}</span>
        <a class="article-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <!-- カテゴリバッジ表示なし -->
      </div>
    </li>
  {% endfor %}
</ul>


