<script>
// Card importate in LatestArticle 
import TastoPlay from './TastoPlay.vue'

export default {
    name: "CardArticles",
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
        <div class="info">
            <p>{{ details.title }}</p>
            <span id="by">By</span>
            <a href="#">{{ details.by }} </a>
            <span id="date"> | {{ details.date }} |</span>
            <a href=""> {{ details.gym }}</a>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.card {
    width: calc(100% / 3);
    height: 250px;
    background-image: url(../assets/img/blog4-2x.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.04);
    }

    &:nth-child(2) {
        background-image: url(../assets/img/blog1-2x.jpg);
    }

    &:last-child {
        background-image: url(../assets/img/blog3-2x.jpg);
    }

    .info {
        margin-top: 260px;
        text-align: center;

        p {
            margin-bottom: 12px;
            font-size: 22px;
            font-weight: 500;
        }

        span {
            font-size: 16px;
            margin: 0 6px;
            color: $color-gray;
        }

        a {
            color: black;
        }
    }
}
</style>
