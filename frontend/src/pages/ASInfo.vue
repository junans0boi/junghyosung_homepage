<template>
  <div class="background">
    <!-- 카테고리 탭 -->
    <div class="category-tabs">
      <button v-for="(items, category) in asInfoData" :key="category" @click="setActiveCategory(category)"
        :class="{ active: activeCategory === category }">
        {{ category }}
      </button>
    </div>
    <!-- 선택된 카테고리의 표 형식 내용 표시 -->
    <div v-if="activeCategory" class="category-content">
      <h2>{{ activeCategory }}</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>제품</th>
            <th>전화번호</th>
            <th>주소</th>
            <th>웹사이트</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in asInfoData[activeCategory]" :key="item.name">
            <td v-html="formattedName(item.name)"></td>
            <td>{{ item.details.products }}</td>
            <td>{{ item.details.phone }}</td>
            <td v-html="formattedAddress(item.details.address)"></td>
            <td><a :href="item.details.website" target="_blank">사이트 이동</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script src="@/scripts/pages/ASInfo.js"></script>

<style>
@import "@/css/ASInfo.css";
</style>
