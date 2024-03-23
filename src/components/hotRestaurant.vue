<template>
  <section class="hotRest">
    <div class="container">
      <h2 class="d-flex align-items-center mb-3">
        <div class="squareShapeIcon me-4"></div>
        熱門美食
      </h2>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-2 gx-2">
        <template v-if="data.length !== 0">
          <div class="col" v-for="item in data" :key="item?.RestaurantID">
            <div class="card p-3 boxshadow-m">
              <img
              :src="item?.Picture?.PictureUrl1"
              class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between pt-2 px-0 pb-0">
                <h4 class="card-title text-overflowHiden2 mb-0">
                  {{item?.RestaurantName}}</h4>
                <h3 class="card-footerTitle mb-0 text-info text-overflow">
                  <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{item?.Address}}
                  <!-- 連結 -->
                  <a href="#" class="stretched-link" @click.prevent="showModal(item)"></a>
                </h3>
              </div>
            </div>
        </div>
        </template>
      </div>
    </div>
  </section>
  <modalActRet ref="modalactret"/>
</template>
<script>
import modalActRet from '@/components/modalActRet.vue';
import getAuthorizationHeader from '@/assets/javascript/AuthorizationHeader';

export default {
  components: {
    modalActRet,
  },
  data() {
    return {
      data: [],
      AppID: process.env.VUE_APP_ID,
      AppKey: process.env.VUE_APP_KEY,
    };
  },
  methods: {
    showModal(data) {
      this.$refs.modalactret.opModel(data);
    },
  },
  created() {
    this.$http.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?$top=1000&$format=JSON',
      { headers: getAuthorizationHeader() })
      .then((res) => {
        console.log(res.data);
        this.data = res.data.filter((item) => item.Picture.PictureUrl1 !== undefined);
        this.data.length = 12;
        // 把有照片的活動抓出來，不要重複地區，只要四筆。
      })
      .catch((res) => {
        console.log(res);
      });
  },
};
</script>
