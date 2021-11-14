<template>
  <modelDetail ref="model"></modelDetail>
  <button @click="showref()">123</button>
</template>

<script>
import modelDetail from '../components/modalDetail.vue';

export default {
  components: {
    modelDetail,
  },
  methods: {
    showref() {
      console.log(this.$refs.model.opModel());
    },
  },
};
</script>
