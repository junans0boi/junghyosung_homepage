import {reactive} from "vue";
import axios from "axios";
import lib from "@/scripts/lib";

export default {
    setup() {
        const state = reactive({
            orders: [],
        })

        axios.get("/api/orders").then(({data}) => {
            state.orders = [];

            for (let d of data) {
                if (d.items) {
                    d.items = JSON.parse(d.items);
                }

                state.orders.push(d);
            }
        })

        return {state, lib,}
    }
}