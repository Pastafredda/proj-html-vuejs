<script>
export default {
    name: "RecentPosts",
    data() {
        return {
            links: [
                {
                    text: "The best protein shake"
                },
                {
                    text: "Ultimate cardio workout"
                },
                {
                    text: "New juices available now"
                },
                {
                    text: "Tips to find training partners"
                },
                {
                    text: "20 best healthy recipes"
                },
            ]
        }
    }
}
</script>
<template>
    <div class="card-posts">
        <span>RECENT POSTS</span>
        <ul>
            <li v-for="(link, index) in links" :key="index"> <font-awesome-icon :icon="['fas', 'angle-right']" /> {{
                link.text }}</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.card-posts {
    color: white;
    text-align: center;

    span {
        font-size: 22px;
        font-weight: 500;

    }

    ul {
        color: white;

        li {
            margin: 26px 0;
            font-size: 18px;

        }
    }
}
</style>