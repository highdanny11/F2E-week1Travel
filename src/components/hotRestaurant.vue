<template>
  <section class="hotRest">
    <div class="container">
      <h2 class="d-flex align-items-center mb-3">
        <div class="squareShapeIcon me-4"></div>
        熱門美食
      </h2>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-2 gx-2">
        <div class="col" v-for="item in data" :key="item.ID">
          <div class="card p-3 boxshadow-m">
            <img
            :src="item.Picture.PictureUrl1"
            class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column justify-content-between pt-2 px-0 pb-0">
              <h4 class="card-title text-overflowHiden2 mb-0">
                {{item.Name}}</h4>
              <h3 class="card-footerTitle mb-0 text-info text-overflow">
                <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{item.Address}}
                <!-- 連結 -->
                <a href="#" class="stretched-link" @click.prevent="showref(item)"></a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <modalFood ref="modelfood"/>
</template>
<script>
import JsSHA from 'jssha';
import modalFood from '@/components/modalFood.vue';

export default {
  components: {
    modalFood,
  },
  data() {
    return {
      data: [],
      AppID: process.env.VUE_APP_ID,
      AppKey: process.env.VUE_APP_KEY,
    };
  },
  methods: {
    getAuthorizationHeader() {
      const GMTString = new Date().toGMTString();
      const ShaObj = new JsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(this.AppKey, 'TEXT');
      /* eslint-disable */
      ShaObj.update('x-date: ' + GMTString);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = 'hmac username=\"' + this.AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
      return { Authorization, 'X-Date': GMTString };
    },
    showref(data) {
      this.$refs.modelfood.opModel(data)
    },
  },
  created() {
    let area = ['Taichung', 'NewTaipei', 'NantouCounty', 'Tainan','HualienCounty','ChiayiCounty'];
    let url = area.map(item => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${item}?$top=50&$format=JSON`)
    url.forEach(item =>
    this.$http.get(item, { headers: this.getAuthorizationHeader() })
    .then((res)=>{
      // 取出有照片資料
      let arry = res.data.filter(item => item.Picture.PictureUrl1 !== undefined);
      //留兩筆
      arry.length = 2;
      this.data.push(...arry)
    })
    .catch((res)=>console.log(res)))
  },
}
</script>