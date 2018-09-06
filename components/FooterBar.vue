<template>
   <div class="footer">
        <div class="container">
          <p class="title">联系我们</p>
          <div class="social-list list-wrap">
            <a class="wechat" href=""></a>
            <a class="github" href=""></a>
            <a class="redit" href=""></a>
            <a class="slack" href=""></a>
            <a class="weibo" href=""></a>
            <a class="twitter" href=""></a>
          </div>
          <ul class="other-list list-wrap">
            <a href="">常见问题</a>
            <a href="">客服联系 kefu@gxb.io </a>
            <a href="">浙公网安备 33010602008310号</a>
            <a href="">浙ICP备16042060号-1</a>                 
          </ul>
          <p class="copyright">© 2018 GXS Foundation Ltd.</p>
        </div>
    </div>
</template>
<style lang="less" scoped>
.social-logo {
  background: url("../assets/img/social_icon.png");
}
.footer {
  padding-top: 50px;
  text-align: center;
  border-top: 1px solid #e5e9ef;
  color: #666666;
  .title {
    font-size: 2rem;
  }
  .list-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
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
      .social-logo;
      background-position: 0 -3px;
    }
    a.github {
      .social-logo;
      background-position: -78px -1px;
    }
    a.redit {
      .social-logo;
      background-position: -159px -1px;
    }
    a.slack {
      .social-logo;
      background-position: -237px -1px;
    }
    a.weibo {
      .social-logo;
      background-position: -313px 0;
    }
    a.twitter {
      .social-logo;
      background-position: -389px -1px;
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

