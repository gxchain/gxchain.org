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
          <img src="~static/index/stellate_en.png" alt="">
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
<style lang="less" scoped>
.home-page {
  img {
    height: auto;
    max-width: 90%;
  }
}
.header {
  height: 93vh;
  padding: 0;
  .slogen {
    font-size: 4rem;
    margin: 2rem;
  }
  .slogen.zh {
    letter-spacing: 3rem;
  }
}
.introduction {
  background: #434750;
  min-height: 31rem;
  color: #fff;
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
  }
  a {
    text-decoration: none;
  }
  h2 {
    border-color: #fff;
  }
  .left-content {
    width: 38rem;
    line-height: 2rem;
    h5 {
      line-height: 2rem;
    }
    .des {
      margin-top: 20px;
      font-size: 14px;
    }
  }
  .white-paper {
    width: 13rem;
    height: 13rem;
    padding: 50px 10px;
    text-align: center;
    border: solid 2px #ffffff;
    color: #fff;
    cursor: pointer;
    img {
      margin-bottom: 40px;
    }
    &:hover {
      background-color: #6699ff;
      border-color: #6699ff;
    }
  }
}
.advantages {
  .item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .item:nth-child(even) {
    flex-direction: row-reverse;
  }
  .item-txt,
  .item-img {
    width: 50%;
  }
  .item-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
  }
  .entrance {
    margin-top: 20px;
  }
}
.resource {
  background: #434750;
  min-height: 420px;
  color: #fff;
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .look-over {
    text-align: center;
  }
  .down-load {
    margin-bottom: 35px;
    background: #000;
    padding: 15px;
    p {
      margin: 0;
    }
    p:nth-child(1) {
      padding-top: 5px;
      border-top: 1px solid #ddd;
    }
    p:nth-child(2) {
      padding-bottom: 5px;
      border-bottom: 1px solid #ddd;
    }
  }
}
.road-map {
  padding-bottom: 100px;
  .container {
    overflow: hidden;
  }
}
@media (max-width: 1080px) {
  .introduction {
    .content {
      justify-content: center;
    }
    .white-paper {
      margin: 35px 0 45px 0;
    }
  }
}
@media (max-width: 768px) {
  .header {
    .slogen {
      font-size: 3rem;
    }
    .slogen.zh {
      letter-spacing: 0;
    }
  }
  .advantages {
    .item {
      width: 100%;
      display: block;
      text-align: center;
      margin-bottom: 40px;
    }
    .item-img {
      margin-bottom: 20px;
    }
    .item-txt,
    .item-img {
      width: 100%;
      font-size: 14px;
    }
  }
  .resource {
    display: block;
    text-align: center;
    img,
    .look-over {
      margin: 0 auto;
    }
    .look-over {
      margin-top: 50px;
    }
  }
}
</style>


