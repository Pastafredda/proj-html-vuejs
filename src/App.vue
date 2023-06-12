<script>
import PageHeader from './components/PageHeader.vue'
import Main from './components/Main.vue'


export default {
  components: {
    PageHeader,
    Main
  }
}
</script>

<template>
  <PageHeader />
  <Main />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/variables.scss" as *;
</style>
