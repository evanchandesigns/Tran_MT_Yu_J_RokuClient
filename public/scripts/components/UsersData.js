import LoginForm from "./LoginForm.js";

export default {
    name: "UsersData",

    data() {
        return {
            allUsers: [],
        }
    },

    template: `
        <login-form></login-form>
    `,

    created() {
        fetch('/roku/users')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allUsers = data;
            })
            .catch(err => console.error(err));
    },

    components: {
        "login-form": LoginForm
    }
}