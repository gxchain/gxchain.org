<template>
  <b-navbar toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#"><img style="height:30px" src="/gxchain.org.png"></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="/bounty">激励计划</b-nav-item>
        <b-nav-item href="/developer">开发者</b-nav-item>
        <b-nav-item href="/resource">资源</b-nav-item>
        <b-nav-item href="/dapps">DApps</b-nav-item>
        <b-nav-item target="_blank"  href="https://block.gxb.io">区块浏览器</b-nav-item>
        <b-button variant="outline-info" size="sm" class="info" type="submit">登录</b-button>

        <b-nav-item-dropdown text="ZH" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ZH</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
<style>

</style>
