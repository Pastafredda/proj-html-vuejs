<script>
import TastoPlay from './TastoPlay.vue';
export default {
    name: "WorkoutOfTheDay",
    components: {
        TastoPlay

    }
}
</script>
<template>
    <section>
        <div class="container">
            <div class="workout">
                <TastoPlay />
                <p>Crossfit workout of the day</p>
                <span>November 15th, 2019</span>
                <a href="#">View all videos <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

section {
    background-blend-mode: multiply;
    filter: saturate(100%);
    background-image: linear-gradient(151deg, #4154ff 35%, #ff414b 100%);
    background-image: linear-gradient(151deg, #4154ff 35%, #ff414b 100%), url(../assets/img/banner14-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    .workout {
        padding-top: 140px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 200px;


        .play {
            width: 90px;
            height: 90px;
            font-size: 22px;
        }

        p {
            margin-top: 30px;
            font-size: 55px;
            color: white;
            font-weight: 500;
        }

        span {
            color: $color-yellow;
            font-size: 36px;
            font-weight: 500;
            margin-top: 16px;
        }

        a {
            margin-top: 10px;
            font-size: 20px;
            color: white;

        }



    }

}
</style>