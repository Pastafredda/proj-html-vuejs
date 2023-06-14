<!-- Sezione video importato in section video, dividendo appunto SectionVideo in due parti -->
<script>
import CardVideoList from './CardVideoList.vue';
export default {
    name: "SectionVideoList",
    components: {
        CardVideoList
    },
    data() {
        return {
            links: [
                {
                    title: "Thighs & glute workout",
                    subtitle: "Increase your mobility"
                },
                {
                    title: "Lift, firm & perk up",
                    subtitle: "Feel young again"
                },
                {
                    title: "Slim & trim your waist",
                    subtitle: "Shed those extra pounds"
                },
            ]
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="video">
            <div class="title">
                <span>Featured playlists</span>
                <span>View all videos <font-awesome-icon :icon="['fas', 'angle-right']" /></span>
            </div>
        </div>
        <div class="row">
            <CardVideoList v-for="(link, index) in links" :key="index" :details="link" />
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/variables.scss" as *;

.row {
    display: flex;
    gap: 40px;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 50px;

    span {
        font-size: 20px;

        &:first-child {
            font-size: 28px;
            font-weight: 500;
        }
    }

}
</style>