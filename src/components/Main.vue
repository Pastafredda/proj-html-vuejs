<script>
import Jumbo from './Jumbo.vue'
import SectionService from './SectionService.vue'
import SectionVideo from './SectionVideo.vue'

export default {
    name: "Main",
    components: {
        Jumbo,
        SectionService,
        SectionVideo
    }
}
</script>
<template>
    <main>
        <Jumbo />
        <SectionService />
        <SectionVideo />
    </main>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>