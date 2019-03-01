<template>
  <div class="bounty-page">
    <section class="bounty section-padding">
      <div class="container">
        <h2 class="page-title gxc-border-left padding-left-w color-666">
            <span>{{$t('bounty.development.title')}}</span>
            <button type="button" class="btn btn-primary"><a target="_blank" href="http://blockcity.mikecrm.com/9ySzQZi">{{$t('bounty.development.receiveAward')}}</a></button>
        </h2>
        <div class="row content-margin-top card-container">
            <div class="col-lg-4" v-for="(item,index) in bountyList" :key="index">
                <div class="bounty-item-inner">
                    <a target='_blank' :href="item.applyURL">
                        <img :src="item.imgSrc"  alt="" class="not-animate fadeInUp" style="width:100%;">
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
            <p>
                <a style="color: #7188a9;" target="_blank"  href="https://slowmist.io/gxchain/index.html?utm_source=index&utm_medium=cpc&utm_campaign=gxchain">{{$t('bounty.longTerm.slowmistPlan')}}</a>
            </p>
            <p>
                <a style="color: #7188a9;" :href="$i18n.locale == 'zh' ? '/resource/' : '/'+$i18n.locale+'/resource'">{{$t('resource.github.title')}}</a>
            </p>
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
                    applyURL: "https://github.com/gxchain/GScatter",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-extension.png"
                },
                {
                    ikey: "item2",
                    name: "智能合约IDE",
                    applyURL: "https://github.com/gxchain/gxc-smart-contract-ide",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-ide.png"
                },
                {
                    ikey: "item3",
                    name: "手机钱包",
                    applyURL: "https://github.com/gxchain/gxchain-wallet",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-mwallet.png"
                },
                {
                    ikey: "item4",
                    name: "PC钱包",
                    applyURL: "https://github.com/gxchain/gxchain-light",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-wallet.png"
                },
                {
                    ikey: "item5",
                    name: "GXClient多语言实现",
                    applyURL: "https://github.com/gxchain/gxclient-node",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-gxclient.png"
                },
                {
                    ikey: "item6",
                    name: "文档翻译",
                    applyURL: "https://github.com/gxchain/docs",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-docs.png"
                },
                {
                    ikey: "item7",
                    name: "硬件钱包",
                    applyURL: "javascript:void(0);",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-hardware.png"
                },
                {
                    ikey: "item8",
                    name: "DEMO和教程",
                    applyURL: "javascript:void(0);",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-demo.png"
                },
                {
                    ikey: "item9",
                    name: "优化提案",
                    applyURL: "https://github.com/gxchain/gxips",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-gxips.png"
                },
                {
                    ikey: "item10",
                    name: "代码贡献",
                    applyURL: "https://github.com/gxchain",
                    imgSrc: "https://raw.githubusercontent.com/gxchain/gxips/master/assets/images/task-code.png"
                }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
@import '../assets/css/bounty.less';
</style>
