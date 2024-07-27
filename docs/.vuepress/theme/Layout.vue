<template>
    <div id="app">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { Content } from '@vuepress/client'
  export default {
    components: {
      Header,
      Footer,
    },
  }
  </script>
  
  <style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  header, footer {
    flex-shrink: 0;
  }
  
  main {
    flex-grow: 1;
  }
  </style>
  