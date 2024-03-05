import {computed, reactive} from "vue";
import axios from "axios";


export default {
    setup() {
        const state = reactive({
            form: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                address1: "",
                address2: "",
                zipcode: "",
                phone1: "",
                phone2: "",
                phone3: ""
            },

        });
        // Computed property to check if passwords match
        const isPasswordMatch = computed(() => {
            return state.form.password === state.form.confirmPassword;
        });

        const submit = () => {
            // 주소와 상세주소를 합쳐서 address 변수에 저장
            // axios를 사용하여 회원가입 폼 데이터를 서버에 전송
            axios.post("/api/account/signup", state.form)
                .then(response => {
                    console.log("회원가입 폼 데이터:", state.form); // 폼 데이터를 콘솔에 출력
                    console.log("서버 응답 데이터:", response.data); // 서버 응답 데이터를 콘솔에 출력
                    window.alert("회원가입이 완료되었습니다.");
                    // 필요한 경우 추가적인 동작 수행
                })
                .catch(error => {
                    // 회원가입 도중 오류가 발생했을 때의 동작
                    console.error(error);
                    window.alert("회원가입에 실패하였습니다.");
                });

        };

        return {state, submit, isPasswordMatch};
    },

    methods: {
        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    if (this.extraAddress !== "") {
                        this.extraAddress = "";
                    }
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        this.state.form.address1 = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        this.state.form.address1 = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === "R") {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            this.extraAddress += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            this.extraAddress +=
                                this.extraAddress !== ""
                                    ? `, ${data.buildingName}`
                                    : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (this.extraAddress !== "") {
                            this.extraAddress = `(${this.extraAddress})`;
                        }
                    } else {
                        this.extraAddress = "";
                    }
                    // 우편번호를 입력한다.
                    this.state.form.zipcode = data.zonecode;
                },
            }).open();
        },
    },
};
