<script setup lang="ts">
import navdata from '@/components/nav.vue'; 

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const noHeaderPaths = ['/login']
const route = useRoute()

const showHeader = computed(() => !noHeaderPaths.includes(route.path))

console.log('当前环境变量:', import.meta.env)
console.log('API 地址:', import.meta.env.VITE_API_BASE_URL)
</script>

<template>
     <navdata v-if="showHeader"></navdata>
    <router-view></router-view>
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
</style>
