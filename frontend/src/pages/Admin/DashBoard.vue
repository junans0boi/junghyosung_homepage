<template>

  <button @click="toggleSidebar">Toggle Sidebar</button>


  <div class="container">
    <!-- 첫 번째 사이드바 -->
    sidebar
    <div v-show="isFirstSidebarVisible" class="sidebar">

      <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary" style="width: 4.5rem;">
        <a href="/" class="d-block p-3 link-body-emphasis text-decoration-none" title="Icon-only"
           data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi pe-none" width="40" height="32">
            <use xlink:href="#bootstrap"/>
          </svg>
          <span class="visually-hidden">Icon-only</span>
        </a>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
            <router-link to="/home" title="Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/user" title="admin_user">사용자</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" title="admin_user">주문</router-link>
          </li>
        </ul>
        <!-- 드롭다운 메뉴 -->
        <div class="dropdown border-top">
          <!-- 드롭다운 토글 -->
          <a href="#"
             class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
             data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
          </a>
          <!-- 드롭다운 메뉴 항목들 -->
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>

    </div>

    <!-- 두 번째 사이드바 -->
    <div v-show="isSecondSidebarVisible" class="sidebar">
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span class="fs-4">Sidebar</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link link-body-emphasis">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/user" class="nav-link link-body-emphasis">사용자</router-link>


          </li>
          <!-- 추가적인 사이드바 항목들 -->
        </ul>
        <!-- 드롭다운 메뉴 -->
        <div class="dropdown">
          <!-- 드롭다운 토글 -->
          <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
             data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>mdo</strong>
          </a>
          <!-- 드롭다운 메뉴 항목들 -->
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- 라우터 뷰 -->
  <div class="content">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isFirstSidebarVisible: true, // 첫 번째 사이드바 표시 여부 상태
      isSecondSidebarVisible: false, // 두 번째 사이드바 표시 여부 상태
    };
  },
  methods: {
    toggleSidebar() {
      // 두 사이드바의 표시 여부 상태를 서로 바꿈
      this.isFirstSidebarVisible = !this.isFirstSidebarVisible;
      this.isSecondSidebarVisible = !this.isSecondSidebarVisible;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.sidebar {
  /* 사이드바의 너비 등 스타일 지정 */
}

.content {
  flex-grow: 1; /* 남은 공간을 모두 차지하도록 설정 */
}</style>
