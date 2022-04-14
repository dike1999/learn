<template>
  <div class="home">
    <h1>home page</h1>
    <div class="count" id="count" @click="increment">
      Click
      <span>{{ count }}</span>
      <br />
      <span>{{ state.nested.count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const count = ref(0);
const state = reactive({ nested: { count: 0 }, arr: ["foo", "bar"] });

const increment = () => {
  count.value++;
  state.nested.count += 2;
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
