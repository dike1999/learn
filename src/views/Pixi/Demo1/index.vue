<template>
  <h1>
    PixiJS {{ VERSION }}
    {{ utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>

  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import { Application, utils, VERSION, Graphics, Sprite } from "pixi.js";
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

  // 创建一个半径为32px的圆
  const circle = new Graphics();
  circle.beginFill(0xfb6a8f);
  circle.drawCircle(0, 0, 32);
  circle.endFill();
  circle.x = 32;
  circle.y = 32;
  // 添加到app.stage里，从而可以渲染出来
  app.stage.addChild(circle);

  // 创建一个图片精灵
  const avatar = new Sprite.from(
    "https://s2-11673.kwimgs.com/kos/nlav11673/static/img/widgets/header/img/logo-4df74d39.png"
  );
  // 图片宽高缩放0.5
  avatar.scale.set(0.5, 0.5);
  avatar.x = 125;
  avatar.y = 125;
  avatar.interactive = true; // 可交互
  avatar.on("click", () => {
    avatar.alpha = 0.5; // 透明度
  });
  // 修改旋转中心为图片中心
  avatar.anchor.set(0.5, 0.5);
  app.stage.addChild(avatar);
  app.ticker.add(() => {
    // 每秒调用该方法60次(60帧动画)
    avatar.rotation += 0.01;
  });

  app.stage.addChild(avatar);
});
</script>

<style scoped lang="less"></style>
