<template>
<div>
	<tabs>

		<tabs-pane label="首页" >
			<div>
				<div >
					<page ></page>	
					<modal></modal>
				</div>
				<div >
					<div  style="text-align: center;">
					
					</div>
				</div>
			</div>
		</tabs-pane>

		<tabs-pane label="标题二" >
			<div><m-table :columns="columns" :data="condata"></m-table></div>
		</tabs-pane>

		<tabs-pane label="标题三" >
      <div>
        <alert></alert>
        <alert 
          type="warning"  
          mstyle="background-color: pink;"
        >
        </alert>	
        <alert type="error"></alert>
		  </div>
    </tabs-pane>

    <tabs-pane label="标题四" >
      <div>
        <panel title="23432">
          <div>ffasdfwefadf</div>
        </panel>
		  </div>
    </tabs-pane>

	</tabs>
</div>
</template>

<script>
import tableData from '../data/tableData'
import page from '../components/page'
import modal from '../components/modal'
import tabs from '../components/tabs'
import tabsPane from '../components/tabsPane'
import mTable from '../components/table'
import alert from '../components/alert'
import panel from '../components/panel'

let {columns, condata} = tableData

export default {
  data () {
    return {columns, condata}
  },
  components: {
    page,
    panel,
    modal,
    tabs,
    tabsPane,
    mTable,
    alert
  }
}

</script>
