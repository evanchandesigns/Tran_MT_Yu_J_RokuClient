export default {
    name: "TvsContent",

    props: ["tv"],

    template: `
        <div class="tvThumbnail">
            <img :src='"images/" + tv.tv_thumbnail' alt="tv thumb">
            <h3 class="book title">{{ tv.tv_title }}</h3>
        </div>
    `,

    methods: {

    }
}