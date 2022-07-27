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
    },

    computed: {
        fullName () {
            console.log("fullname called from computed")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },

    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            },5000)
        }
    }
}).mount('#app')