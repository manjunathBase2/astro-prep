---
layout: default
title: Home
---

# My DSA Notes

## Fundamentals
{% for item in site.fundamentals %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}

## Data Structures
{% for item in site.datastructures %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}

## Algorithms
{% for item in site.algorithms %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}

## Misc
{% for item in site.misc %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}

## Resources
{% for item in site.resources %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}


Explore my notes:

- [Fundamentals](/01-Fundamentals/)
- [Data Structures](/02-DataStructures/)
- [Algorithms](/03-Algorithms/)
- [Miscellaneous](/04-Misc/)