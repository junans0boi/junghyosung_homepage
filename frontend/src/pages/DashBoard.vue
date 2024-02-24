<template>
  <div id="app">
    <nav id="navbar">
      <router-link to="/admin/users">유저관리</router-link>
      <router-link to="/admin/board">게시판 관리</router-link>
      <router-link to="/admin/post">견적 요청</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
