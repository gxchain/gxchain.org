<template>
  <div class="home-page">
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide">
                <section class="header m-center" style="background:#fff;">
                    <div class="container">
                        <div class="fadeInUp2">
                            <img src="/gxchain.org.png" class="not-animate"  alt="GXChain">
                            <h1 :class="{'zh': $i18n.locale == 'zh'}" class="slogan ping-regular lead color-theme">{{$t('index.slogan')}}</h1>
                            <p>
                            <a :href="$i18n.locale == 'zh' ? 'https://docs.gxchain.org/zh/': 'https://docs.gxchain.org'" target="_blank" class="btn btn-lg btn-theme-lg"><img class="not-animate" src="~static/index/start.png" alt=""></a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <!-- <div class="swiper-slide">
               <a target="_blank" :href="$i18n.locale == 'zh' ? '/bounty/': '/en/bounty/'"><div class="banner-node" :class="{'zh': $i18n.locale == 'zh'}"></div></a>
            </div> -->
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
    </div>
    <section class="introduction section-padding">
      <div class="container">
        <h2 class="gxc-border-left padding-left-w">{{$t('index.introduction.title')}}</h2>
        <div class="content content-margin-top">
          <div class="left-content">
            <h5>{{$t('index.introduction.content1')}}</h5>
            <div class="des ping-regular  in-animate">{{$t('index.introduction.content2')}}</div>
          </div>
            <a href="https://static.gxb.io/files/GXChain_WhitePaper_v3.0_EN.pdf" target="_blank" >
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
              <div class="item-txt">
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
              <div class="item-txt in-animate">
                <h4 class="color-666">{{$t('index.advantages.list3.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list3.content')}}</p>
              </div>
            </div>
          </div>
          <p class="text-center entrance">
             <a href="/en/developer/" target="_blank" class="btn btn-lg btn-theme-lg">{{$t('index.advantages.developerCenter')}} </a>
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
            <a href="/en/resource/" target="_blank" class="btn-resource">{{$t('index.resource.txt3')}} </a>
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
            roadMap: this.setRoadMap(11, 2),
            swiperOption: {
                loop: true,
                speed: 1500,
                autoplay: {
                    delay: 3000
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        };
    },
    mounted () {
        // let that = this;
        // setTimeout(() => {
        //     let comtainer = document.getElementById('swiper-wrapper');
        //     comtainer.onmouseenter = function () {
        //         that.mySwiper.autoplay.stop();
        //     };
        //     comtainer.onmouseleave = function () {
        //         that.mySwiper.autoplay.start();
        //     }
        // }, 3000)

    },
    methods: {
        setRoadMap (n, currentIndex) {
            let tempArr = [];
            for (let i = 1; i <= n; i++) {
                tempArr.push({
                    name: `map${i}`,
                    active: i == currentIndex
                })
            }
            return tempArr;
        }
    }
};
</script>
<style lang='less' scoped>
@import '../../assets/css/index.less';
</style>
<style lang="less">
// swiper
.home-page {
  .swiper-pagination {
    bottom: 8% !important;
  }
  .swiper-pagination-bullet {
    display: inline-block;
    width: 8px;
    height: 8px;
    opacity: 1;
    border-radius: 50%;
    margin: 0 3px;
    cursor: pointer;
    background: #555;
    transition: width 0.3s ease-in-out;
  }
  .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 8px;
    background: #5c98ff;
  }
  .swiper-pagination-bullet-active-prev,
  .swiper-pagination-bullet-active-next {
    transform: scale(1);
  }
}
@media (max-width: 768px) {
  .home-page {
    .swiper-pagination {
      bottom: 2% !important;
    }
  }
}
</style>
