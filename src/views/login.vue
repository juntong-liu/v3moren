<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = ref({ username: '', password: '' })
const handleLogin = () => {
  // 模拟登录成功
  localStorage.setItem('token', 'demo-token')
  router.push('/')
}
</script>
<template>
    <div class="login_box">
       <h1>我是顶级（就是第一级别） 我在路由routerindex.js里面是一级  配置很重要</h1>
        <form @submit.prevent="handleLogin">
        <input v-model="form.username" placeholder="用户名">
        <input v-model="form.password" type="password" placeholder="密码">
        <button type="submit">登录</button>
    </form>
    </div>
</template>

<style scope="this api replaced by slot-scope in 2.5.0+"  lang="scss">

.login_box{
    background: #999;
    border: 20px solid #ff12c4;
}
</style>