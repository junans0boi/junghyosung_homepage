<template>
  <div>
    <!-- 이용자 목록 표시 -->
    <h2>이용자 목록</h2>
    <table>
      <!-- 테이블 헤더 -->
      <thead>
      <tr>
        <th>이름</th>
        <th>이메일</th>
        <th>가입 일</th>
        <th>누적 구매 횟수</th>
        <th>누적 구매 금액</th>
        <th>수정</th>
      </tr>
      </thead>
      <!-- 테이블 내용 -->
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.join_date }}</td>
        <td>{{ user.purchaseamount }}</td>
        <td>{{ user.countofpurchase }}</td>
        <!-- 수정 버튼 -->
        <td><button @click="openEditModal(user)">수정</button></td>
      </tr>
      </tbody>
    </table>

    <!-- 수정 팝업 -->
    <!-- 회원 정보 수정 팝업 -->
    <div class="popup" v-if="editModalOpen">
      <h3>회원 정보 수정</h3>
      <form @submit.prevent="updateUser">
        <label for="name">이름:</label>
        <input type="text" id="name" v-model="editedUser.name" required><br>
        <label for="email">이메일:</label>
        <input type="email" id="email" v-model="editedUser.email" required><br>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" v-model="editedUser.password" required><br>
        <label for="phone">전화번호:</label>
        <input type="text" id="phone" v-model="editedUser.phone" required><br>
        <label for="address">주소:</label>
        <input type="text" id="address" v-model="editedUser.address" required><br>
        <label for="address">상세 주소:</label>
        <input type="text" id="address" v-model="editedUser.address2" required><br>
        <label for="purchaseamount">누적 구매 금액:</label>
        <input type="text" id="purchaseamount" v-model="editedUser.purchaseamount" required><br>
        <label for="countofpurchase">구매 횟수:</label>
        <input type="text" id="countofpurchase" v-model="editedUser.countofpurchase" required><br>
        <button type="submit">저장</button>
        <button @click="closeEditModal">닫기</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      editModalOpen: false, // 회원 정보 수정 팝업 오픈 여부
      editedUser: { // 수정 중인 회원 정보
        id: null,
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        purchaseamount: '',
        countofpurchase: ''
      }
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('/api/account/all')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error('Error fetching users:', error);
            // 추가적인 에러 핸들링 (예: 사용자에게 알림 표시)
          });
    },
    openEditModal(user) {
      // 선택한 회원의 정보를 수정 중인 회원 정보로 설정
      this.editedUser.id = user.id;
      this.editedUser.name = user.name;
      this.editedUser.email = user.email;
      this.editedUser.password = ''; // 비밀번호 초기화
      this.editedUser.phone = user.phone;
      this.editedUser.address = user.address;
      this.editedUser.purchaseamount = user.purchaseamount;
      this.editedUser.countofpurchase = user.countofpurchase;

      this.editModalOpen = true; // 회원 정보 수정 팝업 열기
    },
    updateUser() {
      axios.put(`/api/account/profile/${this.editedUser.id}`, this.editedUser)
          .then(response => {
            console.log('User updated:', response.data);
            this.closeEditModal(); // 팝업 닫기
            this.fetchUsers(); // 수정된 회원 정보 다시 불러오기
          })
          .catch(error => {
            console.error('Error updating user:', error);
            // 추가적인 에러 핸들링 (예: 사용자에게 알림 표시)
          });
    },
    closeEditModal() {
      this.editModalOpen = false; // 회원 정보 수정 팝업 닫기
    }
  }
};
</script>
<style scoped>

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.popup h3 {
  margin-bottom: 20px;
  text-align: center;
}

.popup form {
  display: flex;
  flex-direction: column;
}

.popup label {
  margin-bottom: 10px;
}

.popup input {
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.popup button {
  padding: 8px 16px;
  margin-top: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.popup button[type="submit"] {
  background-color: #007BFF;
}

.popup button[type="submit"]:hover,
.popup button[type="submit"]:focus {
  background-color: #0056b3;
}

.popup button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.popup button[type="submit"]:disabled:hover,
.popup button[type="submit"]:disabled:focus {
  background-color: #ccc;
}

</style>
