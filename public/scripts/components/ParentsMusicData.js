import MusicContent from "./MusicContent.js";

export default {
    name: "ParentsMusicData",

    data() {
        return {
            allMusic: [],
        }
    },

    template: `
        <section class="thumbnailSection">
            <music-content v-for="music in allMusic" :music="music" :key="music.music_id"></music-content>
        </section>
    `,

    created: function () {
        fetch('/roku/music-parents')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.allMusic = data;
            })
            .catch(err => console.error(err));
    },

    components: {
        "music-content": MusicContent
    }
}