<template>
   <div class="footer">
        <div class="container">
          <h2 class="font-normal">{{$t('footer.contactUs')}}</h2>
          <div class="social-list list-wrap" v-if="$i18n.locale === 'zh'">
            <a class="wechat socail-icon iconfont icon-weixin-copy" href="javascript:void(0)">
              <div class="qrcode-wrap">
                  <img class="not-animate" src="~static/footer/qrcode.png" width="120">
                  <span>{{$t('footer.wechat')}} </span>
              </div>
            </a>
            <a class="socail-icon iconfont icon-github" href="https://github.com/gxchain/" target="_blank"></a>
            <a class="socail-icon iconfont icon-reddit" href="https://www.reddit.com/r/GXS/"></a>
            <a class="socail-icon iconfont icon-weibo" href="http://weibo.com/gongxinbao" target="_blank"></a>
            <a class="socail-icon iconfont icon-twitter3" href="https://twitter.com/gongxinbao" target="_blank"></a>
            <div class="socail-icon iconfont icon-telegram" >
                <div class="item-wrap">
                    <ul>
                        <li><a href="https://t.me/GXChain_international" target="_blank">{{$t('footer.social.english_international')}} </a></li>
                        <li><a href="https://t.me/GXChain_Rus" target="_blank">{{$t('footer.social.russian')}} </a></li>
                        <li><a href="https://t.me/GXChainhispano" target="_blank">{{$t('footer.social.Spanish')}} </a></li>
                        <li><a href="https://t.me/GXChainDeutsch" target="_blank">{{$t('footer.social.German')}} </a></li>
                        <li><a href="https://t.me/GXChainJapanese" target="_blank">{{$t('footer.social.Japanese')}} </a></li>
                        <li><a href="https://t.me/GXChainBrazil" target="_blank">{{$t('footer.social.Brazil')}} </a></li>
                        <li><a href="https://t.me/GXChainIndia" target="_blank">{{$t('footer.social.Indian')}} </a></li>
                        <li><a href="https://t.me/GXChainPhilippines" target="_blank" >{{$t('footer.social.Philippines')}} </a></li>
                        <li><a href="https://t.me/GXChainVietNamese" target="_blank">{{$t('footer.social.Vietnamese')}} </a></li>
                        <li><a href="https://t.me/GXChainAfrica" target="_blank">{{$t('footer.social.African')}} </a></li>
                        <li><a href="https://t.me/GXChainTurkey" target="_blank">{{$t('footer.social.Turkish')}} </a></li>
                        <li><a href="https://t.me/gxchainsrilanka" target="_blank">{{$t('footer.social.SriLanka')}} </a></li>
                        <li><a href="https://t.me/GXChain_Indonesia" target="_blank">{{$t('footer.social.Indonesian')}} </a></li>
                    </ul>
                </div>
            </div>
            <a class="socail-icon iconfont icon-facebookfacebook52" href="https://www.facebook.com/GXChain/" target="_blank"></a>
            <div class="socail-icon iconfont icon-kakao">
                <div class="item-wrap">
                    <ul>
                        <li><a href="https://open.kakao.com/o/g3JeEx0" target="_blank">{{$t('footer.social.kokor1')}} </a></li>
                        <li><a href="https://open.kakao.com/o/gghzljsb" target="_blank">{{$t('footer.social.kokor2')}} </a></li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="social-list list-wrap" v-if="$i18n.locale === 'en'">
            <a class="wechat socail-icon iconfont icon-weixin-copy" href="javascript:void(0)">
              <div class="qrcode-wrap">
                  <img class="not-animate" src="~static/footer/qrcode.png" width="120">
                  <span>{{$t('footer.wechat')}} </span>
              </div>
            </a>
            <a class="socail-icon iconfont icon-github" href="https://github.com/gxchain/" target="_blank"></a>
            <a class="socail-icon iconfont icon-reddit" href="https://www.reddit.com/r/GXS/"></a>
            <a class="socail-icon iconfont icon-weibo" href="http://weibo.com/gongxinbao" target="_blank"></a>
            <a class="socail-icon iconfont icon-twitter3" href="https://twitter.com/GXChainGlobal" target="_blank"></a>
            <div class="socail-icon iconfont icon-telegram en-icon-item" target="_blank">
                <div class="item-wrap">
                    <ul>
                        <li><a href="https://t.me/GXChain_international" target="_blank">{{$t('footer.social.english_international')}} </a></li>
                        <li><a href="https://t.me/GXChain_Rus" target="_blank">{{$t('footer.social.russian')}} </a></li>
                        <li><a href="https://t.me/GXChainhispano" target="_blank">{{$t('footer.social.Spanish')}} </a></li>
                        <li><a href="https://t.me/GXChainDeutsch" target="_blank">{{$t('footer.social.German')}} </a></li>
                        <li><a href="https://t.me/GXChainJapanese" target="_blank">{{$t('footer.social.Japanese')}} </a></li>
                        <li><a href="https://t.me/GXChainBrazil" target="_blank">{{$t('footer.social.Brazil')}} </a></li>
                        <li><a href="https://t.me/GXChainIndia" target="_blank">{{$t('footer.social.Indian')}} </a></li>
                        <li><a href="https://t.me/GXChainPhilippines" target="_blank" >{{$t('footer.social.Philippines')}} </a></li>
                        <li><a href="https://t.me/GXChainVietNamese" target="_blank">{{$t('footer.social.Vietnamese')}} </a></li>
                        <li><a href="https://t.me/GXChainAfrica" target="_blank">{{$t('footer.social.African')}} </a></li>
                        <li><a href="https://t.me/GXChainTurkey" target="_blank">{{$t('footer.social.Turkish')}} </a></li>
                        <li><a href="https://t.me/gxchainsrilanka" target="_blank">{{$t('footer.social.SriLanka')}} </a></li>
                        <li><a href="https://t.me/GXChain_Indonesia" target="_blank">{{$t('footer.social.Indonesian')}} </a></li>
                    </ul>
                </div>
            </div>
            <a class="socail-icon iconfont icon-facebookfacebook52" href="https://www.facebook.com/gxchain.org" target="_blank"></a>
            <div class="socail-icon iconfont icon-kakao en-icon-item-kakao" target="_blank">
                <div class="item-wrap">
                    <ul>
                        <li><a href="https://open.kakao.com/o/g3JeEx0" target="_blank">{{$t('footer.social.kokor1')}} </a></li>
                        <li><a href="https://open.kakao.com/o/gghzljsb" target="_blank">{{$t('footer.social.kokor2')}} </a></li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="other-list list-wrap">
            <a href="mailto:kefu@gxb.io">{{$t('footer.kefu')}}</a>
            <a v-if="$i18n.locale === 'zh'" href="/privacy" target="_blank">{{$t('footer.privacy_policy')}}</a>
            <a v-if="$i18n.locale === 'en'" href="/en/privacy" target="_blank">{{$t('footer.privacy_policy')}}</a>
            <a v-show="$i18n.locale === 'zh'" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602008310">浙公网安备 33010602008310号</a>
            <a v-show="$i18n.locale === 'zh'" href="http://www.miitbeian.gov.cn/">浙ICP备16042060号-1</a>
          </div>
          <p class="copyright">© 2018-2020 GXChain Foundation Ltd.</p>
        </div>
    </div>
</template>
<style lang="less" scoped>
.footer {
  padding-top: 50px;
  text-align: center;
  border-top: 1px solid #e5e9ef;
  color: #666666;
  .list-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0 15px 0;
  }
  .social-list {
    .socail-icon {
      margin: 0 15px 15px 15px;
      font-size: 3rem;
      color: #666666;
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.8;
      }
    }
    .socail-icon.wechat {
      position: relative;
      background-position: 0 -3px;
      //z-index: -1;
      .qrcode-wrap {
        display: none;
        position: absolute;
        top: -139px;
        left: -37px;
        font-size: 14px;
        background-color: #fff;
      }
      &:hover {
        .qrcode-wrap {
          display: block;
        }
      }
    }
    .icon-telegram {
        position: relative;
        .item-wrap {
            display: none;
            position: absolute;
            width: 450px;
            top: -167px;
            left: 50%;
            font-size: 14px;
            background-color: #434750;
            margin-left: -225px;
            ul {
                text-align: left;
                padding: 10px 10px 10px 30px;
                li {
                    width: 50%;
                    display: inline-block;
                    a {
                        position: relative;
                    }
                    a::before {
                        position: absolute;
                        width: 0px;
                        height: 0px;
                        content: "";
                        left: -19px;
                        top: 2px;
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        border-left: 12px solid #90a4ae;
                        border-right: 12px solid transparent;
                    }
                }
            }
            &::before{
                width: 0px;
                height: 0px;
                content: "";
                position: absolute;
                right: 47.5%;
                top: 167px;
                border-top: 7px solid #434750;
                border-bottom: 7px solid transparent;
                border-left: 12px solid transparent;
                border-right: 12px solid transparent;
            }
        }
        &:hover {
            .item-wrap {
                display: block;
                a{
                    color:#fff;
                }
            }
        }
    }
    .en-icon-item{
        .item-wrap {
            width: 650px;
            margin-left: -329px;
        }
    }
    .icon-kakao {
        position: relative;
        .item-wrap {
            display: none;
            position: absolute;
            width: 200px;
            top: -60px;
            left: 50%;
            font-size: 14px;
            background-color: #434750;
            margin-left: -100px;
            ul {
                text-align: left;
                padding: 10px 10px 10px 30px;
                li {
                    width: 100%;
                    display: inline-block;
                    a {
                        position: relative;
                    }
                    a::before {
                        position: absolute;
                        width: 0px;
                        height: 0px;
                        content: "";
                        left: -19px;
                        top: 2px;
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        border-left: 12px solid #90a4ae;
                        border-right: 12px solid transparent;
                    }
                }
            }
            &::before{
                width: 0px;
                height: 0px;
                content: "";
                position: absolute;
                right: 46.5%;
                top: 62px;
                border-top: 7px solid #434750;
                border-bottom: 7px solid transparent;
                border-left: 12px solid transparent;
                border-right: 12px solid transparent;
            }
        }
        &:hover {
            .item-wrap {
                display: block;
                a{
                    color:#fff;
                }
            }
        }
    }
    .en-icon-item-kakao{
        .item-wrap {
            width: 280px;
            margin-left: -143px;
        }
    }
  }
  .other-list {
    a {
      margin: 0 15px;
      color: #666666;
    }
  }
}
@media (max-width: 414px) {
    .footer {
        .social-list{
            .icon-telegram {
                position: relative;
                .item-wrap {
                    display: none;
                    position: absolute;
                    width: 250px;
                    top: -186px;
                    left: 50%;
                    font-size: 14px;
                    background-color: #434750;
                    margin-left: -118px;
                    padding: 10px 0;
                    ul {
                        text-align: left;
                        max-height:167px;
                        overflow-y: scroll;
                        padding: 0px 10px 0px 30px;
                        li {
                            width: 100%;
                            display: inline-block;
                            a {
                                position: relative;
                            }
                            a::before {
                                position: absolute;
                                width: 0px;
                                height: 0px;
                                content: "";
                                left: -19px;
                                top: 2px;
                                border-top: 5px solid transparent;
                                border-bottom: 5px solid transparent;
                                border-left: 12px solid #90a4ae;
                                border-right: 12px solid transparent;
                            }
                        }
                    }
                    &::before{
                        width: 0px;
                        height: 0px;
                        content: "";
                        position: absolute;
                        right: 47.5%;
                        top: 186px;
                        border-top: 7px solid #434750;
                        border-bottom: 7px solid transparent;
                        border-left: 12px solid transparent;
                        border-right: 12px solid transparent;
                    }
                }
                &:hover {
                    .item-wrap {
                        display: block;
                        a{
                            color:#fff;
                        }
                    }
                }
            }
            .icon-kakao {
                position: relative;
                .item-wrap {
                    display: none;
                    position: absolute;
                    width: 200px;
                    top: -64px;
                    left: 50%;
                    font-size: 14px;
                    background-color: #434750;
                    margin-left: -100px;
                    padding: 10px 0;
                    ul {
                        text-align: left;
                        max-height:167px;
                        overflow-y: scroll;
                        padding: 0px 10px 0px 30px;
                        li {
                            width: 100%;
                            display: inline-block;
                            a {
                                position: relative;
                            }
                            a::before {
                                position: absolute;
                                width: 0px;
                                height: 0px;
                                content: "";
                                left: -19px;
                                top: 2px;
                                border-top: 5px solid transparent;
                                border-bottom: 5px solid transparent;
                                border-left: 12px solid #90a4ae;
                                border-right: 12px solid transparent;
                            }
                        }
                    }
                    &::before{
                        width: 0px;
                        height: 0px;
                        content: "";
                        position: absolute;
                        right: 46%;
                        top: 61px;
                        border-top: 7px solid #434750;
                        border-bottom: 7px solid transparent;
                        border-left: 12px solid transparent;
                        border-right: 12px solid transparent;
                    }
                }
                &:hover {
                    .item-wrap {
                        display: block;
                        a{
                            color:#fff;
                        }
                    }
                }
            }
            .en-icon-item-kakao{
                .item-wrap {
                    width: 270px;
                    margin-left: -137px;
                }
            }

        }
    }
}
</style>

