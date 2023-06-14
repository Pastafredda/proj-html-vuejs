<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'


export default {
  components: {
    PageHeader,
    PageMain
  }
}
</script>

<template>
  <PageHeader />
  <PageMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/variables.scss" as *;
</style>
