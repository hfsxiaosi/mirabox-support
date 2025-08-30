<template><div><!-- ---
home: true
# heroImage: /images/App-logo.png
# actions:
#   - text: Get Started
#     link: /guide/getting-started.html
#     type: primary
#   - text: Introduction
#     link: /guide/introduction.html
#     type: secondary
# features:
#   - title: Simplicity First
#     details: Minimal setup with markdown-centered project structure helps you focus on writing.
#   - title: Vue-Powered
#     details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
#   - title: Performant
#     details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
#   - title: Themes
#     details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
#   - title: Plugins
#     details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
#   - title: Bundlers
#     details: Recommended bundler is Vite, while Webpack is also supported. Choose the one you like!
footer: Mirabox help documentation | © 2024 Mirabox
--- -->
<div style="text-align: center;">
  <video autoplay loop muted playsinline  width="100%" height="400px">
    <source src="https://cdn1.key123.vip/marketplace/website/video/Light.webm" type="video/webm">
  </video>
</div>
<h1 style="text-align: center; font-size:44px"><b>Help documentation</b></h1>
<p style="text-align: center; font-size:22px; color:#6b8bad">we're here to help you</p>
<router-link to="/faqs/space.html" class="start">
  <p style='font-size:23px'>Start</p>
</router-link>
<hr>
<!-- <div v-for="(item,index) in 10" :key='index'>
  
</div> -->
<div class='content-box'>
  <div class='content-item'>
    <h3>Video Tutorial</h3>
    <p>TThe video tutorial module aims to help you quickly master knowledge and skills in a clear and straightforward way. It covers a range of topics from basic to advanced, suitable for learners of all levels.</p>
  </div>
  <div class='content-item'>
    <h3>FAQs</h3>
    <p>Whether you are a new user or an experienced veteran user, these FAQs will provide you with valuable information and support.</p>
  </div>
  <div class='content-item'>
    <h3>Announcement</h3>
    <p>This is our exclusive space for posting important information, updates and notices. Whether it is about new product features, service changes, or important system announcements, you can get the latest information as soon as possible here.</p>
  </div>
</div>
<!-- URL -->
<p><a href="https://bbs.key123.vip" target="_blank" rel="noopener noreferrer">Contact Us</a></p>
</div></template>



<style scoped>
.start{
  width:160px;
  height:60px;
  display:flex;
  font-weight:bold;
  color:#ffffff;
  justify-content: center;
  align-items: center;
  background-color:#3eaf7c;
  border-radius:12px;
  margin:0 auto;
  text-decoration:none;
  margin-bottom:30px;
}

.start:hover{
  background-color:#349469;
}

.content-box{
  width:100%;
  height:auto;
  display:flex;
  justify-content: space-between;
  align-items:start;
}

.content-item{
  min-width:200px;
  padding:20px;
}

.content-item > p{
  font-size:14px;
}

</style>