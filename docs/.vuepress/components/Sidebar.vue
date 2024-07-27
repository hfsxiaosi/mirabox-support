<template>
    <div class="sidebar">
        <slot></slot>
    </div>
</template>
  
  <script>
  export default {
    name: 'Sidebar',
  }
  </script>
  
  <style scoped>
  .sidebar {
    padding: 1rem;
    background-color: #f5f5f5;
  }
  </style>
  