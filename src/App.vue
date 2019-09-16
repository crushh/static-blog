<template>
  <div id="app">
    <nav_head></nav_head>
    <router-view/>
    
  </div>
</template>

<script>
  import nav from './components/headerBlog'
  export default{
    name:'app',
    components:{
      "nav_head":nav
    }
  }
</script>

<style>

</style>
