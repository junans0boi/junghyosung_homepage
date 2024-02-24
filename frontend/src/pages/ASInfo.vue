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


<script>
import asInfo from '../assets/asInfo.json';

export default {
  data() {
    return {
      asInfoData: asInfo,
      activeCategory: null
    };
  },
  methods: {
    formattedName(name) {
      return name.replace(/\n/g, '<br>');
    },
    formattedAddress(address) {
      return address.replace(/\n/g, '<br>');
    },
    setActiveCategory(category) {
      this.activeCategory = category;
    }
  }
};
</script>

<style>
/* 스타일링 */
.category-tabs {
  display: flex;
  overflow-x: auto;
  font-size: 2vw;
  /* 폰트 크기를 뷰포트 너비의 2%로 설정 */

}

.category-tabs button {
  cursor: pointer;
  background: none;
  border: none;
  color: black;
  padding: 10px 20px;
  margin-right: 10px;
}

.category-tabs button.active {
  font-weight: bold;
}

.category-content {
  margin-top: 20px;
  padding: 0;
  width: 100%;
  /* 부모 요소의 넓이를 최대로 설정 */
}

.background {
  background-color: wheat;
  padding: 0;
  width: 100%;
  /* 부모 요소의 넓이를 최대로 설정 */
}

.category-content a {
  text-decoration: none;
  /* 밑줄 제거 */
  color: white;
  /* 텍스트 색상 */
  background-color: #4CAF50;
  /* 배경 색상 */
  padding: 10px 15px;
  /* 패딩 */
  border-radius: 5px;
  /* 테두리 둥글게 */
  transition: background-color 0.3s;
  /* 호버 효과를 위한 전환 */
}

.category-content a:hover {
  background-color: #45a049;
  /* 호버 시 배경 색상 변경 */
}

table {
  width: 100%;
  border-collapse: collapse;
  /* 테두리 겹침 제거 */
  text-align: left;
  /* 텍스트 왼쪽 정렬 */
}

th,
td {
  text-align: center;
  border: 1px solid #ddd;
  /* 셀 테두리 */
  padding: 8px;
  /* 셀 패딩 */
}

th {
  background-color: #f2f2f2;
  /* 헤더 배경색 */
  color: black;
  /* 헤더 텍스트 색상 */
}

tr:nth-child(even) {
  background-color: #f9f9f9;
  /* 짝수 행 배경색 */
}

tr:hover {
  background-color: #eaeaea;
  /* 행 호버 배경색 */
}
</style>
