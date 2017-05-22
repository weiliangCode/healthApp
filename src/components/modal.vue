<template>
	<div v-show="visible">
		<div v-if = "maskClosable" class="jnq-modal-mask"></div>
		<div class="jnq-modal" :class="[classes]" :style="styles"  ref="box">
			<div class="jnq-modal-h" @mousedown="mDown" >
				<slot name="header">
					<h3>{{title}}</h3>
					<button @click="closeHandle">X</button>
				</slot>
			</div>
			<div class="jnq-modal-c">
				<slot name="content">
					<p class="jnq-modal-message">{{content}}</p>
				</slot>
			</div>
			<div class="jnq-modal-f">
				<slot name="footer">
					<button @click="okBtn">{{okText}}</button>	
					<button @click="closeBtn">{{cancelText}}</button>
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      visible: this.value
    }
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: '温馨提示'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    width: {
      type: String,
      default: '300'
    },
    content: {
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
    maskClosable: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return `m-modal-${this.type}`
    },
    iconClass () {
      return `m-icon-${this.type}`
    },
    styles () {
      let style = {}
      style.marginLeft = `${-this.width / 2}px`
            // if (this.height) {
                //     const height = (this.isLeftFixed || this.isRightFixed) ? parseInt(this.height) + this.scrollBarWidth : parseInt(this.height);
                //     style.height = `${height}px`;
                // }
      if (this.width) style.width = `${this.width}px`
      return style
    }
  },
  methods: {
    closeHandle (e) {
      e.stopPropagation()
      this.visible = false
      this.$emit('close-click')
    },
    okBtn () {
      this.$emit('on-ok')
    },
    closeBtn () {
      this.$emit('on-cancel')
    },
    mDown (e) {
      let disX = e.offsetX
      let disY = e.offsetY
      let oBox = this.$refs.box
      let self = this
      document.onmousemove = function (e) {
        oBox.style.left = e.clientX - disX + self.width / 2 + 'px'
        oBox.style.top = e.clientY - disY + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
@modal-head:32px;
@modal-foot:50px;
@bg-color:#1b6aaa;
.jnq-modal-mask{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    z-index: 1000;
}

.jnq-modal{
    z-index: 9999;
    position: fixed;
    background: #fff;
    top: 40%;
    left: 50%;
    border-radius: 10px;
    overflow:hidden;
    box-shadow: 0 3px 20px rgba(0, 0, 0, .9);
}

.jnq-modal-h{
    width: 100%;
    height: @modal-head;
    background: @bg-color;
    position: relative;
    left: 0;
    top: 0;
    h3{
        width: 100%;
        height: 100%;
        color: #fff;
        line-height: @modal-head;
        text-align: left;
        padding-left: 10px;
        cursor: move;
        font-size: 20px;
        
    }
    button{
        width: 21px;
        height: 21px;
        line-height: 19px;
        position: absolute;
        right: 10px;
        top: 5px;
        color: #000;
        border-radius: 15px;
        cursor: pointer;
        border: 0;
        outline: 0;
    }
}

.jnq-modal-c{
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    text-align: center;
    .jnq-modal-message{
        height: 52px;
        line-height: 52px;
    }
}

.jnq-modal-f{
    width: 100%;
    text-align: center;
    button{
        padding: 6px 12px;
        margin: 4px 20px;
        border: none;
        color: #fff;
        border-radius: 2px;
        background: @bg-color;
        font-size: 12px;
    }
}
</style>
