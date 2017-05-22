<template>
	<div class="Page">
		<span>共{{ total }}条{{ allPages }}页</span>
		<span>┇</span>
		<span>当前第 {{currentPage}} 页</span>
		<span>┇</span>
		<span>每页</span>
		<input class="input" type="text" v-model="currentPageSize" @blur = "totalBlur"/>
		<span>条</span>
		<span>┇</span>
		<a href="javascript:;" @click="start" :class="{operability:startClass}">首页</a>
		<span>┇</span>
		<a href="javascript:;" @click="prev" :class="{operability:prevClass}">上一页 </a>
		<span>┇</span>
		<a href="javascript:;" @click="next" :class="{operability:nextClass}">下一页</a>
		<span>┇</span>
		<a href="javascript:;" @click="end" :class="{operability:endClass}">尾页</a>
		<span>┇</span>
		<span>跳到第</span>
		<input class="input" type="text" v-model="gopage" @blur = "pageBlur"/>
		<span>页</span>
	</div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    allPages () {
      let num = Math.ceil(this.total / this.numberPage)
      this.startClass = false
      this.prevClass = false
      this.nextClass = false
      this.endClass = false
      if (num > 1) {
        if (this.currentPage > 1) {
          this.startClass = true
          this.prevClass = true
        }
        if (num > this.currentPage) {
          this.nextClass = true
          this.endClass = true
        }
      }
      return num
    }
  },
  data () {
    return {
      currentPage: this.current,
      currentPageSize: this.pageSize,
      numberPage: this.pageSize,
      startClass: false,
      prevClass: false,
      nextClass: true,
      endClass: true,
      gopage: 1
    }
  },
  methods: {
    changePage (page) {
      this.startClass = false
      this.prevClass = false
      this.nextClass = false
      this.endClass = false
      if (this.allPages > 1) {
        if (page > 1) {
          this.startClass = true
          this.prevClass = true
        }
        if (this.allPages > page) {
          this.nextClass = true
          this.endClass = true
        }
      }
      if (this.currentPage !== page) {
        this.currentPage = page
        this.$emit('on-change', page)
      }
    },
    prev () {
      if (!this.prevClass) {
        return false
      }
      const current = this.currentPage
      if (current <= 1) {
        return false
      }
      this.changePage(current - 1)
    },
    next () {
      if (!this.nextClass) {
        return false
      }
      const current = this.currentPage
      if (current >= this.allPages) {
        return false
      }
      this.changePage(current + 1)
    },
    start () {
      if (!this.startClass) {
        return false
      }
      this.changePage(1)
    },
    end () {
      if (!this.endClass) {
        return false
      }
      this.changePage(this.allPages)
    },
    totalBlur () {
      let size = parseInt(this.currentPageSize)
      if (size > 5 && size < 40) {
        this.currentPageSize = size
      } else {
        this.currentPageSize = 10
      }
      if (this.numberPage !== this.currentPageSize) {
        this.numberPage = this.currentPageSize
        this.changePage(1)
        this.$emit('on-page-size-change', this.numberPage)
      }
    },
    pageBlur () {
      let num = parseInt(this.gopage)
      if (num > 0 && num <= this.allPages) {
        this.changePage(num)
      }
      this.gopage = this.currentPage
    }

  }
}
</script>

<style lang="less" scoped>
.Page{
    // width: 700px;
    a{
        text-decoration: none;
        color: #333;
    }
    .operability{
        color: #195DB7;
    }
    .operability:hover{
         text-decoration:underline;
        color: blue;
    }
}
    
.input{
    width: 50px;
    text-align: center;
}

</style>
