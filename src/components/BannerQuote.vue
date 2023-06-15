<script>
export default {
    name: "BannerQuote",
}
</script>
<template>
    <section>
        <div class="container">
            <div class="quotes">
                <p>"I've failed over and over again in my life. And that is why i succeed."</p>
                <span>icon</span>
                <p>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin.In lacinia lacus donec sed massa in ipsum
                    eros, tristique. Gravida suspendisse etiam in iaculis</p>
                <button>Buy Avada today <font-awesome-icon :icon="['fas', 'angle-right']" /></button>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

section {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.863) 10%, rgba(6, 6, 7, 0)), url(../assets/img/banner2-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 100px;

    .quotes {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: 60%;
        margin: auto;

        p {
            font-size: 45px;
            font-weight: 500;
            line-height: 60px;
            text-align: center;

            &:nth-child(3) {
                font-size: 18px;
                line-height: 30px;
            }
        }

        span {
            margin: 20px 0;
        }

        button {
            background-color: $color-blue;
            font-weight: 500;
            margin-top: 30px;
            width: 180px;
        }
    }
}
</style>