<template>
	<div>
		<table>
			<thead>
				<tr>
					<th v-for="column in columns">{{column.title}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in data">
          <td v-for="colItem in colData">
              <template v-if="colItem.Type === 'selection'">
                  <input type="checkbox" @change="change">
              </template>
              <template v-if="colItem.Type === 'normal'">
                  {{item[colItem.key]}}
              </template>
              <template v-if="colItem.Type === 'delete'">
                  <button>删除</button>
              </template>
          </td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  name: 'mTable',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    renderType () {
      return 'selection'
    },
    colData () {
      let num = 0
      let tempArr = []
      this.columns.forEach((val, index) => {
        let {Type} = val
        let obj = {}
        obj = val
        if (Type === 'selection') {
          obj.Type = 'selection'
        } else if (Type === 'delete') {
          obj.Type = 'delete'
        } else {
          obj.Type = 'normal'
        }
        obj.index = num
        tempArr.push(obj)
      })
      return tempArr
    }
  },
  methods: {
    change () {
      console.log('点击了单选')
    }
  }
}
</script>

<style lang="less" scoped>
table{
    border-collapse:collapse;
    text-align:center;
    width:100%;
}

th{
    background: #b5d0f4;
    border:1px solid #ddd;
    border-top: none;
    width: 150px;
    text-align:center;
    height:50px;
}
td{
    border:1px solid #ddd;
    border-top: none;
    height:50px;
    button{
        border:none;
        background:#fff;
    }
}

</style>
