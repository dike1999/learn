<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>
  <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <RouterLink to="/">Home</RouterLink>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">
        <RouterLink to="/webrtc">WebRTC</RouterLink>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <RouterLink to="/three">Three</RouterLink>
      </div>
    </el-col>
  </el-row>
  <RouterView />
</template>

<style lang="less">
@import "@/assets/base.css";

.grid-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  min-height: 36px;

  a {
    font-size: larger;
    text-decoration: none;
    color: rgb(10, 10, 10);

    &:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
</style>
