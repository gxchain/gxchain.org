<template>
   <div class="footer">
        <div class="container">
          <h2 class="font-normal">{{$t('footer.contactUs')}}</h2>
          <div class="social-list list-wrap">
            <a class="wechat socail-icon iconfont icon-weixin-copy" href="javascript:void(0)">
              <div class="qrcode-wrap">
                  <img src="~static/footer/qrcode.png" width="120">
                  <span>微信公众号</span>
              </div>
            </a>
            <a class="socail-icon iconfont icon-github" href="https://github.com/gxchain/" target="_blank"></a>
            <a class="socail-icon iconfont icon-reddit" href="https://www.reddit.com/r/GXS/"></a>
            <a class="socail-icon iconfont icon-weibo" href="http://weibo.com/gongxinbao" target="_blank"></a>
            <a class="socail-icon iconfont icon-twitter3" href="https://twitter.com/gongxinbao" target="_blank"></a>
            <a class="socail-icon iconfont icon-telegram" href="https://t.me/GXB_China" target="_blank"></a>
            <a class="socail-icon iconfont icon-facebookfacebook52" href="https://www.facebook.com/GXChain/" target="_blank"></a>
          </div>
          <div class="other-list list-wrap">
            <!-- <a href="">常见问题</a> -->
            <a href="mailto:kefu@gxb.io">{{$t('footer.kefu')}} kefu@gxb.io </a>
            <a v-show="$i18n.locale === 'zh'" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602008310">浙公网安备 33010602008310号</a>
            <a v-show="$i18n.locale === 'zh'" href="http://www.miitbeian.gov.cn/">浙ICP备16042060号-1</a>                 
          </div>
          <p class="copyright">© 2018 GXChain Foundation Ltd.</p>
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
  }
  .other-list {
    a {
      margin: 0 15px;
      color: #666666;
    }
  }
}
</style>

