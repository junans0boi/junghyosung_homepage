import {computed, reactive} from "vue";
import axios from "axios";
import lib from "@/scripts/lib";
import router from "@/scripts/router";

export default {
    setup() {
        const state = reactive({
            items: [],
            form: {
                name: "",
                address: "",
                phonenum: "", // Added phonenum field
                items: "",
            }
        })

        const load = () => {
            axios.get("/api/cart/items").then(({data}) => {
                console.log(data);
                state.items = data;
            })
        };

        const submit = () => {
            const args = JSON.parse(JSON.stringify(state.form));
            args.items = JSON.stringify(state.items);

            axios.post("/api/orders", args).then(() => {
                alert('주문 완료하였습니다.');
                router.push({path: "/orders"})
            })
        }

        const computedPrice = computed(() => {
            let result = 0;

            for (let i of state.items) {
                result += i.price - i.price * i.discountPer / 100;
            }

            return result;
        })

        load();

        return {state, lib, computedPrice, submit}
    }
}