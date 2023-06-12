<script>
import Jumbo from './Jumbo.vue'

export default {
    name: "Main",
    components: {
        Jumbo
    }
}
</script>
<template>
    <main>
        <Jumbo />
    </main>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>