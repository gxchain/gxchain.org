<template>
  <div class="bounty-page">
    <section class="bounty section-padding">
      <div class="container">
        <h2 class="gxc-border-left padding-left-w color-666">{{$t('bounty.development.title')}}</h2>
        <!-- <p class="rule"><a  href="">[{{$t('bounty.development.rules')}}]</a></p> -->
        <div class="row content-margin-top">
          <div class="col-lg-3" v-for="(item,index) in bountyList" :key="index">
            <div class="card bounty-item text-center">
              <h6 class="card-title">{{$t('bounty.development.bountyList.'+item.ikey)}}</h6>
              <img class="card-img-top " src="~static/bounty/2.png" alt="" style="width: 50%; margin: 0 auto;">
              <div class="card-body">
                <h5 class="currency">{{item.bounty}}<span >{{item.currency}}+</span></h5>
                <p class="card-text">{{item.time}}</p>
              </div>
              <div class="act-status started" v-if="item.status == 0">
                <span>{{$t('bounty.development.signUp')}}</span>
                <span class="number">15{{$t('bounty.development.people')}}</span>
              </div>
              <div class="act-status pendding" v-if="item.status == 1">
                {{$t('bounty.development.progressing')}}
              </div>
              <div class="act-status finished" v-if="item.status == 2">
                {{$t('bounty.development.finished')}}
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
    <section class="project section-padding">
     <div class="container">
        <h2 class="gxc-border-left padding-left-w color-666">{{$t('bounty.longTerm.title')}}</h2>
        <div class="centent content-margin-top row">
          <div class="col-lg-8">
            <ul class="list-unstyled">
              <li class="media">
                <img class="mr-3" src="~static/bounty/1.png" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">{{$t('bounty.longTerm.security')}}</h5>
                  <p>{{$t('bounty.longTerm.dec')}}</p>
                  <div class="degree-list">
                    <div class="degree-item">
                      <span class="degree-tag high">{{$t('bounty.longTerm.highRisk')}}</span>
                      <span class="bounty-val">150</span>
                      <span class="color-999">GXS+</span>
                    </div>
                    <div class="degree-item">
                      <span class="degree-tag middle">{{$t('bounty.longTerm.mediumRisk')}}</span>
                      <span class="bounty-val">150</span>
                      <span class="color-999">GXS+</span>
                    </div>
                     <div class="degree-item">
                      <span class="degree-tag low">{{$t('bounty.longTerm.lowRisk')}}</span>
                      <span class="bounty-val">150</span>
                      <span class="color-999">GXS+</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <a href="/resource">GitHub开源代码</a>
          </div>
        </div>
     </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bountyList: [
        {
          ikey: "item1",
          name: "智能合约调试工具",
          bounty: "100",
          currency: "GXS",
          time: "2018.09.10-2018.11.01",
          status: 0,
          number: 15
        },
        {
          ikey: "item1",
          name: "智能合约调试工具",
          bounty: "100",
          currency: "GXS",
          time: "2018.09.10-2018.11.01",
          status: 1,
          number: 15
        },
        {
          ikey: "item1",
          name: "智能合约调试工具",
          bounty: "100",
          currency: "GXS",
          time: "2018.09.10-2018.11.01",
          status: 2,
          number: 15
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.bounty-page {
  .bounty {
    min-height: 32rem;
    background-color: #eeeff0;
  }
  .rule {
    margin: 20px 0 20px 24px;
    a {
      color: #7188a9;
    }
  }
  .bounty-item {
    width: 13rem;
    padding-top: 20px;
    border-radius: 10px;
    margin-right: 25px;
    margin-bottom: 25px;
  }
  .card-title {
    padding: 0 3px;
  }
  .currency {
    color: #004499;
    span {
      margin-left: 3px;
      font-size: 14px;
    }
  }
  .act-status {
    position: relative;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    span {
      display: inline-block;
      width: 50%;
    }
    .number {
      background: #9ba8c3;
      border-bottom-right-radius: 10px;
    }
    &.started {
      background: #6699ff;
    }
    &.pendding {
      background: #72bf58;
    }
    &.finished {
      background: #999999;
    }
  }
  .project {
    margin-bottom: 80px;
    .degree-list {
      display: flex;
      flex-wrap: wrap;
    }
    .degree-item {
      margin-right: 25px;
    }
    .degree-tag {
      padding: 3px 10px;
      border-radius: 20px;
      color: #fff;
      margin-right: 5px;
      &.high {
        background-color: #fc5970;
      }
      &.middle {
        background-color: #e9ad1d;
      }
      &.low {
        background-color: #82a4d6;
      }
    }
    .bounty-val {
      font-size: 2rem;
      color: #999999;
    }
  }
  .media-body {
    border-right: 1px solid #e5e9ef;
  }
  .project-list {
    color: #7188a9;
    margin-top: 10px;
  }
}
@media (max-width: 1080px) {
  .bounty-page {
    .bounty-item {
      width: 100%;
    }
    .project {
      .degree-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: 0;
      }
      .media-body {
        border-right: none;
      }
      .degree-tag.en {
        width: 100%;
        padding: 3px 5px !important;
        display: inline-block;
      }
    }
  }
}
</style>
