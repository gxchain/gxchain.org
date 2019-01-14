<template>
  <div class="bounty-page">
    <section class="bounty section-padding">
      <div class="container">
        <h2 class="gxc-border-left padding-left-w color-666">{{$t('bounty.development.title')}}</h2>
        <div class="row content-margin-top card-container">
            <div class="col-lg-4" v-for="(item,index) in bountyList" :key="index">
                <div class="bounty-item-inner">
                    <a :href="item.applyURL">
                        <img :src="setImgSrc(index+1)"  alt="" class="not-animate fadeInUp" style="width:100%;">
                    </a>
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
                      <span class="bounty-val">800~1,000</span>
                      <span class="color-999">GXC</span>
                    </div>
                    <div class="degree-item">
                      <span class="degree-tag high">{{$t('bounty.longTerm.highRisk')}}</span>
                      <span class="bounty-val">500~800</span>
                      <span class="color-999">GXC</span>
                    </div>
                    <div class="degree-item">
                      <span class="degree-tag middle">{{$t('bounty.longTerm.mediumRisk')}}</span>
                      <span class="bounty-val">200~500</span>
                      <span class="color-999">GXC</span>
                    </div>
                     <div class="degree-item">
                      <span class="degree-tag low">{{$t('bounty.longTerm.lowRisk')}}</span>
                      <span class="bounty-val">50~200</span>
                      <span class="color-999">GXC</span>
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
    data () {
        return {
            bountyList: [
                {
                    ikey: "item1",
                    name: "浏览器插件",
                    applyURL: "https://github.com/gxchain/GScatter"
                },
                {
                    ikey: "item2",
                    name: "智能合约IDE",
                    applyURL: "https://github.com/gxchain/gxc-smart-contract-ide"
                },
                {
                    ikey: "item3",
                    name: "手机钱包",
                    applyURL: "https://github.com/gxchain/gxchain-wallet"
                },
                {
                    ikey: "item4",
                    name: "PC钱包",
                    applyURL: "https://github.com/gxchain/gxchain-light"
                },
                {
                    ikey: "item5",
                    name: "GXClient多语言实现",
                    applyURL: "https://github.com/gxchain/gxclient-node"
                },
                {
                    ikey: "item6",
                    name: "文档翻译",
                    applyURL: "https://github.com/gxchain/docs"
                },
                {
                    ikey: "item7",
                    name: "硬件钱包",
                    applyURL: "javascript:void(0);"
                },
                {
                    ikey: "item8",
                    name: "DEMO和教程",
                    applyURL: "javascript:void(0);"
                },
                {
                    ikey: "item9",
                    name: "优化提案",
                    applyURL: "https://github.com/gxchain/gxips"
                },
                {
                    ikey: "item10",
                    name: "代码贡献",
                    applyURL: "https://github.com/gxchain"
                }
            ]
        };
    },
    methods: {
        setImgSrc (index) {
            return `/bounty/card/${index}.png`;
        }
    }
};
</script>
<style lang="less" scoped>
@import '../assets/css/bounty.less';
</style>
