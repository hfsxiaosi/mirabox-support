<template>
    <header>
      <h1>自定义收索部分</h1>
    </header>
  </template>
  
  <script setup lang="ts">
    import {ref} from 'vue'
    const name = ref('Header')
  </script>
  
  <style scoped>
  /* 这里是你的头部样式 */
  header {
    background-color: #865a5a;
    padding: 16px;
    text-align: center;
  }
  </style>
  