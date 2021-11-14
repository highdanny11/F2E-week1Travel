<template>
<div class="bg-white boxshadow">
  <nav class="container header">
    <div class="
    d-flex w-100 position-relative mb-4 mb-md-0
    justify-content-between align-items-center
    justify-content-md-between align-items-md-end">
      <div class="invisible d-md-none"></div>
      <router-link to="/">
      <img class="cursor-pointer taiLogo position-absolute position-md-static
      top-50 start-50 translate-middle-md-0 translate-middle"
      src="https://s3-alpha-sig.figma.com/img/f4cf/0171/3e2027e6418af791f7733611da855498?Expires=1636934400&Signature=V88KC6BVgntEfBSCHn6sbKiGaVUeZav~p-bRmvrzpE8owAWJv5ARTIDAFgzlPh43F-F6YLeHFZNjq-s-u2d64yJiGVNGngDhl0pcKERMwpCdZu6QH~B0Ej0HI4UoHh2zJbBMDGKxevxM~Yi2fjAP4EJPn0Jcnl~C7Sn~kXrpr9qBjY68wAGlyvt~HVu2Y-jsx2GsIuyIXwZD-Unx0TTTPiYzCRdG0GyQ44Q~0wJ0Kc5oMxQbrpakN5bhmjCCizIXFAt~elZBaU4HdyJVkbOUiOyjEm~Dk88~LLtChOh5ycMjQblB~gceXzUw1o~T60kNEOm9K5zsXygzytfoqw20Hg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="">
      </router-link>
      <ul class="d-none d-md-flex list-unstyled">
        <li class="d-flex position-relative align-items-end">
          <div class="roundShapeIcon roundShapeIcon-primary">
              <div class="triangle"></div>
          </div>
          <router-link href="#" to="/"
          class="stretched-link link-primary lh-24">台灣景點</router-link>
        </li>
        <li class="d-flex position-relative align-items-end ms-6">
          <div class="roundShapeIcon roundShapeIcon-secondary">
            <div class="square"></div>
          </div>
          <router-link href="#" class="stretched-link link-secondary"
          to="/FoodLive">美食住宿</router-link>
        </li>
        <li class="d-flex position-relative align-items-end ms-6">
          <div class="roundShapeIcon roundShapeIcon-danger">
            <div class="round"></div>
          </div>
          <a href="#" class="stretched-link link-danger">景點交通</a>
        </li>
      </ul>
      <div class="d-flex align-items-center d-md-none">
        <!-- 手機搜尋 -->
          <a href="#" class="searchIcon rounded-3 me-2">
                <img :src="require('../assets/img/search.svg')" alt=""></a>
          <a href="#" class="localIcon rounded-3">
            <img :src="require('../assets/img/GPS.svg')" alt=""></a>
      </div>
    </div>
    <!-- 手機出現的功能列表-->
    <div class="header-options d-md-none">
      <ul class="d-flex justify-content-between list-unstyled">
        <li><a href="#" class="header-options-link text-decoration-none">景點活動</a></li>
        <li><a href="#" class="header-options-link text-decoration-none">美食住宿</a></li>
        <li><a href="#" class="header-options-link text-decoration-none">景點交通</a></li>
      </ul>
    </div>
    <!-- 手機出現的功能列表-->
    <div class="d-flex align-items-center d-md-none">
        <div class="input-group">
          <select class="form-select me-1 inputShadow rounded-3">
            <option selected>類別</option>
            <option value="美食">美  食</option>
            <option value="住宿">住  宿</option>
          </select>
          <select class="form-select me-1 inputShadow rounded-3">
            <option value="all" selected>不分縣市</option>
            <option value="Taipei">臺  北  市</option>
            <option value="NewTaipei">新  北  市</option>
            <option value="Taoyuan">桃  園  市</option>
            <option value="Taichung">台  中  市</option>
            <option value="Tainan">台  南  市</option>
            <option value="Kaohsiung">高  雄  市</option>
            <option value="Keelung">基  隆  市</option>
            <option value="Hsinchu">新  竹  市</option>
            <option value="HsinchuCounty">新  竹  縣</option>
            <option value="MiaoliCounty">苗  栗  縣</option>
            <option value="ChanghuaCounty">彰  化  縣</option>
            <option value="NantouCounty">南  投  縣</option>
            <option value="YunlinCounty">雲  林  縣</option>
            <option value="ChiayiCounty">嘉  義  縣</option>
            <option value="Chiayi">嘉  義  市</option>
            <option value="PingtungCounty">屏  東  縣</option>
            <option value="YilanCounty">宜  蘭  縣</option>
            <option value="HualienCounty">花  蓮  縣</option>
            <option value="TaitungCounty">台  東  縣</option>
            <option value="KinmenCounty">金  門  縣</option>
          </select>
              <!-- 手機 -->
          <a href="#" class="btn btn-primary text-white rounded-3">送出</a>
        </div>
      </div>
  </nav>
</div>
  <!-- 選到交通會關閉，桌機出現的banner 功能列表 -->
  <div class="bg-white d-none d-lg-block">
    <div class="banner boxshadow">
      <div class="banner_wrap d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column">
          <h1>
          Welc<span class="text-primary">o</span>me
          t<span class="text-primary">o</span>
          <span class="text-primary">Taiwan°</span>
          </h1>
          <div class="input-group mb-3">
          <input type="text" class="form-control me-1 rounded-3"
          placeholder="搜尋關鍵字"
          aria-label="Recipient's username" aria-describedby="button-addon2">
          <!-- 桌機定位 -->
          <a href="#" class="localIcon rounded-3">
            <img :src="require('../assets/img/GPS.svg')" alt=""></a>
          </div>
          <div class="d-flex align-items-center">
            <div class="input-group">
              <select class="form-select me-1 rounded-3" v-model="option">
                <option value="all" selected>類別</option>
                <option value="美食">美  食</option>
                <option value="住宿">住  宿</option>
              </select>
              <select class="form-select me-1 rounded-3" v-model="area">
                <option value="all" selected>不分縣市</option>
                <option value="Taipei">臺  北  市</option>
                <option value="NewTaipei">新  北  市</option>
                <option value="Taoyuan">桃  園  市</option>
                <option value="Taichung">台  中  市</option>
                <option value="Tainan">台  南  市</option>
                <option value="Kaohsiung">高  雄  市</option>
                <option value="Keelung">基  隆  市</option>
                <option value="Hsinchu">新  竹  市</option>
                <option value="HsinchuCounty">新  竹  縣</option>
                <option value="MiaoliCounty">苗  栗  縣</option>
                <option value="ChanghuaCounty">彰  化  縣</option>
                <option value="NantouCounty">南  投  縣</option>
                <option value="YunlinCounty">雲  林  縣</option>
                <option value="ChiayiCounty">嘉  義  縣</option>
                <option value="Chiayi">嘉  義  市</option>
                <option value="PingtungCounty">屏  東  縣</option>
                <option value="YilanCounty">宜  蘭  縣</option>
                <option value="HualienCounty">花  蓮  縣</option>
                <option value="TaitungCounty">台  東  縣</option>
                <option value="KinmenCounty">金  門  縣</option>
              </select>
              <!-- 桌機搜尋篩選功能列表 -->
              <router-link :to='`/FoodLive/FoodResult/${sendSeach()}`'
              class="searchIcon rounded-3" @click="reload()">
                <img :src="require('../assets/img/search.svg')" alt=""></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- table 會顯現 -->
  <div class="d-flex flex-column w-60 mx-auto d-none d-lg-none d-md-block">
      <div class="input-group mb-3 mt-10">
      <input type="text" class="form-control me-1 inputShadow rounded-3"
        placeholder="搜尋關鍵字"
        aria-label="Recipient's username" aria-describedby="button-addon2">
          <!-- 桌機定位 -->
        <a href="#" class="localIcon rounded-3">
          <img :src="require('../assets/img/GPS.svg')" alt=""></a>
      </div>
      <!-- table搜尋篩選功能列表 -->
      <div class="d-flex align-items-center">
        <div class="input-group">
          <select class="form-select me-1 inputShadow rounded-3">
            <option selected>類別</option>
            <option value="美食">美  食</option>
            <option value="住宿">住  宿</option>
          </select>
          <select class="form-select me-1 inputShadow rounded-3">
            <option value="all" selected>不分縣市</option>
            <option value="Taipei">臺  北  市</option>
            <option value="NewTaipei">新  北  市</option>
            <option value="Taoyuan">桃  園  市</option>
            <option value="Taichung">台  中  市</option>
            <option value="Tainan">台  南  市</option>
            <option value="Kaohsiung">高  雄  市</option>
            <option value="Keelung">基  隆  市</option>
            <option value="Hsinchu">新  竹  市</option>
            <option value="HsinchuCounty">新  竹  縣</option>
            <option value="MiaoliCounty">苗  栗  縣</option>
            <option value="ChanghuaCounty">彰  化  縣</option>
            <option value="NantouCounty">南  投  縣</option>
            <option value="YunlinCounty">雲  林  縣</option>
            <option value="ChiayiCounty">嘉  義  縣</option>
            <option value="Chiayi">嘉  義  市</option>
            <option value="PingtungCounty">屏  東  縣</option>
            <option value="YilanCounty">宜  蘭  縣</option>
            <option value="HualienCounty">花  蓮  縣</option>
            <option value="TaitungCounty">台  東  縣</option>
            <option value="KinmenCounty">金  門  縣</option>
          </select>
          <!-- 桌機搜尋 -->
        <a href="#" class="searchIcon rounded-3">
          <img :src="require('../assets/img/search.svg')" alt=""></a>
        </div>
      </div>
  </div>
  <router-view v-if="isRouterAlive"></router-view>
  <footer class="text-center text-success bg-white py-lg-6 py-2">
    Taiwan Tourguide  © Code: Michael  /  Design: KT</footer>
</template>

<script>
export default {
  data() {
    return {
      area: 'all',
      option: 'all',
      isRouterAlive: true,
    };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    sendSeach() {
      const data = `${this.option} ${this.area}`;
      return data;
    },
    reload() {
      this.isRouterAlive = false;
      setTimeout(() => {
        this.isRouterAlive = true;
      }, 100);
    },
  },
};
</script>
