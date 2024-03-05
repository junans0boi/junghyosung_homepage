import {reactive} from "vue";
import axios from "axios";
import lib from "@/scripts/lib";

export default {
    setup() {
        const state = reactive({
            items: []
        })

        const load = () => {
            axios.get("/api/cart/items").then(({data}) => {
                console.log(data);
                state.items = data;
            })
        };

        const remove = (itemId) => {
            axios.delete(`/api/cart/items/${itemId}`).then(() => {
                load();
            })
        }

        load();

        return {state, lib, remove}
    }
}