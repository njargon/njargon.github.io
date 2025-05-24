---
layout: default
title: Texts
permalink: /texts/
---

<h1 class="category-heading">Texts</h1>

  {%- if site.posts.size > 0 -%}
  <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2>
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


