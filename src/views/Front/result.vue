<template>
  <Loading :active="isloading">
    <div class="d-flex justify-content-between align-items-center"
    style="width:280px;">
      <div class="loading loading-triangle"></div>
      <div class="loading loading-square"></div>
      <div class="loading loading-circle"></div>
    </div>
  </Loading>
  <section class="result" ref="result">
    <div class="container">
      <h2 class="d-flex align-items-center mb-3" v-if="page">
        <div class="squareShapeIcon me-4"></div>
        {{ClassOption}}
      </h2>
      <ul class="row row-cols-lg-5 row-cols-md-4 row-cols-2 gx-2 list-unstyled" v-if="page">
        <li class="col" v-for="item in page" :key="item.id">
          <div class="card boxshadow-m p-3">
            <img :src="item.Picture?.PictureUrl1 || require('@/assets/img/notfound.jpg')"
            alt="" class="card-img-top">
            <div class="card-body d-flex flex-column justify-content-between pt-2 px-0 pb-0">
              <h4 class="card-title text-overflowHiden2 mb-0">
                {{item.name}}
              </h4>
              <h3 class="card-footerTitle text-info text-overflow mb-0">
                <i class="bi bi-geo-alt-fill text-primary me-2"></i>
                {{item.Address || item.Location || item.City}}
                <!-- 連結 -->
                <a href="#" class="stretched-link" @click.prevent="showModal(item)"></a></h3>
            </div>
          </div>
        </li>
      </ul>
      <ul v-if="data[0]"
      class="mt-5 d-flex justify-content-center align-items-center list-unstyled">
        <li>
          <a class="carouselBtnLeft btn d-flex"
          @click.prevent="currentPage --, toTop()"
          :class="{'disabled' : currentPage === 1, 'Disabled' : currentPage === 1}"
          href="#"><i class="bi bi-caret-left-fill"></i></a>
        </li>
        <li><p class="mb-0 mx-5 text-bold fs-4">{{currentPage}}</p></li>
        <li>
          <a class="carouselBtnRight btn d-flex"
          @click.prevent="currentPage ++, toTop()"
            :class="{'disabled' : currentPage === totalPageData.length,
            'Disabled' : currentPage === totalPageData.length}"
            href="#"><i class="bi bi-caret-right-fill"></i></a>
        </li>
      </ul>
      <section class="mb-auto h-50" v-if="!data[0]">
        <div class="d-flex justify-content-center">
          <img :src="require('@/assets/img/unbrella.png')"
          style="width:70px;height:70px;" class="me-2"
          alt="">
          <div>
            <h3 class="text-secondary mb-3">Oops</h3>
            <p class="text-success mb-0">很抱歉，找不到符合此搜尋相關的內容。</p>
          </div>
        </div>
      </section>
    </div>
  </section>
  <modalResult ref="modalResult"/>
</template>

<script>
import * as getApi from '@/assets/javascript/getApi';
import modalResult from '@/components/modalResult.vue';

export default {
  components: {
    modalResult,
  },
  data() {
    return {
      data: [],
      perpage: 20,
      totalPageData: [],
      currentPage: 1,
      isloading: false,
    };
  },
  props: ['option', 'area', 'type', 'que'],
  inject: ['updataView'],
  methods: {
    ...getApi,
    async selectOption(search) {
      if (search) {
        if (this.option === 'all') {
          if (this.area === 'all') {
            // console.log('有搜尋值、無類別、無地區');
            this.isloading = true;
            await this.searchAll(this.que, this.ClassType)
              .then(([res1, res2]) => {
                this.isloading = false;
                this.updata([...res1.data, ...res2.data]);
              })
              .catch((err) => {
                this.isloading = false;
                console.log(err);
              });
          } else {
            // console.log('有搜尋值、無類別、有地區');
            this.isloading = true;
            await this.searchAllarea(this.area, this.que, this.ClassType)
              .then(([res1, res2]) => {
                this.isloading = false;
                this.updata([...res1.data, ...res2.data]);
              })
              .catch((err) => {
                this.isloading = false;
                console.log(err);
              });
          }
        } else {
          if (this.area === 'all') {
            // console.log('有搜尋值、有類別、無地區');
            this.isloading = true;
            await this.searchOptions(this.option, this.que)
              .then((res) => {
                this.isloading = false;
                this.updata([...res.data]);
              })
              .catch((err) => {
                this.isloading = false;
                console.log(err);
              });
            return;
          }
          // console.log('有搜尋值、有類別、有地區');
          this.isloading = true;
          await this.searchOptionsArea(this.option, this.area, this.que)
            .then((res) => {
              this.isloading = false;
              this.updata([...res.data]);
            })
            .catch((err) => {
              this.isloading = false;
              console.log(err);
            });
        }
      } else {
        if (this.option === 'all') {
          if (this.area === 'all') {
            // console.log('無搜尋值、無類別、無地區');
            // 跳轉首頁
            if (this.type === 'scapeAct') {
              this.$router.push({
                path: '/',
              });
              return;
            }
            this.$router.push({
              name: 'FoodLive',
            });
            return;
          }
          // console.log('無搜尋值、無類別、有地區');
          this.isloading = true;
          await this.getAllarea(this.area, this.ClassType)
            .then(([res1, res2]) => {
              // console.log(res1.data, res2.data);
              this.isloading = false;
              this.updata([...res1.data, ...res2.data]);
            })
            .catch((err) => {
              this.isloading = false;
              console.log(err);
            });
          return;
        }
        if (this.area === 'all') {
          // console.log('無搜尋值、有類別、無地區');
          this.isloading = true;
          await this.getOptions(this.option)
            .then((res) => {
              this.isloading = false;
              this.updata([...res.data]);
            })
            .catch((err) => {
              this.isloading = false;
              console.log(err);
            });
          return;
        }
        // console.log('無搜尋值、有類別、有地區1');
        this.isloading = true;
        await this.getOptionsArea(this.option, this.area)
          .then((res) => {
            this.isloading = false;
            this.updata([...res.data]);
          })
          .catch((err) => {
            this.isloading = false;
            console.log(err);
          });
      }
    },
    updata(data) {
      // 過期的資料就不要
      if (data[0]) {
        data.forEach((item) => {
          if (item.EndTime) {
            // 如果有EndTime的欄位，我就不要push
            if (new Date().getTime() > new Date(`${item.EndTime}`).getTime()) {
              return;
            }
          }
          this.data.push({
            id: item.HotelID || item.ScenicSpotID || item.RestaurantID || item.ActivityID,
            name: item.HotelName || item.ScenicSpotName || item.RestaurantName || item.ActivityName,
            Description: item.Description || item.DescriptionDetail,
            Picture: item.Picture,
            Class: item.Class || item.Class1 || item.Class2 || '其他',
            ParkingInfo: item.ParkingInfo,
            Phone: item.Phone || '暫無提供電話',
            City: item.City,
            OpenTime: item.OpenTime,
            EndTime: item.EndTime,
            Address: item.Address,
            Organizer: item.Organizer,
            Location: item.Location,
          });
        });
        this.makePages();
      }
    },
    showModal(data) {
      this.$refs.modalResult.opModel(data);
    },
    makePages() {
      let arry = [];
      this.data.forEach((item, i) => {
        arry.push(item);
        if (arry.length === 20) {
          this.totalPageData.push(arry);
          arry = [];
          return;
        }
        if (this.data.length === i + 1) {
          this.totalPageData.push(arry);
        }
      });
    },
    toTop() {
      window.scrollTo(0, this.$refs.result.offsetTop);
    },
  },
  computed: {
    ClassType() {
      // 1 的話就是景點活動，沒有的就是美食餐廳
      if (this.type === 'scapeAct') {
        return 1;
      }
      return undefined;
    },
    ClassOption() {
      if (this.option !== 'all') {
        const str = [
          {
            val: 'Restaurant',
            text: '美食',
          },
          {
            val: 'Hotel',
            text: '住宿',
          },
          {
            val: 'ScenicSpot',
            text: '景點',
          },
          {
            val: 'Activity',
            text: '活動',
          },
        ];
        return str.find((item) => item.val === this.option).text;
      }
      if (this.type === 'scapeAct') {
        return '活動景點';
      }
      return '美食住宿';
    },
    page() {
      const maxPage = this.totalPageData.length;
      if (maxPage <= this.currentPage) {
        return this.totalPageData[maxPage - 1];
      }
      return this.totalPageData[this.currentPage - 1];
    },
  },
  watch: {
    $route: {
      handler(val, old) {
        if (val !== old) {
          this.updataView();
          this.toTop();
        }
      },
      deep: true,
    },
  },
  created() {
    this.selectOption(this.que);
  },
};
</script>
