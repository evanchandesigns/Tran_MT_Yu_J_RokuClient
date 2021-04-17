import Header from "./HeaderComponent.js";
import MoviesThumbnails from "./KidsMoviesThumbnailsComponent.js";
import TVThumbnails from "./KidsTVThumbnailsComponent.js";
import MusicThumbnails from "./KidsMusicThumbnailsComponent.js";

export default {
    name: "KidsMedia",

    template: `
    <section id="kidsMedia">
        <header-area :kids=kids :reachedhome=reachedhome @pairData="getData" :whitelogo=whitelogo></header-area>
        <section class="highlightArea" @click=playVideo()>
            <iframe :src="highlight.movies_media+'?playlist='+this.playlist+'&autoplay=1&mute=1&loop=1&controls=0'" width="100%" height="800px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src="images/play_media.svg" alt="Play" @click="playVideo()" v-if="!playvideo">
            <h3>Are you ready, Kids?<br>You better say "Aye, aye, Captain"!</h3>
        </section>
        <div  v-if="playvideo" class="mediaBox">
                    <button @click="closeVideo()"><img src="images/close.svg"></button>
                    <iframe :src="highlight.movies_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
        <section class="mediaArea">
            <section class="kidsMovies">
                <div class="kidsMenuWrapper"><h2>MOVIES</h2><img src="images/kids_movies.svg" alt="Kids Movies"></div>
                    <movies-thumbnail v-for="movie in allmovies" :movie=movie :key=movie.movies_id></movies-thumbnail>
                <div class="kidsThumbnailsWrapper">
                </div>
            </section>
            <section class="kidsTV">
                <div class="kidsMenuWrapper"><h2>TV</h2><img src="images/kids_tv.svg" alt="Kids TV"></div>
                    <tv-thumbnail v-for="tv in alltvs" :tv=tv :key=tv.tv_id></tv-thumbnail>
                <div class="kidsThumbnailsWrapper">
                </div>
            </section>
            <section class="kidsMusic">
                <div class="kidsMenuWrapper"><h2>MUSIC</h2><img src="images/kids_music.svg" alt="Kids Movies"></div>
                    <music-thumbnail v-for="music in allmusic" :music=music :key=music.music_id></music-thumbnail>
                <div class="kidsThumbnailsWrapper">
                </div>
            </section>
        </section>
        <img src="images/bottom_deco.png" class="bottomDeco" draggable="false">
    </section>
    `,

    data() {
        return {
            current: {},
            allmovies: [],
            alltvs: [],
            allmusic: [],
            highlight: {},
            playlist: "",
            playvideo: false
        }
    },

    created: function () {
        this.reachedhome = true;
        this.whitelogo = true;
        this.kids = true;

        fetch('/api/kids/movies')
            .then(res => res.json())
            .then(data => {
                this.allmovies = data;
                this.highlight = data[Math.floor(Math.random() * data.length)];
                this.playlist = this.highlight.movies_media.split("embed/").pop();
            })
            .catch((err) => console.error(err));

        fetch('/api/kids/tv')
            .then(res => res.json())
            .then(data => {
                this.alltvs = data;
            })
            .catch((err) => console.error(err));

        fetch('/api/kids/movies')
            .then(res => res.json())
            .then(data => {
                this.allmusic = data;
            })
            .catch((err) => console.error(err));
    },

    methods: {
        getData(data) {
            this.current = data;
        },

        playVideo() {
            this.playvideo = true;
        },
        closeVideo() {
            this.playvideo = false;
        }
    },

    components: {
        "header-area": Header,
        "movies-thumbnails": MoviesThumbnails,
        "tv-thumbnails": TVThumbnails,
        "music-thumbnails": MusicThumbnails
    }
}