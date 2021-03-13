import MoviesContent from "./MoviesContent.js";

export default {
    name: "ParentsMoviesData",

    data() {
        return {
            allMovies: [],
        }
    },

    template: `
        <section class="thumbnailSection">
            <moviescontent v-for="movie in allMovies" :movie="movie" :key="movie.movies_id"></moviescontent>
        </section>
    `,

    created: function () {
        fetch('/roku/movies-parents')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.allMovies = data;
            })
            .catch(err => console.error(err));
    },

    components: {
        "moviescontent": MoviesContent
    }
}