<template>
  <h1>
    PixiJS {{ VERSION }}
    {{ utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>

  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import { Application, VERSION, utils, Graphics } from "pixi.js";
import { onMounted, ref } from "vue";
const pixiRef = ref<HTMLElement>();

onMounted(() => {
  const app = new Application({
    width: 500,
    height: 500,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x1d9ce0,
  });
  pixiRef.value?.appendChild(app.view);

  const graphics = new Graphics();
  // 线框
  graphics.lineStyle(2, 0xffffff, 1);
  // 四边形
  graphics.drawRect(50, 50, 100, 100);
  // 圆形
  graphics.drawCircle(100, 250, 50);
  // 椭圆
  graphics.drawEllipse(300, 250, 80, 50);
  // 圆角矩形
  graphics.drawRoundedRect(50, 340, 100, 100, 16);
  // 星星
  graphics.drawStar(360, 370, 5, 50);
  // 多边形
  graphics.drawPolygon([100, 100, 200, 200, 100, 300]);
  // 贝塞尔曲线
  graphics.bezierCurveTo(100, 240, 200, 200, 240, 100);
  // 圆弧
  graphics.arc(300, 100, 50, Math.PI, 2 * Math.PI);
  app.stage.addChild(graphics);
});
</script>

<style scoped lang="less"></style>
