<template>
  <div>
    <div v-for="batch in this.batches" :key="batch.batch_id">
      <Batch :info="batch" />
    </div>
  </div>
</template>

<script>
import Batch from './Batch.vue'
import { getAllBatches } from '../services/service'

export default {
  name: 'History',
  components: {
    Batch
  },
  data () {
    return {
      batches: []
    }
  },
  created () {
    this.getAllBatches()
  },
  methods: {
    getAllBatches () {
      getAllBatches().then(res=>this.batches = res)
    }
  }
}
</script>

<style scoped>
</style>
