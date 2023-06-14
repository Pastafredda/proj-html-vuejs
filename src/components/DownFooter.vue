<script>
export default {
    name: "DownFooter",
}
</script>
<template>
    <section>
        <p class="copyright"> <font-awesome-icon :icon="['far', 'copyright']" /> Copyright 2012 - 2020 | Avada theme by <a
                href="#">Theme
                Fusion</a>| All rights reserved | powered by <a href="#">WordPress</a></p>
    </section>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

section {
    background-color: black;
    border-top: 1px solid $color-gray;
}

.copyright {
    padding: 50px 0;
    color: $color-gray;
    text-align: center;

    a {
        color: white;
    }
}
</style>