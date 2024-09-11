<template>
    <div class="grid">

        <!-- slots -->
        <div class="task">
            <childComponent>
                <template #slot1>
                    <div>first slot</div>
                </template>
                <template #slot2>
                    <div>second slot</div>
                </template> 
            </childComponent>
            <childComponent>
                <template #slot1>
                    <div>first slot</div>
                </template>
            </childComponent>
        </div>
        
        <!-- modal window -->
        <div class="task">
            <button @click="openModal">Open Modal Window</button>
            <modalWindow
                @closeModal="closeModal"
                :isVisible="isVisible"
            >
                <template #header>
                    <p>kaban4</p>
                </template>

                <template #footer="props">
                    <p>{{ props.value }}</p>
                </template>
            </modalWindow>
        </div>

    </div>
</template>

<script type="module">
import childComponent from './childComponent.vue';
import modalWindow from './modal.vue';
export default {
    name: 'task7',
    components: {
        childComponent,
        modalWindow,
    },
    data(){
        return {
            isVisible: false,
        }
    },
    methods: {
        openModal(){
            this.isVisible = true;
        },
        closeModal(){
            this.isVisible = false;
        }
    }

}
</script>

<style scoped>
.task {
    background-color: white;
    box-shadow: 3px -3px 5px rgb(81, 81, 81);
    color: black;
    padding: 15px;
    margin: 15px;
    border-radius: 15px;
}
.grid {
    display: grid;
    background-color: rgb(108, 143, 98);
}
</style>