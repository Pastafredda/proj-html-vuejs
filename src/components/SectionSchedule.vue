<script>
import ScheduleEmail from './ScheduleEmail.vue'
import ScheduleCard from './ScheduleCard.vue'
export default {
    name: "SectionSchedule",
    components: {
        ScheduleEmail,
        ScheduleCard
    }
}
</script>
<template>
    <ScheduleEmail />
    <ScheduleCard />
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>