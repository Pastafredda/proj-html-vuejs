<script>
export default {
    name: "TastoPlay",

}
</script>
<template>
    <div class="play">
        <font-awesome-icon :icon="['fas', 'play']" />
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.play {
    color: $color-blue;
    background-color: white;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        color: $color-red;
    }
}
</style>