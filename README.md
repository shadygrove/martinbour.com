# martinbour.com
This is the web site application for Martin Bour
To view the live site visit: http://shadygrove.github.io/martinbour.com/

# To Do List
- [Setup DNS host](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/)

# Who is this for?
It's really just for Martin so he can have a web page using GitHub pages and not pay for hosting

# What is it?
It's just a static web application started with a GitHub pages template and running Jekyll

# When was it created?
Started in April of 2015 when Martin decided to shut down his old programming blog that was running on BlogEngine.NET.

# Why is this here?
It's really just for me.  If you are looking at this, I can't think of any real reason why you would want to fork my code, but whatever.

# Notes from setup
Run site locally with Jekyll  - “bundle exec jekyll serve”

Basic setup instructions - you can use a pre-built template and a “gh-pages” branch will automatically be identified and serve as a web page

Jekyll - a simple, static, blog-aware web framework built on Ruby-on-Rails
Every GitHub page is run through Jekyll, so “Simply start committing Jekyll formatted files and you'll be using Jekyll in no time.”

It may be good to install Jekyll locally for development, instructions here.
Basics: 
Install Ruby: used RVM (Ruby Version Manager)
Install Bundler for Ruby  “gem install bundler”
Add Jekyll to project
Create gem file “bundler init”
Add “gem 'github-pages” to the GemFile
Run “bundle install”: I received an error here and had some problems that really held me up.  I was on using Ruby 1.9.3 and installed 2.2.2 using RVM (version mgr).  This still did not work.  In the end, I had to install xcode developer tools…
xcode-select --install which will create install dialog
Run site locally with Jekyll  - “bundle exec jekyll serve”

Other Notes:
Text Editor - Sublime Text 2 (supports simple projects)

