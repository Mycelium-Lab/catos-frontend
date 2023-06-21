<template>
  <div class="description">
    <div class="div9">Что выполнить?</div>
  </div>
  <!--<div class="div10" id="text1">Закрыть</div>-->
  <div class="frame-group">
    <div class="frame-container">
      <div class="frame">
        <div class="div11">
          <span>Изменить статус для для </span>
          <span class="span">3</span>
          <span> займов:</span>
        </div>
      </div>
      <div v-if="variant === 'bids'" class="statusapplication-parent">
        <div class="statusapplication">
          <div class="div12">Одобрить выбранные заявки</div>
        </div>
        <div class="statusapplication1">
          <div class="div12">Отклонить выбранные заявки</div>
        </div>
        <div class="statusapplication2">
          <div class="div12">Оставить в ожидании</div>
        </div>
      </div>
      <div v-else class="frame-div_fromsale frame-div">
        <div class="frame-wrapper">
          <div class="trash-2-parent">
            <div class="div16">Снять с продажи</div>
          </div>
        </div>
      </div>
    </div>
    <div class="div15">или</div>
    <div class="frame-div">
      <div class="frame-wrapper">
        <div class="trash-2-parent">
          <img
            class="trash-2-icon"
            alt=""
            src="@/assets/images/iconstrash.svg"
          />

          <div class="div16">Переместить в корзину</div>
        </div>
      </div>
      <div class="div17">Перейти в историю удалений</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { variant } = defineProps({
  variant: { type: String },
});
</script>

<style scoped>
.div9 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.description {
  position: relative;
  top: 2.19em;
  /* left: calc(50% - 163px); */
  margin: 0 auto;
  width: 83vw;
  display: flex;
  /* flex-direction: row; */
  /* align-items: center; */
  justify-content: center;
  text-align: center;
}
.div10 {
  position: absolute;
  top: 3.8em;
  left: 32em;
  font-size: 0.63em;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 500;
  color: rgba(38, 38, 38, 0.62);
  cursor: pointer;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: calc(50% - 21px);
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.span {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.div11 {
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
  font-weight: 300;
}
.frame {
  width: 18.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div12 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.statusapplication,
.statusapplication1,
.statusapplication2 {
  border-radius: 24px;
  background-color: #e5fee5;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
}
.statusapplication1,
.statusapplication2 {
  background-color: #ffeae4;
  color: #fe3b30;
}
.statusapplication2 {
  background-color: #f2ebf7;
  color: #a865ff;
}
.statusapplication-parent {
  color: #1cbd62;
}
.frame-container,
.statusapplication-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.2);
}
.trash-2-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.frame-wrapper,
.trash-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.trash-2-parent {
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-wrapper {
  border-radius: 36px;
  background-color: #3b3b3b;
  width: 18.75em;
  height: 2.5em;
  padding: 0.38em 1.69em;
  box-sizing: border-box;
  justify-content: center;
}
.div17 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 300;
  color: rgba(87, 126, 247, 0.96);
}
.frame-div,
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  color: #fff;
}
.frame-div_fromsale {
  color: rgba(59, 59, 59, 1);
}
.frame-div_fromsale .frame-wrapper {
  background: transparent;
  border: 1px solid rgba(46, 58, 89, 0.4);
}
.frame-div_fromsale .div16 {
  font-size: 14px;
}
.frame-group {
  position: relative;
  top: 5.75em;
  width: 77vw;
  margin: 0 auto;
  gap: 2.25em;
  color: #2e3a59;
}
.div8 {
  position: relative;
  /* border-radius: 24px 24px 0 0; */
  background-color: #fff;
  /* box-shadow: 0-6px 33px rgba(165, 146, 221, 0.3); */
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  box-sizing: border-box;
  width: 100%;
  height: 36.38em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
