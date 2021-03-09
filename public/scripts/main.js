import TheMovieThumb from './components/TheMovieThumbnailComponent.js';

(() => {
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function () {
            console.log('fired');

            fetch('/api/movies')
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    this.allMovies = data;
                })
                .catch(err => console.error(err));
        },

        methods: {

        },

        components: {
            moviethumb: TheMovieThumb
        }
    }).$mount("#app");
})();