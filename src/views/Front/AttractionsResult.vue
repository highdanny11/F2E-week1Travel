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
        {{option === 'all' ? '活動景點' : option === '景點' ? '景點' : '活動'}}
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
                <i class="bi bi-geo-alt-fill text-primary me-2"></i>
                {{item.Address === undefined ? item.City : item.Address}}
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
  <modalActivity ref="modalActivity"/>
  <modalAttractions ref="modalAttractions" />
</template>

<script>
import JsSHA from 'jssha';
import modalActivity from '@/components/modalActivity.vue';
import modalAttractions from '@/components/modalAttractions.vue';

export default {
  inject: ['reload'],
  components: {
    modalActivity,
    modalAttractions,
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
          // 都是all就回到景點活動首頁
          this.$router.push('/');
        }else{
          // 景點活動，但有地區
          this.getAreaAttractionsActivity(area);
        }
        break;
        case'景點':
        if(area === 'all') {
          //取住所有景點
          this.getALLAttractions()
        }else{
          // 景點，地區
          this.getAreaAttractions(area);
        }
        break;
        case'活動':
        if(area === 'all') {
          //取活動所有資料
          this.getAllActivity()
        }else{
          // 活動，地區
          this.getAreaActivity(area);
        }
        break;
      }
    },
    getAreaAttractionsActivity(area) {// 抓取地區所有景點活動
    this.isLoading = true;
      let activityUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${area}?$top=30&$format=JSON`
      let attractionsUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${area}?$top=30&$format=JSON`
      Promise.all([this.$http.get(activityUrl),this.$http.get(attractionsUrl), { headers: this.getAuthorizationHeader() }])
        .then(([res1, res2])=>{
          this.notfound = false;
          this.data.push(...res1.data, ...res2.data);
          this.isLoading = false;
        })
        .catch((res)=>{
          this.notfound = true;
          this.isLoading = false;
          console.log(res)
        })
    },
    getAreaActivity(area){// 取得活動，但有地區
    this.isLoading = true;
      let liveUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${area}?$top=30&$format=JSON`
      this.$http.get(liveUrl, { headers: this.getAuthorizationHeader() })
      .then((res) =>{
        this.notfound = false;
        this.data = res.data;
        this.isLoading = false;
      })
      .catch((res)=>{
        this.notfound = true;
        this.isLoading = false;
        console.log(res)
      })
    },
    getAllActivity(){//取得活動所有資料
    this.isLoading = true;
    // 暫時，先取列表中這些縣市住宿資料當作全部，加入頁碼功能後再換
    let area = ['Taichung', 'NewTaipei', 'NantouCounty', 'Tainan','HualienCounty','ChiayiCounty'];
    let url = area.map(item => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${item}?$top=30&$format=JSON`)
    url.forEach(item =>
    this.$http.get(item, { headers: this.getAuthorizationHeader() })
    .then((res)=>{
      this.notfound = false;
      //留五筆
      let arry = res.data;
      arry.length = 5;
      this.data.push(...arry)
      this.isLoading = false;
    })
    .catch((res)=>{
      this.isLoading = false;
      console.log(res)
    })
    .catch((res)=>console.log(res)))
    },
    getAreaAttractions(area){// 取得地區景點60比
    this.isLoading = true;
      let url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${area}?$top=60&$format=JSON`
      this.$http.get(url)
      .then((res)=>{
        this.notfound = false;
        this.data = res.data
        this.isLoading = false;
      })
      .catch((res)=>{
        this.isLoading = false;
        this.notfound = true;
        console.log(res)
      })
    },
    getALLAttractions(){//取得所有景點
      this.isLoading = true;
      let area = ['Taichung', 'NewTaipei', 'NantouCounty', 'Tainan','HualienCounty','ChiayiCounty'];
      let url = area.map(item => `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${item}?$top=60&$format=JSON`)
      url.forEach(item =>
        this.$http.get(item, { headers: this.getAuthorizationHeader() })
        .then((res)=>{
          this.notfound = false;
        //留五筆
        let arry = res.data;
        // console.log(arry)
        arry.length = 5;
        this.data.push(...arry)
        this.isLoading = false;
        })
        .catch((res)=>{
          this.isLoading = false;
          this.notfound = true;
          console.log(res)
        }))
    },
    showref(data) {
      if (data.hasOwnProperty('Organizer')) {
        this.$refs.modalActivity.opModel(data);
      }else {
        this.$refs.modalAttractions.opModel(data);
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