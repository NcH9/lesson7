<template>
    <form @submit.prevent="validateForm">
        <div class="grid">

            <div class="grid2">
                <label>Email</label>
                <input type="email" v-model.lazy="form.email" @blur="validateEmail(this.form.email)"/>
                <span>{{ form.email }}</span>
                <span class="error">{{ error.email }}</span>
            </div>

            <div class="grid2">
                <label>Password</label>
                <input type="password" v-model.lazy="form.password" @blur="validatePassword(this.form.password)"/>
                <span>{{ form.password }}</span>
                <span class="error">{{ error.password }}</span>
            </div>

            <button type="submit" @click="validateForm">Register</button>
        </div>
    </form>
    <slot name="forfun">404</slot>
</template>
  
<script>
    import { validator } from '@/mixins/validatorMixin';
    export default {
        name: 'register',
        mixins: [validator],
        data(){
            return {
                form: {
                    password: '',
                    email: '',
                },
            }
        },
        methods: {
            validateForm() {
                this.validateEmail(this.form.email);
                this.validatePassword(this.form.password);
                if (!this.error.email && !this.error.password){
                    this.submitForm();
                }
            },
            submitForm(){
                console.log('formsubmitted');
                this.resetForm();
            },
            resetForm(){
                this.form = {
                    password: '',
                    email: '',
                };
                this.resetError();
                console.log('form reseted');
            },
            
        }
    };
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input {
    padding: 5px;
    margin: 5px;
    background-color: rgb(138, 137, 137);
    border-radius: 15px;
}
input:focus {
    background-color: white;
}
button {
    background-color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(31, 31, 31);
    border-radius: 10px;
}
.error {
    color: rgb(255, 110, 110)
}
.grid {
    display: grid;
}
.grid2 {
    display: grid;
    grid-template-columns: 70px repeat(2, 1fr) 3fr;
    margin: 10px;
    margin-left: -10px
}
label {
    display: flex;
    place-items: center;
}
span{
    display: flex;
    place-items: center; 
}
</style>
  