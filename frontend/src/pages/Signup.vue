<template>
  <main>
    <div class="py-5 text-center">
      <h2>회원가입</h2>
    </div>

    <form class="needs-validation" novalidate>
      <div class="form-contents">
        <h4 class="Hr_Title">개인정보 입력</h4>
        <div class="form">
          <label for="Name" class="form-label">이름</label>
          <input type="text" class="form-control" id="Name" placeholder="예)홍길동" value="" required>
        </div>

        <div class="form">
          <label for="email" class="form-label">이메일 <span class="text-body-secondary">(필수)</span></label>
          <input type="text" class="form-control" id="Name" placeholder="you@example.com">
        </div>

        <div class="form">
          <label for="Name" class="form-label">비밀번호</label>
          <input type="text" class="form-control" id="Name" placeholder="비밀번호" value="" required>
        </div>

        <div class="form">
          <label for="Name" class="form-label">비밀번호 확인</label>
          <input type="text" class="form-control" id="Name" placeholder="비밀번호 확인" value="" required>
        </div>


        <h4 class="Hr_Title">주소 입력</h4>

        <div class="form">

          <input class="btn btn-primary btn-lg d-flex mx-auto" type="button" @click="execDaumPostcode()" value="우편번호 찾기"><br>

          <br>
          <label for="cc-name" class="form-label">주소</label>
          <input type="text" class="form-control" id="address" v-model="address" placeholder="주소" disabled><br>
        </div>

        <div class="form">
          <label for="cc-number" class="form-label">상세주소</label>
          <input type="text" class="form-control" id="detailAddress" placeholder="상세주소">
        </div>

        <div class="form">
          <label for="cc-expiration" class="form-label">우편번호</label>
          <input type="text" class="form-control" v-model="postcode" placeholder="우편번호" disabled>
        </div>
        <div class="form">
          <label for="cc-number" class="form-label">휴대전화 번호</label>
          <div class="d-flex justify-content-between">
            <input class="phone1"  placeholder="010" > -
            <input class="phone2" placeholder="0000" > -
            <input class="phone3"  placeholder="0000" >
          </div>
        </div>



        <h4 class="Hr_Title">동의 체크</h4>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="same-address">
          <label class="form-check-label" for="same-address">개인 정보 작성에 동의 합니다.?</label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="save-info">
          <label class="form-check-label" for="save-info">(선택)이벤트 및 소식 관련 이메일 및 메세지를 수신합니다.</label>
        </div>

        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
      </div>
    </form>

  </main>

  <footer class="my-5 pt-5 text-body-secondary text-center text-small">
    <p class="mb-1">&copy; 2017–2024 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {

  setup() {
    const state = reactive({

      form: {
        email: "",
        password: "",
        address: "",
        detailAddress: "",
        phone1: "",
        phone2: "",
        phone3: "",

      }
    })
    const submit = () => {
      // total_address 변수에 주소와 상세주소를 저장
      state.form.total_address = state.form.address + " " + state.form.detailAddress;

      // Phone_num 변수에 휴대전화 번호를 저장
      state.form.Phone_num = state.form.phone1 + "-" + state.form.phone2 + "-" + state.form.phone3;
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
  },
  data() {
    return {

      postcode: "",
      address: "",
      extraAddress: "",
    };
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
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
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
          this.postcode = data.zonecode;
        },
      }).open();
    },
  },
};
</script>


<style>
.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.bd-mode-toggle .dropdown-menu .active {
  display: block !important;
}

/* input 컨텐츠 가운데 정렬 및 길이 높이 동일하게 설정 */
.form-control {
  display: block;
  width: 100%; /* 입력 필드의 길이를 동일하게 설정 */
  height: calc(1.5em + 0.75rem + 2px); /* 입력 필드의 높이를 동일하게 설정 */
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.phone{
  width: 120px;
  height: 50px;

}
/* 모든 input 태그에 대해 가운데 정렬 적용 */
input[type="text"]{
  width: 400px;
  height: 50px;
  text-align: center;
}

.Hr_Title {
  text-align: center;
}

/* 가운데 정렬을 위한 CSS 코드 추가 */
.form-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>