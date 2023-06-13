<script>
export default {
    name: "Jumbo",

}
</script>
<template>
    <div class="jumbo">
        <div class="container">
            <div class="flex">
                <div class="sx">
                    <ul class="info">
                        <li>Cerfified fitness professional</li>
                        <li id="title">Take control of your health</li>
                        <li>Icon</li>
                        <li>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</li>
                    </ul>
                    <button class="yt"><font-awesome-icon :icon="['fab', 'youtube']" /> Visit my youtube channel</button>
                    <button class="buy">Buy avada today <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
                </div>
                <div class="play">
                    <font-awesome-icon :icon="['fas', 'play']" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.jumbo {
    background-image: linear-gradient(90deg, black 40%, rgba(6, 6, 7, 0)), url(../assets/img/slider82x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 565px;
    display: flex;


    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 110px;

        .info {
            color: white;

            #title {
                font-size: 60px;
                color: white;
                font-weight: 500;
            }

            li {
                color: $color-gray;
                margin: 15px 0;
                font-size: 18px;

                &:first-child {
                    color: $color-red;

                }
            }

        }

        .play {
            color: $color-blue;
            background-color: white;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            position: relative;
            right: 200px;
            cursor: pointer;

            &:hover {
                color: $color-red;
            }

            .fa-play {
                font-size: 16px;


            }
        }

        button {
            color: white;
            border: none;
            padding: 14px 26px;
            border-radius: 22px;
            cursor: pointer;
        }

        .yt {
            background-color: $color-blue;
            margin-right: 14px;

            &:hover {
                background-color: $color-red;
            }
        }

        .buy {
            background-color: unset;
            border: 2px solid $color-gray;

            &:hover {
                background-color: $color-white;
                color: black;
            }
        }
    }



}
</style>