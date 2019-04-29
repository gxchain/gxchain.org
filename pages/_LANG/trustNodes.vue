<template>
    <div class="trustNode-page">
        <section class="trustNode section-padding">
        <div class="container">
            <h2 class="page-title gxc-border-left padding-left-w color-666">TrustNodes 2019 Q1 Work Scheme </h2>
            <div class="content-margin-top">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr class="text-center">
                        <th scope="col" width="30%">TrustNodes</th>
                        <th scope="col">Work Scheme Link</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in workPlan" :key="index">
                            <td class="vh-center">{{item.name}}</td>
                            <td class="vh-center">
                                <a  v-if="!item.other && item.link" :href="item.link" target="_blank">{{item.link}}</a>
                                <span v-if="item.other">{{item.other}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            workPlan: [
                {
                    "name": "Prophet",
                    "link": "https://mp.weixin.qq.com/s/X7-WTBYBUEmCmC53S15Rwg",
                    "other": ""
                },
                {
                    "name": "BlockCity",
                    "link": "https://shimo.im/docs/0HoqlBUjNicAEDSL",
                    "other": ""
                },
                {
                    "name": "GXCDAC",
                    "link": "https://mp.weixin.qq.com/s/47IL0bFsDllXZVvZ5_5wFA",
                    "other": ""
                },
                {
                    "name": "GXC Pacific",
                    "link": "https://mp.weixin.qq.com/s/Mwvqmakx6RS2Xb3mqdtmXg",
                    "other": ""
                },
                {
                    "name": "CertiK",
                    "link": "https://mp.weixin.qq.com/s/4LqvYkD2_oI0hc1ziQ3Tlw",
                    "other": ""
                },
                {
                    "name": "gf.network",
                    "link": "https://shimo.im/docs/KUhbz4siPPcJpBwq/ ",
                    "other": ""
                },
                {
                    "name": "GXCLaoMao",
                    "link": "https://bihu.com/article/1332718736 ",
                    "other": ""
                },
                {
                    "name": "TLAB",
                    "link": "https://mp.weixin.qq.com/s/JVazeAw08MSSFBEhQhQV8g",
                    "other": ""
                },
                {
                    "name": "GXCMoon",
                    "link": "https://mp.weixin.qq.com/s/ir-yELsfOZBRUA39PS7Lkw",
                    "other": ""
                },
                {
                    "name": "XinLai",
                    "link": "https://mp.weixin.qq.com/s/hKx-g1kXRIjXp33Z5oVz8A",
                    "other": ""
                },
                {
                    "name": "GXBean",
                    "link": "https://mp.weixin.qq.com/s/hkLJMVb_lIbNkxIJXlI2pw",
                    "other": ""
                },
                {
                    "name": "Huobi-pool",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "ChainClub",
                    "link": "https://mp.weixin.qq.com/s/M2PNpT2KYG4hak09VoPH8Q",
                    "other": ""
                },
                {
                    "name": "Gravity-pool",
                    "link": "https://mp.weixin.qq.com/s/u_wxmjaVTSjd-c3KU4cPBQ",
                    "other": ""
                },
                {
                    "name": "LendChain",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "GBAC-GXC",
                    "link": "https://mp.weixin.qq.com/s/0uNjayAuxfc5ngR0jeL2ug",
                    "other": ""
                },
                {
                    "name": "BEPAL",
                    "link": "https://mp.weixin.qq.com/s/jjx_QINteMUOQz4M6BUNLg",
                    "other": ""
                },
                {
                    "name": "GXHarvard",
                    "link": "https://justblockchainnews.com/2019/04/25/gxharvard-2019q2-%E5%B7%A5%E4%BD%9C%E8%AE%A1%E5%88%92/",
                    "other": ""
                },
                {
                    "name": "DAMO",
                    "link": "https://mp.weixin.qq.com/s/6UJEXDPoNZZqk7jI_D4WxQ",
                    "other": ""
                },
                {
                    "name": "GenaroNetwork",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": " Time-Stamp",
                    "link": "https://mp.weixin.qq.com/s/JOmtv2s7EopUEsTPkjWmhA",
                    "other": ""
                },
                {
                    "name": "LiuXuFei",
                    "link": "https://mp.weixin.qq.com/s/-5Q5lshbIMFxXeTXa-X5HQ",
                    "other": ""
                },
                {
                    "name": "IPFSMAIN",
                    "link": "https://mp.weixin.qq.com/s/_Sl8qYKZ17VFrO93gpKFyQ",
                    "other": ""
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
a {
  word-break: break-all;
}
.vh-center {
  vertical-align: middle;
  text-align: center;
}
</style>
