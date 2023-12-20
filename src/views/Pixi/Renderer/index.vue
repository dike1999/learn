<template>
  <h1>
    PixiJS {{ VERSION }}
    {{ utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>

  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import {
  Application,
  Container,
  VERSION,
  utils,
  autoDetectRenderer,
} from "pixi.js";
import { onMounted, ref } from "vue";
const pixiRef = ref<HTMLElement>();

onMounted(() => {
  const app = new Application({
    width: 200,
    height: 200,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x1d9ce0,
  });
  pixiRef.value?.appendChild(app.view);

  const renderer = new autoDetectRenderer(256, 256, {
    view: pixiRef.value,
  });
  // 创建 Stage
  const stage = new Container();
  // 用 Render 去渲染 Stage
  renderer.render(stage);
  // 把画布重新渲染为500*500大小
  app.renderer.resize(500, 500);
  // 渲染一个容器
  const container = new Container();
  app.renderer.render(container);
});
</script>

<style scoped lang="less"></style>
