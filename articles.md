---
layout: default
title: Articles
permalink: /articles/
---

<h1 class="category-heading">記事一覧</h1>

<div class="post-content">

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% assign grouped_by_category = sorted_posts | group_by: "category" %}

{% for category_group in grouped_by_category %}
  <h2>{{ category_group.name }}</h2>

  {% assign current_year_month = "" %}
  {% for post in category_group.items %}
    {% assign post_ym = post.date | date: "%Y-%m" %}
    {% if post_ym != current_year_month %}
      {% assign current_year_month = post_ym %}
      <h3>{{ post.date | date: "%Y年%m月" }}</h3>
    {% endif %}

    <ul>
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="font-size: 0.85em; color: #888;">（{{ post.date | date: "%Y-%m-%d" }}）</span>
      </li>
    </ul>
  {% endfor %}
{% endfor %}

</div>
