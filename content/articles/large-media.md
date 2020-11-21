---
title: "Integrating Netlify Large Media"
description: Adding Git LFS to this site
img: /img/large-media.jpg?nf_resize=fit&w=751&h=563
alt: Netlify Large Media
created: "2020-11-20T10:58:51.640Z"
---

I noticed this morning that the images on my homepage were lagging a smidge. Not enough to cause any concerns, but enough to trigger the desire to play with code and possibly learn something.  

I decided to integrate [Netlify Large Media](https://docs.netlify.com/large-media/overview/), their server-side support for [Git LFS](https://git-lfs.github.com/) combined with their image transform service.  If it goes as planned, we'll display images at the sizes needed, instead of having css shrink larger images, which is my go-to. 
