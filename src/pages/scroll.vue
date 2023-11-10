<template>
    <div class="main">
        <img src="@/assets/left.png" class="side" />
        <div class="content">
            <img src="@/assets/tree.png" class="tree" />
            <div class="content-body">
                <pageFlip class="pageFlip"></pageFlip>
                <pageFlip class="pageFlip"></pageFlip>
                <pageFlip class="pageFlip"></pageFlip>
                <pageFlip class="pageFlip"></pageFlip>
            </div>
        </div>
        <img src="@/assets/right.png" class="side" />
    </div>
</template>

<script>
import pageFlip from "@/components/pageFlip";
export default {
    components: {
        pageFlip,
    },
};
</script>

<style lang="scss" scoped>
.main {
    ::-webkit-scrollbar {
        display: none;
    }

    display: flex;

    overflow: hidden;
    .side {
        height: 60vh;
    }

    .content {
        width: 100%;
        display: flex;
        position: relative;
        overflow: auto;

    height: 60vh;

        &-body {
            display: flex;
            overflow: auto;
            padding-left: 100px;
            position: relative;
        }

        .tree {
            position: absolute;
            height: 30px;
            animation: bounceInUp;
            bottom: 30px;
            /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s;
            /* don't forget to set a duration! */

        }

        animation: scroll-open 5s ease-in-out forwards;

        &::before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0;
            width: 100%;
            height: 30px;
            background: url("../assets/top.png");
            background-size: cover;
        }

        &::after {
            content: "";
            bottom: 0;
            position: absolute;
            width: 100%;
            left: 0;
            height: 30px;
            background: url("../assets/bottom.png");
            background-size: cover;
        }
    }

    .pageFlip {
        min-width: 40vw;
    }
}

@keyframes scroll-open {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}
</style>
