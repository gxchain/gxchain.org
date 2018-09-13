<template>
  <div class="developer-page">
    <section class="developer-begin text-center">
       <div class="container">
        <div class="slogen color-666">{{$t('developer.slogen')}}</div>
        <p>
          <a href="https://developer.gxb.io/login.html#/" target="_blank" class="btn btn-lg btn-theme"><img src="~static/index/start.png" alt=""></a>
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
.developer-begin {
  .container {
    padding: 6rem 0;
  }
  .slogen {
    padding: 0 5px;
    font-size: 4rem;
    margin-bottom: 4rem;
  }
}
.apply-entrance {
  .btn-theme {
    width: 13rem;
    letter-spacing: 5px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
  }
  .item {
    position: relative;
    width: 40%;
    height: 26rem;
    margin: 15px;
    padding: 40px 15px;
    border: solid 2px #9ba8c3;
    p {
      margin: 5rem 0;
      min-height: 5rem;
    }
  }
  .gitbub-entrance {
    p {
      line-height: 4;
    }
  }
  .item-bg {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}
@media (max-width: 1080px) {
  .apply-entrance {
    .item-bg {
      width: 40%;
    }
    .item {
      width: 100%;
      margin: 15px 0;
    }
  }
}
@media (max-width: 768px) {
  .developer-begin {
    .slogen {
      font-size: 3rem;
    }
  }
  .apply-entrance {
    .item-bg {
      width: 80%;
    }
  }
}
</style>
