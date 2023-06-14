<script>
import RecentPosts from './RecentPosts.vue';
export default {
    name: "UpFooter",
    components: {
        RecentPosts,
    }
}
</script>
<template>
    <section>
        <div class="container">
            <div class="flex">
                <div class="card">
                    <div class="card-social">
                        <div class="logo">
                            <img src="../assets/img/logo.png" alt="">
                        </div>
                        <p>Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur
                            amet purus ultices mauris.</p>
                        <ul class="social">
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <RecentPosts />
                </div>

                <div class="card">
                    <div class="card-contact">
                        <span>CONTACT INFORMATIONS</span>
                        <p>4746 Tipple Road Michigan 48449</p>
                        <span>Mobile:1.800.000.0000</span>
                        <span>Email:info@your-company.com</span>
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

    div.flex {
        display: flex;
        padding: 140px 0;

        .card {
            width: calc(100% / 3);
        }

        .card-social {
            color: white;


            .logo {
                text-align: center;
                margin-bottom: 16px;
            }

            p {
                text-align: center;
                color: $color-gray;
                font-size: 18px;
            }

            .social {
                display: flex;
                justify-content: center;
                margin-top: 20px;
                gap: 20px;
                font-size: 18px;

                a {
                    color: $color-red;

                }
            }
        }

        .card-contact {
            color: white;
            display: flex;
            flex-direction: column;
            text-align: center;
            font-size: 18px;




            p {
                color: $color-gray;
                margin: 20px 0;
            }
        }

    }

}
</style>