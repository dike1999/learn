<template>
  <div class="three" ref="threeRef"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
const threeRef = ref<HTMLElement>();

/**
 * 创建材质的方法
 */
const createMesh = (
  boxOptions: number[],
  meshOptions: {
    color: string;
    wireframe?: boolean;
    transparent?: boolean;
  }
) => {
  const geometry = new THREE.BoxGeometry(...boxOptions);
  const material = new THREE.MeshBasicMaterial(meshOptions);
  return new THREE.Mesh(geometry, material);
};

const init = () => {
  // 创建场景
  const scene = new THREE.Scene();

  // 创建一个基本透视相机 camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 4;

  const cube = createMesh([1, 1, 1], {
    color: "#433F81",
  });
  scene.add(cube);

  // 创建一个抗锯齿渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  // 配置渲染器清除颜色
  renderer.setClearColor("#000");
  // 配置渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight - 36);
  // 添加渲染器到DOM
  threeRef.value?.appendChild(renderer.domElement);

  const render = () => {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  render();
};

onMounted(() => {
  init();
});
</script>
<style scoped></style>
