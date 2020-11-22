---
title: "Setting up Netlify Large Media"
description: Playing with code and learning something new
img: /img/large-media.jpg?nf_resize=fit&w=751&h=563
alt: Netlify Large Media
created: "2020-11-20T10:58:51.640Z"
---

I noticed this morning that the images on my homepage were lagging a smidge. Not enough to cause any concerns, but enough to trigger a desire to play with code and possibly learn something new.   

I decided to integrate [Netlify Large Media](https://docs.netlify.com/large-media/overview/), their server-side support for [Git LFS](https://git-lfs.github.com/) combined with their image transform service.  If it goes as planned, I'll serve images at the sizes needed, instead of having css shrink larger images, which is normally my go-to. 

 ## Installation
 As you’ve come to expect, [Netlify’s Large media docs](https://docs.netlify.com/large-media/requirements-and-limitations/#requirements) are quite thorough. Phew! There are some requirements before installing, but I found most of them were filled already by having CD (continuous deployment) turned on. Netlify CLI was the only requirement I didn’t have, but installation was easy peasy. 

 I ran into a couple of bumps along the way, so I’m sharing them here in case they help anyone else in their journey. For context, my site is based on the [Nuxt Content example](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/).

 ### Step 1:
 Installing Git LFS. No problems there.
 ```
 brew install git-lfs
 ```

 ### Step 2:
 Set up Git LFS for my user account. This is where I hit my first bump. 
 Error received:
 ```
 Hook already exists: pre-push
 ```

 I don’t have a lot of experience with hooks, but understand the basic premise. As far as I knew, I didn’t have any hooks on my site. I did a little digging and found that [husky](https://www.npmjs.com/package/husky) set up some initial hook files in the `.git` folder, which would allow me to easily set up and run hooks through `package.json`. I haven’t used that feature yet, so allowed Git LFS to override my hooks. This could have caused problems that I'm not aware of, but I went with it because this is how I learn.
 ```
 git lfs update --force
 ```

 ### Step 3:
 Tell LSF what files to track. It seems like LFS was built to track larger files like `.psd`, but I want it to track every non-svg image so I can use Netlify’s image transform function. I decided to track all the things. You see [later in the set up process](https://docs.netlify.com/large-media/setup/#configure-file-tracking) that there are ways to be more specific with the files you want to track.
 ```
 git lfs track "*.png”
 git lfs track "*.jpg”
 git lfs track "*.jpeg”
 ```

 ### Step 4:
 Now that things are tracking correctly, I committed the changes and let Netlify deploy. Then the next error.

 ### Step 5:
 ~~Tell Netlify that I want to use Git LFS.  The deploy failed quickly, throwing an error of `error: external filter ‘git-lfs filter-process’ failed`. Some googling led me to [Netlify’s community forums](https://community.netlify.com/t/builds-fail-after-new-commit-to-git-lfs/1362/7). This was an easy fix… log into Netlify, go to /Settings > Build & deploy > Environment > Environment variables/ and /Edit Variables/. Then set `GIT_LFS_ENABLED` to `true`.~~

 ### Step 5a:
 I realized later that I forgot to install Netlify LM plugin, which counters step 5 down the road. Sorry for the confusion, thanks for going along for the ride with me.
 ```
 netlify plugins:install netlify-lm-plugin
 netlify lm:install
 ```
 At this point you’re prompted to run another command to run Netlify LM locally. Copy + paste.

 ### Step 6:
 Your requirements are in place, time to setup. [Netlify setup docs](https://docs.netlify.com/large-media/setup/)

 ---

 ### Uh oh, a curve ball
 One item to note here is that you’ll need to migrate any files you’ve previously committed in your repo so they are moved to LFS.

 ### Curve ball, Part 1: 
 I made the mistake of running `git lfs migrate import` without any optional flags, which converted EVERY FILE. This might have been an error only on my end, but I don't recommend it. 
 DON'T DO THIS without flags:
 ```
 git lfs migrate import
 ```

 ### Curve ball, Part 2: 
 Although it took some time to sync everything, I was able to save things and get the repo back in order.  Luckily, I saw the size of the commit and didn’t push. Then `git reset`  back to the pre-mistake commit.
 ```
 git reset
 ```

 ### Curve ball, Part 3:
 I properly ran `git lfs migrate import --include="*.png,*.jpg,*.jpeg"` to only convert the image filetypes. 
 ```
 git lfs migrate import --include="*.png,*.jpg,*.jpeg"
 ```

 ### Curve ball, Part 4:
 I found that `.lfsconfig`  was missing, likely from my reset. Running `netlify lm:setup` again added it back with the path to access the stored images. 
 ```
 netlify lm:setup
 ```

 ### Curve ball, Part 5:
 `git lfs push --all origin` to push the lfs files. This requires you to make some other change and push it, otherwise git won’t see a change.
 ```
 git lfs push --all origin
 ```

 ### Curve ball, Part 6: 
 Breathe deep

 ---

 ### Step 7: 
 Now that everything is installed, I got back to the original purpose. Here’s where you apply the parameters to serve transformed images.  Append this to each call to an image file.
 ```
 ?nf_resize=fit&w=300&h=300
 ```

 For example,
 ```
 img/img_name.png?nf_resize=fit&w=300&h=300
 ```

 That did the trick for me! Now every deploy automagically moves images into LFS. 
