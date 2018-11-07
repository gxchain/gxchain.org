<template>
  <div class="home-page">
    <section class="header m-center">
      <div class="container">
        <div class="fadeInUp2">
            <img src="/gxchain.org.png" class="not-animate"  alt="GXChain">
            <h1 class="slogan ping-regular zh lead color-theme">{{$t('index.slogan')}}</h1>
            <p>
            <a :href="$i18n.locale == 'zh' ? 'https://docs.gxchain.org/zh/': 'https://docs.gxchain.org'" target="_blank" class="btn btn-lg btn-theme-lg"><img class="not-animate" src="~static/index/start.png" alt=""></a>
            </p>
        </div>
      </div>
    </section>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner">
                <img :src="banner">
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <section class="introduction section-padding">
      <div class="container">
        <h2 class="gxc-border-left padding-left-w">{{$t('index.introduction.title')}}</h2>
        <div class="content content-margin-top">
          <div class="left-content">
            <h5>{{$t('index.introduction.content1')}}</h5>
            <div class="des ping-regular  in-animate">{{$t('index.introduction.content2')}}</div>
          </div>
            <a href="https://static.gxb.io/files/GXChain_WhitePaper_v3.0_CN.pdf" target="_blank" >
              <div class="white-paper in-animate">
                <img src="~static/index/white_paper.png" alt="">
                <p>{{$t('index.introduction.getWhitepaper')}}</p>
              </div>
            </a>
        </div>
      </div>
    </section>
    <section class="advantages section-padding">
       <div class="container">
          <h2 class="gxc-border-left padding-left-w color-666">{{$t('index.advantages.title')}}</h2>
          <div class="content content-margin-top">
            <div class="item">
              <div class="item-img text-center">
                <img src="~static/index/home_1.png" alt="">
              </div>
              <div class="item-txt in-animate">
                <h4 class="color-666">{{$t('index.advantages.list1.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list1.content')}}</p>
             </div>
            </div>
            <div class="item">
              <div class="item-img text-center">
                <img src="~static/index/home_2.png" alt="">
             </div>
              <div class="item-txt in-animate">
                <h4 class="color-666">{{$t('index.advantages.list2.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list2.content')}}</p>
             </div>
            </div>
            <div class="item">
              <div class="item-img text-center in-animate">
                <img src="~static/index/home_3.png" alt="">
              </div>
              <div class="item-txt">
                <h4 class="color-666">{{$t('index.advantages.list3.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list3.content')}}</p>
              </div>
            </div>
          </div>
          <p class="text-center entrance">
             <a href="/developer/" target="_blank" class="btn btn-lg btn-theme-lg">{{$t('index.advantages.developerCenter')}} </a>
          </p>
       </div>
    </section>
    <section class="resource section-padding">
        <div class="container">
          <img src="~static/index/stellate.png" alt="">
          <div class="look-over">
            <div class="down-load">
              <p>{{$t('index.resource.txt1')}}</p><p>{{$t('index.resource.txt2')}}</p>
            </div>
            <a href="/resource/" target="_blank" class="btn-resource">{{$t('index.resource.txt3')}} </a>
          </div>
        </div>
    </section>
    <section class="road-map section-padding">
        <div class="container">
          <h2  class="gxc-border-left padding-left-w color-666">{{$t('index.roadMap.title')}}</h2>
          <time-line :roadMap = roadMap></time-line>
        </div>
    </section>
  </div>
</template>
<script>
import TimeLine from "~/components/TimeLine.vue";
export default {
    components: {
        TimeLine
    },
    data () {
        return {
            roadMap: [
                {
                    name: "map1",
                    active: false
                },
                {
                    name: "map2",
                    active: true
                },
                {
                    name: "map3",
                    active: false
                },
                {
                    name: "map4",
                    active: false
                },
                {
                    name: "map5",
                    active: false
                },
                {
                    name: "map6",
                    active: false
                },
                {
                    name: "map7",
                    active: false
                },
                {
                    name: "map8",
                    active: false
                },
                {
                    name: "map9",
                    active: false
                },
                {
                    name: "map10",
                    active: false
                },
                {
                    name: "map11",
                    active: false
                }
            ],
            banners: [
                '/1.jpg',
                '/2.jpg',
                '/3.jpg'
            ],
            swiperOption: {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
                on: {
                    slideChange () {
                        console.log('onSlideChangeEnd', this);
                    },
                    tap () {
                        console.log('onTap', this);
                    }
                }
            }
        };
    }
};
</script>
<style lang='less' scoped>
@import '../assets/css/index.less';
</style>

