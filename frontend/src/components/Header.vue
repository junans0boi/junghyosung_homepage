<template>
  <header>
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 py-4">
            <h4 class="text-white">사이트맵</h4>
            <ul class="list-unstyled">
              <li>
                <router-link to="/" class="text-white">메인 화면</router-link>
              </li>
              <li v-if="$store.state.account.id">
                <router-link to="/orders" class="text-white">주문 내역</router-link>
              </li>
              <li>
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img src="@/assets/logo.png" alt="정효성컴퓨터 로고" class="logo-image" />
          <strong>정효성컴퓨터</strong>
        </router-link>


          <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <router-link to="/aboutus" ><li class="nav-item">회사소개</li>        </router-link>

              <router-link to="/card" ><li class="nav-item">구매</li>        </router-link>

              <router-link to="/asinfo" ><li class="nav-item">A/S</li>        </router-link>

              <router-link to="/aboutus" ><li class="nav-item">FAQs</li>        </router-link>

              <router-link to="/login" ><li class="nav-item">로그인</li>        </router-link>

            </ul>
          </header>

        <router-link to="/cart" class="cart btn">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import store from "@/scripts/store";
import router from "@/scripts/router";
import axios from "axios";

export default {
  name: 'Header',
  setup() {
    const logout = () => {
      axios.post("/api/account/logout").then(()=>{
        store.commit('setAccount', 0);
        router.push({path: "/"});
      });
    }

    return {logout}
  }
}
</script>


<style scoped>
header ul li a {
  cursor: pointer;
}

header .navbar .cart {
  margin-left: auto;
  color: #fff;
}
header .navbar .cart{
  margin-left: auto;
  color : #fff;
}
.logo-image {
  max-width: 100px;
  /* 로고 이미지의 최대 너비 */
  max-height: 50px;
  /* 로고 이미지의 최대 높이 */
  margin-right: 0.5rem;
  /* 로고 이미지와 텍스트 사이의 여백 */
}
.nav-item{
  color : white;
  margin: 10px;
}
</style>