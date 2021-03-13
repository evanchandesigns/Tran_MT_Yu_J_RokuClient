export default {
    name: "MusicContent",

    props: ["music"],

    template: `
        <div class="musicThumbnail">
            <img :src='"images/" + music.music_thumbnail' alt="music thumb">
            <h3 class="book title">{{ music.music_title }}</h3>
            <h3 class="book singer">{{ music.music_singer }}</h3>
        </div>
    `,

    methods: {

    }
}