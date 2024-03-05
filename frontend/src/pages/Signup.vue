<template>
  <main>
    <div class="py-5 text-center">
      <h2>회원가입</h2>
    </div>

    <form class="needs-validation" novalidate @submit.prevent="submit"> <!-- 수정: submit 이벤트 핸들러 추가 -->
      <div class="form-contents">
        <h4 class="Hr_Title">개인정보 입력</h4>
        <div class="form">
          <label for="Name" class="form-label">이름</label>
          <input type="text" class="form-control" id="Name" placeholder="예)홍길동" v-model="state.form.name" required>
        </div>

        <div class="form">
          <label for="email" class="form-label">이메일 <span class="text-body-secondary">(필수)</span></label>
          <input type="email" class="form-control" id="Email" placeholder="you@example.com" v-model="state.form.email"
                 required> <!-- 수정: 이메일 형식을 검증하기 위해 type="email"로 변경 -->

        </div>

        <div class="form">
          <label for="Password" class="form-label">비밀번호</label> <!-- 수정: id를 "Name"에서 "Password"로 수정 -->
          <input type="password" class="form-control" id="Password" placeholder="비밀번호" v-model="state.form.password"
                 required>
        </div>

        <div class="form">
          <label for="ConfirmPassword" class="form-label">비밀번호 확인</label>
          <!-- 수정: id를 "Name"에서 "ConfirmPassword"로 수정 -->
          <input type="password" class="form-control" id="ConfirmPassword" placeholder="비밀번호 확인"
                 v-model="state.form.confirmPassword" required>
          <label v-if="state.form.password !== '' && state.form.confirmPassword !== ''"
                 :class="{'text-success': isPasswordMatch, 'text-danger': !isPasswordMatch}">
            {{ isPasswordMatch ? '비밀번호를 올바르게 작성하였습니다.' : '비밀번호가 동일하지 않습니다.' }}
          </label>
        </div>


        <h4 class="Hr_Title">주소 입력</h4>

        <div class="form">

          <input class="btn btn-primary btn-lg d-flex mx-auto" type="button" @click="execDaumPostcode()"
                 value="우편번호 찾기"><br>

          <br>
          <label for="address" class="form-label">주소</label> <!-- 수정: id를 "cc-name"에서 "address"로 수정 -->
          <input type="text" class="form-control" id="address" placeholder="주소" v-model="state.form.address1" required
                 disabled>
        </div>

        <div class="form">
          <label for="detailAddress" class="form-label">상세주소</label> <!-- 수정: id를 "cc-number"에서 "detailAddress"로 수정 -->
          <input type="text" class="form-control" id="detailAddress" placeholder="상세주소" v-model="state.form.address2">
        </div>

        <div class="form">
          <label for="postcode" class="form-label">우편번호</label> <!-- 수정: id를 "cc-expiration"에서 "postcode"로 수정 -->
          <input type="text" class="form-control" id="postcode" placeholder="우편번호" v-model="state.form.zipcode" required
                 disabled>
        </div>
        <div class="form">
          <label class="form-label">휴대전화 번호</label>
          <div class="d-flex justify-content-between">
            <input type="text" class="phone1 form-control" placeholder="010" v-model="state.form.phone1">
            <!-- 수정: input 타입을 "text"로 변경, v-model 추가 -->
            <input type="text" class="phone2 form-control" placeholder="0000" v-model="state.form.phone2">
            <!-- 수정: input 타입을 "text"로 변경, v-model 추가 -->
            <input type="text" class="phone3 form-control" placeholder="0000" v-model="state.form.phone3">
            <!-- 수정: input 타입을 "text"로 변경, v-model 추가 -->
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

</template>


<script src="@/scripts/pages/Signup.js"></script>




<style>
@import "@/css/Signup.css";
</style>