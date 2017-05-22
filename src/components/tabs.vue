<template>
	<div class="tabs">
		<div class="tabsHead">
			<div class="tabsHeadSub">
				<div class="tabs-tab" :class="tabCls(item)" v-for='(item,index) in navList' @click="handleChange(index)">
					{{item.label}}
					<i></i>
				</div>
			</div>
		</div>

		<div class="tabs-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

const prefixCls = 'ivu-tabs'
export default {
  name: 'Tabs',
  methods: {
    getTabs () {
      return this.$children.filter(item => item.$options.name === 'TabPane')
    },
    updateNav () {
      this.navList = []
      this.getTabs().forEach((pane, index) => {
        this.navList.push({
          label: pane.label,
          icon: pane.icon || '',
          name: pane.currentName || index,
          disabled: pane.disabled,
          closable: pane.closable
        })
        if (!pane.currentName) pane.currentName = index
        if (index === 0) {
          if (!this.activeKey) this.activeKey = pane.currentName || index
        }
      })
      this.updateStatus()
      this.updateBar()
    },
    updateBar () {
    },
    updateStatus () {
      const tabs = this.getTabs()
      let self = this
      tabs.forEach(function (tab) { tab.show = (tab.currentName === self.activeKey) || self.animated })
    },
    tabCls (item) {
      return {
        active: item.name === this.activeKey
      }
    },
    contentClasses () {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-animated`]: this.animated
        }
      ]
    },
    handleChange (index) {
      const nav = this.navList[index]
      if (nav.disabled) return
      this.activeKey = nav.name
      this.$emit('input', nav.name)
      this.$emit('on-click', nav.name)
    }
  },
  data () {
    return {
      navList: [],
      activeKey: this.value
    }
  },
  computed: {},
  watch: {
    value (val) {
      this.activeKey = val
    },
    activeKey () {
      this.updateBar()
      this.updateStatus()
      // this.broadcast('Table', 'on-visible-change', true);
    }
  }
}
</script>

<style lang="less" scoped>
.tabs{
    width: 100%;
}

.tabsHead{
    width: 100%;
    height: 31px;
    border-bottom: 1px solid #e5e7ea;
    background: #e8f0fa;
}

.tabsHeadSub{
    overflow: hidden;
    width: 100%;
    height: 26px;
    border-bottom:1px solid #90b0da;
    padding-left: 30px;
    box-sizing: border-box;
    .tabs-tab{
        font-size: 12px;
        float: left;
        height: 18px;
        padding: 0 30px;
        line-height: 18px;
        text-align: center;
        color: #282828;
        cursor: pointer;
        margin-top: 7px;
        background-image: url(../assets/acrossTab-2.png);
        position: relative;
        i{
            background-image: url(../assets/acrossTab-2.png);
            background-position: right -30px;
            width:17px;
            height: 26px;
            position: absolute;
            top: 0;
            right: -17px;
            z-index: 2;
        }
    }
    .tabs-tab:hover{
        background-position: 0 -60px;
        i{
            background-position: right -90px;
        }
    }
    .tabs-tab.active{
        z-index: 3;
        background-position:0 -120px;
        i{
            background-position: right -150px;
        }
    }
}

.tabs-content{
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    margin-top:8px;
    border-top:1px solid #ffffff;
    .tabs-tabpane{
        width: 100%;
        height: 500px;
        position: absolute;
        top: 0px;
        left: 0;
    }
}
</style>
