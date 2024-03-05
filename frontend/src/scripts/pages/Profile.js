
import axios from "axios";

export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                address1: "",
                address2: "",
                zipcode: "",
                phone1: "",
                phone2: "",
                phone3: "",
            },
            isEditMode: false,
            successMessage: ""
        };
    },
    created() {
        // Fetch logged-in user's information from backend and pre-fill the form
        this.fetchUserData();
    },
    methods: {
        fetchUserData() {
            axios.get("/api/account/profile")
                .then(response => {
                    this.user = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        toggleEditMode() {
            // If exiting edit mode, submit the form
            if (this.isEditMode) {
                this.submitForm();
            }
            this.isEditMode = !this.isEditMode;
        },

        submitForm() {
            // Send updated user information to backend
            axios.put("/api/account/profile", this.user)
                .then(response => {
                    console.log(response.data); // Log response data
                    this.successMessage = "개인정보가 수정되었습니다.";
                })
                .catch(error => {
                    console.error(error);
                    alert("개인정보 수정에 실패하였습니다.");
                });
        }
    }
};