<script>
export default {
    name: "ScheduleEmail",
}
</script>
<template>
    <section>
        <div class="container">
            <div class="sx">
                <ul class="info">
                    <li>Join our mailing list today</li>
                    <li id="title">Insider offers & flash sales in your inbox every week</li>
                    <li>Icon</li>
                </ul>
                <form action="#">
                    <input type="email" name="email" placeholder="Insert your email...*" id="">
                    <button class="subscribe">subscribe</button>
                </form>
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing
                    elit sed porttitorlectus.</p>
            </div>
        </div>

    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

section {
    background-image: linear-gradient(90deg, black 40%, rgba(6, 6, 7, 0)), url(../assets/img/banner1-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    display: flex;
    padding-top: 80px;

    .info {
        color: white;

        #title {
            font-size: 45px;
            color: white;
            font-weight: 500;
            max-width: 700px;
        }

        li {
            color: $color-gray;
            margin: 15px 0;
            font-size: 18px;

            &:first-child {
                color: $color-red;
                font-size: 22px;

            }
        }

    }

    input {
        border: none;
        padding: 14px 26px;
        border-radius: 22px;
        margin-top: 20px;

    }

    button {
        width: 200px;
        background-color: $color-blue;
        color: white;
    }

    input {
        width: 500px;
        margin-right: 20px;
    }

    p {
        color: $color-gray;
        margin-top: 30px;
        max-width: 698px;
    }

}
</style>