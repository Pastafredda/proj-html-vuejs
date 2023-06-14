<script>
// Card importate in SectionVideoList 
import TastoPlay from './TastoPlay.vue'

export default {
    name: "Main",
    components: {
        TastoPlay,
    },
    props: {
        details: Object
    }

}
</script>
<template>
    <div class="card">
        <TastoPlay />
        <ul class="info">
            <li>{{ details.title }}</li>
            <li>{{ details.subtitle }}</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.card {
    width: calc(100% / 3);
    height: 250px;
    background-image: url(../assets/img/service6-2x.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 4px 4px 40px 4px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.04);
    }

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
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:hover {
            color: $color-red;
        }
    }

    .info {
        margin-top: 260px;
        text-align: center;

        li {
            margin-bottom: 14px;
            font-size: 22px;
            font-weight: 500;

            &:last-child {
                color: $color-blue;
                font-size: 18px;
            }
        }
    }
}
</style>