<template>
  <div class="rightBlock">
    <Block v-for="block in yellowBlocks" :title="block.title" :data-side="'right'" :srcName="block.srcName"
      :notification="block.qtyNotification" :funcName="block.funcName" />
  </div>
</template>
<script>
import Block from './UI/Block.vue';

export default {
  name: 'RightSide',
  data() {
    return {
      yellowBlocks: [
        { id: 1, title: "Начать работу", srcName: 'Hammer', funcName: this.startWorkingFunction, },
        { id: 2, title: "Уведомления", srcName: 'Mail', qtyNotification: 7, funcName: this.messageFunction, },
        { id: 3, title: "Обучение", srcName: 'Learning', funcName: this.learningFunction, },
        { id: 4, title: "Достижения", srcName: 'Achievements', funcName: this.achievementsFunction, },
      ],
      dayStart:false,
    }
  },
  methods: {
        startWorkingFunction(){
          console.log(this.dayStart)
            if (!this.dayStart) {
              alert('Ваш рабочий день начался! Не забудьте оставить отметку об окончании рабочего дня, повторно нажав кнопку!');
              this.dayStart = true;
            } else {
              alert('Рабочий день окончен! Спасибо за проделанную работу!');
              this.dayStart = false;
            }
        },
        messageFunction(){
            this.yellowBlocks[1].qtyNotification = 0;
        },
        learningFunction(){
          window.location.replace('https://github.com/SCMelan')
        },
        achievementsFunction(){
            alert('Здесь могло быть модальное окно со списком достижений человека');
        },
  },
  components: { Block },
}
</script>

<style lang="scss">
.rightBlock {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 200px);
  font-size: 30px;
  align-content: center;
  gap: 50px 50px;

  @media (min-width: 2561px) and (min-height: 1441px) {
    grid-template-columns: repeat(2, 500px);
    grid-template-rows: repeat(2, 400px);
    font-size: 60px;
  }

  @media (min-width: 1921px) and (max-width: 2560px) {
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: repeat(2, 250px);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(2, 150px);
    font-size: 25px;
  }

}
</style>
