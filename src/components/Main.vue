<script>
import Jumbo from './Jumbo.vue'
import SectionService from './SectionService.vue'

export default {
    name: "Main",
    components: {
        Jumbo,
        SectionService
    }
}
</script>
<template>
    <main>
        <Jumbo />
        <SectionService />
    </main>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>