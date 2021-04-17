export default {
    name: "Thumbnails",

    props: ["tv", "tvpage"],

    data() {
        return {
            showdetails: false,
            playvideo: false
        }
    },

    template: `
        <!--------------------------------------------------------TV AREA TV AREA -TV AREA TV AREA -TV AREA TV AREA -TV AREA TV AREA -TV AREA TV AREA------------------------------------------------------------------------------------>
        <section class="tv-item" v-if="tvpage">
            <img :src="'images/tv/' + tv.tv_thumbnail" :alt="tv.tv_title"  @click="showVideoDetails()" class="item-image">
            <div class="titleBox"  @click="showVideoDetails()">
                <h3> {{tv.tv_title}} </h3>
                <div>
                    <img src="images/pinkstar.svg">
                    <span class="ratingThumbnail">{{ tv.tv_rating }}</span>
                </div>
            </div>
            <!-------------------------------------------------------------------------------------->
            <div class="detailsBox tvBox" v-if="showdetails">
            <button @click="closeVideoDetails()" v-if="!playvideo"><img src="images/arrow.svg"><span>BACK</span></button>
                <div class="tvDetails">
                    <img :src="'images/tv/' + tv.tv_cover" :alt="tv.tv_title" @click="playVideo()" v-if="!playvideo" id="mediaDetailsCover" draggable="false">
                    <img src="images/play_media.svg" alt="Play" @click="playVideo()" v-if="!playvideo" id="mediaDetailsPlayButton">
                <div  v-if="playvideo" class="mediaBox">
                    <button @click="closeVideo()"><img src="images/close.svg"></button>
                    <iframe :src="tv.tv_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
                <div class="infoBox">
                        <h3> {{tv.tv_title}}</h3>
                        <h5> {{tv.tv_runtime}}</h5>
                        <div class="ratingMedia">
                            <img src="images/pinkstar.svg">
                            <h4>{{ tv.tv_rating }}</h4>
                        </div>
                        <div class="mediaContent">
                            <h4> {{tv.tv_genre}}</h4>
                            <p>{{ tv.tv_desc}}</p>
                            <h5>Release: {{tv.tv_year}}</h5>
                            <h5>Release: {{tv.tv_director}}</h5>
                            <h5>Release: {{tv.tv_cast}}</h5>
                        </div>
                </div>
            </div>
        </section>
        <!-------------------------------------------------------------------------------------------------------------------------------------------->
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