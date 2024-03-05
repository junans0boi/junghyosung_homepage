<template>
  <main>
    <div class="personal-info-update">
      <h2>개인정보 수정</h2>
      <form @submit.prevent="submitForm">
      <div class="form-contents">
        <h4 class="Hr_Title">개인정보 입력</h4>
        <div class="form">
          <label for="Name" class="form-label">이름</label>
          <input type="text" class="form-control" id="name" v-model="user.name" :disabled="!isEditMode">

        </div>

        <div class="form">
          <label for="email" class="form-label">이메일 <span class="text-body-secondary">(필수)</span></label>
          <input type="email" class="form-control" id="email" v-model="user.email" :disabled="!isEditMode">
        </div>

        <div class="form">
          <label for="Password" class="form-label">비밀번호</label> <!-- 수정: id를 "Name"에서 "Password"로 수정 -->
          <input type="password" class="form-control" id="Password" v-model="user.password" :disabled="!isEditMode">
        </div>

        <div class="form">
          <label for="ConfirmPassword" class="form-label">비밀번호 확인</label> <!-- 수정: id를 "Name"에서 "ConfirmPassword"로 수정 -->
          <input type="password" class="form-control" id="ConfirmPassword"  :disabled="!isEditMode">
        </div>


        <h4 class="Hr_Title">주소 입력</h4>

        <div class="form">

          <input class="btn btn-primary btn-lg d-flex mx-auto" type="button" @click="execDaumPostcode()" value="우편번호 찾기" :disabled="!isEditMode"><br>

          <br>
          <label for="address" class="form-label">주소</label> <!-- 수정: id를 "cc-name"에서 "address"로 수정 -->
          <input type="text" class="form-control" id="address" v-model="user.address1" required :disabled="!isEditMode">

        </div>

        <div class="form">
          <label for="detailAddress" class="form-label">상세주소</label> <!-- 수정: id를 "cc-number"에서 "detailAddress"로 수정 -->
          <input type="text" class="form-control" id="detailAddress" v-model="user.address2" :disabled="!isEditMode">

        </div>

        <div class="form">
          <label for="postcode" class="form-label">우편번호</label> <!-- 수정: id를 "cc-expiration"에서 "postcode"로 수정 -->
          <input type="text" class="form-control" id="postcode" v-model="user.zipcode" required :disabled="!isEditMode">
        </div>
        <div class="form">
          <label class="form-label">휴대전화 번호</label>
          <div class="d-flex justify-content-between">
            <input type="text" class="phone1 form-control" placeholder="010" v-model="user.phone1" :disabled="!isEditMode"> <!-- 수정: input 타입을 "text"로 변경, v-model 추가 -->
            <input type="text" class="phone2 form-control" placeholder="0000" v-model="user.phone2" :disabled="!isEditMode"> <!-- 수정: input 타입을 "text"로 변경, v-model 추가 -->
            <input type="text" class="phone3 form-control" placeholder="0000" v-model="user.phone3" :disabled="!isEditMode"> <!-- 수정: input 타입을 "text"로 변경, v-model 추가 -->
          </div>
        </div>

        <button type="button" class="btn btn-primary" @click="toggleEditMode">
          {{ isEditMode ? '수정 완료' : '수정하기' }}
        </button>



      </div>
    </form>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </div>
  </main>

</template>


<script src="@/scripts/pages/Profile.js"></script>


<style>
@import "@/css/Profile.css";

</style>