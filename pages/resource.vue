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
                  <div class="color-666">{{$t('resource.gxsWallet.des')}}</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.ios')}}</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.android')}}</a> 
                </div>
              </div>
               <div class="item pc-wallet">
                <div class="item-logo"><img src="~static/resource/pc_wallet.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">{{$t('resource.client.pcWallet.title')}}</h4>
                  <div class="color-666">{{$t('resource.client.pcWallet.des')}}</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.win32')}}</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.win32')}}</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.mac')}}</a> 
                </div>
              </div>
               <div class="item agreement-ide">
                <div class="item-logo"><img src="~static/resource/IDE.png" alt=""></div>
                <div class="item-des">
                  <h4 class="color-333">{{$t('resource.client.ide.title')}}</h4>
                  <div class="color-666">{{$t('resource.client.ide.des')}}</div>
                </div>
                <div class="item-download">
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.win32')}}</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.win32')}}</a> 
                   <a href="https://docs.gxchain.org" target="_blank" class="btn btn-theme">{{$t('resource.github.mac')}}</a> 
                </div>
              </div>
            </div>
        </div>
     </section>
     <section class="code-address section-padding">
         <div class="container">
           <h2 class="gxc-border-left padding-left-w color-666">{{$t('resource.github.title')}}</h2>
           <div class="content row content-margin-top">
             <div class="col-md-4" v-for="(item,index) in codeAddrList" :key="index">
               <div class="item">
                  <h4 class="color-666">{{$t(('resource.github.codeAddrList.'+item.ikey)).title}}</h4>
                  <h6 class="color-999">{{$t(('resource.github.codeAddrList.'+item.ikey)).des}}</h6> 
                  <div>
                    <a v-for="(address,key) in item.address" :key="key" target="_blank" :href="address.path">{{$t('resource.github.address.'+key)}}</a>
                  </div>
               </div>
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
      codeAddrList: [
        {
          ikey: "item1",
          name: "主链核心gxb-core",
          des: "GXChain核心模块",
          address: {
            leafFor: {
              txt: "前往",
              path: "https://open.blockcity.gxb.io/#/"
            }
          }
        },
        {
          ikey: "item2",
          name: "轻钱包",
          des: "GXChain核心模块",
          address: {
            leafFor: {
              path: "https://open.blockcity.gxb.io/#/"
            }
          }
        },
        {
          ikey: "item3",
          name: "手机钱包",
          des: "GXChain资产管理手机端",
          address: {
            leafFor: {
              path: "https://open.blockcity.gxb.io/#/"
            }
          }
        },
        {
          ikey: "item4",
          name: "主链客户端",
          des: "主链交互Client,封装了账户注册，转账，区块查询等常用API",
          address: {
            java: {
              path: "https://open.blockcity.gxb.io/#/"
            },
            node: {
              path: "https://open.blockcity.gxb.io/#/"
            }
          }
        },
        {
          ikey: "item5",
          name: "BaaS客户端",
          des: "基于GXChain等数据存储+存证SDK",
          address: {
            java: {
              path: "https://open.blockcity.gxb.io/#/"
            },
            node: {
              path: "https://open.blockcity.gxb.io/#/"
            }
          }
        },
        {
          ikey: "item6",
          name: "DES客户端",
          des: "GXChain资产管理PC客户端",
          address: {
            leafFor: {
              path: "https://open.blockcity.gxb.io/#/"
            }
          }
        }
      ]
    };
  }
};
</script>
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
.code-address {
  .item {
    padding: 36px;
    background: #f5f6f9;
    border-radius: 10px;
    margin-bottom: 30px;
    a {
      color: #70bc55;
      margin-right: 25px;
    }
    h6 {
      min-height: 2.5rem;
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
