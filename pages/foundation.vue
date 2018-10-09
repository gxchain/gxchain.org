<template>
    <b-container>
        <b-row>
            <div class="d-none d-xl-block bd-toc pt-4 col-xl-3">
                <nav aria-label="Page table of contents">
                    <b-nav vertical v-b-scrollspy.90 class="m-toc section-nav">
                        <b-nav-item href="#item-1" @click="scrollIntoView">1. {{$t('foundation.nav.item1')}}</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-1-1" @click="scrollIntoView">1.1. {{$t('foundation.nav.item1-1')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-1-2" @click="scrollIntoView">1.2. {{$t('foundation.nav.item1-2')}}</b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-2" @click="scrollIntoView">2. {{$t('foundation.nav.item2')}}</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-2-1" @click="scrollIntoView">2.1. {{$t('foundation.nav.item2-1')}}
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-2-2" @click="scrollIntoView">2.2. {{$t('foundation.nav.item2-2')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-2-3" @click="scrollIntoView">2.3. {{$t('foundation.nav.item2-3')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-2-4" @click="scrollIntoView">2.4. {{$t('foundation.nav.item2-4')}}
                            </b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-3" @click="scrollIntoView">3. {{$t('foundation.nav.item3')}}</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-3-1" @click="scrollIntoView">3.1. {{$t('foundation.nav.item3-1')}}
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-2" @click="scrollIntoView">3.2. {{$t('foundation.nav.item3-2')}}
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-3" @click="scrollIntoView">3.3. {{$t('foundation.nav.item3-3')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-4" @click="scrollIntoView">3.4. {{$t('foundation.nav.item3-4')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-5" @click="scrollIntoView">3.5. {{$t('foundation.nav.item3-5')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-6" @click="scrollIntoView">3.6. {{$t('foundation.nav.item3-6')}}</b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-4" @click="scrollIntoView">4. {{$t('foundation.nav.item4')}}</b-nav-item>
                        <b-nav-item href="#item-5" @click="scrollIntoView">5. {{$t('foundation.nav.item5')}}</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-5-1" @click="scrollIntoView">5.1. {{$t('foundation.nav.item5-1')}}
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-5-2" @click="scrollIntoView">5.2. {{$t('foundation.nav.item5-2')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-5-3" @click="scrollIntoView">5.3. {{$t('foundation.nav.item5-3')}}</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-5-4" @click="scrollIntoView">5.4. {{$t('foundation.nav.item5-4')}}</b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-6" @click="scrollIntoView">6. {{$t('foundation.nav.item6')}}</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-6-1" @click="scrollIntoView">6.1. {{$t('foundation.nav.item6-1')}}
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-6-2" @click="scrollIntoView">6.2. {{$t('foundation.nav.item6-2')}}
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-6-3" @click="scrollIntoView">6.3. {{$t('foundation.nav.item6-3')}}
                            </b-nav-item>
                        </b-nav>
                    </b-nav>
                </nav>
            </div>
            <b-col cols="9" class="scrollspy-wrap">
                <div class="container" ref="content" id="scrollspy-nested" style="position:relative">
                    <!--item-1-->
                    <div>
                        <h4 id="item-1">1. {{$t('foundation.item1.title')}}</h4>
                        <p class="text-indent">{{$t('foundation.item1.p1')}}</p>
                        <p class="text-indent">{{$t('foundation.item1.p2')}}</p>
                        <div class="govern-con">
                            <h5 id="item-1-1">1.1. {{$t('foundation.item1.item1.title')}}</h5>
                            <ul>
                                <li>
                                    <div class="l-item">
                                        <img src="~static/foundation/1.png" alt="">
                                        <p>{{$t('foundation.item1.item1.item1.title')}}</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ {{$t('foundation.item1.item1.item1.li1')}}</p>
                                        <p>○ {{$t('foundation.item1.item1.item1.li2')}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="l-item">
                                        <img src="~static/foundation/2.png" alt="">
                                        <p>{{$t('foundation.item1.item1.item2.title')}}e</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ {{$t('foundation.item1.item1.item2.li1')}}</p>
                                        <p>○ {{$t('foundation.item1.item1.item2.li2')}}</p>
                                    </div>
                                </li>
                            </ul>
                            <h5 id="item-1-2">1.2. {{$t('foundation.item1.item2.title')}}</h5>
                            <ul>
                                <li>
                                    <div class="l-item">
                                        <img src="~static/foundation/3.png" alt="">
                                        <p>{{$t('foundation.item1.item2.item1.title')}}</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ {{$t('foundation.item1.item2.item1.li1')}}</p>
                                        <p>○ {{$t('foundation.item1.item2.item1.li2')}}</p>
                                        <p>○ {{$t('foundation.item1.item2.item1.li3')}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--item-2-->
                    <div>
                        <h4 id="item-2">2. {{$t('foundation.item2.title')}}</h4>
                        <p class="text-indent">{{$t('foundation.item2.p1')}}</p>
                        <div>
                            <h5 id="item-2-1">2.1. {{$t('foundation.item2.item1.title')}}</h5>
                            <p>{{$t('foundation.item2.item1.p1')}}</p>
                            <dl>
                                <dd>1) {{$t('foundation.item2.item1.li1')}}</dd>
                                <dd>2) {{$t('foundation.item2.item1.li2')}}</dd>
                                <dd>3) {{$t('foundation.item2.item1.li3.p1')}}</dd>
                                <dd>{{$t('foundation.item2.item1.li3.p2')}}</dd>
                                <dd class="text-indent">
                                    <p>1) {{$t('foundation.item2.item1.li3.li1')}}</p>
                                    <p>2) {{$t('foundation.item2.item1.li3.li2')}}</p>
                                    <p>3) {{$t('foundation.item2.item1.li3.li3')}}</p>
                                    <p>4) {{$t('foundation.item2.item1.li3.li4')}}</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-2-2">2.2. {{$t('foundation.item2.item2.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item2.item2.p1')}}</p>
                            <div class="text-indent">
                                <p>1) {{$t('foundation.item2.item2.li1')}}</p>
                                <p>2) {{$t('foundation.item2.item2.li2')}}</p>
                                <p>3) {{$t('foundation.item2.item2.li3')}}</p>
                                <p>4) {{$t('foundation.item2.item2.li4')}}</p>
                                <p>5) {{$t('foundation.item2.item2.li5')}}</p>
                                <p>6) {{$t('foundation.item2.item2.li6')}}</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-2-3">2.3. {{$t('foundation.item2.item3.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item2.item3.p1')}}</p>
                        </div>
                        <div>
                            <h5 id="item-2-4">2.4. {{$t('foundation.item2.item4.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item2.item4.p1')}}</p>
                            <div class="text-indent">
                                <p>1){{$t('foundation.item2.item4.li1.dt')}}</p>
                                <p>{{$t('foundation.item2.item4.li1.dd')}}</p>
                                <p>2){{$t('foundation.item2.item4.li2.dt')}}</p>
                                <p>{{$t('foundation.item2.item4.li2.dd')}} </p>
                                <p>3) {{$t('foundation.item2.item4.li3.dt')}}</p>
                                <p>{{$t('foundation.item2.item4.li3.dd')}}</p>
                            </div>
                        </div>
                    </div>
                    <!--item-3-->
                    <div>
                        <h4 id="item-3">3. {{$t('foundation.item3.title')}}</h4>
                        <div>
                            <h5 id="item-3-1">3.1. {{$t('foundation.item3.item1.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item3.item1.p1')}}</p>
                            <p class="text-indent">{{$t('foundation.item3.item1.p2')}}</p>
                        </div>
                        <div>
                            <h5 id="item-3-2">3.2. {{$t('foundation.item3.item2.title')}}</h5>
                            <div class="text-center" style="margin:4rem 0">
                                <img src="~static/foundation/4.png" alt="" class="decision-img">
                                <p>图 3.1 {{$t('foundation.item3.item2.title')}}</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-3-3">3.3. {{$t('foundation.item3.item3.title')}}</h5>
                            <dl>
                                <dt>3.3.1. {{$t('foundation.item3.item3.item1.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item1.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.2. {{$t('foundation.item3.item3.item2.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item2.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.3. {{$t('foundation.item3.item3.item3.title')}}</dt>
                            </dl>
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <td>{{$t('foundation.item3.item3.item3.tr1.td1')}}</td>
                                    <td>{{$t('foundation.item3.item3.item3.tr1.td2')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item3.item3.tr2.td1')}}</td>
                                    <td>{{$t('foundation.item3.item3.item3.tr2.td2')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item3.item3.tr3.td1')}}</td>
                                    <td>{{$t('foundation.item3.item3.item3.tr3.td2')}}</td>
                                </tr>
                                <tr>
                                    <td rowspan="4">{{$t('foundation.item3.item3.item3.tr4.td1')}}</td>
                                    <td>{{$t('foundation.item3.item3.item3.tr4.td2')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item3.item3.tr4.td3')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item3.item3.tr4.td4')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item3.item3.tr4.td5')}}</td>
                                </tr>
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.3.4. {{$t('foundation.item3.item3.item4.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item4.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.5. {{$t('foundation.item3.item3.item5.title')}}</dt>
                                <dd> {{$t('foundation.item3.item3.item5.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item3.item5.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item3.item5.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item3.item5.li3')}}</dd>
                                <dd>（4）{{$t('foundation.item3.item3.item5.li4')}}</dd>
                                <dd>（5）{{$t('foundation.item3.item3.item5.li5')}}</dd>
                                <dd>（6）{{$t('foundation.item3.item3.item5.li6')}}</dd>
                                <dd>（7）{{$t('foundation.item3.item3.item5.li7')}}</dd>
                                <dd>（8）{{$t('foundation.item3.item3.item5.li8')}}</dd>
                                <dd>（9）{{$t('foundation.item3.item3.item5.li9')}}</dd>
                                <dd>（10 {{$t('foundation.item3.item3.item5.li10')}}</dd>
                                <dd>{{$t('foundation.item3.item3.item5.li11')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.6. {{$t('foundation.item3.item3.item6.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item6.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item3.item6.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item3.item6.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item3.item6.li3')}}</dd>
                                <dd>（4）{{$t('foundation.item3.item3.item6.li4')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.7. {{$t('foundation.item3.item3.item7.title')}}</dt>
                                <dd>（1）{{$t('foundation.item3.item3.item7.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item3.item7.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item3.item7.li3')}}</dd>
                                <dd>（4）{{$t('foundation.item3.item3.item7.li4')}}</dd>
                                <dd>（5）{{$t('foundation.item3.item3.item7.li5')}}</dd>
                                <dd>（6）{{$t('foundation.item3.item3.item7.li6')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.8. {{$t('foundation.item3.item3.item8.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item8.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.9. {{$t('foundation.item3.item3.item9.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item9.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item3.item9.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item3.item9.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item3.item9.li3')}}</dd>
                                <dd>（4）{{$t('foundation.item3.item3.item9.li4')}}</dd>
                                <dd>（5）{{$t('foundation.item3.item3.item9.li5')}}</dd>
                                <dd>{{$t('foundation.item3.item3.item9.li6')}}</dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-3-4">3.4. {{$t('foundation.item3.item4.title')}}</h5>
                            <dl>
                                <dt>3.4.1. {{$t('foundation.item3.item4.item1.title')}} </dt>
                                <dd>{{$t('foundation.item3.item4.item1.p1')}} </dd>
                            </dl>
                            <dl>
                                <dt>3.4.2. {{$t('foundation.item3.item4.item2.title')}} </dt>
                                <dd>{{$t('foundation.item3.item4.item2.p1')}} </dd>
                            </dl>
                            <dl>
                                <dt>3.4.3. {{$t('foundation.item3.item4.item3.title')}} </dt>
                            </dl>
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <td>{{$t('foundation.item3.item4.item3.tr1')}} </td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item4.item3.tr2')}} </td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item4.item3.tr3')}} </td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item4.item3.tr4')}} </td>
                                </tr>
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.4.4. {{$t('foundation.item3.item4.item4.title')}}</dt>
                                <dd>{{$t('foundation.item3.item4.item4.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item4.item4.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item4.item4.li2')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.4.5. {{$t('foundation.item3.item4.item5.title')}}</dt>
                                <dd>{{$t('foundation.item3.item4.item5.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item4.item5.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item4.item5.li2')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.4.6. {{$t('foundation.item3.item4.item6.title')}}</dt>
                                <dd>（1）{{$t('foundation.item3.item4.item6.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item4.item6.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item4.item6.li3')}}</dd>
                                <dd>（4）{{$t('foundation.item3.item4.item6.li4')}}</dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-3-5">3.5. {{$t('foundation.item3.item5.title')}}</h5>
                            <dl>
                                <dt>3.5.1. {{$t('foundation.item3.item5.item1.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item1.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.2. {{$t('foundation.item3.item5.item2.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item2.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.3. {{$t('foundation.item3.item5.item3.title')}}</dt>
                            </dl>
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <td>{{$t('foundation.item3.item5.item3.tr1.td1')}}</td>
                                    <td>{{$t('foundation.item3.item5.item3.tr1.td2')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item5.item3.tr2.td1')}}</td>
                                    <td>{{$t('foundation.item3.item5.item3.tr2.td2')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item5.item3.tr3.td1')}}</td>
                                    <td>{{$t('foundation.item3.item5.item3.tr3.td2')}}</td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item5.item3.tr4.td1')}}</td>
                                    <td>{{$t('foundation.item3.item5.item3.tr4.td2')}}</td>
                                </tr>
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.5.4. {{$t('foundation.item3.item5.item4.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item4.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item5.item4.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item5.item4.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item5.item4.li3')}}</dd>
                                <dd>{{$t('foundation.item3.item5.item4.li4')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.5. {{$t('foundation.item3.item5.item5.title')}}</dt>
                                <dd>（1）{{$t('foundation.item3.item5.item5.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item5.item5.li2')}}</dd>
                                <dd>（3）{{$t('foundation.item3.item5.item5.li3')}}</dd>
                                <dd>（4）{{$t('foundation.item3.item5.item5.li4')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.6. {{$t('foundation.item3.item5.item6.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item6.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.7. {{$t('foundation.item3.item5.item7.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item7.p1')}}</dd>
                                <dd>（1）{{$t('foundation.item3.item5.item7.li1')}}</dd>
                                <dd>（2）{{$t('foundation.item3.item5.item7.li2')}}</dd>
                                <dd>{{$t('foundation.item3.item5.item7.li3')}}</dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-3-6">3.6. {{$t('foundation.item3.item6.title')}}</h5>
                            <dl>
                                <dt>3.6.1. {{$t('foundation.item3.item6.item1.title')}}</dt>
                                <dd class="text-indent">{{$t('foundation.item3.item6.item1.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.6.2. {{$t('foundation.item3.item6.item2.title')}}</dt>
                                <dd class="text-indent">{{$t('foundation.item3.item6.item2.p1')}}</dd>
                                <dd>{{$t('foundation.item3.item6.item2.github')}} <a href="https://www.github.com/gxchain" target="_blank">https://www.github.com/gxchain</a>
                                </dd>
                            </dl>
                            <dl>
                                <dt>3.6.3. {{$t('foundation.item3.item6.item3.title')}}</dt>
                                <dd class="text-indent">{{$t('foundation.item3.item6.item3.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.6.4. {{$t('foundation.item3.item6.item4.title')}}</dt>
                                <dd class="text-indent">{{$t('foundation.item3.item6.item4.p1')}}</dd>
                            </dl>
                        </div>
                    </div>
                    <!--item-4-->
                    <div>
                        <h4 id="item-4">4. {{$t('foundation.item4.title')}}</h4>
                        <p class="text-indent">{{$t('foundation.item4.p1')}}</p>
                        <table class="table table-bordered table-hover">
                            <thead>
                            <tr class="text-center">
                                <th scope="col" width="20%">{{$t('foundation.item4.table.thead.th1')}}</th>
                                <th scope="col">简要经历</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr1.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr1.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr2.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr2.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr3.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr3.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr4.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr4.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr5.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr5.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr6.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr6.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr7.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr7.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr8.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr8.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr9.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr9.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr10.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr10.td2')}}</td>
                                </tr>
                                <tr>
                                    <td class="vh-center">{{$t('foundation.item4.table.tr11.td1')}}</td>
                                    <td>{{$t('foundation.item4.table.tr11.td2')}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--item-5-->
                    <div class="fourth-container">
                        <h4 id="item-5">5. {{$t('foundation.item5.title')}}</h4>
                        <div>
                            <div class="text-center" style="margin:4rem 0">
                                <img src="~static/foundation/5.png" alt="" class="decision-img">
                                <p>图 5.1 GXChain 基金会组织架构</p>
                            </div>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                            <tr class="text-center">
                                <th scope="col" width="33.3%" colspan="2">{{$t('foundation.item5.table.thead.th1')}}</th>
                                <th scope="col" width="33.3%">{{$t('foundation.item5.table.thead.th2')}}</th>
                                <th scope="col" width="33.3%">{{$t('foundation.item5.table.thead.th3')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colspan="2">{{$t('foundation.item5.table.tr1.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr1.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr1.td3')}}</td>
                            </tr>
                            <tr>
                                <td colspan="2">{{$t('foundation.item5.table.tr2.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr2.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr2.td3')}}</td>
                            </tr>
                            <tr>
                                <td colspan="2">{{$t('foundation.item5.table.tr3.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr3.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr3.td3')}}</td>
                            </tr>
                            <tr>
                                <td colspan="2">{{$t('foundation.item5.table.tr4.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr4.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr4.td3')}}</td>
                            </tr>
                            <tr>
                                <td rowspan="5">51%</td>
                                <td>{{$t('foundation.item5.table.tr5.td1')}}</td>
                                <td class="vh-center">{{$t('foundation.item5.table.tr5.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr5.td3')}}</td>
                            </tr>
                            <tr>
                                <td>{{$t('foundation.item5.table.tr6.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr6.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr6.td3')}}</td>
                            </tr>
                            <tr>
                                <td>{{$t('foundation.item5.table.tr7.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr7.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr7.td3')}}</td>
                            </tr>
                            <tr>
                                <td>{{$t('foundation.item5.table.tr8.td1')}}</td>
                                <td>{{$t('foundation.item5.table.tr8.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr8.td3')}}</td>
                            </tr>
                            <tr>
                                <td>{{$t('foundation.item5.table.tr9.td1')}}%</td>
                                <td>{{$t('foundation.item5.table.tr9.td2')}}</td>
                                <td>{{$t('foundation.item5.table.tr9.td3')}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            <h5 id="item-5-1">5.1. {{$t('foundation.item5.item1.title')}}</h5>
                            <p>{{$t('foundation.item5.item1.p1')}}</p>
                            <p>{{$t('foundation.item5.item1.p2')}}</p>
                            <div class="text-indent">
                                <p>1) {{$t('foundation.item5.item1.li1')}} </p>
                                <p>2) {{$t('foundation.item5.item1.li2')}}</p>
                                <p>3) {{$t('foundation.item5.item1.li3')}}</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-5-2">5.2. {{$t('foundation.item5.item2.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item5.item2.li1')}}</p>
                            <p class="text-indent">{{$t('foundation.item5.item2.li2')}}</p>
                            <p class="text-indent">{{$t('foundation.item5.item2.li3')}}</p>
                        </div>
                        <div>
                            <h5 id="item-5-3">5.3. {{$t('foundation.item5.item3.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item5.item3.p1')}}</p>
                        </div>
                        <div>
                            <h5 id="item-5-4">5.4. {{$t('foundation.item5.item4.title')}}</h5>
                            <p class="text-indent">{{$t('foundation.item5.item4.p1')}}</p>
                        </div>
                    </div>
                    <!--item-6-->
                    <div>
                        <h4 id="item-6">6. GXChain基金会的风控机制</h4>
                        <p class="text-indent">
                            GXChain基金会通过设置多角度切入、多部门联动的科学机制来预防、应对各类风险事项，以保证GXChain的安全、可持续发展，维护GXC持有人的利益。</p>
                        <div>
                            <h5 id="item-6-1">6.1.重大事项的风险评估与决策机制</h5>
                            <p> 任何重大事项的决策均需经过充分的风险评估后方可作出，基本流程如下：</p>
                            <div class="text-indent">
                                <p>
                                    1) 执行委员会成员领导相应下属专门委员会针对具体事项从技术、市场、政策等风险因素着手进行评估，就可能产生的风险设定风险界定标准与规则、制定处置预案，并形成书面报告。针对重大合作项目、投资项目等事项，相关人员应对合作方、目标公司或团队进行充分尽职调查后再行评估。</p>
                                <p>
                                    2) 执行总裁领导执行委员会对具体事项的书面报告进行综合分析、论证后，最终拟定书面风险评估报告提交决策委员会。必要时，执行总裁应引入顾问委员会，参考专家、顾问的意见最终确定风险评估报告。</p>
                                <p>3) 决策委员会应将风险评估结果报告作为决策的重要依据，按照相应议事规则作出决议。</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-6-2">6.2.定期检查、评估与舆情监督、汇报机制</h5>
                            <dl>
                                <dd>
                                    <p>6.2.1.执行委员会主要从技术和管理两方面着手进行定期检查与评估：</p>
                                    <p class="text-indent">
                                        1) 技术方面，包括GXChain技术研发进度、GXChain运行情况、项目应用实施等，检查技术研发进度与质量，全面排查安全漏洞，防范技术安全风险；</p>
                                    <p class="text-indent">
                                        2) 管理方面，包括人员的配备与资格、资金使用情况、项目投资情况等，全面检查现行管理制度的执行情况，避免人员缺位、沟通不畅等管理漏洞的长期存在，及时发现并应对信息泄露、资金挪用等内部人员道德风险。</p>
                                </dd>
                                <dd>
                                    6.2.2.除定期检查与评估外，执行委员会负责指导下属专门委员会进行舆情监督并制定相应汇报机制，根据监督与汇报结果在必要时启动突发事项的紧急评估与决策机制。
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-6-3">6.3.突发事项的紧急评估与决策机制</h5>
                            <p>执行委员会应针对突发风险事项设定概括风险界定标准并确定决策机制，经决策委员会决议通过后，由执行总裁领导执行委员会负责遵照执行。</p>
                            <p>基本框架如下：</p>
                            <dl>
                                <dd>
                                    <p>
                                        6.3.1.如发生突发事项，应由执行总裁领导执行委员会成员进行紧急评估，按照预定标准对风险进行级别分类，分为一般风险、较高风险及高风险三类（风险界定标准与规则待完善）。</p>
                                </dd>
                                <dd>
                                    <p>6.3.2.按照前述紧急评估结果，相应基本突发事项的决策人员如下：</p>
                                    <p class="text-indent">1) 一般风险事项由执行总裁直接决策；</p>
                                    <p class="text-indent">2) 较高风险事项由执行总裁主持执行委员会成员拟定应对方案后报决策委员会主席决策；</p>
                                    <p class="text-indent">3)
                                        高风险事项应由决策委员会主席召开临时决策委员会会议，由主席领导执行总裁、执行委员会成员拟定应对方案后并在决策委员会会议上汇报以供决策。如该事项属紧急事项，则决策委员会主席可进行紧急决策，但应在决策后形成报告书面通知决策委员会成员。</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <!--item-6-->
                    <div style="margin-bottom:5rem;">
                        <h4>其他</h4>
                        <p class="text-indent">为保证GXChain基金会治理机制的有效运行，未在基金会担任专职工作的成员不得从基金会中获取报酬。</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { scrollTo, offsetTop } from '~/utils'

export default {
    data () {
        return {
            cates: []
        };
    },
    mounted () {
        if (process.client) {
            //this.getTitleCates();
        }
    },
    methods: {
        isArray (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        },
        scrollIntoView (e) {
            e.preventDefault();
            e.stopPropagation();
            const href = e.target.getAttribute('href');
            const el = href ? document.querySelector(href) : null;
            if (el) {
                // Get the document scrolling element
                const scroller =
                    document.scrollingElement ||
                    document.documentElement ||
                    document.body
                // scroll heading into view (minus offset to account for nav top height
                scrollTo(scroller, offsetTop(el) - 85, 100, () => {
                    // Set a tab index so we can focus header for a11y support
                    el.tabIndex = -1
                    // Focus the heading
                    el.focus()
                })
            }
        },
        getTitleCates () {
            let that = this;
            let idx = 0;
            let i = 0;
            document
                .querySelectorAll('h4,h5')
                .forEach(tag => {
                    tag.id = 'id' + i++;
                    i++;
                    if (tag.tagName.toUpperCase() == 'H4') {
                        that.cates.push({
                            label: tag.innerHTML,
                            href: '#' + tag.id
                        });
                        idx = that.cates.length;
                    } else if (tag.tagName.toUpperCase() == 'H5') {
                        that.cates[idx] = that.cates[idx] || [];
                        that.cates[idx].push({
                            label: tag.innerHTML,
                            href: '#' + tag.id
                        });
                    }
                });
            console.dir(that.cates);
        }
    }
};
</script>
<style lang="less" scoped>
@import '../assets/css/foundation.less';
</style>
