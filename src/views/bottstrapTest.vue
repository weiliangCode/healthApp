<template>
  <div>

   <b-nav tabs>
    <b-nav-item active href="/#/Bottst/">首页</b-nav-item>
    <b-nav-item  href="/#/Bottst/alert">提示</b-nav-item>
    <b-nav-item href="/#/Bottst/btn">按钮</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>


  
   
    <router-view></router-view>
  </div>
</template>


<script>
import {bNav, bNavItem} from 'bootstrap-vue/lib/components'

export default {
  components: {
    bNav,
    bNavItem
  }
}
</script>
