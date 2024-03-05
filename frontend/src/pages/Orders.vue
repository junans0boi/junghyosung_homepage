<template>
  <div class="orders">
    <div class="container">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>번호</th>
          <th>주문자명</th>
          <th>주소</th>
          <th>결제 수단</th>
          <th>구입 항목</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(o, idx1) in state.orders" :key="idx1">
          <td>{{ state.orders.length - idx1 }}</td>
          <td>{{ o.name }}</td>
          <td>{{ o.address }}</td>
          <td>{{ o.payment }}</td>
          <td>
            <div v-for="(i, idx2) in o.items" :key="idx2">{{ i.name }}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="@/scripts/pages/Orders.js"></script>
<style scoped>
@import "@/css/Orders.css";
</style>