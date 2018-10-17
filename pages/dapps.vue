<template>
  <div class="dapps-page">
    <section class="dapps section-padding">
        <div class="container bottom-line padding-bottom-3">
            <h2 class="gxc-border-left padding-left-w color-666">{{$t('dApps.bc.title')}}</h2>
            <div class="content row">
                <div class="col-lg-6 margin-top-4 color-666 line-h-2">
                   <p>{{$t('dApps.bc.des')}}</p>
                </div>
                <div class="text-center fadeIn">
                  <div><img src="~static/dapps/bc_qr.png" alt="blockcity" style="width:85%" class="not-animate"></div>
                  <a href="https://blockcity.gxb.io/download/" target="_blank" class="btn btn-lg btn-theme-md">{{$t('dApps.bc.btn')}}</a>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding">
       <div class="container">
        <ul class="list-unstyled color-666">
          <li class="media margin-b-3 in-animate">
            <div class="app-logo text-center">
               <img class="w_7rem mb-3" src="~static/dapps/bide.png" alt="Generic placeholder image">
               <h6>{{$t('dApps.coinGet.name')}}</h6>
            </div>
            <div class="media-body align-self-center line-h-2">
              {{$t('dApps.coinGet.des')}}
            </div>
          </li>
          <li class="media my-4 in-animate">
             <div class="app-logo text-center">
              <img class="w_7rem mb-3" src="~static/dapps/wlm.png" alt="Generic placeholder image">
                <h6>{{$t('dApps.wlm.name')}}</h6>
            </div>
            <div class="media-body align-self-center line-h-2">
              {{$t('dApps.wlm.des')}}
            </div>
          </li>
          <li class="media in-animate">
             <div class="app-logo text-center">
               <img class="w_7rem mb-3" src="~static/dapps/prophet.png" alt="Generic placeholder image">
              <h6>{{$t('dApps.prophet.name')}}</h6>
             </div>  
            <div class="media-body align-self-center line-h-2">
            {{$t('dApps.prophet.des')}}
            </div>
          </li>
        </ul>
       </div>
    </section>
  </div>
</template>
<style  lang="less" scoped>
@import '../assets/css/dapps.less';
</style>
  
