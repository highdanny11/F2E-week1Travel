<template>
  <a href="#" @click.prevent="gotoTop"
  class="position-fixed totopBtn
  d-flex justify-content-center align-items-center
  text-decoration-none rounded-circle">
  <i class="bi bi-arrow-up text-white fs-4"></i>
  </a>
</template>

<script>
export default {
  methods: {
    gotoTop() {
      document.body.scrollTop = 200;
      document.documentElement.scrollTop = 200;
    },
  },
};
</script>
