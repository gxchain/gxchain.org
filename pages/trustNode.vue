<template>
    <div class="trustNode-page">
        <section class="trustNode section-padding">
        <div class="container">
            <h2 class="page-title gxc-border-left padding-left-w color-666">公信节点第一季度工作计划</h2>
            <div class="content-margin-top">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr class="text-center">
                        <th scope="col" width="30%">公信节点</th>
                        <th scope="col">工作计划链接</th>
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
                    name: '预言家Prophet',
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
                    name: 'gf.network（分布式资本）',
                    link: '',
                    other: '见附件word。'
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
                    name: '石楠(moon)',
                    link: 'https://mp.weixin.qq.com/s/E-PQfJhep47juJLYLLTLcg',
                    other: ''
                },
                {
                    name: '信来节点',
                    link: '',
                    other: '正在拟'
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
                    other: '过几天'
                },
                {
                    name: '区块链研习社',
                    link: 'https://mp.weixin.qq.com/s/M2PNpT2KYG4hak09VoPH8Q',
                    other: ''
                },
                {
                    name: '引力矿池',
                    link: '',
                    other: '过几天'
                },
                {
                    name: 'GenaroNetwork',
                    link: '',
                    other: '没有反应'
                },
                {
                    name: 'LendChain',
                    link: 'https://justblockchainnews.com/2019/03/01/gxharvard节点季度工作计划/',
                    other: ''
                },
                {
                    name: '币须达摩',
                    link: 'https://mp.weixin.qq.com/s/ipTFFYDu3AH6gEOk8acZ8g',
                    other: ''
                },
                {
                    name: 'Bit-Z集团',
                    link: '',
                    other: '没有反应'
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
}
</style>
