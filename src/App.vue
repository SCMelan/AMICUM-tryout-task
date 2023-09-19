<template>
  <div class="mainCont" :class="$store.state.changeTheme.theme">
    <LeftSide />
    <RightSide />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTheme:'dark'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}

html,
.mainCont {
  width: 100vw;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mainCont {
  display: flex;
  background: var(--primary-bg);
  transition: all 0.4s ease;
}

.dark-mode {
  --primary-bg: #566a8f;
  --secondary-bg: #353d54;
  --right-blocks: #EF7F1B;
  --right-blocks-hover: #fe9940;
  --left-blocks: #566a8f;
  --left-blocks-hover: #6388cd;
}

.light-mode {
  --primary-bg: #EBD09D;
  --secondary-bg:  #d7b678;
  --right-blocks: #705DB4;
  --right-blocks-hover: #ae99fc;
  --left-blocks: #7D73A2;
  --left-blocks-hover: #6b5ba0;
}
</style>