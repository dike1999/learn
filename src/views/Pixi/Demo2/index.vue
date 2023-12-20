<template>
  <h1>
    PixiJS {{ VERSION }}
    {{ utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>

  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import { Application, Container, Graphics, VERSION, utils } from "pixi.js";
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

  const myContainer = new Container();
  // 相对于根节点偏移
  myContainer.position.set(40, 40);

  const rectangle = new Graphics();
  rectangle.beginFill(0x000000);
  rectangle.drawRect(0, 0, 64, 64);
  rectangle.endFill();

  const rectangle2 = new Graphics();
  rectangle2.beginFill(0xffffff);
  rectangle2.drawRect(0, 0, 64, 64);
  rectangle2.endFill();
  rectangle2.position.set(20, 20);

  myContainer.addChild(rectangle);
  myContainer.addChild(rectangle2);

  // 自定义Container最后需要添加到app.stage
  app.stage.addChild(myContainer);
  pixiRef.value?.appendChild(app.view);
});
</script>

<style scoped lang="less"></style>
