<template>
  <div class="cart">
    <div class="container">
      <ul>
        <li v-for="(i, idx) in state.items" :key="idx">
          <img :src="i.imgPath"/>
          <span class="name">{{ i.name }}</span>
          <span class="price">{{ lib.getNumberFormatted(i.price - i.price * i.discountPer / 100) }}원</span>
          <i class="fa fa-trash" @click="remove(i.id)"></i>
        </li>
      </ul>
      <router-link to="/order" class="btn btn-primary">구입하기</router-link>
    </div>
  </div>
</template>

<script src="@/scripts/pages/Cart.js"></script>


<style scoped>
@import "@/css/Cart.css";
</style>