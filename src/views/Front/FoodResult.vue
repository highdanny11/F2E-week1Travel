<template>
  <section class="resultList" v-if="!notfound">
    <div class="container position-relative">
    <Loading :active="isLoading" :is-full-page="false">
      <div class="d-flex align-items-center">
        <div class="squareShapeIcon-xl spinner-grow"></div>
        <div class="triangleShapeIcon-xl mx-10 spinner-grow rounded-0"></div>
        <div class="roundShapeIcon-xl spinner-grow"></div>
      </div>
    </Loading>
      <h2 class="d-flex align-items-center mb-3">
        <div class="squareShapeIcon me-4"></div>
        {{option === 'all' ? '美食住宿' : option === '美食' ? '美食' : '住宿'}}
      </h2>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-2 gx-2">
        <div class="col" v-for="item in data" :key="item.ID">
          <div class="card p-3 boxshadow-m">
            <img
            :src="item.Picture.PictureUrl1 === undefined
            ? require('@/assets/img/notfound.jpg')
            :item.Picture.PictureUrl1"
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
  <!-- 找不到訊息 -->
  <section class="container mt-10" v-if="notfound">
    <div class="d-flex w-50 mx-auto justify-content-center">
      <div class="notfoundIcon me-3">
        <i class="bi bi-umbrella fs-5 text-white"></i>
      </div>
      <h2 class="fs-4 text-secondary">Oops!<br>
      <span class="text-success fs-6">很抱歉，找不到符合此搜尋相關的內容。</span></h2>
    </div>
  </section>
  <modalLive ref="modellive"/>
  <modalFood ref="modelfood"/>
</template>

<script>
import JsSHA from 'jssha';
import modalLive from '@/components/modalLive.vue';
import modalFood from '@/components/modalFood.vue';

export default {
  inject: ['reload'],
  components: {
    modalLive,
    modalFood,
  },
  data() {
    return {
      data: [],
      option: '',
      area: '',
      isLoading: false,
      notfound: false,
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
    sortFoodLive(option,area){// 分類API
      switch(option){
        case'all':
        if(area === 'all') {
          // 都是all就回到美食住宿首頁
          this.$router.push('/FoodLive')
        }else{
          // 美食住宿，但有地區
          this.getAreaAllFoodLive(area);
        }
        break;
        case'美食':
        if(area === 'all') {
          //取住宿所有資料
          this.getALLFood()
        }else{
          // 美食住宿，但有地區
          this.getAreaFood(area);
        }
        break;
        case'住宿':
        if(area === 'all') {
          //取住宿所有資料
          this.getAllLive()
        }else{
          // 美食住宿，但有地區
          this.getAreaLive(area);
        }
        break;
      }
    },
    getAreaAllFoodLive(area) {// 抓取地區所有美食住宿
    this.isLoading = true;
      let foodUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${area}?$top=30&$format=JSON`
      let liveUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${area}?$top=30&$format=JSON`
      Promise.all([this.$http.get(foodUrl),this.$http.get(liveUrl), { headers: this.getAuthorizationHeader() }])
        .then(([res1, res2])=>{
          this.data.push(...res1.data, ...res2.data);
          this.isLoading = false;
          this.notfound = false;
        })
        .catch((res)=>{
          console.log(res);
          this.isLoading = false;
          this.notfound = true;
        })
    },
    getAreaLive(area){// 美食住宿，但有地區
    this.isLoading = true;
      let liveUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${area}?$top=60&$format=JSON`
      this.$http.get(liveUrl, { headers: this.getAuthorizationHeader() })
      .then((res) =>{
        this.data = res.data;
        this.isLoading = false;
        this.notfound = false;
      })
      .catch((res)=>{
        console.log(res);
        this.notfound = true;
        this.isLoading = false;
      })
    },
    getAllLive(){//取住宿所有資料
    this.isLoading = true;
    // 暫時，先取列表中這些縣市住宿資料當作全部，加入頁碼功能後再換
    let area = ['Taichung', 'NewTaipei', 'NantouCounty', 'Tainan','HualienCounty','ChiayiCounty'];
    let url = area.map(item => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${item}?$top=60&$format=JSON`)
    url.forEach(item =>
    this.$http.get(item, { headers: this.getAuthorizationHeader() })
    .then((res)=>{
      //留五筆
      let arry = res.data;
      arry.length = 5;
      this.data.push(...arry)
      this.isLoading = false;
      this.notfound = false;
    })
    .catch((res)=>{
      console.log(res);
      this.notfound = true;
      this.isLoading = false;
    }))
    },
    getAreaFood(area){// 取得地區餐廳60比
    this.isLoading = true;
      let url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${area}?$top=60&$format=JSON`
      this.$http.get(url)
      .then((res)=>{
        this.data = res.data
        this.isLoading = false;
        this.notfound = false;
      })
      .catch((res)=>{
        console.log(res);
        this.notfound = true;
        this.isLoading = false;
      })
    },
    getALLFood(){//取得所有餐廳
      this.isLoading = true;
      let area = ['Taichung', 'NewTaipei', 'NantouCounty', 'Tainan','HualienCounty','ChiayiCounty'];
      let url = area.map(item => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${item}?$top=60&$format=JSON`)
      url.forEach(item =>
        this.$http.get(item, { headers: this.getAuthorizationHeader() })
        .then((res)=>{
        //留五筆
        let arry = res.data;
        // console.log(arry)
        arry.length = 5;
        this.data.push(...arry)
        this.isLoading = false;
        this.notfound = false;
        })
        .catch((res)=>{
          console.log(res);
          this.notfound = true;
          this.isLoading = false;
        }))
    },
    showref(data) {
      if (data.hasOwnProperty('OpenTime')) {
        this.$refs.modelfood.opModel(data);
      }else {
        this.$refs.modellive.opModel(data);
      }
    },
  },
  created() {
    let str = this.$route.params.id;
    let data = str.split(' ');
    this.option = data[0];
    this.area = data[1];
    this.sortFoodLive(this.option,this.area);
  },
}
</script>