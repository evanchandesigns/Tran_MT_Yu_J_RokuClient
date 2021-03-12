import MoviesContent from "./MoviesContent.js";

export default {
    name: "MoviesData",

    data() {
        return {
            allMovies: []
        }
    },

    template: `
        <div>
            <moviescontent v-for="movie in allMovies" :movie="movie" :key="movie.movies_id"></moviescontent>
        </div>
    `,

    created: function () {
        console.log("Fired - Fetching Movies Data");
        fetch('/roku/movies')
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