<template>
  <div class="peer">
    <h1>peer page</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Peer from "peerjs";

const peer = ref<Peer>(
  new Peer({
    host: "coturn.coderdi.top",
    path: "peer",
  })
);
</script>

<style scoped lang="less">
.peer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
