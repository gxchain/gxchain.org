<template>
     <div class="resource-page">
     <section class="client section-padding">
        <div class="container">
            <h2 class="gxc-border-left padding-left-w color-666">{{$t('resource.client.title')}}</h2>
             <div class="content-margin-top">
              <div class="item row">
                <img src="~static/resource/gxs_wallet.png" alt="">
                <div class="col-md-6">
                  <h4 class="">{{$t('resource.client.gxsWallet.title')}}</h4>
                  <div class="color-666 in-animate">{{$t('resource.client.gxsWallet.des')}}</div>
                </div>
                <div class="item-download col-md-4 in-animate">
                   <a href="http://blockcity.gxb.io/download/" target="_blank" class="btn btn-theme-sm">{{$t('resource.github.download')}}</a> 
                </div>
              </div>
              <div class="item row">
                <img src="~static/resource/pc_wallet.png" alt="">
                <div class="col-md-6">
                  <h4 class="">{{$t('resource.client.pcWallet.title')}}</h4>
                  <div class="color-666 in-animate">{{$t('resource.client.pcWallet.des')}}</div>
                </div>
                <div class="item-download col-md-4 in-animate">
                   <a href="https://github.com/gxchain/gxchain-light/releases/download/v1.3.0/gxb-light-setup-1.3.0.exe" class="btn btn-theme-sm">{{$t('resource.github.win')}}</a> 
                   <a href="https://github.com/gxchain/gxchain-light/releases/download/v1.3.0/gxb-light_1.3.0_amd64.deb" target="_blank" class="btn btn-theme-sm">{{$t('resource.github.linux')}}</a> 
                    <a href="https://github.com/gxchain/gxchain-light/releases/download/v1.3.0/gxb-light-1.3.0.dmg" target="_blank" class="btn btn-theme-sm">{{$t('resource.github.mac')}}</a> 
                </div>
              </div>
               <div class="item row">
                <img src="~static/resource/IDE.png" alt="">
                <div class="col-md-6">
                  <h4 class="">{{$t('resource.client.ide.title')}}</h4>
                  <div class="color-666 in-animate">{{$t('resource.client.ide.des')}}</div>
                </div>
                <div class="item-download col-md-4 in-animate">
                   <a href="https://github.com/gxchain/gxchain-alpha/releases/tag/v0.0.3" target="_blank" class="btn btn-theme-sm">{{$t('resource.github.download')}}</a> 
                </div>
              </div>
            </div>
        </div>
     </section>
     <section class="code-address section-padding" id="githubSource">
         <div class="container">
           <h2 class="gxc-border-left padding-left-w color-666">{{$t('resource.github.title')}}</h2>
           <div class="row content-margin-top">
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
    data () {
        return {
            codeAddrList: [
                {
                    ikey: "item1",
                    name: "主链核心gxb-core",
                    des: "GXChain核心模块",
                    address: {
                        leafFor: {
                            txt: "前往",
                            path: "https://github.com/gxchain/gxb-core"
                        }
                    }
                },
                {
                    ikey: "item2",
                    name: "轻钱包",
                    des: "GXChain核心模块",
                    address: {
                        leafFor: {
                            path: "https://github.com/gxchain/gxchain-light"
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
                            path: "https://github.com/gxchain/gxclient-java"
                        },
                        node: {
                            path: "https://github.com/gxchain/gxclient-node"
                        }
                    }
                },
                {
                    ikey: "item5",
                    name: "BaaS客户端",
                    des: "基于GXChain等数据存储+存证SDK",
                    address: {
                        java: {
                            path: "https://github.com/gxchain/baas-sdk-java"
                        }
                    }
                },
                {
                    ikey: "item6",
                    name: "DES客户端",
                    des: "GXChain资产管理PC客户端",
                    address: {
                        java: {
                            path: "https://github.com/gxchain/des-sdk-java"
                        },
                        node: {
                            path: "https://github.com/gxchain/des-sdk-node"
                        },
                        php: {
                            path: "https://github.com/gxchain/des-sdk-php"
                        }
                    }
                },
                {
                    ikey: "item7",
                    name: "智能合约",
                    des: "基于GXChain的智能合约开发工具集",
                    address: {
                        ide: {
                            path: "https://github.com/gxchain/gxchain-alpha"
                        },
                        server: {
                            path: "https://github.com/gxchain/gxx-server"
                        }
                    }
                },
                {
                    ikey: "item8",
                    name: "区块浏览器",
                    des: "区块查询，交易查询，账户查询，资产查询",
                    address: {
                        leafFor: {
                            path: "https://github.com/gxchain/gxchain-explorer"
                        }
                    }
                }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
@import '../assets/css/resource.less';
</style>
