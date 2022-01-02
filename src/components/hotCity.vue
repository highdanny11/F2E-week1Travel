<template>
  <div class="container hotCity">
    <h2 class="d-flex align-items-center mb-3">
      <div class="triangleShapeIcon me-4"></div>
      熱門城市
    </h2>
    <div class="position-relative">
      <a class="carouselBtnLeft d-none d-lg-flex" href="#"
      @click.prevent="offsetLeft()" v-if="change">
        <i class="bi bi-caret-left-fill"></i>
      </a>
      <div class="cardCarousel">
        <div class="cardCarousel-wrap">
          <ul ref="slides"
            :style="{'transform': `translateX(${currentOffset}px)`}"
            class="
              cardCarousel-list
              row row-cols-lg-5 row-cols-md-4 row-cols-2
              gx-3
              flex-nowrap
              list-unstyled
            "
          >
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Tapai.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Taipei')"
                      class="text-decoration-none stretched-link link-light">台北市</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/NewTaipei.png')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('NewTaipei')"
                      class="text-decoration-none stretched-link link-light">新北市</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Taoyuan.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Taoyuan')"
                      class="text-decoration-none stretched-link link-light">桃園市</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Hsinchu.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Hsinchu')"
                      class="text-decoration-none stretched-link link-light">新竹市</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Taichung.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Taichung')"
                      class="text-decoration-none stretched-link link-light">台中市</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/NantouCounty.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('NantouCounty')"
                      class="text-decoration-none stretched-link link-light">南投</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Chiayi.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Chiayi')"
                      class="text-decoration-none stretched-link link-light">嘉義</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Tainan.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Tainan')"
                      class="text-decoration-none stretched-link link-light">台南</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/Kaohsiung.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('Kaohsiung')"
                      class="text-decoration-none stretched-link link-light">高雄</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/PingtungCounty.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">屏東</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/YilanCounty.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('YilanCounty')"
                      class="text-decoration-none stretched-link link-light">宜蘭</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/HualienCounty.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('HualienCounty')"
                      class="text-decoration-none stretched-link link-light">花蓮</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                  :src="require('@/assets/img/TaitungCounty.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('TaitungCounty')"
                      class="text-decoration-none stretched-link link-light">台東</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    :src="require('@/assets/img/KinmenCounty.jpg')"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" @click.prevent="to('KinmenCounty')"
                      class="text-decoration-none stretched-link link-light">金門澎湖</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <a class="carouselBtnRight d-none d-lg-flex" href="#"
      @click.prevent="offsetRight()" v-if="!change">
        <i class="bi bi-caret-right-fill"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['to'],
  data() {
    return {
      currentOffset: 0,
      offsetWidth: 0,
      change: false,
    };
  },
  methods: {
    offsetRight() {
      this.currentOffset -= this.offsetWidth;
      this.change = !this.change;
    },
    offsetLeft() {
      this.currentOffset += this.offsetWidth;
      this.change = !this.change;
    },
  },
  mounted() {
    this.offsetWidth = this.$refs.slides.offsetWidth;
  },
};
</script>
