export default {
    name: "MoviesContent",

    props: ["movie"],

    template: `
        <div class="movieThumbnail">
            <img :src='"images/" + movie.movies_thumbnail' alt="movie thumb">
            <h3 class="book title">{{ movie.movies_title }}</h3>
        </div>
    `,

    methods: {

    }
}