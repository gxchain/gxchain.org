<template>
  <div class="developer-page">
    <section class="developer-begin text-center">
       <div class="container">
        <div class="slogan color-666 fadeInUp2">{{$t('developer.slogan')}}</div>
        <p>
          <a :href="$i18n.locale == 'zh' ? 'https://docs.gxchain.org/zh/': 'https://docs.gxchain.org'" target="_blank" class="btn btn-lg btn-theme-lg"><img class="not-animate" src="~static/index/start.png" alt=""></a>
        </p>
      </div>
    </section>
    <section class="apply-entrance">
       <div class="container">
         <div class="content text-center">
           <div class="item">
              <img class="item-bg not-animate" src="~static/developer/gxb.png" alt="gxchain">
              <h3>{{$t('developer.apply.title')}}</h3>
              <p class="in-animate">{{$t('developer.apply.des')}}</p>
              <a href="https://docs.gxchain.org/advanced/testnet.html#_2-apply-token-on-testnet" target="_blank" class="btn btn-lg btn-theme-md">{{$t('developer.apply.btn')}}</a>
           </div>
           <div class="item gitbub-entrance">
              <img class="item-bg not-animate" src="~static/developer/github.png" alt="">
              <h3>{{$t('developer.visit.title')}}</h3>
              <p  class="in-animate">{{$t('developer.visit.des')}}</p>
              <a href="https://github.com/gxchain" target="_blank" class="btn btn-lg btn-theme-md">{{$t('developer.visit.btn')}}</a>
           </div>
         </div>
       </div>
    </section>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/css/developer.less';
</style>
