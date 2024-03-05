<template>
  <div>
    <header>
      <router-link to="/users">이용자</router-link>
      <router-link to="/orders">주문</router-link>
      <!-- 추후 추가예정 항목 -->
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 컴포넌트 내용
}
</script>

<style>
/* 스타일 내용 */
</style>
