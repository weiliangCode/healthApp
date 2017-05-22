<template>
	<div class="m-alert" :class="[classes]" style="mstyle">
		<slot name="iconTemp">
			<i v-if="showicon" class="m-icon" :class="[iconClass]"></i>
		</slot>
		
		<div class="m-content">
			<slot name="titleTmp">
				<span class="m-message">{{title}}</span>
			</slot>
			
			<i v-if="!closeable" class="m-closebtn m-icon-close" @click="closeHandle"></i>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: '这里有一个消息要提示'
    },
    closeable: {
      type: Boolean,
      default: true
    },
    showicon: {
      type: Boolean,
      default: false
    },
    mstyle: String
  },
  computed: {
    classes () {
      return `m-alert-${this.type}`
    },
    iconClass () {
      return `m-icon-${this.type}`
    }
  },
  methods: {
    closeHandle () {
      alert(123)
      this.$emit('close-click')
    }
  }
}
</script>


<style>
[class*=" m-icon-"], [class^=m-icon-] {
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
/*基本样式*/
.m-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    color: #fff;
    display: table;
    transition: opacity .2s;
    margin-top:10px;
    border: 1px solid #ccc;
}
.m-content {
    display: table-cell;
    padding: 0 8px;
}
.m-message {
    font-size: 13px;
    line-height: 18px;
}
/*不同状态样式*/
.m-alert-success{
    background-color:#13ce66;
}
.m-alert-info{
    background-color:#50bfff;
}
.m-alert-warning{
    background-color:#f7ba2a;
}
.m-alert-error{
    background-color:#ff4949;
}
/*关闭按钮样式*/
.m-closebtn {
    font-size: 12px;
    color: #fff;
    opacity: 1;
    top: 12px;
    right: 15px;
    position: absolute;
    cursor: pointer;
}
.m-icon-close:before {
    content: "\E60C";
}
/*小图标样式*/
.m-icon {
    font-size: 16px;
    width: 16px;
    display: table-cell;
    color: #fff;
    vertical-align: middle;
}
.m-icon-success:before {
    content: "\E609";
}
.m-icon-warning:before {
    content: "\E615";
}
.m-icon-info:before {
    content: "\E615";
}

.m-icon-error:before {
    content: "\E60B";
}
/*自定义图标*/
.m-icon-message:before {
    content: "\E618";
}

.m-icon-menu:before {
    content: "\E617";
}

.m-icon-setting:before {
    content: "\E61E";
}
</style>
