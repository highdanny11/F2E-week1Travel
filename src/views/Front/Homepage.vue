<template>
<!-- 首頁預設頁 -->
  <hotCity></hotCity>
  <hotactivity></hotactivity>
  <hotrestaurant></hotrestaurant>
</template>

<script>
import hotactivity from '@/components/hotActivity.vue';
import hotrestaurant from '@/components/hotRestaurant.vue';
import hotCity from '@/components/hotCity.vue';

export default {
  components: {
    hotactivity,
    hotrestaurant,
    hotCity,
  },
};
</script>
