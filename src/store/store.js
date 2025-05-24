import {  reactive } from "vue";
export const store = reactive({
       task: [
                { id: 1, text: "hii guys name jante hoge", isComplete: true },
                { id: 2, text: "Hello bhai  me jante hoge", isComplete: false },
                { id: 3, text: "hum nahi jaante toh ", isComplete: true }
            ],

})