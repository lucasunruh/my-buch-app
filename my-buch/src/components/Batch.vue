<template>
  <div class="ui two column centered grid">
    <div class="column">
      <div class="ui fluid card">
        <div class="content">
          <div class="header">Batch {{ info.batch_number }}: {{ info.batch_name }}</div>
        </div>
        <div class="content">
          <div class="description">
            {{ info.IF_details}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Batch',
  props: {
    info: Object
  }
}
</script>

<style scoped>
</style>
