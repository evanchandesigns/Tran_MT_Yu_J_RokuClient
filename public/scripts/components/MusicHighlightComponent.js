export default {
    name: "MusicHighlight",

    props: ["highlight"],

    data() {
        return {
            showdetails: false,
        }
    },

    template: `
        <section>
            <div class="highlightThumbnail">
                    <img :src="'images/music/' + highlight.music_thumbnail" :alt="highlight.music_title" @click="showAudioDetails()">
            </div>
             <!-------------------------------------------------------------------------------------->

                            <div class="detailsBox musicHighlight" v-if="showdetails">
                            <button @click="closeAudioDetails()"><img src="images/arrow.svg"><span>BACK</span></button>
                                <div class="musicPlayerArea">
                                    <img :src="'images/music/' + highlight.music_thumbnail" :alt="highlight.music_title" @click="playAudio()" draggable="false">
                                    <!-- <img src="images/play_media.svg" alt="Play" @click="playAudio()" id="audioPlayButton"> -->
                                    <audio controls>
                                        <source :src="'music/'+ highlight.music_media" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                                <div class="infoBox">
                                    <div class="likeBox"><img src="images/like.svg" alt="Likes"><h4>{{highlight.music_likes}}</h4></div>
                                    <h4>{{highlight.music_title}}</h4>
                                    <h6>{{highlight.music_singer}}</h6>
                                    <h5>Album: {{highlight.music_album}}</h5>
                                    <h5>Released: {{highlight.music_year}}</h5>
                                    <h5>Genre: {{highlight.music_genre}}</h5>
                                </div>
                            </div>
        </section>
    `,

    methods: {
        showAudioDetails() {
            this.showdetails = true;
        },
        closeAudioDetails() {
            this.showdetails = false;
        },
        playAudio() {
            console.log(this.highlight.music_title);
        },
    }
}