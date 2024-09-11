

<template>

    <div class="grid">
        <div class="task">
            (this thing is called in different file)<br>
            {{ globalMessage }}
        </div>
    </div>

    <div class="grid">
        <div class="task" v-setBGColor="'blue'">
            now its blue
        </div>
        <div class="task" v-setBGColor="'yellow'">
            now its yellow
        </div>
    </div>

    <div class="grid">
        <div class="task" id="tooltip" v-addTooltipOnHover="'now you see me'">

        </div>
    </div>

    
    <div class="moveable" v-moveable>
        😎
    </div>

    

</template>

<script type="module">
import { firstMixin } from '@/mixins/firstMixin';
import register from './register.vue';
export default {
    name: 'task7_2',
    mixins: [firstMixin],
    mounted(){
        this.sayHello();
        this.sayHelloToWholeWorld();
    },
    components: {
        register,
    }
}
</script>

<style scoped>
.task {
    background-color: white;
    color: black;
    padding: 15px;
    margin: 15px;
    border-radius: 15px;
    box-shadow: 3px -3px 5px rgb(81, 81, 81);
}
.grid {
    display: grid;
    margin: 15px;
    background-color: rgb(108, 143, 98);
}
.moveable {
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    place-items: center;
    min-width: 50px;
    min-height: 50px;
    font-size: 50px;
}
</style>