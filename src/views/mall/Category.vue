<template>
    <div  >
       <div class="bodybg">
             <h1>---------------------</h1>
             <h1>二级页面可以配置三级入口 我是二级页面的第一个孩子 我想在当前页展示我的孩子 就在下面配置reouterview  点击产品就看到了  我没有默认第一个孩子展示要点击才可以</h1>
            <router-link to="/mall/class/2" >产品</router-link> ----------
            <router-link to="/login" >返回登录</router-link>
        </div>

        
             <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bodybg{
    background: rgb(87, 248, 55);border: 10px solid #000;
    padding: 30px;
   box-sizing: border-box;
}
</style>