<template>
  <h1>
    PixiJS {{ VERSION }}
    {{ utils.isWebGLSupported() ? "WebGL" : "Canvas" }}
  </h1>

  <div class="pixi" ref="pixiRef"></div>
</template>

<script setup lang="ts">
import { Application, Sprite, VERSION, utils, Loader } from "pixi.js";
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
  const loader = new Loader(); // 自定义的loader

  loader
    .add(
      "kuaishou",
      "https://ali.static.yximgs.com/kos/nlav10758/img/recharge.png"
    )
    .add(
      "avatar",
      "https://p2-pro.a.yximgs.com/uhead/AB/2022/03/12/14/BMjAyMjAzMTIxNDIxMDdfNzYyMTUyMjAxXzJfaGQxNV80MzE=_s.jpg"
    )
    .load(function () {
      const kuaishou = new Sprite(loader.resources["kuaishou"].texture);
      kuaishou.width = 50;
      kuaishou.height = 50;

      const avatar = new Sprite(loader.resources["avatar"].texture);
      avatar.width = 50;
      avatar.height = 50;
      avatar.position.set(50, 50);
      app.stage.addChild(kuaishou);
      app.stage.addChild(avatar);
    });

  // 监听加载事件
  loader.onProgress.add((loader) => {
    console.log(loader.progress);
  });
});
</script>

<style scoped lang="less"></style>
