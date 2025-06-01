---
layout: default
title: Texts
permalink: /texts/
---

<nav class="top-nav">
    <a href="/about/" class="top-nav-link">about</a>
    <a href="/texts/" class="top-nav-link">texts</a> <!-- ← 中央 -->
    <a href="/drawings/" class="top-nav-link">drawings</a>
</nav>

<h2 class="section-heading">きじの一覧</h2>

{%- if site.posts.size > 0 -%}
<ul class="post-list">
  {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
  {% for post in site.posts %}
    {% unless post.categories contains '練習' or post.categories contains '落書き' %}
      <li>
        <span class="post-meta">
          {{ post.date | date: date_format }}
          {% if post.author %}
            ・{{ post.author }}
          {% endif %}
        </span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {% if site.show_excerpts %}
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 80 }}</p>
        {% endif %}
        <hr class="post-divider">
      </li>
    {% endunless %}
  {% endfor %}
</ul>
{%- endif -%}


