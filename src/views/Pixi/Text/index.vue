<template>
  <h1>
    PixiJS {{ VERSION }}
    {{ utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>

  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import { Application, VERSION, utils, TextStyle, Text } from "pixi.js";
import { onMounted, ref } from "vue";
const pixiRef = ref<HTMLElement>();

onMounted(() => {
  const app = new Application({
    width: 300,
    height: 300,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x1d9ce0,
  });
  pixiRef.value?.appendChild(app.view);

  // 基础文字
  const basicText = new Text("老铁666");
  // 自定义文字样式
  const style = new TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: ["#ffffff", "#00ff99"],
    stroke: "#4a1850",
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
  });
  const richText = new Text("老铁666", style);
  app.stage.addChild(richText);
});
</script>

<style scoped lang="less"></style>
