export default {
    name: "Thumbnails",

    props: ["movie", "moviepage", "tv", "tvpage", "music", "musicpage", "kidsmedia", "kidspage"],

    data() {
        return {
            showdetails: false,
            playvideo: false
        }
    },

    template: `
        <section class="movie-item" v-if="moviepage">
            <img :src="'images/movies/' + movie.movies_thumbnail" :alt="movie.movies_title"  @click="showVideoDetails()" class="item-image">
            <div class="titleBox"  @click="showVideoDetails()">
                <h3> {{movie.movies_title}} </h3>
                <div>
                    <img src="images/pinkstar.svg">
                    <span class="ratingThumbnail">{{ movie.movies_rating }}</span>
                </div>
            </div>
            <!-------------------------------------------------------------------------------------->
            <div class="detailsBox movieBox" v-if="showdetails">
            <button @click="closeVideoDetails()" v-if="!playvideo"><img src="images/arrow.svg"><span>BACK</span></button>
                <div class="movieDetails">
                    <img :src="'images/movies/' + movie.movies_cover" :alt="movie.movies_title" @click="playVideo()" v-if="!playvideo" id="mediaDetailsCover">
                    <img src="images/play_media.svg" alt="Play" @click="playVideo()" v-if="!playvideo" id="mediaDetailsPlayButton">
                <div  v-if="playvideo" class="mediaBox">
                    <button @click="closeVideo()"><img src="images/close.svg"></button>
                    <iframe :src="movie.movies_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
                <div class="infoBox">
                        <h3> {{movie.movies_title}}</h3>
                        <h5> {{movie.movies_runtime}}</h5>
                        <div class="ratingMedia">
                            <img src="images/pinkstar.svg">
                            <h4>{{ movie.movies_rating }}</h4>
                        </div>
                        <div class="mediaContent">
                            <h4> {{movie.movies_genre}}</h4>
                            <p>{{ movie.movies_desc}}</p>
                            <h5>Release: {{movie.movies_year}}</h5>
                            <h5>Release: {{movie.movies_director}}</h5>
                            <h5>Release: {{movie.movies_cast}}</h5>
                        </div>
                </div>
            </div>
        </section>
    `,

    methods: {
        showVideoDetails() {
            this.showdetails = true;
        },
        closeVideoDetails() {
            this.showdetails = false;
        },
        playVideo() {
            this.playvideo = true;
        },
        closeVideo() {
            this.playvideo = false;
        }
    }


}