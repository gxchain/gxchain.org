<template>
  <div class="home-page">
    <section class="header text-center">
      <div class="container">
        <img src="/gxchain.org.png">
        <h1 class="slogen zh lead color-theme">{{$t('index.slogen')}}</h1>
        <p>
          <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme">{{$t('index.startBtn')}}</a>
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
          <div class="white-paper">
             <img src="~static/index/white_paper.png" alt="">
            <p>{{$t('index.introduction.getWhitepaper')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="advantages section-padding">
       <div class="container">
          <h2 class="gxc-border-left padding-left-w color-666">{{$t('index.advantages.title')}}</h2>
          <div class="content content-margin-top">
            <div class="item">
              <div class="item-img">
                <img src="~static/index/home_1.png" alt="">
              </div>
              <div class="item-txt">
                <h4 class="color-666">{{$t('index.advantages.list1.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list1.content')}}</p>
             </div>
            </div>
            <div class="item">  
              <div class="item-img">
                <img src="~static/index/home_2.png" alt="">
             </div>
              <div class="item-txt">
                <h4 class="color-666">{{$t('index.advantages.list2.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list2.content')}}</p>
             </div>
            </div>
            <div class="item">
              <div class="item-img">
                <img src="~static/index/home_3.png" alt="">
              </div>
              <div class="item-txt">
                <h4 class="color-666">{{$t('index.advantages.list3.title')}}</h4>
                <p class="color-999">{{$t('index.advantages.list3.content')}}</p>
              </div>
            </div>

          </div>
          <p class="text-center entrance">
             <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme">{{$t('index.advantages.developerCenter')}} </a>
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
            <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme">{{$t('index.resource.txt3')}} </a> 
          </div>
        </div>
    </section>
    <section class="course section-padding">
        <div class="container">
          <h2  class="gxc-border-left padding-left-w color-666">历程</h2>
          <div class="col-md-12 content-margin-top">
            <div class="row">
              <div class="timeline timeline-line-dotted">
                <div class="timeline-item timeline-text-algin">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2019年</h4>
                    </div>
                    <div class="timeline-body">
                      <p>GXChain数据经济生态全面升级</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-point"><i class="active"></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4 class="blue">2018.Q3-Q4</h4>
                    </div>
                    <div class="timeline-body">
                      <p>智能合约2.0上线，支持WebAssembly</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item timeline-text-algin">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2018年6月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>去中心化数据交易所升级DES,</p>
                      <p>服务全国百家互金企业</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2018年5月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>基于GXChain的存储+存证服务BaaS-Storage上线</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item  timeline-text-algin">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2018年3月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>布洛克城用户突破百万</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-point">
                    <i class="fa fa-times"></i>
                  </div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2018年1月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>GXChain首款Dapp布洛克城上线,</p>
                      <p>24小时用户突破10万</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item timeline-text-algin">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2017年11月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>白皮书升级, 主打"CBD"生态,</p>
                      <p>GXChain定位下一代大数据公链</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2017年9月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>去中心化数据交易所正式商业化</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item timeline-text-algin">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2017年8月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>主链代码开源</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2017年6月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>主链上线，去中心化数据交易所1.0版本上线</p>
                    </div>
                  </div>
                </div>
                 <div class="timeline-item timeline-text-algin">
                  <div class="timeline-point"><i></i></div>
                  <div class="timeline-event">
                    <div class="timeline-heading">
                      <h4>2017年2月</h4>
                    </div>
                    <div class="timeline-body">
                      <p>GXChain白皮书发布</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import "../assets/css/timeline.css";
export default {
  components: {}
};
</script>
<style lang="less" scoped>
.home-page {
  .contact-us {
    padding-top: 40px;
  }
  .header {
    display: flex;
    align-items: center;
    height: 93vh;
    padding: 0;
  }
  img {
    height: auto;
    max-width: 80%;
  }
}
.header {
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
  min-height: 500px;
  color: #fff;
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
  }
  h2 {
    border-color: #fff;
  }
  .left-content {
    width: 620px;
  }
  .left-content .des {
    font-size: 14px;
    line-height: 30px;
    margin-top: 20px;
  }
  .white-paper {
    width: 200px;
    height: 200px;
    padding: 50px 10px;
    text-align: center;
    border: solid 2px #ffffff;
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
    font-size: 16px;
    justify-content: center;
  }
  .item-img {
    text-align: center;
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
.course {
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
  .introduction .content {
    justify-content: center;
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


