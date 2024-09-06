<template>
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

</style>