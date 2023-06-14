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
        <div class="row">
            <CardArticles v-for="(link, index) in links" :key="index" :details="link" />
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.row {
    display: flex;
    margin: 150px 0;
    gap: 40px;
}
</style>