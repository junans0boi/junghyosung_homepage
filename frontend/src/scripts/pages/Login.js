import {reactive} from "vue";
import axios from "axios";
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
    setup() {
        const state = reactive({
            form: {
                email: "",
                password: ""
            }
        })

        const submit = () => {
            axios.post("/api/account/login", state.form).then((res) => {
                store.commit('setAccount', res.data);
                console.log(res.data);
                sessionStorage.setItem("id", res.data);
                router.push({path: "/"});
                window.alert("로그인하였습니다.");
            }).catch(() => {
                window.alert("로그인 정보가 존재하지 않습니다..");
            });
        }

        return {state, submit}
    }
}