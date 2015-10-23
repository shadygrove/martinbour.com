---
layout: main
title: Sample Post
---

This is my first Jekyll post, and will work as a sample for future posts.

{{excerpt_separator}}

## This post is written in Markdown. (H2)

### Site Variables (H3)
site.time: {{ site.time }}  
site.pages: (not used here)  
site.posts: (not used here)  
site.related_posts {{ site.related_posts }}  
site.static_files: (not used here)  
site.html_pages (not used here)
site.collections {{ site.collections }}  
site.data {{ site.data }}  
site.documents {{ site.documents }}  
site.categories {{ site.categories }}  
site.[CONFIGURATION_DATA]  
- site.url: {{ site.url }}

### Page Variables
page.content: (not used here)  
page.title: {{ page.title }}  
page.excerpt: {{ page.excerpt }}  
page.url: {{ page.url }}  
page.date: {{ page.date }}  
page.id: {{ page.id }}  
page.categories: {{ page.categories }}  
page.tags: {{ page.tags }}  
page.path: {{ page.path }}  
page.next: {{ page.next }}  
page.previous: {{ page.previous }}  

### Syntax Highlighting
