<template>
     <div class="resource-page">
     <section class="client section-padding">
        <div class="container">
            <h2 class="gxc-border-left padding-left-w color-666">客户端</h2>
             <div class="content content-margin-top">
              <div class="item gxs-wallet">
                <div class="item-logo"><img src="../../assets/img/resource/gxs_wallet.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">GXS Wallet</h4>
                  <div class="color-666">GXS钱包是一款去中心化移动钱包应用，通过区块链技术实现GXS的接收、发送和钱包管理等功能，并可及时掌握公信宝的最新动态</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">IOS版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">安卓版</a> 
                </div>
              </div>
               <div class="item pc-wallet">
                <div class="item-logo"><img src="../../assets/img/resource/pc_wallet.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">PC钱包</h4>
                  <div class="color-666">PC钱包是一款去中心化PC钱包应用，通过区块链技术实现GXS的接收、发送和钱包管理等功能，并可及时掌握公信宝的最新动态</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">Win32版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">Win32版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">mac版</a> 
                </div>
              </div>
               <div class="item agreement-ide">
                <div class="item-logo"><img src="../../assets/img/resource/IDE.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">合约IDE</h4>
                  <div class="color-666">合约IDE是基于GXChain研发的一种为开发者提供快速开发、部署、调用在GXChain上的合约的工具</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">Win32版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">Win32版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">mac版</a> 
                </div>
              </div>
            </div>
        </div>
     </section>
     <section class="code-addr section-padding">
         <div class="container">
           <h2 class="gxc-border-left padding-left-w color-666">GitHub开源代码</h2>
           <div class="content row content-margin-top">
             <div class="col-md-4">
               <div class="item">
                  <h4 class="color-666">主链核心gxb-core</h4>
                  <h6 class="color-999">GXChain核心模块</h6> 
                  <div><a href="">前往</a></div>
               </div>
             </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">轻钱包</h4>
                  <h6 class="color-999">GXChain资产管理PC客户端</h6> 
                  <div><a href="">前往</a></div>
                </div>
             </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">手机钱包</h4>
                  <h6 class="color-999">GXChain资产管理手机端</h6> 
                  <div><a href="">前往</a></div>
                </div>
             </div>
             <div class="col-md-4">
               <div class="item">
                  <h4 class="color-666">主链客户端</h4>
                  <h6 class="color-999">主链交互Client,封装了账户注册，转账，区块查询等常用API</h6> 
                   <div><a href="">Jave</a> <a href="">Node</a></div>
               </div>
             </div>
             <div class="col-md-4">
                <div class="item">
                 <h4 class="color-666">BaaS客户端</h4>
                 <h6 class="color-999">基于GXChain等数据存储+存证SDK</h6> 
                <div><a href="">Jave</a> <a href="">Node</a></div>
               </div>
             </div>
              <div class="col-md-4">
                <div class="item">
                 <h4 class="color-666">DES客户端</h4>
                 <h6 class="color-999">GXChain资产管理PC客户端</h6> 
                 <div><a href="">前往</a></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">轻钱包</h4>
                  <h6 class="color-999">GXChain资产管理PC客户端</h6> 
                  <div><a href="">前往</a></div>
                </div>
               </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">轻钱包</h4>
                  <h6 class="color-999">GXChain资产管理PC客户端</h6> 
                  <div><a href="">前往</a></div>
                </div>
              </div>
           </div>
         </div>
     </section>
   </div>
</template>

<style lang="less" scoped>
.section {
  padding-top: 50px;
  padding-bottom: 30px;
}
.client {
  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 60px 0;
    border-bottom: 2px solid #dbdbdb;
  }
  .agreement-ide {
    border-bottom: none;
  }
  .item-logo {
    margin-right: 30px;
  }
  .item-des {
    width: 50%;
  }
  .item-download {
    margin-left: 60px;
    a {
      margin: 0 10px;
    }
  }
}
.code-addr {
  .item {
    padding: 36px;
    background: #f5f6f9;
    border-radius: 10px;
    margin-bottom: 30px;
    a {
      color: #70bc55;
      margin-right: 25px;
    }
  }
}
@media (max-width: 1200px) {
  .client {
    .item-download {
      margin-left: 0;
    }
  }
}
@media (max-width: 1080px) {
  .client {
    .item {
      justify-content: center;
      text-align: center;
    }
    .item-logo {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .item-des {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
