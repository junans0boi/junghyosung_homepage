<template>
  <div class="order">
    <div class="container">
      <main>
        <div class="py-5 text-center"><h2>주문하기</h2>
          <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form
            group has a validation state that can be triggered by attempting to submit the form without completing
            it.</p></div>
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last"><h4
              class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">구입 목록</span>
            <span
                class="badge bg-primary rounded-pill">
              {{ state.items.length }}
            </span></h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(i, idx) in state.items"
                  :key="idx">
                <div>
                  <h6 class="my-0">{{ i.name }}</h6>
                </div>
                <span class="text-muted">
                  {{ lib.getNumberFormatted(i.price - i.price * i.discountPer / 100) }}원
                </span>
              </li>
            </ul>
            <h3 class="text-center total-price">
              {{ lib.getNumberFormatted(computedPrice) }}원
            </h3>
          </div>
          <div class="col-md-7 col-lg-8"><h4 class="mb-3">주문자 정보</h4>
            <div class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-12"><label for="username" class="form-label">이름</label>
                  <input type="text"
                         class="form-control"
                         id="username"
                         v-model="state.form.name"
                  >
                </div>
                <div class="col-12"><label for="address" class="form-label">주소</label>
                  <input type="text"
                         class="form-control"
                         id="address"
                         v-model="state.form.address" disabled>
                  <label class="form-check-label" for="bank">주소 변경는 "개인정보 수정"에서 변경 가능 합니다.</label>

                </div>

                <div class="col-12"><label for="phonenum" class="form-label">휴대폰 번호</label>
                  <input type="text"
                         class="form-control"
                         id="address"
                         v-model="state.form.phonenum">
                </div>

              </div>
              <hr class="my-4">
              <h4 class="mb-3">결제 수단</h4>
              <div class="my-3">
                <div class="form-check">
                  <input id="bank" name="paymentMethod" type="radio" class="form-check-input"
                         value="bank" v-model="state.form.payment" checked>
                  <label class="form-check-label" for="bank">계좌이체</label>
                </div>
              </div>

              <H3 for="cc-name" class="form-label">카카오뱅크 3333-13-5742856 이준환 </H3><br>
              <label for="cc-name" class="form-label">계좌 송금이 확인 되면 주문이 됩니다. </label><br>
              <label for="cc-name" class="form-label">신청 당일 미입금시 주문은 자동 취소 됩니다. </label><br>
              <hr class="my-4">
              <button class="w-100 btn btn-primary btn-lg" @click="submit()">주문하기</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script src="@/scripts/pages/Order.js"></script>



<style scoped>
@import "@/css/Order.css";
</style>