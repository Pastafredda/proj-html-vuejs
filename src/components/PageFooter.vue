<script>
import UpFooter from './UpFooter.vue';
import DownFooter from './DownFooter.vue'
export default {
    name: "PageFooter",
    components: {
        UpFooter,
        DownFooter
    }
}
</script>
<template>
    <footer>
        <UpFooter />
        <DownFooter />
    </footer>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>