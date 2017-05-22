<template>
  <div>
    <b-alert show>
      Default Alert
    </b-alert>

    <b-alert state="success" show>
      Success Alert
    </b-alert>
  </div>
</template>

<script>
import {bAlert} from 'bootstrap-vue/lib/components'

export default {
  components: {
    bAlert
  }
}
</script>
