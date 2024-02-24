
<template>
  <div id="about-page">
    <section class="intro-section">
      <h1>안녕하십니까. 컴퓨터 조립은 정효성 컴퓨터 입니다!</h1>
      <p>저희 정효성 컴퓨터는 고객님의 입장이 되어 컴퓨터 견적 소개 및 조립에 최선을 다하고 있습니다.</p>
      <p>고객님께서 견적 요청을 받고 즉시 부품을 주문하여, 부품 도착 시 “섬세한 조립”과 함께 “무적 포장”을 하여 안전 배송을 해드리는데 중점을 두고 있습니다.</p>
      <p>항상 믿어주시고 의뢰 주시는 만큼 항상 발전하고 고객님과 구독자님들을 위해 최선을 다하겠습니다.</p>
      <p class="thanks">감사합니다.</p>
      <p class="signature">-정효성-</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style>
#about-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.intro-section {
  text-align: center;
  padding: 2rem;
  border-bottom: 1px solid #eee;
}

.intro-section h1 {
  margin-bottom: 1rem;
  color: #003366; /* 회사의 브랜드 색상에 맞춤 */
  font-size: 2.5rem;
}

.intro-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.intro-section .thanks {

  font-weight: bold;
  margin-top: 2rem;
}

.intro-section .signature {
  margin-top: 1rem;
  font-style: italic;
  font-weight: bold;
  color: #003366;
}
</style>
