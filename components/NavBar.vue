<template>
    <b-navbar class="nav-top fluid" toggleable="md" sticky>
        <div class="container">
            <b-navbar-brand :href="logoRedirect($i18n.locale)"><img class="logo not-animate" src="/gxchain.org.png" alt="GXChain">
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-for="(item,index) in navList" :key="index" :target="item.target"
                                :href="item.path[$store.state.locale]" :class="{'active':navActive(item.name)}">
                        {{$t('links.'+item.name)}}
                    </b-nav-item>
                    <!-- <b-button variant="outline-info" size="sm" class="info" type="submit">登录</b-button> -->
                    <b-nav-item-dropdown :text="$t('links.'+$i18n.locale)" right>
                        <b-dropdown-item href="#" @click="switchLanguage('zh')"><img class="flag-img not-animate"
                                                                                     src="~static/zh.png" alt="">中文
                        </b-dropdown-item>
                        <b-dropdown-item href="#" @click="switchLanguage('en')"><img class="flag-img not-animate"
                                                                                     src="~static/en.png" alt="">English
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>
<script>
export default {
    data () {
        return {
            navList: [
                {
                    name: "bounty",
                    path: {
                        zh: "/bounty",
                        en: "/en/bounty"
                    },
                    target: "_self"
                },
                {
                    name: "developer",
                    path: {
                        zh: "/developer",
                        en: "/en/developer"
                    },
                    target: "_self"
                },
                {
                    name: "resource",
                    path: {
                        zh: "/resource",
                        en: "/en/resource"
                    },
                    target: "_self"
                },
                {
                    name: "dapps",
                    path: {
                        zh: "/dapps",
                        en: "/en/dapps"
                    },
                    target: "_self"
                },
                {
                    name: "foundation",
                    path: {
                        zh: "/foundation",
                        en: "/en/foundation"
                    },
                    target: "_self"
                },
                {
                    name: "blockExplorer",
                    path: {
                        zh: "https://block.gxb.io",
                        en: "https://block.gxb.io"
                    },
                    target: "_blank"
                }
            ]
        };
    },
    methods: {
        navActive (navName) {
            return this.$route.fullPath.indexOf(navName) != -1;
        },
        switchLanguage (locale) {
            if (this._i18n.locale === "zh") {
                if (locale === "en") {
                    this.$router.push(`/en${this.$route.fullPath}`);
                }
            } else {
                if (locale === "zh") {
                    this.$router.push(`${this.$route.fullPath.replace(/^\/[^\/]+/, "")}`);
                }
            }
        },
        logoRedirect (locale) {
            let _href;
            switch (locale) {
                case "zh":
                    _href = "/";
                    break;
                case "en":
                    _href = "/en/";
                    break;
            }
            return _href;
        }
    }
};
</script>
<style scoped>
.nav-top {
  border-bottom: 1px solid #e5e9ef;
  background: #fff;
}

.logo {
  height: 1.6rem;
}

.navbar {
  color: #666666;
}

.navbar-nav li {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.navbar-nav li .nav-link {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.navbar-nav li.active {
  border-bottom: 2px solid #6699ff;
}

.flag-img {
  width: 20px;
  margin-right: 10px;
}

@media (min-width: 768px) {
  .navbar {
    height: 80px;
  }
}

@media (max-width: 768px) {
  .navbar-nav li {
    text-align: center;
  }

  .navbar-nav li.active {
    border-bottom: none;
  }
}
</style>
