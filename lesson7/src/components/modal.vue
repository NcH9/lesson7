<template>
    <div v-if="isVisible" class="modal">
        <div class="grid">

            <div class="header">
                <slot name="header">
                    <p>kaban1</p>
                </slot>
            </div>
            
            <div class="body">
                <slot name="body">
                    <p>kaban2</p>
                </slot>
            </div>
            
            <div class="footer">
                <slot name="footer" :value="value">
                    <p>go/jo?</p>
                </slot>
            </div>
            
            <button @click="closeModal">Close Modal Window</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modalWindow",
        data(){
            return{
                value: 'nah, i`d win'
            }
        },
        props: {
            isVisible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeModal(){
                this.$emit('closeModal');
            },
        }
    };
</script>

<style>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.grid {
    display: grid;
    background-color: rgb(112, 112, 112);
    border-radius: 15px;
    padding: 25px;
}
.header {
    background-color: rgb(255, 255, 123);
    color: black;
}
.body {
    background-color: rgb(118, 215, 118);
    color: black;
}
.footer {
    background-color: rgb(255, 255, 123);
    color: black;
}
</style>
  