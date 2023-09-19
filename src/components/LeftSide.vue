<template>
    <div class="leftBlock">
        <div class="DateAndSwitcher">
            <div class="dateAndTime">
                <div>{{ date ? date : 'Загрузка даты' }}</div>
                <div>{{ time ? time : 'Загрузка времени' }}</div>
            </div>
            <div class="exitAndSwitcher">
                <div v-on:click="exitFromPage" class="exit">
                    <button class="exit_btn">Выход</button>
                    <img class="exit_img" src="../../public/Exit.png" alt="">
                </div>
                <Switcher />
            </div>
        </div>
        <div class="grid">
            <Block :class="'grid' + block.id" v-for="block in blueBlocks" :title="block.title"
                :haveAdditionalInfo="block.haveAdditionalInfo" :data-side="'left'" :hrefName="block.hrefName"
                :haveCircle="block.haveCircle" :color="block.circleColor" :progress="block.progress"
                :maxProgress="block.maxProgress" :fontSize="block.fontSize" :condition="block.condition" />
        </div>
    </div>
</template>

<script>
import Block from './UI/Block.vue';
import Switcher from './UI/Switcher.vue';
export default {
    name: 'LeftSide',
    data() {
        return {
            blueBlocks: [
                { id: 1, title: "Антонов Кирилл Юрьевич", haveAdditionalInfo: ['17.03.2000', "Таб №: XXXX 0000", "Кандидат на должность Frontend-разработчик"] },
                { id: 2, title: "Предсменный экзаменатор", hrefName: 'Test', haveCircle: true, circleColor: ["#ef7f1b", "#abd615"], progress: 100, maxProgress: 100, },
                { id: 3, title: "Инструктаж", hrefName: 'List', haveCircle: true, circleColor: ["#ef7f1b", "#abd615"], progress: 100, maxProgress: 100, },
                { id: 4, title: "Тестов выполнено", haveCircle: true, circleColor: ["#ef7f1b", "#abd615"], progress: 12, maxProgress: 48, fontSize: 'bigger' },
                { id: 5, title: "Аттестация через", haveCircle: true, condition: true, circleColor: ["#ef7f1b", "#abd615"], progress: 22, maxProgress: 30, },
            ],
            date: '',
            time: '',
        };
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        getNow: function () {
            const today = new Date();
            this.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            this.time = today.toTimeString().replace(/ .*/, '');
        },
        exitFromPage: function () {
            window.location.replace("http://google.com")
        },
    },
    components: { Block, Switcher }
}
</script>

<style lang="scss">
.leftBlock {
    padding: 15px;
    max-width: 30%;
    background: var(--secondary-bg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0px 15px 15px 0;
    transition: all 0.4s ease;

    .DateAndSwitcher {
        font-size: 25px;
        display: flex;
        justify-content: space-between;
        color: white;

        @media (min-width: 2561px) and (min-height: 1441px ) {
            font-size: 60px;
        }

        @media (min-width: 1921px) and (max-width:2560px) {
            font-size: 30px;
        }

        @media (max-width: 1280px) {
            font-size: 20px;
        }


        .dateAndTime {
            text-align: left;
        }

        .exitAndSwitcher {
            text-align: end;


            .exit {
                user-select: none;
                display: flex;
                justify-content: center;
                cursor: pointer;
                transition: opacity 0.4s ease;

                &:hover {
                        opacity: 0.5;
                    }

                &_btn {
                    background: none;
                    color: white;
                    font-size: 25px;
                    margin-right: 15px;
                    cursor: pointer;

                

                    @media (min-width: 2561px) and (min-height: 1441px ) {
                        font-size: 60px;
                        margin-right: 40px;
                    }

                    @media (min-width: 1921px) and (max-width:2560px) {
                        font-size: 30px;
                    }

                    @media (max-width: 1280px) {
                        font-size: 20px;
                    }
                }

                &_img {
                    width: 30px;
                    height: auto;
                    @media (min-width: 2561px) and (min-height: 1441px ) {
                        width: 60px;
                    }

                    @media (min-width: 1921px) and (max-width:2560px) {
                        width: 35px;
                    }

                    @media (max-width: 1280px) {
                        width: 25px;
                    }
                }
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 200px 200px;
        gap: 20px 20px;
        font-size: 25px;
        text-align: center;
        .title {
            padding-top: 15px;

            @media (min-width: 2561px) and (min-height: 1441px )  {
                font-size: 50px;
            }

            @media (min-width: 1921px) {
                padding-top: 0px;
            }
        }

        @media (min-width: 2561px) and (min-height: 1441px ) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 350px 350px;
            gap: 30px 30px;
            font-size: 50px;
        }

        @media (min-width: 1921px) and (max-width: 2560px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 250px 250px;
            gap: 20px 20px;
            font-size: 30px;
        }

        @media (max-width: 1280px) {
            grid-template-rows: 1fr 150px 150px;
            gap: 15px 15px;
            font-size: 15px;
        }

        .grid1 {
            grid-area: 1 / 1 / 2 / 3;
            width: 100%;
            align-items: start;
            height: fit-content;


            .containerBody {
                padding: 20px;
                align-items: start;

                @media (min-width: 2561px) and (min-height: 1441px ) {
                    padding: 40px;
                }

                @media (max-width: 1280px) and (max-width:2560px) {
                    padding: 15px;
                }

                .title {
                    font-size: 30px;

                    @media (min-width: 2561px) and (min-height: 1441px ) {
                        font-size: 60px;
                    }

                    @media (min-width: 1921px) and (max-width: 2560px) {
                        font-size: 35px;
                    }

                    @media (max-width: 1280px) {
                        font-size: 20px;
                    }
                }
            }
        }

        .grid2 {
            grid-area: 2 / 2 / 3 / 3;
        }

        .grid3 {
            grid-area: 2 / 1 / 3 / 2;
        }

        .grid4 {
            grid-area: 3 / 1 / 4 / 2;
        }

        .grid5 {
            grid-area: 3 / 2 / 4 / 3;
        }

    }
}</style>
