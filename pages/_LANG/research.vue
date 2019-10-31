<template>
    <div class="research-page">
        <div class="header">
            <img src="https://static.gxchain.org/gxchain/images/bg.png">
        </div>
        <section>
            <div class="container research-desc">
                <div>
                    {{$t('research.description1')}}
                </div>
                <div>{{$t('research.description2')}}
                </div>
            </div>
        </section>
        <section>
            <div class="container research-content">
            <div class="research-title-wrap">
                <div class="research-title-inner">{{$t('research.teammember')}}</div>
                <span class="slice"></span>
                <span class="slice1"></span>
            </div>
            <div class="memberWrap enpage">
                <div class="item row">
                    <div class="col-md-6">
                        <h3 class="gxc-border-left padding-left-w color-666">{{$t('research.member1.name')}} <span>{{$t('research.member1.edu')}}</span></h3>
                        <div class="item-content">
                            {{$t('research.member1.description')}}
                        </div>

                    </div>
                    <div class="col-md-6">
                        <h3 class="gxc-border-left padding-left-w color-666">{{$t('research.member2.name')}} </h3>
                        <div class="item-content">
                            {{$t('research.member2.description')}}
                        </div>
                    </div>
                </div>
                <div class="item row">
                    <div class="col-md-6">
                        <h3 class="gxc-border-left padding-left-w color-666">{{$t('research.member3.name')}} <span>{{$t('research.member3.edu')}}</span></h3>
                        <div class="item-content">
                            {{$t('research.member3.description')}}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="gxc-border-left padding-left-w color-666">{{$t('research.member4.name')}} <span>{{$t('research.member4.edu')}}</span></h3>
                        <div class="item-content">
                            {{$t('research.member4.description')}}
                        </div>
                    </div>
                </div>
                <div class="item row">
                    <div class="col-md-6">
                        <h3 class="gxc-border-left padding-left-w color-666">{{$t('research.member5.name')}} <span>{{$t('research.member5.edu')}}</span></h3>
                        <div class="item-content">
                            {{$t('research.member5.description')}}
                        </div>

                    </div>
                    <div class="col-md-6">

                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    @import '../../assets/css/research.less';
</style>
