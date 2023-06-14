<script>
import TastoPlay from './TastoPlay.vue'
import SectionVideoList from './SectionVideoList.vue'


export default {
    name: "SectionVideo",
    components: {
        TastoPlay,
        SectionVideoList
    }


}
</script>
<template>
    <section>
        <div class="flex">
            <div class="card">
                <TastoPlay />
            </div>
            <div class="card2">
                <span>Tune up your workouts</span>
                <p>The best health & fitness advice online</p>
                <div class="yt-channel">
                    <div class="logo">
                        <img src="../assets/img/unnamed.jpg" alt="">
                    </div>
                    <ul>
                        <li id="nome-canale">ThemeFusion</li>
                        <li><font-awesome-icon :icon="['fab', 'youtube']" /> Youtube</li>
                    </ul>
                    <span class="iscritti">999+</span>
                </div>
                <p>Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit
                    pellentesque.</p>
                <button class="yt"><font-awesome-icon :icon="['fab', 'youtube']" /> Visit my youtube channel</button>
            </div>
        </div>

        <SectionVideoList />
    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

section {
    margin-bottom: 200px;

    .card {
        width: 50%;
        margin-top: -60px;
        height: 710px;
        background-image: linear-gradient(5deg, rgba(0, 0, 0, 0.407), rgba(3, 4, 15, 0)), url(../assets/img/service15-2x.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 4px 4px 40px 4px;
        display: flex;
        justify-content: center;
        align-items: center;

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
            font-size: 20px;

            &:hover {
                color: $color-red;
            }
        }

    }

    .flex {
        display: flex;
        justify-content: space-between;

        .card2 {
            width: 40%;
            margin-right: 50px;
            margin-top: 100px;

            span {
                color: $color-blue;
                font-size: 20px;
            }

            p {
                font-size: 50px;
                font-weight: 500;
                margin: 30px 0;

                &:nth-child(4) {
                    font-size: 18px;
                    color: $color-gray;
                }
            }

            .yt-channel {
                display: flex;
                align-items: center;
            }

            #nome-canale {
                font-size: 14px;
                color: $color-gray;
            }

            .logo {
                width: 44px;
                height: 44px;
                margin-top: 5px;
                margin-right: 12px;
            }

            li {

                &:last-child {
                    margin-top: 5px;
                    color: white;
                    background-color: #f5000c;
                    font-size: 16px;
                    padding: 3px 8px;
                }
            }

            .iscritti {
                color: gray;
                font-size: 14px;
                margin-top: 23px;
                border: 1px solid gray;
                background-color: #fafafa;
                padding: 2.5px;
            }


            button {
                color: white;
                background-color: #f5000c;
                margin-top: 10px;

                &:hover {
                    background-color: $color-red;
                }
            }
        }

    }
}
</style>