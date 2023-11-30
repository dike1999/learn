import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Home/index.vue"),
    },
    {
      path: "/webrtc",
      name: "WebRTC",
      component: () => import("../views/WebRTC/record.vue"),
    },
    {
      path: "/three",
      name: "three",
      component: () => import("../views/Three/index.vue"),
    },
    {
      path: "/chatroom",
      name: "ChatRoom",
      component: () => import("../views/ChatRoom/index.vue"),
    },
    {
      path: "/peer",
      name: "Peer",
      component: () => import("../views/Peer/index.vue"),
    },
    {
      path: "/pixi",
      name: "Pixi",
      component: () => import("../views/Pixi/index.vue"),
    },
  ],
});

export default router;
