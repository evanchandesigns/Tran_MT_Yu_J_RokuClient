import Header from "./HeaderComponent.js";
import MusicHighlight from "./MusicHighlightComponent.js";
import Thumbnails from "./MusicThumbnailsComponent.js";

export default {
    name: "ParentsMusic",

    template: `
    <section id="parentsMusic">
        <header-area :settings=settings :parents=parents :reachedhome=reachedhome @click="openMenu()" @pairData="getData" :whitelogo=whitelogo></header-area>
        <section class="highlightArea">
            <div class="highlightWrapper">
                <music-highlight v-for="highlight in highlights" :highlight=highlight :key="highlights.music_id"></music-highlight>
            </div>
            <h3>Crank up your volume,<br>Start grooving with Roku today!</h3>
        </section>
        <section class="mediaArea">
            <div class="menuNav">
            <img src="images/nav_deco3.png" class="navDeco" draggable="false">
                    <nav>
                        <ul>
                            <li class="navItem"><router-link to="/parents-movies">MOVIES</router-link></li>
                            <li class="navItem"><router-link to="/parents-tv">TV</router-link></li>
                            <li class="navItem currentPage"><img src="images/placeholder.png" v-if="musicpage" alt="Current Page - Music"><router-link to="/parents-music">MUSIC</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="thumbnailsWrapper">
                    <load-thumbnail v-for="music in allmusic" :music=music :key=music.music_id :musicpage=musicpage></load-thumbnail>
                </div>
        </section>
        <section class="filterSection">
            <div class="filterHeader"><h3>TV Series By Era For You</h3><button @click="eraone = false, eratwo = false, erathree = false, getEra()">SHOW ALL</button></div>
            <div class="musicEraWrapper">
                <div class="eraItem"  ><img src="images/music/love_thumbnail.jpg" alt="Filter Button" @click="eraone = true, eratwo = false, erathree = false, getEra()"><span>1950s ~ 1960s</span></div>
                <div class="eraItem" ><img src="images/music/heaven_thumbnail.jpg" alt="Filter Button" @click="eraone = false, eratwo = true, erathree = false, getEra()"><span>1970s</span></div>
                <div class="eraItem" ><img src="images/music/inter_thumbnail.jpg" alt="Filter Button" @click="eraone = false, eratwo = false, erathree = true, getEra()"><span>1980s ~ 1990s</span></div>
            </div>
        </section>
        <img src="images/bottom_deco.png" class="bottomDeco" draggable="false">
    </section>
    `,

    data() {
        return {
            current: {},
            allmusic: [],
            highlights: [],
            eraone: false,
            eratwo: false,
            erathree: false,
            url: `/api/parents/music`,
            showdetails: false,
        }
    },

    created: function () {
        this.musicpage = true;
        this.reachedhome = true;
        this.whitelogo = true;
        this.parents = true;
        this.settings = true;

        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.allmusic = data;
                this.highlights = data.sort(() => Math.random() - 0.5);
                this.highlights = this.highlights.slice(2);
            })
            .catch((err) => console.error(err));

    },

    methods: {
        getData(data) {
            this.current = data;
        },

        getEra() {
            if (this.eraone == true) {
                this.url = `/api/parents/music/eraone`;
            }
            else if (this.eratwo == true) {
                this.url = `/api/parents/music/eratwo`;
            } else if (this.erathree == true) {
                this.url = `/api/parents/music/erathree`;
            } else {
                this.url = `/api/parents/music`;
            }
            fetch(this.url)
                .then(res => res.json())
                .then(data => {
                    this.allmusic = data;
                })
                .catch((err) => console.error(err));
            this.$forceUpdate();
        },
    },

    components: {
        "header-area": Header,
        "load-thumbnail": Thumbnails,
        "music-highlight": MusicHighlight,
    }
}