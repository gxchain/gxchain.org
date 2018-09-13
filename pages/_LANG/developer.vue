<template>
  <div class="developer-page">
    <section class="developer-begin text-center">
       <div class="container">
        <div class="slogen color-666">{{$t('developer.slogen')}}</div>
        <p>
          <a href="https://developer.gxb.io/login.html#/" target="_blank" class="btn btn-lg btn-theme-lg"><img src="~static/index/start.png" alt=""></a>
        </p>
      </div>  
    </section>
    <section class="apply-entrance">
       <div class="container">
         <div class="content text-center">
           <div class="item">
              <img class="item-bg" src="~static/developer/gxb.png" alt="">
              <h3>{{$t('developer.apply.title')}}</h3>
              <p>{{$t('developer.apply.des')}}</p>
              <a href="http://blockcity.mikecrm.com/2SVDb67" target="_blank" class="btn btn-lg btn-theme">{{$t('developer.apply.btn')}}</a> 
           </div>
           <div class="item gitbub-entrance">
              <img class="item-bg" src="~static/developer/github.png" alt="">
              <h3>{{$t('developer.visit.title')}}</h3>
              <p>{{$t('developer.visit.des')}}</p>
              <a href="https://github.com/gxchain" target="_blank" class="btn btn-lg btn-theme">{{$t('developer.visit.btn')}}</a> 
           </div>
         </div>
       </div>
    </section>
  </div>
</template>
<style lang="less" scoped>
@import "../../assets/css/developer.less";
</style>
