<script>
import ScheduleEmail from './ScheduleEmail.vue'
export default {
    name: "SectionSchedule",
    components: {
        ScheduleEmail
    }
}
</script>
<template>
    <section>
        <ScheduleEmail />
    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>