<template>
    <div class="trustNode-page">
        <section class="trustNode section-padding">
        <div class="container">
            <!--Q3-->
            <h2 class="page-title gxc-border-left padding-left-w color-666">公信节点2019第三季度工作计划</h2>
            <div class="content-margin-top margin-b-5">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr class="text-center">
                        <th scope="col" width="30%">公信节点</th>
                        <th scope="col">工作计划链接</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in workPlan3" :key="index">
                        <td class="vh-center">{{item.name}}</td>
                        <td class="vh-center">
                            <a  v-if="!item.other && item.link" :href="item.link" target="_blank">{{item.link}}</a>
                            <span v-if="item.other">{{item.other}}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!--Q2-->
            <h2 class="page-title gxc-border-left padding-left-w color-666">公信节点2019第二季度工作计划</h2>
            <div class="content-margin-top margin-b-5">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr class="text-center">
                        <th scope="col" width="30%">公信节点</th>
                        <th scope="col">工作计划链接</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in workPlan2" :key="index">
                        <td class="vh-center">{{item.name}}</td>
                        <td class="vh-center">
                            <a  v-if="!item.other && item.link" :href="item.link" target="_blank">{{item.link}}</a>
                            <span v-if="item.other">{{item.other}}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!--Q1-->
            <h2 class="page-title gxc-border-left padding-left-w color-666">公信节点2019第一季度工作计划</h2>
            <div class="content-margin-top">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr class="text-center">
                        <th scope="col" width="30%">公信节点</th>
                        <th scope="col">工作计划链接</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in workPlan1" :key="index">
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
            workPlan1: [
                {
                    name: '预言家',
                    link: 'https://mp.weixin.qq.com/s/z38WcbxvDzOaSQE5s9VIHA',
                    other: ''
                },
                {
                    name: '布洛克城',
                    link: 'https://shimo.im/docs/rhd6YAzwAqIBhdtP/read',
                    other: ''
                },
                {
                    name: 'GXCDAC',
                    link: 'https://mp.weixin.qq.com/s/2_O-YN4WktR5BdGmfIjEGw',
                    other: ''
                },
                {
                    name: 'GXC Pacific',
                    link: 'https://mp.weixin.qq.com/s/MLHJLtqJJys3RRrb_0bLuw',
                    other: ''
                },
                {
                    name: 'CertiK',
                    link: 'https://mp.weixin.qq.com/s/wM6-crezG0nRTobnrMYYog',
                    other: ''
                },
                {
                    name: '分布式资本',
                    link: '',
                    other: '--'
                },
                {
                    name: 'GXCLaoMao',
                    link: 'https://bihu.com/article/1052875060',
                    other: ''
                },
                {
                    name: 'TLAB',
                    link: 'https://mp.weixin.qq.com/s/rKPG_V34IQifxSJ2ERPUig',
                    other: ''
                },
                {
                    name: 'GXCMoon',
                    link: 'https://mp.weixin.qq.com/s/E-PQfJhep47juJLYLLTLcg',
                    other: ''
                },
                {
                    name: '信来节点',
                    link: 'https://mp.weixin.qq.com/s/jiq3QFNlS-UlXviE3tG4Xg',
                    other: ''
                },
                {
                    name: 'GXFormulA',
                    link: 'https://mp.weixin.qq.com/s/RMkEA7XqfX4tkokcXgvQGQ',
                    other: ''
                },
                {
                    name: 'GXBean',
                    link: 'https://mp.weixin.qq.com/s/Ofq3Cdx7t1YqWxicE8oVpg',
                    other: ''
                },
                {
                    name: '火币矿池',
                    link: '',
                    other: '--'
                },
                {
                    name: '区块链研习社',
                    link: 'https://mp.weixin.qq.com/s/M2PNpT2KYG4hak09VoPH8Q',
                    other: ''
                },
                {
                    name: '引力矿池',
                    link: 'https://mp.weixin.qq.com/s/wvxvwZVSZeL_g2jCgIJHJA',
                    other: ''
                },
                {
                    name: 'GenaroNetwork',
                    link: '',
                    other: '--'
                },
                {
                    name: 'LendChain',
                    link: 'https://mp.weixin.qq.com/s/-Ll_OwMVDGhlY6WR9pe9bA',
                    other: ''
                },
                {
                    name: '全球石墨烯区块链应用中心',
                    link: 'https://mp.weixin.qq.com/s/flFKIWMMGq6dudxfKsXoCA',
                    other: ''
                },
                {
                    name: 'BEPAL',
                    link: 'https://mp.weixin.qq.com/s/1e84FcEfxfIRA2qpBBUNVg',
                    other: ''
                },
                {
                    name: 'GXHarvard',
                    link: 'https://justblockchainnews.com/2019/03/01/gxharvard节点季度工作计划/',
                    other: ''
                },
                {
                    name: '币须达摩',
                    link: 'https://mp.weixin.qq.com/s/ipTFFYDu3AH6gEOk8acZ8g',
                    other: ''
                },
                {
                    name: 'Bit-Z',
                    link: '',
                    other: '--'
                },
                {
                    name: 'LiuXuFei',
                    link: 'https://mp.weixin.qq.com/s/rE8KNJzplI2ivAUkUZsG2g',
                    other: ''
                },
                {
                    name: '雾计算',
                    link: 'https://mp.weixin.qq.com/s/CxnYIrJ0oAtn1PgFDkrlzw',
                    other: ''
                },
                {
                    name: 'IPFS星际大陆',
                    link: 'https://mp.weixin.qq.com/s/_Sl8qYKZ17VFrO93gpKFyQ',
                    other: ''
                },
                {
                    name: '成都游茶科技',
                    link: 'http://www.lianchaguan.com/archives/5925',
                    other: ''
                },
            ],
            workPlan2: [
                {
                    "name": "预言家",
                    "link": "https://mp.weixin.qq.com/s/X7-WTBYBUEmCmC53S15Rwg",
                    "other": ""
                },
                {
                    "name": "布洛克城",
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
                    "name": "分布式资本",
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
                    "name": "信来节点",
                    "link": "https://mp.weixin.qq.com/s/hKx-g1kXRIjXp33Z5oVz8A",
                    "other": ""
                },
                {
                    "name": "GXBean",
                    "link": "https://mp.weixin.qq.com/s/hkLJMVb_lIbNkxIJXlI2pw",
                    "other": ""
                },
                {
                    "name": "火币矿池",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "区块链研习社",
                    "link": "https://mp.weixin.qq.com/s/M2PNpT2KYG4hak09VoPH8Q",
                    "other": ""
                },
                {
                    "name": "引力矿池",
                    "link": "https://mp.weixin.qq.com/s/u_wxmjaVTSjd-c3KU4cPBQ",
                    "other": ""
                },
                {
                    "name": "LendChain",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "全球石墨烯区块链应用中心",
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
                    "name": "币须达摩",
                    "link": "https://mp.weixin.qq.com/s/6UJEXDPoNZZqk7jI_D4WxQ",
                    "other": ""
                },
                {
                    "name": "GenaroNetwork",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "时戳资本",
                    "link": "https://mp.weixin.qq.com/s/JOmtv2s7EopUEsTPkjWmhA",
                    "other": ""
                },
                {
                    "name": "LiuXuFei",
                    "link": "https://mp.weixin.qq.com/s/-5Q5lshbIMFxXeTXa-X5HQ",
                    "other": ""
                },
                {
                    "name": "IPFS星际大陆",
                    "link": "https://mp.weixin.qq.com/s/_Sl8qYKZ17VFrO93gpKFyQ",
                    "other": ""
                }
            ],
            workPlan3: [
                {
                    "name": "GXCLaoMao",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "预言家",
                    "link": "https://mp.weixin.qq.com/s/5rkEIeSSUmwXjf1ahTwx9w",
                    "other": ""
                },
                {
                    "name": "布洛克城",
                    "link": "https://shimo.im/docs/0HoqlBUjNicAEDSL",
                    "other": ""
                },
                {
                    "name": "GXCDAC",
                    "link": "https://mp.weixin.qq.com/s/3x8N1w0iWLP4uxerZ9SEKQ",
                    "other": ""
                },
                {
                    "name": "GXC Pacific",
                    "link": "https://mp.weixin.qq.com/s/zh6cutPa4Jwqqin-7cl9lw",
                    "other": ""
                },
                {
                    "name": "CertiK",
                    "link": "https://mp.weixin.qq.com/s/xgLn8H3J3ytT5NoHBSS3CA",
                    "other": ""
                },
                {
                    "name": "分布式资本",
                    "link": "https://shimo.im/docs/KUhbz4siPPcJpBwq/ ",
                    "other": ""
                },
                {
                    "name": "TLAB",
                    "link": "https://mp.weixin.qq.com/s/m2uNJOvlqqB7LIsqFKhWfA",
                    "other": ""
                },
                {
                    "name": "信来节点",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "BigONE",
                    "link": "https://bigone.zendesk.com/hc/zh-cn/articles/360026522853",
                    "other": ""
                },
                {
                    "name": "Inbex",
                    "link": "",
                    "other": "--"
                },
                {
                    "name": "区块链研习社",
                    "link": "https://mp.weixin.qq.com/s/y_KG-MZvFT6YkJmwVYP7gQ",
                    "other": ""
                },
                {
                    "name": "币须达摩",
                    "link": "https://mp.weixin.qq.com/s/epOY08N11VLj88l9HPBGJA",
                    "other": ""
                },
                {
                    "name": "LendChain",
                    "link": "https://mp.weixin.qq.com/s/12JIos9M3XkQB25TKQamiQ",
                    "other": ""
                },
                {
                    "name": "BEPAL",
                    "link": "https://mp.weixin.qq.com/s/vrSnNW1WfowsNdXfA51wQw",
                    "other": ""
                },
                {
                    "name": "全球石墨烯区块链应用中心",
                    "link": "https://mp.weixin.qq.com/s/rjS48h-GKPHkxfIIcCiDmw",
                    "other": ""
                },
                {
                    "name": "猩力量",
                    "link": "https://mp.weixin.qq.com/s/Yo0V2n-egYUICWl2-AAFTw",
                    "other": ""
                },
                {
                    "name": "GXCMoon",
                    "link": "https://mp.weixin.qq.com/s/4tcIA0jwhzUWYCMALFKXqQ",
                    "other": ""
                },
                {
                    "name": "Hillstone BlockchainCenter",
                    "link": "https://www.facebook.com/2380147252307844/posts/2380167348972501/",
                    "other": ""
                },
                {
                    "name": "时戳资本",
                    "link": "https://mp.weixin.qq.com/s/AkOR-Xa8inbVjZN3fD4KSg",
                    "other": ""
                },
                {
                    "name": "GXBean",
                    "link": "https://m.bihu.com/a/1fC56M?i=1Py5lO&c=1&s=1fC56M",
                    "other": ""
                },
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
