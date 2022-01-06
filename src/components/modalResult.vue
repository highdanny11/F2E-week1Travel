<template>
  <div
    class="modal fade modalDetail"
    ref="domActRetModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered
        modal-dialog-scrollable
      "
    >
      <div class="modal-content overflow-md-visible">
        <!-- 關閉紐 -->
        <a href="#" @click.prevent="closeModel()" class="closeIcon position-absolute
        d-none d-md-flex"><i class="bi bi-x text-white fs-4"></i></a>
        <div class="modal-body p-md-8 p-4">
          <div class="card border-0">
            <img :src="img || require('@/assets/img/notfound.jpg') "
            class="card-img-top obj-cover" :alt="data.Name" />
            <div class="card-body px-0 pt-5 pb-0">
              <!-- 沒有照片就不會出現切換紐 -->
              <div v-if="images.length >= 2"
              class="d-flex justify-content-end align-items-center mb-5">
                <a @click.prevent="imgPage--"
                class="carouselBtnLeft d-none d-lg-flex me-4 btn"
                :class="{'Disabled': imgPage === 1, 'disabled' : imgPage === 1}"
                href="#">
                  <i class="bi bi-caret-left-fill"></i>
                </a>
                <a @click.prevent="imgPage++"
                class="carouselBtnRight d-none d-lg-flex btn"
                :class="{'Disabled': imgPage === images.length,
                'disabled' : imgPage === images.length}"
                href="#">
                  <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
              <h5 class="card-title mb-5">
                {{data.name}}</h5>
              <p class="card-text mb-5">
                {{data.Description}}
              </p>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row gy-3">
              <div class="col-md-6">
                <div class="d-flex align-items-start">
                  <template v-if="data.OpenTime">
                    <i class="bi bi-clock me-3 text-primary"></i>
                    <p class="mb-0">開放時間 {{data.OpenTime}}</p>
                  </template>
                  <template v-else-if="data.EndTime">
                    <i class="bi bi-clock me-3 text-primary"></i>
                    <p class="mb-0">活動結束時間 {{changeDate(data.EndTime)}}</p>
                  </template>
                  <template v-else-if="data.ParkingInfo">
                    <i class="bi bi-truck me-3 text-primary"></i>
                    <p class="mb-0">{{data.ParkingInfo}}</p>
                  </template>
                  <template v-else-if="data.City">
                    <i class="bi bi-building me-3 text-primary"></i>
                    <p class="mb-0">{{data.City}}</p>
                  </template>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-start">
                  <template v-if="data.Organizer">
                    <i class="bi bi-bank text-primary me-3"></i>
                    <p class="mb-0">{{data.Organizer}}</p>
                  </template>
                  <template v-else-if="data.Class">
                    <i class="bi bi-cup-straw text-primary me-3"></i>
                    <p class="mb-0">{{data.Class}}</p>
                  </template>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-start">
                  <template v-if="data.Location">
                    <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                    <p class="mb-0">{{data.Location}}</p>
                  </template>
                  <template v-else-if="data.Address">
                    <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                    <p class="mb-0">{{data.Address}}</p>
                  </template>
                  <template v-else-if="data.City">
                    <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                    <p class="mb-0">{{data.City}}</p>
                  </template>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items">
                  <template v-if="data.Phone">
                    <i class="bi bi-telephone text-primary me-3"></i>
                    <p class="mb-0">{{data.Phone}}</p>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import changeDate from '@/assets/javascript/changeDate';

export default {
  data() {
    return {
      resultModal: {},
      data: {},
      images: [],
      imgPage: 1,
    };
  },
  methods: {
    opModel(data) {
      this.resultModal.show();
      // 傳進來有四種資料型態
      this.images = [];
      this.data = {
        ...data,
      };
      Object.keys(this.data).forEach((item) => {
        if (this.data[item] === undefined) {
          delete this.data[item];
        }
      });
      this.imgPage = 1;
      // 確認有照片再跑回圈
      if (this.data.Picture.PictureUrl1) {
        this.images = Object.keys(this.data.Picture).reduce((arry, key) => {
          const rule = new RegExp(/^https:/);
          if (rule.test(this.data.Picture[key])) {
            arry.push(this.data.Picture[key]);
          }
          return arry;
        }, []);
      }
    },
    changeDate,
    closeModel() {
      this.resultModal.hide();
    },
  },
  computed: {
    img() {
      return this.images[this.imgPage - 1];
    },
  },
  mounted() {
    this.resultModal = new Modal(this.$refs.domActRetModal, {
      keyboard: false,
    });
  },
};

</script>
