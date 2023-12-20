<template>
  <h1>
    PixiJS {{ PIXI.VERSION }}
    {{ PIXI.utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>
  <div style="margin-top: 20px">
    <button class="start-btn" @click="onStart">开始</button>
    <button class="stop-btn" @click="onStop">停止</button>
  </div>
  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import * as PIXI from "pixi.js";
import { onMounted, ref } from "vue";
const pixiRef = ref<HTMLElement>();

const app = ref<PIXI.Application>(); // 一个Pixi应用

function onStart() {
  console.log("onStart");
}
function onStop() {
  console.log("onStop");
}
onMounted(() => {
  app.value = new PIXI.Application({ width: 256, height: 256 });
  pixiRef.value?.appendChild(app.value.view);
});
</script>

<style scoped lang="less">
.start-btn,
.stop-btn {
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px 20px;
  margin-bottom: 30px;
}
.start-btn {
  background-color: #ff0081;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
}
.stop-btn {
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  margin-left: 20px;
  box-shadow: 0 2px 25px rgba(22, 217, 227, 0.5);
}
</style>
