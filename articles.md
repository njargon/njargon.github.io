---
layout: default
title: Articles
permalink: /articles/
---

<h1 class="category-heading">Articles</h1>

ここに記事一覧や説明文を載せます。

<ul class="post-list">
  {% for post in site.posts %}
    {% unless post.categories contains '練習' %}
      <li>
        <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
        <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 80 }}</p>
        <hr class="post-divider">
      </li>
    {% endunless %}
  {% endfor %}
</ul>
