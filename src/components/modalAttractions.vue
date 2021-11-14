<template>
  <div
    class="modal fade modalDetail"
    ref="showAttractionsModal"
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
            <img :src="img === '' ? require('@/assets/img/notfound.jpg') : img "
            class="card-img-top obj-cover" :alt="data.Name" />
            <div class="card-body px-0 pt-5 pb-0">
              <!-- 沒有照片就不會出現切換紐 -->
              <div v-if="images !== null"
              class="d-flex justify-content-end align-items-center mb-5">
                <a v-if="imgPage !== 0" @click.prevent="switchPage(-1)"
                class="carouselBtnLeft d-none d-lg-flex me-4" href="#">
                  <i class="bi bi-caret-left-fill"></i>
                </a>
                <a v-if="imgPage !== images.length - 1" @click.prevent="switchPage(1)"
                class="carouselBtnRight d-none d-lg-flex" href="#">
                  <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
              <h5 class="card-title mb-5">{{data.Name}}</h5>
              <p class="card-text mb-5">
                {{data.DescriptionDetail}}
              </p>
              <div class="
              d-flex justify-content-between
              align-items-md-center align-items-start flex-column flex-md-row">
                <p class="w-50">
                  <i class="bi bi-clock text-primary me-3"></i>
                  {{data.OpenTime === undefined ? '目前無資訊' : data.OpenTime}}</p>
                <p class="w-50">
                  <i class="bi bi-telephone text-primary me-3"></i>
                  {{data.Phone}}</p>
              </div>
              <div class="
              d-flex justify-content-between
              align-items-md-center align-items-start flex-column flex-md-row">
                <p class="w-50">
                  <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                  {{data.Address === undefined ? data.City : data.Address}}</p>
                <p class="w-50">
                  <i class="bi bi-bookmark text-primary me-3"></i>
                  {{data.Level === undefined ? data.Class1 : data.Level}}</p>
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

export default {
  data() {
    return {
      AttractionsModal: {},
      data: {},
      images: null,
      img: '',
      imgPage: 0,
    };
  },
  methods: {
    opModel(data) {
      this.AttractionsModal.show();
      this.clearData();// 清除上一次留下的資料
      this.data = data;
      console.log(data);
      // 確認有照片再跑回圈
      if (this.data.Picture.PictureUrl1 !== undefined) {
        this.images = Object.keys(this.data.Picture).reduce((arry, key) => {
          const rule = new RegExp(/^https:/);
          if (rule.test(this.data.Picture[key])) {
            arry.push(this.data.Picture[key]);
          }
          return arry;
        }, []);
        this.img = this.images['0'];
      }
    },
    closeModel() {
      this.AttractionsModal.hide();
    },
    clearData() { // 清除上一次留下的資料
      this.data = {};
      this.images = null;
      this.img = '';
      this.imgPage = 0;
    },
    switchPage(pag) { // 切換照片
      switch (pag) {
        case -1:
          this.img = this.images[this.imgPage - 1];
          this.imgPage -= 1;
          break;
        case 1:
          this.img = this.images[this.imgPage + 1];
          this.imgPage += 1;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.AttractionsModal = new Modal(this.$refs.showAttractionsModal, {
      keyboard: false,
    });
  },
};

</script>
