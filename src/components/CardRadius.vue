<script>
export default {
    name: "CardRadius",
    props: {
        details: Object
    }
}
</script>
<template>
    <div class="card">
        <ul>
            <li id="icon">Icon </li>
            <li id="title">{{ details.title }}</li>
            <li>{{ details.subtitle }}</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;
</style>