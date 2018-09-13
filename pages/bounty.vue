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
              <img class="card-img-top " :src="setImgSrc(index+1)"  alt="" style="width: 50%; margin: 0 auto;">
              <div class="card-body">
                <h5 class="currency">{{item.bounty}}<span >{{item.currency}}+</span></h5>
                <p class="card-text">{{item.time}}</p>
              </div>
              <div class="act-status started" v-if="item.status == 0">
                <span>{{$t('bounty.development.signUp')}}</span>
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
                  <h5 class="mt-0 mb-1 color-666">{{$t('bounty.longTerm.security')}}</h5>
                  <p class="color-666">{{$t('bounty.longTerm.dec')}}</p>
                  <div class="degree-list">
                    <div class="degree-item">
                      <span class="degree-tag critical">{{$t('bounty.longTerm.critical')}}</span>
                      <span class="bounty-val">800～1,000</span>
                      <span class="color-999">GXS+</span>
                    </div>
                    <div class="degree-item">
                      <span class="degree-tag high">{{$t('bounty.longTerm.highRisk')}}</span>
                      <span class="bounty-val">500～800</span>
                      <span class="color-999">GXS+</span>
                    </div>
                    <div class="degree-item">
                      <span class="degree-tag middle">{{$t('bounty.longTerm.mediumRisk')}}</span>
                      <span class="bounty-val">200～500</span>
                      <span class="color-999">GXS+</span>
                    </div>
                     <div class="degree-item">
                      <span class="degree-tag low">{{$t('bounty.longTerm.lowRisk')}}</span>
                      <span class="bounty-val">50～200</span>
                      <span class="color-999">GXS+</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 longTerm-list">
            <a style="color: #7188a9;" :href="$i18n.locale == 'zh' ? '/resource/' : '/'+$i18n.locale+'/resource'">{{$t('resource.github.title')}}</a>
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
          name: "智能合约IDE优化",
          bounty: "10～100",
          currency: "GXS",
          time: "",
          status: 0,
          number: 15
        },
        {
          ikey: "item2",
          name: "区块浏览器优化",
          bounty: "10～100",
          currency: "GXS",
          time: "",
          status: 0,
          number: 15
        },
        {
          ikey: "item3",
          name: "GXClient多语言实现",
          bounty: "100～200",
          currency: "GXS",
          time: "",
          status: 0,
          number: 15
        }
      ]
    };
  },
  methods: {
    setImgSrc(index) {
      return `/bounty/b_${index}.png`;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/bounty.less";
</style>
