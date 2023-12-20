<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="less">
@import "./assets/base.css";

.grid-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  min-height: 36px;

  &:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

a {
  font-size: larger;
  text-decoration: none;
  color: rgb(17, 15, 15);
}

.router-link-active {
  text-decoration: none;
  color: #0c3bf8;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
</style>
