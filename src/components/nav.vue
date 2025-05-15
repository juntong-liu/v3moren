<template>
    <div class="app-header">
      <h3>我是公共头部登录页面不需要展示、其他页面要展示</h3> 
       <section>
        <RouterLink to="/mall">商城</RouterLink> -  
        <RouterLink to="/login">登录</RouterLink>  -
        <RouterLink to="/">首页</RouterLink> -
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-header {
  background: #333;
  color: white;
  padding: 1rem;
  section{
    background: #fff;
  }
}
</style>