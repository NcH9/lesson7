import { onUnmounted } from "vue";

export const firstMixin = {
    data(){
        return {
            message: 'Hello Mixin!',
            createdMsg: ''
        }
    },
    methods: {
        sayHello(){
            console.log(this.message);
        }
    },
    mounted(){
        console.log('component mounted :)');
    },
    created(){
        console.log('component created :)');
        this.createdMsg = 'component is created :)';
    },
    onUnmounted(){
        console.log('component unmounted :(');
    }
}