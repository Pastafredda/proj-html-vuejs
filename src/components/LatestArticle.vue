<script>
import CardArticles from './CardArticles.vue'
export default {
    name: "LatestArticle",
    components: {
        CardArticles
    },
    data() {
        return {
            links: [
                {
                    title: "The best protein shake",
                    by: "admin",
                    date: "Nomvember 26th, 2019",
                    gym: "Gym"

                },
                {
                    title: "Lift, firm & perk up",
                    by: "admin",
                    date: "Nomvember 26th, 2019",
                    gym: "Gym"
                },
                {
                    title: "Slim & trim your waist",
                    by: "admin",
                    date: "Nomvember 26th, 2019",
                    gym: "Gym"
                },
            ]
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="title">
            <span>Latest articles</span>
            <a href="">Read all articles <font-awesome-icon :icon="['fas', 'angle-right']" /></a>
        </div>
        <div class="row">
            <CardArticles v-for="(link, index) in links" :key="index" :details="link" />
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 22px;
    font-weight: 500;

    a {
        font-size: 18px;
        color: black;

        &:first-child {
            font-size: 28px;
            font-weight: 500;
        }
    }
}

.row {
    display: flex;
    margin-bottom: 150px;
    gap: 40px;
}
</style>