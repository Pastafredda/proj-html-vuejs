<script>

export default {
    name: "PageHeader",
    data() {
        return {
            links: [
                {
                    text: "Home",
                    url: "#",
                    current: true
                },
                {
                    text: "Services",
                    url: "#",
                    current: false
                },
                {
                    text: "About",
                    url: "#",
                    current: false
                },
                {
                    text: "Videos",
                    url: "#",
                    current: false
                },
                {
                    text: "Blog",
                    url: "#",
                    current: false
                },
                {
                    text: "Store",
                    url: "#",
                    current: false
                },
            ]
        }
    }
}

</script>

<template>
    <header>
        <div class="container">
            <div class="flex">
                <div class="logo">
                    <a href="#"><img src="../assets/img/logo.png" alt=""></a>
                </div>
                <nav>
                    <ul class="menu">
                        <li v-for="(link, index) in links" :key="index"><a :href="link.url"
                                :class="link.current ? 'active' : ''">{{ link.text }}</a></li>
                        <li id="new">New</li>
                        <button><a href="#">Schedule a workout</a></button>
                        <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
                        <li><a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;


header {
    background-color: $color-black;
    width: 100%;

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0;

        .menu {
            display: flex;
            align-items: center;
            gap: 26px;

            button {
                background-color: $color-blue;
                border: none;
                padding: 14px 0;
                border-radius: 22px;
                cursor: pointer;

                &:hover {
                    background-color: $color-red;
                }

                a {
                    color: white;
                    font-size: 14px;
                    padding: 26px;
                }
            }

        }
    }

    a {
        color: $color-gray;
        font-size: 16px;

        &:hover {
            color: white;
        }
    }

    #new {
        background-color: yellow;
        padding: 4px;
        border-radius: 2px;
        position: relative;
        right: 20px;
        font-size: 10px;
    }
}
</style>
