<script>
import TastoPlay from './TastoPlay.vue'

export default {
    name: "CardVideoList",
    components: {
        TastoPlay
    },
    props: {
        details: Object
    }

}
</script>
<template>
    <div class="card">
        <TastoPlay />
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.card {
    width: calc(100% / 3);
    height: 250px;
    background-image: url(../assets/img/video2-2x.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 4px 4px 40px 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
        background-image: url(../assets/img/video7-2x.jpg);
    }

    &:last-child {
        background-image: url(../assets/img/video9-2x.jpg);
    }

    .play {
        color: $color-blue;
        background-color: white;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            color: $color-red;
        }
    }

}
</style>