<template>
  <div class="home">
    <h1>home page</h1>
    <div class="count" @click="handleSubmit">
      Click
      <span>{{ count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);

const handleSubmit = () => {
  count.value++;
};
</script>

<style scoped lang="less">
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.count {
  font-size: 20px;

  span {
    color: blue;
  }
}
</style>
