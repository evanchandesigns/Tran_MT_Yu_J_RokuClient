export default {
    name: "MoviesContent",

    props: ["movie"],

    template: `
        <img :src='"images/" + movie.movies_thumbnail' alt="movie thumb">
    `,

    created: function () {
        console.log("Fired from the Movies Content");
    }
}