<template>
  <div>{{ name }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref<string>("BasicSkeleton");
</script>
<style scoped></style>
