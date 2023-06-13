<script>
export default {
    name: "SectionService",
    data() {
        return {
            links: [
                {
                    title: "Crossfit workout",
                    subtitle: "Push your limits"
                },
                {

                    title: "New gym apparel",
                    subtitle: "Look, feel good"
                },
                {
                    title: "Team training",
                    subtitle: "Find a partner"
                },
            ]
        }
    }

}
</script>
<template>
    <section>
        <div class="container">
            <div class="service">
                <div class="cards">
                    <div class="card" v-for="(link, index) in links" :key="index">
                        <ul>
                            <li id="icon">Icon </li>
                            <li id="title">{{ link.title }}</li>
                            <li>{{ link.subtitle }}</li>
                        </ul>
                    </div>
                </div>
                <div class="quotes">
                    <h2>"How you respond to the challenge in the second half will determine what you become after the game,
                        whether you are a winner or a loser."</h2>
                    <span>Icon</span>
                    <div class="profile">
                        <div class="image">
                            <a href="#"><img src="../assets/img/avatar-1-2x.jpg" alt=""></a>
                        </div>
                        <a href="">Brad Johnson</a>
                        <span>Las Vegas</span>
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
    height: 755px;
    background: linear-gradient(150deg, rgb(0, 21, 214), rgb(180, 0, 66));

    .quotes {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 120px;


        h2 {
            max-width: 60%;
            text-align: center;
            color: white;
            font-size: 30px;
            line-height: 44px;
            margin-bottom: 20px;
        }

        .profile {
            margin-top: 10px;
            display: flex;
            align-items: center;

            .image {
                width: 50px;
                height: 50px;
                margin-right: 20px;

                img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: cover;
                    border-radius: 50%;

                }
            }

            a {
                color: white;
                margin-right: 10px;
                font-size: 14px;
            }

            span {
                margin-right: 14px;
                color: $color-gray;
                font-size: 12px;
            }
        }


    }

    .cards {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .card {
            width: 376px;
            margin-top: -6%;
            height: 440px;
            padding-top: 300px;
            padding-left: 40px;
            background-image: linear-gradient(5deg, $color-black 2%, rgba(3, 4, 15, 0)), url(../assets/img/service6-2x.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 4px 4px 40px 4px;
            transition: all 0.5s ease;
            cursor: pointer;


            &:hover {
                transform: scale(1.04);
            }

            &:nth-child(2) {
                background-image: linear-gradient(5deg, $color-black 2%, rgba(3, 4, 15, 0)), url(../assets/img/box1-2x.jpg)
            }

            &:last-child {
                background-image: linear-gradient(5deg, $color-black 2%, rgba(3, 4, 15, 0)), url(../assets/img/box3-2x.jpg);
            }

            li {
                color: white;
                font-weight: 500;

                &:last-child {
                    color: $color-yellow;
                    font-size: 16px;
                }

            }

            #title {
                font-size: 24px;
                margin-top: 10px;
                margin-bottom: 5px;
            }
        }

    }


}
</style>