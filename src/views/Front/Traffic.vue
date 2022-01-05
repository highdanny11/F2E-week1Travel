<template>
  <div class="bg-white boxshadow">
    <nav class="container header">
      <div class="
      d-flex w-100 position-relative mb-4 mb-md-0
      justify-content-center align-items-center
      justify-content-md-between align-items-md-end">
        <router-link @click.prevent="type = 'scapeAct',option = 'all'" to="/">
        <img class="cursor-pointer taiLogo"
        :src="require('@/assets/img/Group 4.png')"
        alt="">
        </router-link>
        <ul class="d-none d-md-flex list-unstyled">
          <li class="d-flex position-relative align-items-end">
            <div class="roundShapeIcon roundShapeIcon-primary me-2">
                <div class="triangle"></div>
            </div>
            <router-link href="#" @click.prevent="type = 'scapeAct',option = 'all'"
            to="/"
            class="stretched-link link-primary lh-24">台灣景點</router-link>
          </li>
          <li class="d-flex position-relative align-items-end ms-6">
            <div class="roundShapeIcon roundShapeIcon-secondary me-2">
              <div class="square"></div>
            </div>
            <router-link href="#" @click.prevent="type = 'liveFood',option = 'all'"
            to="/FoodLive"
            class="stretched-link link-secondary"
            >美食住宿</router-link>
          </li>
          <li class="d-flex position-relative align-items-end ms-6">
            <div class="roundShapeIcon roundShapeIcon-danger me-2">
              <div class="round"></div>
            </div>
            <router-link
            to='/Traffic'
            class="stretched-link link-danger">景點交通</router-link>
          </li>
        </ul>
      </div>
      <!-- 手機出現的功能列表-->
    <div class="header-options d-md-none">
      <ul class="d-flex justify-content-between list-unstyled">
        <li>
          <router-link href="#"
          @click.prevent="type = 'scapeAct',option = 'all'" to="/"
          class="header-options-link text-decoration-none">景點活動</router-link></li>
        <li>
          <router-link
          @click.prevent="type = 'liveFood',option = 'all'" to="/FoodLive"
          class="header-options-link text-decoration-none">美食住宿</router-link></li>
        <li>
          <router-link to='/Traffic'
          class="header-options-link text-decoration-none">景點交通</router-link></li>
      </ul>
    </div>
      <div class="input-group justify-content-center
      w-lg-50 w-md-70 w-100 mx-auto mt-6">
          <select class="form-select me-1 rounded-3" v-model="city">
            <option value="">選擇縣市</option>
            <option :value="item.City" v-for="item in place" :key="item.City">
              {{item.CityName}}</option>
          </select>
          <select class="form-select me-1 rounded-3"
          @change="subRoutdName = ''"
          v-model="routeName">
            <option value="">選擇路線</option>
            <option :value="item.TaiwanTripName.Zh_tw"
            v-for="item in routeNames" :key="item.RouteUID">
            {{item.TaiwanTripName.Zh_tw}}</option>
          </select>
          <!-- 桌機搜尋篩選功能列表 -->
          <a href="#" @click.prevent="getStopsData()"
          :class="{'disabled' : switchSearch}"
          class="searchIcon rounded-3 btn">
          <img :src="require('@/assets/img/search.svg')" alt=""></a>
      </div>
      <div v-if="subRoutdNames"
      class="input-group w-lg-50 w-md-70 w-100 mx-auto mt-4">
        <select class="form-select rounded-3" v-model="subRoutdName">
          <option value="">選擇支線或主線</option>
          <option :value="item.SubRouteUID"
          v-for="item in subRoutdNames" :key="item.SubRouteID">
          <template v-if="item.Headsign">
            {{item.SubRouteName.Zh_tw}}{{item.Headsign}}</template>
          <template v-else>{{item.SubRouteName.Zh_tw}}</template>
          </option>
        </select>
      </div>
    </nav>
    <div class="container">
      <div
      v-if="!subRoutdNames && routeName && findRoute.SubRoutes.length > 1 && searchRouteStops[0]"
      class="d-flex mt-md-5
        w-lg-50 w-md-70 w-100 mx-auto">
            <a href="#" :class="{'border-bottom':stopIndex === 0}"
            @click.prevent="stopIndex = 0"
            class="text-center mb-0 flex-grow-1 text-dark flex-grow-1
            text-decoration-none border-3 border-primary">
            <!-- 切換border-bottom -->
              <p class="mb-0">往
                <span class="text-primary ms-3">
                  {{findRoute.DestinationStopNameZh}}
                </span>
              </p>
            </a>
            <a href="#"
            @click.prevent="stopIndex = 1" :class="{'border-bottom':stopIndex === 1}"
            class="text-center mb-0 flex-grow-1 text-dark flex-grow-1
            text-decoration-none border-3 border-primary">
              <p class="mb-0">往
                <span class="text-primary ms-3">
                  {{findRoute.DepartureStopNameZh}}
                </span>
              </p>
            </a>
      </div>
    </div>
  </div>
  <div class="container mt-10">
    <p class="text-end mb-0 text-primary">*每隔 15 秒自動更新 {{second}} 秒</p>
    <!-- 增加rounded-16 -->
    <div class="bg-white px-7 py-10">
      <p class="text-success h3" v-if="!stops[0]">請選擇公車路線</p>
      <ul :class="{'vh-100': !stops[0]}"
      class="list-unstyled row row-cols-md-2 row-cols-1">
      <div class="col">
        <div v-for="item in stops.slice(0,Math.round(stops.length / 2))" :key="item"
        class="d-flex align-items-center mb-3">
          <div :class="changTimeClass(changTimeInfo(item))"
          class="rounded-3 border-3 border py-3 min-h-120
            text-center text-bold fs-5">{{changTimeInfo(item)}}</div>
          <p class="mb-0 text-center flex-grow-1 text-bold fs-5">{{item.StopName.Zh_tw}}</p>
        </div>
      </div>
      <div class="col">
        <div v-for="item in stops.slice(Math.round(stops.length / 2),stops.length)" :key="item"
        class="d-flex align-items-center mb-3">
          <div :class="changTimeClass(changTimeInfo(item))"
          class="rounded-3 border-3 border py-3 min-h-120
            text-center text-bold fs-5">
            {{changTimeInfo(item)}}</div>
          <p class="mb-0 text-center flex-grow-1 text-bold fs-5">{{item.StopName.Zh_tw}}</p>
        </div>
      </div>
      </ul>
    </div>
  </div>
  <footer class="text-center text-success bg-white py-lg-6 py-2">
  Taiwan Tourguide  © Code: Sam  /  Design: KT</footer>
</template>

<script>
import place from '@/assets/json/place.json';
import AuthorizationHeader from '@/assets/javascript/AuthorizationHeader';

export default {
  data() {
    return {
      place: null,
      city: '',
      routeName: '',
      subRoutdName: '',
      routeData: [], // 抓取所有路線
      searchRouteStops: [], // 抓取路線站點
      goStops: [], // 去的公車站牌
      backStops: [], // 往的公車站牌
      subStops: [], // 支路線公車站牌
      aloneStops: [], // 單一路線
      stopIndex: 0, // 決定顯示何種路線站牌
      second: 0,
      tiemControl: [], // 儲存計時器
      storageRouteName: '', // 避免routeName連動
    };
  },
  methods: {
    getStopsData() {
      this.goStops = [];
      this.subStops = [];
      this.aloneStops = [];
      this.backStops = [];
      this.second = 0;
      this.storageRouteName = this.routeName;
      this.clearCountsecond();
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/StopOfRoute/TaiwanTrip/${this.routeName}?$&$format=JSON`;
      this.$http.get(url, { headers: AuthorizationHeader() })
        .then((res) => {
          this.searchRouteStops = res.data;
          this.countSecond();
          this.getStopsTime();
        });
    },
    getStopsTime() { // 預計到達時間
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip/${this.storageRouteName}?`;
      this.$http.get(url, { headers: AuthorizationHeader() })
        .then((res) => {
          this.updataTime(res.data);
        });
    },
    countSecond() { // 計時器15秒會清除本身
      const count = setInterval(() => {
        if (this.second === 15) {
          this.second = 0;
          clearInterval(count);
          return;
        }
        this.second += 1;
      }, 1000);
      this.tiemControl.push(count);
    },
    clearCountsecond() { // 避免計時器在切換路徑時之前的沒有清除掉，因此使用一個陣列去儲存
      this.tiemControl.forEach((item) => {
        clearInterval(item);
      });
    },
    updataTime(arry) { // 依照目前stopindex，去對應更新的資料。
      const setData = (item, timeData) => {
        if (item.StopUID === timeData.StopUID) {
          const data = item;
          data.EstimateTime = timeData.EstimateTime;
          data.StopStatus = timeData.StopStatus;
        }
      };
      if (this.stopIndex === 1 || this.stopIndex === 0) {
        const go = arry.filter((item) => item.Direction === 0);
        const back = arry.filter((item) => item.Direction === 1);
        this.goStops.forEach((item) => {
          go.forEach((gotimeData) => {
            setData(item, gotimeData);
          });
        });
        this.backStops.forEach((item) => {
          back.forEach((backtimeData) => {
            setData(item, backtimeData);
          });
        });
      }
      if (this.stopIndex === 3) {
        this.aloneStops.forEach((item) => {
          arry.forEach((alonetimeData) => {
            setData(item, alonetimeData);
          });
        });
        console.log(this.aloneStops);
      }
      if (this.stopIndex === 2) {
        const subArry = arry.filter((item) => item.SubRouteUID === this.subRoutdName);
        this.subStops.forEach((item) => {
          subArry.forEach((subtimeData) => {
            setData(item, subtimeData);
          });
        });
        console.log(this.subStops);
      }
    },
    changTimeInfo(data) { // 判斷車況給予不同情況文字
      const { EstimateTime, StopStatus } = data;
      if (StopStatus !== 0) {
        let str;
        if (StopStatus === 1) {
          str = '尚未發車';
        } else if (StopStatus === 2) {
          str = '交管不停靠';
        } else if (StopStatus === 3) {
          str = '末班車已過';
        } else {
          str = '今日未營運';
        }
        return str;
      }
      if (EstimateTime) {
        const minute = EstimateTime > 60 ? Math.floor(EstimateTime / 60) : 0;
        const second = EstimateTime - minute * 60;
        if (EstimateTime < 100) {
          return '進站中';
        }
        const str = minute > 1 ? `${minute} : ${second}` : `${second}`;
        return str;
      }
      return '離站中';
    },
    changTimeClass(str) { // 依據車況反饋的文字給予不一樣的class
      let arry = [];
      if (str === '尚未發車') {
        arry = ['border-success', 'text-success'];
      } else if (str === '進站中') {
        arry = ['border-primary', 'bg-primary', 'text-white'];
      } else if (str === '離站中') {
        arry = ['border-secondary', 'bg-secondary', 'text-white'];
      } else {
        arry = ['border-dark'];
      }
      return arry;
    },
  },
  computed: {
    routeNames() { // 分出市區公車和公路公車
      if (this.city) {
        return this.routeData.filter((item) => item.City === this.city);
      }
      return this.routeData.filter((item) => !item.City);
    },
    subRoutdNames() { //  判斷公車路線是否有支線
      if (this.routeName) {
        if (this.findRoute.SubRoutes.length > 2) {
          return this.findRoute.SubRoutes;
        }
        return '';
      }
      return '';
    },
    switchSearch() { // 如果有支必須確認好支線名稱，沒有支線我才給你打開可以搜尋的按鈕
      if (this.subRoutdNames) {
        if (this.subRoutdName) {
          return false;
        }
        return true;
      }
      if (this.routeName) {
        return false;
      }
      return true;
    },
    findRoute() {
      return this.routeData.find((item) => item.TaiwanTripName.Zh_tw === this.routeName);
    },
    stops() {
      if (this.stopIndex === 1) {
        return this.backStops;
      }
      if (this.stopIndex === 2) {
        return this.subStops;
      }
      if (this.stopIndex === 0) {
        return this.goStops;
      }
      if (this.stopIndex === 3) {
        return this.aloneStops;
      }
      return '';
    },
  },
  watch: {
    routeNames() {
      this.routeName = '';
    },
    subRoutdNames() {
      if (this.subRoutdNames) {
        return;
      }
      this.subRoutdName = '';
    },
    searchRouteStops() {
      if (this.subRoutdName) {
        // 如果有填選支線，不需要分去程
        this.subStops = this.searchRouteStops
          .find((item) => item.SubRouteUID === this.subRoutdName).Stops;
        // console.log(this.subStops);
        this.stopIndex = 2;
        return;
      }
      if (this.searchRouteStops.length === 1) {
        // 代表沒有去反向
        console.log(this.searchRouteStops);
        this.aloneStops = this.searchRouteStops[0].Stops;
        this.stopIndex = 3;
        return;
      }
      this.stopIndex = 0;
      this.goStops = this.searchRouteStops
        .find((item) => item.Direction === 0)
        .Stops;
      this.backStops = this.searchRouteStops
        .find((item) => item.Direction === 1)
        .Stops;
      // console.log(this.goStops);
      // console.log(this.backStops);
    },
    second() { // 監聽秒數
      if (this.second === 15) {
        this.getStopsTime();
        this.countSecond();
      }
    },
  },
  created() {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?$format=JSON';
    this.$http.get(url, { headers: AuthorizationHeader() })
      .then((res) => {
        this.routeData = res.data;
        console.log(this.routeData);
      });
    this.place = place;
  },
};
</script>
