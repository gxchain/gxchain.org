<template>
  <div class="home-page">
    <section class="header m-center">
      <div class="container">
        <img src="/gxchain.org.png">
        <h1 class="slogen lead color-theme">{{$t('index.slogen')}}</h1>
        <p>
          <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme"><img src="~static/index/start.png" alt=""></a>
        </p>
      </div>
    </section>
    <section class="introduction section-padding">
      <div class="container">
        <h2 class="gxc-border-left padding-left-w">{{$t('index.introduction.title')}}</h2>
        <div class="content content-margin-top">
          <div class="left-content">
            <h5>{{$t('index.introduction.content1')}}</h5>
            <div class="des">{{$t('index.introduction.content2')}}</div>
          </div>
            <a href="https://github.com/gxchain/whitepaper/blob/master/zh/whitepaper.md" target="_blank" >
              <div class="white-paper">
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
              <div class="item-txt">
                <h4 class="color-666">{{$t('index.advantages.list2.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list2.content')}}</p>
             </div>
            </div>
            <div class="item">
              <div class="item-img text-center">
                <img src="~static/index/home_3.png" alt="">
              </div>
              <div class="item-txt">
                <h4 class="color-666">{{$t('index.advantages.list3.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list3.content')}}</p>
              </div>
            </div>
          </div>
          <p class="text-center entrance">
             <a href="" target="_blank" class="btn btn-lg btn-theme">{{$t('index.advantages.developerCenter')}} </a>
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
            <a href="https://github.com/gxchain" target="_blank" class="btn btn-lg btn-theme">{{$t('index.resource.txt3')}} </a> 
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
  data() {
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
      ]
    };
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/css/index.less";
</style>

