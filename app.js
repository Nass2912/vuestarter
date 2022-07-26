const vm = Vue.createApp({
    data () {
        return {
            firstName: "john",
            lastName: "doe"
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)

// Vue.createApp({
//     data () {
//         return {
//             firstName: "Eric",
//             lastName: "Faroe"
//         }
//     }
// }).mount('#app1')