<template>
  <div>
     <Checkbox></Checkbox>
     <m-table :columns="columns1" :data="data1"></m-table>

     <Row>
        <Col span="12">
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
        <Col span="12">
            <Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
    </Row>

  </div>
</template>

<script>
import Checkbox from 'iview/src/components/checkbox'
import mTable from 'iview/src/components/table'
import {Col} from 'iview/src/components/grid'
import DatePicker from 'iview/src/components/date-picker'

export default {
  data () {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }],
      options3: {
        disabledDate (date) {
          return date && date.valueOf() < Date.now() - 86400000
        }
      },
      options4: {
        disabledDate (date) {
          const disabledDay = date.getDate()
          return disabledDay === 15
        }
      }
    }
  },
  components: {
    Checkbox,
    mTable,
    Col,
    DatePicker
  }
}
</script>
