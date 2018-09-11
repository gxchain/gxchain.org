<template>
     <div class="resource-page">
     <section class="client section-padding">
        <div class="container">
            <h2 class="gxc-border-left padding-left-w color-666">{{$t('resource.client.title')}}</h2>
             <div class="content content-margin-top">
              <div class="item gxs-wallet">
                <div class="item-logo"><img src="~static/resource/gxs_wallet.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">{{$t('resource.client.gxsWallet.title')}}</h4>
                  <div class="color-666">{{$t('resource.client.gxsWallet.des')}}</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">IOS</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">安卓版</a> 
                </div>
              </div>
               <div class="item pc-wallet">
                <div class="item-logo"><img src="~static/resource/pc_wallet.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">{{$t('resource.client.pcWallet.title')}}</h4>
                  <div class="color-666">{{$t('resource.client.pcWallet.des')}}</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">Win32版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">Win32版</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">mac版</a> 
                </div>
              </div>
               <div class="item agreement-ide">
                <div class="item-logo"><img src="~static/resource/IDE.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">{{$t('resource.client.ide.title')}}</h4>
                  <div class="color-666">{{$t('resource.client.ide.des')}}</div>
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
           <h2 class="gxc-border-left padding-left-w color-666">{{$t('resource.github.title')}}</h2>
           <div class="content row content-margin-top">
             <div class="col-md-4">
               <div class="item">
                  <h4 class="color-666">{{$t('resource.github.source1.title')}}</h4>
                  <h6 class="color-999">{{$t('resource.github.source1.des')}}</h6> 
                  <div><a href="">{{$t('resource.github.leaveFor')}}</a></div>
               </div>
             </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">{{$t('resource.github.source2.title')}}</h4>
                  <h6 class="color-999">{{$t('resource.github.source2.des')}}</h6> 
                  <div><a href="">{{$t('resource.github.leaveFor')}}</a></div>
                </div>
             </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">{{$t('resource.github.source3.title')}}</h4>
                  <h6 class="color-999">{{$t('resource.github.source3.des')}}</h6> 
                  <div><a href="">{{$t('resource.github.leaveFor')}}</a></div>
                </div>
             </div>
             <div class="col-md-4">
               <div class="item">
                  <h4 class="color-666">{{$t('resource.github.source4.title')}}</h4>
                  <h6 class="color-999">{{$t('resource.github.source4.des')}}</h6> 
                   <div><a href="">Jave</a> <a href="">Node</a></div>
               </div>
             </div>
             <div class="col-md-4">
                <div class="item">
                 <h4 class="color-666">{{$t('resource.github.source5.title')}}</h4>
                 <h6 class="color-999">{{$t('resource.github.source5.des')}}</h6> 
                <div><a href="">Jave</a> <a href="">Node</a></div>
               </div>
             </div>
              <div class="col-md-4">
                <div class="item">
                 <h4 class="color-666">{{$t('resource.github.source6.title')}}</h4>
                 <h6 class="color-999">{{$t('resource.github.source6.des')}}</h6> 
                 <div><a href="">{{$t('resource.github.leaveFor')}}</a></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">{{$t('resource.github.source7.title')}}</h4>
                  <h6 class="color-999">{{$t('resource.github.source7.des')}}</h6> 
                  <div><a href="">{{$t('resource.github.leaveFor')}}</a></div>
                </div>
               </div>
              <div class="col-md-4">
                <div class="item">
                  <h4 class="color-666">{{$t('resource.github.source8.title')}}</h4>
                  <h6 class="color-999">{{$t('resource.github.source8.des')}}</h6> 
                  <div><a href="">{{$t('resource.github.leaveFor')}}</a></div>
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
