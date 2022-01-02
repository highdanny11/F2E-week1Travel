<template>
  <section class="hotActivitly">
    <div class="container">
      <h2 class="d-flex align-items-center mb-3">
        <div class="triangleShapeIcon me-4"></div>
        熱門活動
      </h2>
      <div class="row gx-md-17 gx-lg-21 gy-3x5 gy-lg-11">
        <div class="col-md-6" v-for="item in data" :key="item.ID">
          <div
          class="card mb-3 w-100 py-lg-4 ps-lg-4 pe-lg-6 p-3 border-0 boxshadow-m">
            <div class="row g-0 gx-4">
              <div class="col-lg-5 col-4 overflow-hidden">
                <img class="card-img" :src="item.Picture.PictureUrl1" :alt="item.Location">
              </div>
              <div class="col-lg-7 col-8">
                <div class="card-body h-100 p-0
                d-flex d-lg-block flex-column justify-content-between">
                  <h5 class="card-title text-overflow">{{item.ActivityName}}</h5>
                  <!-- 卡片連結用 -->
                  <a href="#" class="stretched-link" @click.prevent="showModal(item)"></a>
                  <p class="card-text text-overflowHiden5 text-success d-none d-lg--webkit-box">
                    {{item.Description}}
                  </p>
                  <div class="d-flex align-items-center justify-content-lg-between">
                    <h3 class="card-footerTitle">
                      <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{item.Location}}
                    </h3>
                    <button class="btn btn-outline-primary px-5 py-2 d-none d-lg-block">
                      活動詳情</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <modalActRet ref="modalactret" />
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
    this.$http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=90&$format=JSON',
      { headers: getAuthorizationHeader() })
      .then((res) => {
        this.data = res.data.filter((item) => item.Picture.PictureUrl1 !== undefined);
        this.data.length = 4;
        console.log(this.data);
        // 把有照片的活動抓出來，不要重複地區，只要四筆。
      })
      .catch((res) => {
        console.log(res);
      });
  },
};
</script>
