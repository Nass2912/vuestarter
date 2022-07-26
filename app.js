const vm = Vue.createApp({
    data () {
        return {
            firstName: "john",
            middleName: "",
            lastName: "doeswe",
            url: "https://www.google.com",
            raw_url : '<a href="https://www.google.com" target="_blank">Google</a>',
            age: 20
        }
    },

    methods: {
        fullName () {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },

        increment () {
            this.age ++;
        },

        updateLastName (msg, msg2, event) {

            console.log(msg);
            console.log(msg2);

            this.lastName = event.target.value;
        },

        updateMiddleName (event) {
            this.middleName = event.target.value;
        }
    }
}).mount('#app')