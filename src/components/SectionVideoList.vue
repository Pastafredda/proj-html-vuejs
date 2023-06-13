<!-- Sezione video importato in section video, dividendo appunto SectionVideo in due parti -->
<script>
import TastoPlay from './TastoPlay.vue'
export default {
    name: "SectionVideoList",
    components: {
        TastoPlay
    },
    data() {
        return {
            links: [
                {
                    title: "Thighs & glute workout",
                    subtitle: "Increase your mobility"
                },
                {
                    title: "Lift, firm & perk up",
                    subtitle: "Feel young again"
                },
                {
                    title: "Slim & trim your waist",
                    subtitle: "Shed those extra pounds"
                },
            ]
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="video">
            <div class="title">
                <span>Featured playlists</span>
                <span>View all videos</span>
            </div>
        </div>
        <div class="row">
            <div class="card" v-for="(link, index) in links" :key="index">
                <TastoPlay />
                <ul class="info">
                    <li>{{ link.title }}</li>
                    <li>{{ link.subtitle }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.row {
    display: flex;
    gap: 40px;

    .card {
        width: calc(100% / 3);
        height: 250px;
        background-image: url(.././assets/img/service6-2x.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 4px 4px 40px 4px;

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
            margin-top: 250px;
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

}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 50px;

    span {
        font-size: 20px;

        &:first-child {
            font-size: 28px;
            font-weight: 500;
        }
    }

}
</style>