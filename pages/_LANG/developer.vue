<template>
  <div class="developer-page">
    <section class="developer-begin text-center">
       <div class="container">
        <h1 class="slogen color-666">开发者？那么，开始吧！</h1>
        <p>
          <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme">Getting Started</a>
        </p>
      </div>  
    </section>
    <section class="apply-entrance">
       <div class="container">
         <div class="content text-center">
           <div class="item">
              <img class="item-bg" src="../../assets/img/developer/gxb.png" alt="">
              <h3>申请测试网的GXS</h3>
              <p>如果你正在创建 GXChain 生态的项目，需要测试网的 GXS，请点击申请并填写相关信息后提交，申请通过后会收到邮件通知。</p>
              <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme">申请</a> 
           </div>
           <div class="item gitbub-entrance">
              <img class="item-bg" src="../../assets/img/developer/github.png" alt="">
              <h3>GitHub</h3>
              <p>访问 GXChain 开源代码</p>
              <a href="https://docs.gxchain.org" target="_blank" class="btn btn-lg btn-theme">访问</a> 
           </div>
         </div>
       </div>
    </section>
  </div>
</template>
<style lang="less" scoped>
.developer-begin {
  .container {
    padding: 10rem 0;
  }
  .slogen {
    font-size: 4rem;
    margin-bottom: 6rem;
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
  .apply-entrance {
    .item-bg {
      width: 80%;
    }
  }
}
</style>
