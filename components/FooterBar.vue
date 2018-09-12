<template>
   <div class="footer">
        <div class="container">
          <h2>{{$t('footer.contactUs')}}</h2>
          <div class="social-list list-wrap">
            <a class="wechat" href="javascript:void(0)">
              <img src="~static/footer/social/wechat.png" alt="">
              <div>
                  <img src="~static/footer/qrcode.png" width="120">
                  <span>微信公众号</span>
              </div>
            </a>
            <a class="github" href="https://github.com/gxchain/" target="_blank">
              <img src="~static/footer/social/github.png" alt="">
            </a>
            <a class="redit" href="https://www.reddit.com/r/GXS/">
              <img src="~static/footer/social/github.png" alt="">
            </a>
            <a class="weibo" href="http://weibo.com/gongxinbao" target="_blank">
               <img src="~static/footer/social/weibo.png" alt="">
            </a>
            <a class="twitter" href="https://twitter.com/gongxinbao" target="_blank">
               <img src="~static/footer/social/twitter.png" alt="">
            </a>
            <a class="telegram" href="https://t.me/GXB_China" target="_blank">
               <img src="~static/footer/social/telegram.png" alt="">
            </a>
            <a class="facebook" href="https://www.facebook.com/GXChain/" target="_blank">
               <img src="~static/footer/social/facebook.png" alt="">
            </a>
          </div>
          <div class="other-list list-wrap">
            <!-- <a href="">常见问题</a> -->
            <a href="">客服联系 kefu@gxb.io </a>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602008310">浙公网安备 33010602008310号</a>
            <a href="http://www.miitbeian.gov.cn/">浙ICP备16042060号-1</a>                 
          </div>
          <p class="copyright">© 2018 GXS Foundation Ltd.</p>
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
    a {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 15px 15px 15px;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.8;
      }
    }
    a.wechat {
      position: relative;
      background-position: 0 -3px;
      div {
        display: none;
        position: absolute;
        top: -144px;
        left: -31px;
        background-color: #fff;
      }
      &:hover {
        div {
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

