<template>
    <label class="switch">
        <img :data-is-day-theme="$store.state.changeTheme.theme === 'light-mode'" class="icon moon" src="../../assets/moon.svg">
            <img :data-is-day-theme="$store.state.changeTheme.theme === 'light-mode'" class="icon sun" src="../../assets/sun.svg">
           
       
        <input @click="$store.commit('changeTheme')" type="checkbox">
      
        <span class="slider"></span>
    </label>
</template>

<script>
export default {
    data() {
        return {
            theme: '',
        }
    },
    methods: {
    }
} 
</script>

<style lang="scss">
.switch {
    user-select: none;
    margin-top: 50px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 60px;
    height: 17px;

    @media (min-width: 2561px) and (min-height: 1441px ) {
        width: 120px;
        height: 34px;
    }
}



.switch input {
    display: none;
}

.icon {
  
    max-width: 22px;
    max-height: 22px;

}

.sun {
    right: 2px;
    top: -3px;
    position: absolute;
    z-index: 3;
    opacity: 0;
    transition: all 0.1s ease-in;
    svg {
       color: yellow
    }   

    &[data-is-day-theme="true"] {
        opacity: 1;
    }
}

.moon {
    left: 2px;
    top: -3px;
    position: absolute;
    z-index: 3;
    opacity: 1;
    transition: all 0.1s ease-in;

    &[data-is-day-theme="true"] {
        opacity: 0;
    }
}

.slider {
    position: absolute;
    cursor: pointer;
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #566a8f;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 26px;
    width: 26px;
    left: 0px;
    bottom: -4px;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s;

    @media (min-width: 2561px) and (min-height: 1441px ) {
        width: 52px;
        height: 52px;
        bottom: -8px;
    }
}

input:checked+.slider {
    background-color: #ef7f1b;
}

input:focus+.slider+.lineZero+.lineOne+.lineTwo+.lineThree {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(34px);
    -ms-transform: translateX(34px);
    transform: translateX(34px);

    @media (min-width: 2561px) and (min-height: 1441px ) {
        -webkit-transform: translateX(72px);
        -ms-transform: translateX(72px);
        transform: translateX(72px);
    }
}

input.checked+.lineZero:before+.lineOne:before+.lineTwo:before+.lineThree:before {
    -webkit-transform: translateX(34px);
    -ms-transform: translateX(34px);
    transform: translateX(34px);

    @media (min-width: 2561px) and (min-height: 1441px ) {
        -webkit-transform: translateX(62px);
        -ms-transform: translateX(62px);
        transform: translateX(62px);
    }

}
</style>
  