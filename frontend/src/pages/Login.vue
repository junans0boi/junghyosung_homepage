<template>
  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">로그인을 해주세요.</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
             @keyup.enter="submit()" v-model="state.form.email">
      <label for="floatingInput">이메일 주소</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" @keyup.enter="submit()" v-model="state.form.password">
      <label for="floatingPassword">비밀번호</label>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" @keyup.enter="submit()"> 계정을 기억하겠습니까?
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" @click="submit()">로그인</button>
    <router-link to="/signup">아이디가 없으신가요?</router-link>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
  </div>
</template>

<script src="@/scripts/pages/Login.js"></script>


<style scoped>
@import "@/css/Login.css";
</style>