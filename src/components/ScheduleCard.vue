<script>
export default {
    name: "ScheduleCard",
    data() {
        return {
            links: [
                {
                    Title: "Team training",
                    Subtitle: "Find a partner",
                    Text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
                    UnderText: "Find a partner"
                },
                {
                    Title: "Crossfit workout",
                    Subtitle: "Push your limits",
                    Text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
                    UnderText: "Learn about Crossfit"
                },
                {
                    Title: "Weight loss plan",
                    Subtitle: "Shed those pounds",
                    Text: "At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
                    UnderText: "Schedule a workout"
                },
            ]
        }
    }
}
</script>
<template>
    <section>
        <div class="container">
            <div class="row">

                <div class="card" v-for="(link, index) in links" :key="index">
                    <ul class="contenuto">
                        <li><font-awesome-icon icon="fa-solid fa-dumbbell" /></li>
                        <li>{{ link.Title }}</li>
                        <li>{{ link.Subtitle }}</li>
                        <li>{{ link.Text }}</li>
                        <li>{{ link.UnderText }}</li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

section {
    background-color: black;
    height: 500px;

    .row {
        display: flex;
        gap: 40px;

        .card {
            width: calc(100% / 3);
            height: 500px;
            border: 2px solid $color-blue;


            li {
                color: white;
                font-size: 20px;
            }
        }
    }


}
</style>