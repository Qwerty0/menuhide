menuhide
========

You go to twitter.com. You start reading someone's tweets and scrolling down, and that menu bar at the top of the page starts scrolling with you, staying at the top of your browser window.

Maybe you're on a small screen. Maybe there's already too much clutter in the site design and you don't need another piece of useless cruft eating up screen space. If it was just one site that got this idea, that'd be okay, but this is a distinct trend these days. We get it, you need us to be seeing your branding as much as humanly possible. But we don't have to lie down and take it.

This is a little tool that can recognize what site you're on and issue some quick javascript that will hide the menu bar. It depends on the exact structure of each site's HTML, so it's not universal and it can be broken at any time by a redesign.

Its original form is a bookmarklet: copy the text in `bookmarklet.js` and use it as the url of a bookmark. Then click it whenever you're on an annoying site. I've also got it working with Greasemonkey now, and you can find those scripts in the `grease/` directory. But there are some bugs, so the bookmarklet works best.

Supported sites as of 2014-08-05:
- twitter.com
- nytimes.com
- quora.com
- arstechnica.com
- knowyourmeme.com
- dailydot.com

