import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const globalMixin = {
    data() {
        return {
            globalMessage: 'Hello Mixin, but now it`s global',
        };
    },
    methods: {
        sayHelloToWholeWorld() {
            console.log(this.globalMessage);
        }
    }
}


const app = createApp(App)

app.directive('setBGColor', {
    mounted(el, binding) {
        el.style.backgroundColor = binding.value;
    }
});
app.directive('addTooltipOnHover', {
    mounted(el, binding) {
        let tooltipElement;
        const showTooltip = () => {
            tooltipElement = document.createElement('div');
            tooltipElement.textContent = binding.value;
            tooltipElement.style.backgroundColor = `red`;
            tooltipElement.style.borderRadius = `15px`;
            tooltipElement.style.padding = `15px`;
            document.getElementById(el.id).appendChild(tooltipElement);
        };
        const hideTooltip = () => {
            if (tooltipElement){
                document.getElementById(el.id).removeChild(tooltipElement);
                tooltipElement = null;
            }
        }
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
    },
});
app.directive('moveable', {
    mounted(el){
        el.style.position = 'absolute';
        el.style.cursor = 'grab'

        let mousePosX = 0, mousePosY = 0;

        const onMouseDown = (event) => {
            event.preventDefault();

            mousePosX = event.clientX;
            mousePosY = event.clientY; 

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        const onMouseMove = (event) => {
            event.preventDefault();

            const moveDiffX = event.clientX - mousePosX;
            const moveDiffY = event.clientY - mousePosY;

            el.style.left = `${el.offsetLeft + moveDiffX}px`
            el.style.top = `${el.offsetTop + moveDiffY}px`

            mousePosX = event.clientX;
            mousePosY = event.clientY;
        };
        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        el.addEventListener('mousedown', onMouseDown);
    }
});
app.directive('draggable', {
    mounted(el) {
        el.style.position = 'absolute';
        el.style.cursor = 'grab';

        let mouseX = 0, mouseY = 0;

        const onMouseDown = (event) => {
            event.preventDefault();

            mouseX = event.clientX;
            mouseY = event.clientY;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (event) => {
            event.preventDefault();
  
            const deltaX = event.clientX - mouseX;
            const deltaY = event.clientY - mouseY;
            
            el.style.left = `${el.offsetLeft + deltaX}px`;
            el.style.top = `${el.offsetTop + deltaY}px`;
            
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        el.addEventListener('mousedown', onMouseDown);
    }
});

app.use(createPinia())
app.use(router)
app.mixin(globalMixin)

app.mount('#app')
