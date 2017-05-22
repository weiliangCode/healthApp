<template>
  <div  :style="mstyle" class="panel">
      <div class="panel-heading panel_head" v-if="title">
        <h3 class="panel-title">{{title}}</h3>
      </div>
      
      <div class="panel-body panel_contant">
        <slot >
			  </slot>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    mstyle: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.panel_contant{
    padding: 0 10px;
    .ant-form-item{
        margin-bottom: 4px;
    }
}
.panel{
    position: relative;
    border-width: 0;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
}
.panel_head{
    background: #fbfbfb;
   border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    h3{
        color: #6dbdf3;
    }
}
.panel-title{
    display: block;
    padding: 10px 30px;
    font-size: 18px;
    color: #37474f;
}
</style>
