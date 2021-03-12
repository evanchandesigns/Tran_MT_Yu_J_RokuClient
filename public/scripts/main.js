

(() => {
    const vm = new Vue({
        data: {
            allItems: []
        },

        created: function () {
            console.log('fired');

            fetch('/roku/items')
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    this.allItems = data;
                })
                .catch(err => console.error(err));
        },

        methods: {

        },

        components: {
        }
    }).$mount("#app");
})();