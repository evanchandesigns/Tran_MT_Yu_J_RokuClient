import TvsContent from "./TvsContent.js";

export default {
    name: "ParentsTvsData",

    data() {
        return {
            allTvs: [],
        }
    },

    template: `
        <section class="thumbnailSection">
            <tvscontent v-for="tv in allTvs" :tv="tv" :key="tv.tv_id"></tvscontent>
        </section>
    `,

    created: function () {
        fetch('/roku/tvs-parents')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.allTvs = data;
            })
            .catch(err => console.error(err));
    },

    components: {
        "tvscontent": TvsContent
    }
}