<script setup>
const navItems = [
  { name: '首页', path: '/home' },
  { 
    name: '商城', 
    children: [
      { name: '电子产品', path: '/mall/electronics' },
      { name: '服装', path: '/mall/clothing' }
    ]
  }
]
</script>
<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.name">
        <router-link v-if="!item.children" :to="item.path">
          {{ item.name }}
        </router-link>
        <template v-else>
          <div class="submenu-trigger">{{ item.name }}</div>
          <ul class="submenu">
            <li v-for="child in item.children" :key="child.name">
              <router-link :to="child.path">{{ child.name }}</router-link>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.submenu {
  display: none;
  position: absolute;
}
li:hover .submenu {
  display: block;
}
</style>