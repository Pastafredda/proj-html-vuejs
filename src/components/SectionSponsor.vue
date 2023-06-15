<script>
export default {
    name: "SectionSponsor",
    data() {
        return {
            links: [
                {
                    text: "Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor,aliquet.",
                    page: "Visit Yoga Studio"
                },
                {
                    text: "Feugiat etiam dui maurispharetra mauris sed pharetra. Convallis sapien ornare cras facibus nulla porta dui a.",
                    page: "Join Fitness Center"
                },
                {
                    text: "Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.",
                    page: "Learn about FC"
                },
                {
                    text: "Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.",
                    page: "Visit Power Gym"
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
                    <div class="info">
                        <span>icon</span>
                        <p>{{ link.text }}</p>
                        <a href="#">{{ link.page }}<font-awesome-icon :icon="['fas', 'angle-right']" /></a>
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
    margin-bottom: 300px;

    .row {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .card {
            background-image: url(../assets/img/sponsor-1-2x.png);
            height: 100px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;

            &:nth-child(2) {
                background-image: url(../assets/img/sponsor-2-2x-200x103.png);
            }

            &:nth-child(3) {
                background-image: url(../assets/img/sponsor-3-2x.png);
            }

            &:nth-child(4) {
                background-image: url(../assets/img/sponsor-4-2x.png);
            }

            .info {
                margin-top: 120px;
                text-align: center;
            }

            span {
                color: $color-blue;
                margin: 10px 0;
            }

            p {
                font-size: 18px;
                line-height: 28px;
                text-align: center;
                color: $color-gray;
                margin-bottom: 40px;
                margin-top: 20px;
            }

            a {
                color: black;
                font-weight: 500;
            }
        }
    }
}
</style>