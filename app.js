const vm = Vue.createApp({
    data () {
        return {
            firstName: "john",
            lastName: "doeswe",
            url: "https://www.google.com",
            raw_url : '<a href="https://www.google.com" target="_blank">Google</a>',
            age: 20
        }
    },

    methods: {
        fullName () {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },

        increment () {
            this.age ++;
        },

        updateLastName (event) {
            this.lastName = event.target.value;
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000)

// Vue.createApp({
//     data () {
//         return {
//             firstName: "Eric",
//             lastName: "Faroe"
//         }
//     }
// }).mount('#app1')