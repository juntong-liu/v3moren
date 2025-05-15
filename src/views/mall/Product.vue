<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
// 获取路由参数（如 /mall/electronics/123）
const { category, productId } = route.params
</script>
<template>
    <div class="body2">
        <h1>------------------------------------</h1>

            <h1>我是三级页面（没有设置默认展示第一个孩子）要点击才能看到</h1>

            <h3>当前商品分类：{{ category }}</h3>
            <h4>商品ID：{{ productId }}</h4>
    </div>
  <!-- 商品详情内容 -->
</template>

<style lang="scss">
 .body2{
   background: #ebabab;
   color: #000;
   padding: 30px;
   box-sizing: border-box;
   a{
    color: #000;
   }
 }
</style>