<script>
import Jumbo from './Jumbo.vue'
import SectionService from './SectionService.vue'
import SectionVideo from './SectionVideo.vue'
import SectionSchedule from './SectionSchedule.vue'
import LatestArticle from './LatestArticle.vue'



export default {
    name: "Main",
    components: {
        Jumbo,
        SectionService,
        SectionVideo,
        SectionSchedule,
        LatestArticle
    }
}
</script>
<template>
    <main>
        <Jumbo />
        <SectionService />
        <SectionVideo />
        <SectionSchedule />
        <LatestArticle />
    </main>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>