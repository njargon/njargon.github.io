---
layout: default
title: Articles
permalink: /articles/
---

<h1 class="category-heading">Articles</h1>

<!-- カテゴリ一覧 -->
<h2 class="post-list-heading">カテゴリ一覧</h2>
<ul class="post-list">
  {%- for category in site.categories -%}
    <li>
      <a class="post-link" href="/categories/{{ category[0] | uri_escape }}/">
        {{ category[0] }} ({{ category[1].size }})
      </a>
    </li>
  {%- endfor -%}
</ul>

<!-- 記事一覧 -->
<h2 class="post-list-heading">記事一覧</h2>
<ul class="post-list">
  {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
  {%- for post in site.posts -%}
    <li>
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 80 }}</p>
    </li>
  {%- endfor -%}
</ul>

