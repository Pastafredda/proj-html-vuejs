<!-- Lista di cards importato nella sezione SectionService -->
<script>
export default {
    name: "CardRadius",
    props: {
        details: Object
    }
}
</script>
<template>
    <div class="card">
        <ul>
            <li id="icon">Icon </li>
            <li id="title">{{ details.title }}</li>
            <li>{{ details.subtitle }}</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

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
</style>