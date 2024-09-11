

<template>

    <div class="grid">
        <div class="task">
            {{ message }}
        </div>
    </div>

    <div class="grid">
        <div class="task">
            {{ createdMsg }}
        </div>
    </div>

    <div class="grid">
        <div class="task">
            {{ globalMessage }}
        </div>
    </div>

    <register>
        <template #forfun>
            this slot is added for fun
        </template>
    </register>

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
</style>