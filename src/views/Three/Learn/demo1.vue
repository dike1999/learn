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

  const cube = createMesh([1, 1, 1], {
    color: "#433F81",
  });
  scene.add(cube);

  const cube01 = createMesh([1, 1, 1], {
    color: "#A49FEF",
    wireframe: true,
    transparent: true,
  });
  scene.add(cube01);

  const cube01_wireframe = createMesh([3, 3, 3], {
    color: "#433F81",
    wireframe: true,
    transparent: true,
  });
  scene.add(cube01_wireframe);

  const cube02 = createMesh([1, 1, 1], {
    color: "#A49FEF",
  });
  scene.add(cube02);

  const cube02_wireframe = createMesh([3, 3, 3], {
    color: "#433F81",
    wireframe: true,
    transparent: true,
  });

  scene.add(cube02_wireframe);

  const bar01 = createMesh([10, 0.05, 0.5], {
    color: "#00FFBC",
  });
  bar01.position.z = 0.5;
  scene.add(bar01);

  const bar02 = createMesh([10, 0.05, 0.5], {
    color: "#ffffff",
  });
  bar02.position.z = 0.5;
  scene.add(bar02);

  // 创建一个基本透视相机 camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 4;

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

    cube01.rotation.x += 0.01;
    cube01.rotation.y += 0.01;

    cube01_wireframe.rotation.x += 0.01;
    cube01_wireframe.rotation.y += 0.01;

    cube02.rotation.x -= 0.01;
    cube02.rotation.y -= 0.01;

    cube02_wireframe.rotation.x -= 0.01;
    cube02_wireframe.rotation.y -= 0.01;

    bar01.rotation.z -= 0.01;
    bar02.rotation.z += 0.01;

    renderer.render(scene, camera);
  };
  render();
};

onMounted(() => {
  init();
});
</script>
<style scoped></style>
