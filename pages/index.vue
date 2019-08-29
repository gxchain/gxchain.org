<template>
  <div class="home-page">
    <section class="header m-center" style="background:#fff;">
        <div class="container">
            <div class="fadeInUp2">
                <img src="/gxchain.org.png" class="not-animate"  alt="GXChain">
                <h1 :class="{'zh': $i18n.locale == 'zh'}" class="slogan ping-regular zh lead color-theme">{{$t('index.slogan')}}</h1>
                <p>
                <a :href="$i18n.locale == 'zh' ? 'https://docs.gxchain.org/zh/': 'https://docs.gxchain.org'" target="_blank" class="btn btn-lg btn-theme-lg"><img class="not-animate" src="~static/index/start.png" alt=""></a>
                </p>
            </div>
        </div>
    </section>
    <section class="recent-news section-padding">
        <div class="container">
            <h2 class="gxc-border-left padding-left-w">{{$t('index.news.title')}}</h2>
            <div class="row content content-margin-top news-list-wrap">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="col-md-4 news-item swiper-slide" v-for="(item, index) in newsList" :key="index">
                            <a :href="item.href ? item.href : 'javasript:void(0);'" :target="item.href ? '_blank' : ''"> 
                                <div class="img-wrap">
                                    <img :src="item.thumb" alt="" class="bg not-animate">
                                    <img v-if="item.isNew" src="~static/index/news/new.png" alt="" class="new not-animate">
                                </div>
                                <div class="info">
                                    <div class="des">{{$t(`index.news.${item.key}`)}}</div>
                                    <i class="iconfont icon-jiantou"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="introduction section-padding">
      <div class="container">
        <h2 class="gxc-border-left padding-left-w">{{$t('index.introduction.title')}}</h2>
        <div class="content content-margin-top">
          <div class="left-content">
            <h5>{{$t('index.introduction.content1')}}</h5>
            <div class="des ping-regular  in-animate">{{$t('index.introduction.content2')}}</div>
          </div>
            <a href="https://static.gxchain.org/files/GXChain_WhitePaper_v3.0_CN.pdf" target="_blank" >
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
                <img src="~static/index/home_1.png" alt="gxchain">
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
import { newsList } from "~/pageData/";
export default {
    components: {
        TimeLine
    },
    data () {
        return {
            roadMap: this.setRoadMap(11, 1),
            swiperOption: {
                loop: true,
                speed: 2000,
                slidesPerView: this.$store.state.platform == 'WEB' ? 3 : 1,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false
                }
            },
            newsList: newsList
        };
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
@import '../assets/css/index.less';
</style>
