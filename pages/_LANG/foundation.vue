<template>
    <b-container>
        <b-row>
            <div class="d-none d-xl-block bd-toc pt-4 col-xl-3">
                <nav aria-label="Page table of contents">
                    <b-nav vertical v-b-scrollspy.90 class="m-toc section-nav">
                        <b-nav-item href="#item-1" @click="scrollIntoView">1. {{$t('foundation.nav.item1')}}</b-nav-item>
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
                            <h5 id="item-1-1">{{$t('foundation.item1.item1.title')}}</h5>
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
                                        <p>{{$t('foundation.item1.item1.item2.title')}}</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ {{$t('foundation.item1.item1.item2.li1')}}</p>
                                        <p>○ {{$t('foundation.item1.item1.item2.li2')}}</p>
                                    </div>
                                </li>
                            </ul>
                            <h5 id="item-1-2">{{$t('foundation.item1.item2.title')}}</h5>
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
                                <dd>3) {{$t('foundation.item2.item1.li3')}}</dd>
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
                                <p>2){{$t('foundation.item2.item4.li2.dt')}}</p>
                                <p>3){{$t('foundation.item2.item4.li3.dt')}}</p>
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
                                <img src="~static/foundation/4_en.png" alt="" class="decision-img">
                                <p>3.1 {{$t('foundation.item3.item2.title')}}</p>
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
                                <dd>(1) {{$t('foundation.item3.item3.item5.li1')}}</dd>
                                <dd>(2）{{$t('foundation.item3.item3.item5.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item3.item5.li3')}}</dd>
                                <dd>(4) {{$t('foundation.item3.item3.item5.li4')}}</dd>
                                <dd>(5) {{$t('foundation.item3.item3.item5.li5')}}</dd>
                                <dd>(6) {{$t('foundation.item3.item3.item5.li6')}}</dd>
                                <dd>(7) {{$t('foundation.item3.item3.item5.li7')}}</dd>
                                <dd>(8) {{$t('foundation.item3.item3.item5.li8')}}</dd>
                                <dd>(9) {{$t('foundation.item3.item3.item5.li9')}}</dd>
                                <dd>{{$t('foundation.item3.item3.item5.li10')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.6. {{$t('foundation.item3.item3.item6.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item6.p1')}}</dd>
                                <dd>(1) {{$t('foundation.item3.item3.item6.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item3.item6.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item3.item6.li3')}}</dd>
                                <dd>(4) {{$t('foundation.item3.item3.item6.li4')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.7. {{$t('foundation.item3.item3.item7.title')}}</dt>
                                <dd>(1) {{$t('foundation.item3.item3.item7.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item3.item7.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item3.item7.li3')}}</dd>
                                <dd>(4) {{$t('foundation.item3.item3.item7.li4')}}</dd>
                                <dd>(5) {{$t('foundation.item3.item3.item7.li5')}}</dd>
                                <dd>(6) {{$t('foundation.item3.item3.item7.li6')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.8. {{$t('foundation.item3.item3.item8.title')}}</dt>
                                <dd>{{$t('foundation.item3.item3.item8.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.3.9. {{$t('foundation.item3.item3.item9.title')}}</dt>
                                <dd>(1) {{$t('foundation.item3.item3.item9.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item3.item9.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item3.item9.li3')}}</dd>
                                <dd>(4) {{$t('foundation.item3.item3.item9.li4')}}</dd>
                                <dd>(5) {{$t('foundation.item3.item3.item9.li5')}}</dd>
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
                                <!-- <tr>
                                    <td>{{$t('foundation.item3.item4.item3.tr3')}} </td>
                                </tr>
                                <tr>
                                    <td>{{$t('foundation.item3.item4.item3.tr4')}} </td>
                                </tr> -->
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.4.4. {{$t('foundation.item3.item4.item4.title')}}</dt>
                                <dd>{{$t('foundation.item3.item4.item4.p1')}}</dd>
                                <dd>(1) {{$t('foundation.item3.item4.item4.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item4.item4.li2')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.4.5. {{$t('foundation.item3.item4.item5.title')}}</dt>
                                <dd>{{$t('foundation.item3.item4.item5.p1')}}</dd>
                                <dd>(1) {{$t('foundation.item3.item4.item5.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item4.item5.li2')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.4.6. {{$t('foundation.item3.item4.item6.title')}}</dt>
                                <dd>(1) {{$t('foundation.item3.item4.item6.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item4.item6.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item4.item6.li3')}}</dd>
                                <dd>(4) {{$t('foundation.item3.item4.item6.li4')}}</dd>
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
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.5.4. {{$t('foundation.item3.item5.item4.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item4.p1')}}</dd>
                                <dd>(1) {{$t('foundation.item3.item5.item4.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item5.item4.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item5.item4.li3')}}</dd>
                                <dd>{{$t('foundation.item3.item5.item4.li4')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.5. {{$t('foundation.item3.item5.item5.title')}}</dt>
                                <dd>(1) {{$t('foundation.item3.item5.item5.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item5.item5.li2')}}</dd>
                                <dd>(3) {{$t('foundation.item3.item5.item5.li3')}}</dd>
                                <dd>(4) {{$t('foundation.item3.item5.item5.li4')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.6. {{$t('foundation.item3.item5.item6.title')}}</dt>
                                <dd>{{$t('foundation.item3.item5.item6.p1')}}</dd>
                            </dl>
                            <dl>
                                <dt>3.5.7. {{$t('foundation.item3.item5.item7.title')}}</dt>
                                <dd>(1) {{$t('foundation.item3.item5.item7.li1')}}</dd>
                                <dd>(2) {{$t('foundation.item3.item5.item7.li2')}}</dd>
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
                                <th scope="col">{{$t('foundation.item4.table.thead.th2')}}</th>
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
                                <img src="~static/foundation/5_en.png" alt="" class="decision-img">
                                <p>5.1 Structure of GXChain Foundation</p>
                            </div>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                            <tr class="text-center">
                                <th scope="col" width="10%" colspan="2">{{$t('foundation.item5.table.thead.th1')}}</th>
                                <th scope="col" width="25%">{{$t('foundation.item5.table.thead.th2')}}</th>
                                <th scope="col" width="65%">{{$t('foundation.item5.table.thead.th3')}}</th>
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
                                <td>{{$t('foundation.item5.table.tr9.td1')}}</td>
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
                        <h4 id="item-6">6. {{$t('foundation.item6.title')}}</h4>
                        <p class="text-indent">{{$t('foundation.item6.p1')}}</p>
                        <div>
                            <h5 id="item-6-1">6.1. {{$t('foundation.item6.item1.title')}}</h5>
                            <p>{{$t('foundation.item6.item1.p1')}}</p>
                            <div class="text-indent">
                                <p>1) {{$t('foundation.item6.item1.li1')}}</p>
                                <p>2) {{$t('foundation.item6.item1.li2')}}</p>
                                <p>3) {{$t('foundation.item6.item1.li3')}}</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-6-2">6.2. {{$t('foundation.item6.item2.title')}}</h5>
                            <dl>
                                <dd>
                                    <p>6.2.1. {{$t('foundation.item6.item2.item1.title')}}</p>
                                    <p class="text-indent">
                                        1) {{$t('foundation.item6.item2.item1.p1')}}</p>
                                    <p class="text-indent">
                                        2) {{$t('foundation.item6.item2.item1.p2')}}</p>
                                </dd>
                                <dd>
                                    6.2.2. {{$t('foundation.item6.item2.item2.p1')}}
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-6-3">6.3. {{$t('foundation.item6.item3.title')}}</h5>
                            <dl>
                                <dd>
                                    <p>6.3.1. {{$t('foundation.item6.item3.item1.p1')}}</p>
                                </dd>
                                <dd>
                                    <p>6.3.2. {{$t('foundation.item6.item3.item2.p1')}}</p>
                                    <p class="text-indent">1) {{$t('foundation.item6.item3.item2.li1')}}</p>
                                    <p class="text-indent">2) {{$t('foundation.item6.item3.item2.li2')}}</p>
                                    <p class="text-indent">3) {{$t('foundation.item6.item3.item2.li3')}}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <!--item-6-->
                    <div style="margin-bottom:5rem;">
                        <h4>{{$t('foundation.item7.title')}}</h4>
                        <p class="text-indent">{{$t('foundation.item7.p1')}}</p>
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
@import '../../assets/css/foundation.less';
</style>
