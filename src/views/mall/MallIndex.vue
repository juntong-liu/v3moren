<template>
    <div class="body">
          <h1>二级地址（我在mall里面我是子级children里面的第一个 我还有两个孩子 一个孙子）</h1>
         <router-link to="/mall/class" >分类</router-link>   ——     <router-link to="/mall/class2">分类2</router-link> ——
            
         <router-view style="margin-top: 30px;"></router-view>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .body{
    background: #0306c4;
    color: #FFF;
    border: 10px #fa1212 dashed;
    padding: 100px;
    box-sizing: border-box;
    a{
        color: red;
    }
  }
</style>