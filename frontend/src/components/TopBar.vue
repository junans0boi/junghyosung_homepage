<template>

  <header>
    <div class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="정효성컴퓨터 로고" class="logo-image"/>
          <strong>정효성컴퓨터</strong></router-link>
      </div>
      <ul class="links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/aboutus">회사소개</router-link>
        </li>
        <li>
          <router-link to="/asinfo">A/S</router-link>
        </li>
        <li>
          <router-link to="/faq">FAQs/S</router-link>
        </li>
        <li>
          <router-link to="/asinfo">A/S</router-link>
        </li>
      </ul>
      <router-link to="/login" class="nav-item" v-if="!$store.state.account.id">로그인</router-link>
      <a to="/login" class="nav-item" @click="logout()" v-else>로그아웃</a>
      <div class="toggle_btn">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>

    <div class="dropdown_menu">
      <li>
        <router-link to="/mainpage">Home</router-link>
      </li>
      <li>
        <router-link to="/food">Food</router-link>
      </li>
      <li><a href="service">Service</a></li>
      <li><a href="content">Content</a></li>
      <li>
        <router-link to="/loginpage" class="action_btn">Login</router-link>
      </li>
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
    const isActive = (path) => {
      return router.currentRoute.value.path === path;
    };


    const logout = () => {
      axios.post("/api/account/logout").then(()=>{
        store.commit('setAccount', 0);
        router.push({path: "/"});
      });
    }

    return {logout, isActive}
  },
  mounted() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');
      toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };
  }
}
</script>

<style scoped>


li {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

a:hover {
  color: orange;
}

header {
  position: relative;

}
.logo-image {
  max-width: 100px;
  /* 로고 이미지의 최대 너비 */
  max-height: 50px;
  /* 로고 이미지의 최대 높이 */
  margin-right: 0.5rem;
  /* 로고 이미지와 텍스트 사이의 여백 */
}
.navbar {
  background-color: black;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .logo a {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar .links {
  display: flex;
  gap: 2rem;
}

.navbar .toggle_btn {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}

.action_btn {
  background-color: orange;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: scale 0.2 ease;
}

.action_btn:hover {
  scale: 1.05;
  color: white;
}

.action_btn:active {
  scale: 0.95;
}

/*Dropdown Menu*/
.dropdown_menu {
  display: none;
  position: absolute;
  right: 2rem;
  top: 60px;
  height: 0px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dropdown_menu.open {
  height: 240px;
}

.dropdown_menu li {
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown_menu .action_btn {
  width: 100%;
  display: flex;
  justify-content: center;
}


/*Responsive Design*/
@media (max-width: 992px) {
  .navbar .links,
  .navbar .action_btn {
    display: none;
  }

  .navbar .toggle_btn {
    display: block;
  }

  .dropdown_menu {
    display: block;
  }
}

@media (max-width: 576px) {
  .dropdown_menu {
    left: 2rem;
    width: unset;
  }

}
</style>
