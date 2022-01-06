<template>
  <section class="recommedStay">
    <div class="container">
      <h2 class="d-flex align-items-center mb-3">
        <div class="squareShapeIcon me-4"></div>
        推薦住宿
      </h2>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-2 gx-2">
        <div class="col" v-for="item in data" :key="item.ID">
          <div class="card p-3 boxshadow-m">
            <img
            :src="item.Picture.PictureUrl1"
            class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column justify-content-between pt-2 px-0 pb-0">
              <h4 class="card-title text-overflowHiden2 mb-0">
                {{item.HotelName}}</h4>
              <h3 class="card-footerTitle mb-0 text-info text-overflow">
                <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{item.Address}}
                <!-- 連結 -->
                <a href="#" class="stretched-link" @click.prevent="showModal(item)"></a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <modalActRet ref="modalactret"/>
</template>

<script>
import getAuthorizationHeader from '@/assets/javascript/AuthorizationHeader';
import modalActRet from '@/components/modalActRet.vue';

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
    const area = ['Taichung', 'NewTaipei', 'NantouCounty', 'Tainan', 'HualienCounty', 'KinmenCounty'];
    const url = area.map((item) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${item}?$top=20&$format=JSON`);
    url.forEach((item) => {
      this.$http.get(item, { headers: getAuthorizationHeader() })
        .then((res) => {
          const arry = res.data.filter((hotelData) => hotelData.Picture.PictureUrl1 !== undefined);
          arry.length = 2;
          this.data.push(...arry);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>
