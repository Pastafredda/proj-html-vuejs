<script>
export default {
    name: "ScheduleCard",
    data() {
        return {
            links: [
                {
                    title: "Team training",
                    subtitle: "Find a partner",
                    text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
                    underText: "Find a partner"
                },
                {
                    title: "Crossfit workout",
                    subtitle: "Push your limits",
                    text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
                    underText: "Learn about Crossfit"
                },
                {
                    title: "Weight loss plan",
                    subtitle: "Shed those pounds",
                    text: "At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
                    underText: "Schedule a workout"
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
                    <div class="contenuto">
                        <div class="testo">
                            <font-awesome-icon icon="fa-solid fa-dumbbell" />
                            <span class="title">{{ link.title }}</span>
                            <span class="subtitle">{{ link.subtitle }}</span>
                            <p>{{ link.text }}</p>
                            <span class="undertext">{{ link.underText }} <font-awesome-icon
                                    :icon="['fas', 'angle-right']" /></span>
                        </div>
                    </div>
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


    .row {
        display: flex;
        gap: 40px;
        padding: 100px 0;

        .card {
            width: calc(100%/3);
            border: 4px solid $color-blue;
            border-radius: 6px;
            transition: all 0.2s ease;
            cursor: pointer;

            &:hover {
                transform: scale(1.04);
            }


            .contenuto {
                max-width: 70%;
                margin: auto;
                margin-top: 70px;
                margin-bottom: 70px;
            }

            .testo {
                display: flex;
                flex-direction: column;
                align-items: center;

                .fa-dumbbell {
                    font-size: 60px;
                    margin-bottom: 24px;
                    color: white;
                }

                .title {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    color: white;
                }

                .subtitle {
                    color: $color-yellow;
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 40px;
                }

                p {
                    text-align: center;
                    color: $color-gray;
                    font-size: 20px;
                }

                .undertext {
                    color: white;
                    margin-top: 50px;

                }
            }
        }
    }


}
</style>