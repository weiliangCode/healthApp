export default {
  columns: [
    {
      title: '选择',
      key: 'check',
      Type: 'selection'
    },
    {
      title: '姓名',
      key: 'name',
      render (row, column, index) {
        return `<Icon type="person"></Icon> <strong>${row.name}</strong>`
      }
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '地址',
      key: 'address'
    },
    {
      title: '操作',
      key: 'action',
      Type: 'delete',
      width: 150,
      align: 'center',
      render (row, column, index) {
        return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
      }
    }
  ],
  condata: [
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
    }
  ]
}
