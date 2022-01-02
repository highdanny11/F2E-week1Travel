<template>
<div class="bg-white boxshadow">
  <nav class="container header">
    <div class="
    d-flex w-100 position-relative mb-4 mb-md-0
    justify-content-center align-items-center
    justify-content-md-between align-items-md-end">
      <div class="invisible d-md-none"></div>
      <router-link @click.prevent="type = 'scapeAct',option = 'all'" to="/">
      <img class="cursor-pointer taiLogo"
      :src="require('../assets/img/Group 4.png')"
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
          <a href="#" class="stretched-link link-danger">景點交通</a>
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
          <a href="#"
          class="header-options-link text-decoration-none">景點交通</a></li>
      </ul>
    </div>
    <div class="input-group mb-2 d-md-none">
      <input type="text" class="form-control me-1 inputShadow rounded-3"
        placeholder="搜尋關鍵字" v-model="search"
        aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
    <!-- 手機出現的功能列表-->
    <div class="d-flex align-items-center d-md-none">
        <div class="input-group">
          <select v-model="option"
          class="form-select me-1 inputShadow rounded-3">
            <option
              :value="category.val"
              v-for="category in categorys"
              :key="category.val">{{category.text}}</option>
          </select>
          <select v-model="area"
          class="form-select me-1 inputShadow rounded-3">
            <option value="all" selected>不分縣市</option>
            <option :value="item.City" v-for="item in place" :key="item.City">
              {{item.CityName}}</option>
          </select>
              <!-- 手機 -->
          <router-link :to="`/result/${type}/${option}/${area}?q=${search}`"
          class="searchIcon rounded-3">
            <img :src="require('../assets/img/search.svg')" alt=""></router-link>
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
          placeholder="搜尋關鍵字" v-model.trim="search"
          aria-label="Recipient's username" aria-describedby="button-addon2">
          </div>
          <div class="d-flex align-items-center">
            <div class="input-group">
              <select class="form-select me-1 rounded-3" v-model="option">
                <option
                :value="category.val"
                v-for="category in categorys"
                :key="category">{{category.text}}</option>
                <!-- <option value="活動">活  動</option> -->
              </select>
              <select class="form-select me-1 rounded-3" v-model="area">
                <option value="all" selected>不分縣市</option>
                <option :value="item.City" v-for="item in place" :key="item.City">
                  {{item.CityName}}</option>
              </select>
              <!-- 桌機搜尋篩選功能列表 -->
              <router-link :to="`/result/${type}/${option}/${area}?q=${search}`"
              class="searchIcon rounded-3">
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
        placeholder="搜尋關鍵字" v-model="search"
        aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
      <!-- table搜尋篩選功能列表 -->
      <div class="d-flex align-items-center">
        <div class="input-group">
          <select v-model="option"
          class="form-select me-1 inputShadow rounded-3">
            <option
              :value="category.val"
              v-for="category in categorys"
              :key="category">{{category.text}}</option>
          </select>
          <select v-model="area"
          class="form-select me-1 inputShadow rounded-3">
            <option value="all" selected>不分縣市</option>
            <option :value="item.City" v-for="item in place" :key="item.City">
              {{item.CityName}}</option>
          </select>
          <!-- 平板搜尋 -->
        <router-link :to="`/result/${type}/${option}/${area}?q=${search}`"
        class="searchIcon rounded-3">
          <img :src="require('../assets/img/search.svg')" alt=""></router-link>
        </div>
      </div>
  </div>
  <router-view v-if="isRouterAlive"></router-view>
  <footer class="text-center text-success bg-white py-lg-6 py-2">
    Taiwan Tourguide  © Code: Sam  /  Design: KT</footer>
</template>

<script>
import place from '@/assets/json/place.json';

export default {
  data() {
    return {
      search: '',
      area: 'all',
      option: 'all',
      options: {
        liveFood: [
          {
            val: 'Restaurant',
            text: '美食',
          },
          {
            val: 'Hotel',
            text: '住宿',
          },
          {
            val: 'all',
            text: '類別',
          },
        ],
        scapeAct: [
          {
            val: 'ScenicSpot',
            text: '景點',
          },
          {
            val: 'Activity',
            text: '活動',
          },
          {
            val: 'all',
            text: '類別',
          },
        ],
      },
      type: 'scapeAct',
      isRouterAlive: true,
      place: [],
    };
  },
  provide() {
    return {
      to: this.to,
      updataView: this.updataView,
    };
  },
  computed: {
    categorys() {
      return this.options[this.type];
    },
  },
  methods: {
    updataView() {
      this.isRouterAlive = false;
      setTimeout(() => {
        this.isRouterAlive = true;
      }, 1000);
    },
    to(area) {
      this.area = area;
      this.$router.push(`/result/${this.type}/${this.option}/${area}?q=${this.search}`);
    },
  },
  created() {
    this.place = [...place];
  },
};
</script>
