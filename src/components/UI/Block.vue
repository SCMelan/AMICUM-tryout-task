<template>
    <div class="container" >
        <div class="containerBody" @click="funcName">
            <p class="title"> {{ title }}</p>
            <p v-if="notification" class="notification">{{ notification }}</p>
            <p v-if="haveAdditionalInfo" v-for="addInfo in haveAdditionalInfo">{{ addInfo }}</p>
            <img v-if="srcName" class="imgStyle" :src="require(`../../../public/${srcName}.png`)" :alt="title">
            <Circle v-if="haveCircle" :radius="60" :stroke="7" :maxProgress="maxProgress" :progress="progress"
                :color="color" :hrefName="hrefName" :title="title" :fontSize="fontSize" :condition="condition" />
        </div>

    </div>
</template>

<script>
import Circle from './Circle.vue';
export default {
    name: 'Block',
    props: {
        funcName: Function,
        title: String,
        haveAdditionalInfo: Array,
        color: Array,
        srcName: String,
        haveCircle: Boolean,
        maxProgress: Number,
        progress: Number,
        hrefName: String,
        fontSize: String,
        notification: Number,
        condition: Boolean,
    },
    components: { Circle },
}
</script>

<style lang="scss">
.title {
    margin-bottom: 12px;
}
.container {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.4s ease;

    &[data-side="left"] {
        background-color: var(--left-blocks);
    }

    &[data-side="right"] {
        background-color: var(--right-blocks);
      
    }

    &:hover {
        &[data-side="left"] {
        background-color: var(--left-blocks-hover);
    }

    &[data-side="right"] {
        background-color: var(--right-blocks-hover);
    
    }

    img {
        transition: all 0.2s ease;
       transform: translateY(5px);
    }
    }


    .containerBody {
        display: flex;
        flex-direction: column;
        align-items: center;
 
        .notification {
            background-color: #acd91c;
            color: #000;
            font-weight: bold;
            border-radius: 100%;
            width: 40px;
            height: 40px;
            top: -7%;
            right: -5%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;

            @media (min-width: 2561px) and (min-height: 1441px) {
                width: 70px;
                height: 70px;
                font-size: 50px;
            }

            @media (max-width: 1280px) {
                width: 30px;
                height: 30px;
                font-size: 20px;
            }
        }

    }

    .imgStyle {
        user-select: none;
        max-width: 95px;
        max-height: 95px;

        @media (min-width: 2561px) and (min-height: 1441px) {
            max-width: 220px;
            max-height: 220px;
        }

        @media (min-width: 1921px) and (max-width: 2560px) {
            max-width: 120px;
            max-height: 120px;
        }

        @media (max-width: 1280px) {
            max-width: 75px;
            max-height: 75px;
        }
    }
}
</style>
