<template>
  <div class="div9">
    <div class="tablesinvoices-list-widget-parent">
      <div class="tablesinvoices-list-widget">
        <div class="col-titles-bg-parent">
          <div class="col-titles-bg"></div>
          <div class="top-content">
            <div class="div10">Фильтр:</div>
            <div class="menu-2-parent" id="frameContainer9">
              <img
                class="iconscalendar"
                alt=""
                src="@/assets/images/menu2.svg"
                @click="() => (isSort = true)"
              />

              <div class="div15" @click="() => (isSort = true)">(1)</div>
            </div>
          </div>
          <div class="frame-wrapper_filter">
            <div class="frame-container">
              <div class="frame-div">
                <div class="group">
                  <div class="div11">Выберите статус:</div>
                  <div
                    class="fields-password-and-mail2"
                    id="fieldsPasswordAndMail"
                  >
                    <div class="text-icon" @click="() => (isAllActive = true)">
                      <div class="div12">Все активы</div>
                      <img
                        class="iconscalendar"
                        alt=""
                        src="@/assets/images/chevron-right.svg"
                      />
                    </div>
                  </div>
                </div>
                <div class="group">
                  <div class="div11">Выберите дату:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-sheet
      v-if="isAll"
      defaultState="open"
      :style="{ top: '17em !importnat' }"
    >
      <status-filter></status-filter>
    </bottom-sheet>
    <!--<bottom-sheet
      v-if="isSort"
      defaultState="open"
      :style="{ top: '17em !importnat' }"
    >
      <sort @close="() => (isSort = false)"></sort>
    </bottom-sheet>-->
  </div>
  <activs v-if="isAllActive" @close="() => (isAllActive = false)"></activs>
  <sort v-if="isSort" @close="() => (isSort = false)"></sort>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isAll = ref(false);
const isAllActive = ref(false);
const isSort = ref(false);
import inputData from "./fields/input-data.vue";
import bottomSheet from "@/components/ui-kit/bottomsheet.vue";
import statusFilter from "@/components/filters/status-filter.vue";
import { useRouter } from "vue-router";
import activs from "@/components/setting/desktop/modal-body/activs.vue";
import sort from "./setting/desktop/modal-body/sort.vue";
</script>

<style scoped lang="scss">
.col-titles-bg {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  border-radius: 18px;
  background-color: rgba(246, 244, 252, 0.5);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 9.69em;
}
.div10 {
  //position: absolute;
  //top: 1.79em;
  //left: 1.5em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 500;
  text-align: center;
}
.div11,
.div12 {
  position: relative;
  line-height: 130%;
}
.div11 {
  font-size: 0.75em;
  font-weight: 300;
}
.div12 {
  font-size: 0.88em;
}
.fields-password-and-mail2,
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail2 {
  align-self: stretch;
  border-radius: 16px;
  background: linear-gradient(#fff, #fff), #f9fbff;
  border: 0.5px solid #f2f2f2;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  cursor: pointer;
  color: #2e3a59;
}
.group {
  flex: 1;
  justify-content: flex-start;
  gap: 0.5em;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.parent3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail3 {
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
  align-items: center;
  justify-content: center;
}
.iconscalendar {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.iconscalendar-wrapper {
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
}
.fields-password-and-mail-container {
  align-self: stretch;
  align-items: flex-start;
  gap: 0.38em;
  color: #2e3a59;
}
.fields-password-and-mail-container,
.frame-container,
.frame-div,
.frame-wrapper_filter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.frame-div {
  align-self: stretch;
  width: 18.75em;
  align-items: flex-start;
  gap: 0.75em;
}
.frame-container,
.frame-wrapper_filter {
  align-items: center;
}
.frame-wrapper_filter {
  position: absolute;
  top: 4.5em;

  color: #3b3b3b;
  width: 100%;
  justify-content: center;
}
.group-item {
  position: absolute;
  top: 3.47em;
  left: 1.34em;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 18.81em;
  height: 0.06em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 0.71em;
  font-weight: 300;
}
.menu-2-parent {
  //position: absolute;
  //top: 1.25em;
  //left: 16.94em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  cursor: pointer;
  color: #5d83f7;
}
.col-titles-bg-parent {
  position: relative;
  width: 100%;
  height: 9.69em;
}
.bg2,
.tab-title {
  position: absolute;
}
.bg2 {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  box-sizing: border-box;
}
.tab-title {
  top: calc(50% - 9px);
  left: calc(50% - 17.5px);
  font-size: 0.88em;
}
.tabstextactive {
  position: relative;
  width: 4.75em;
  height: 2.5em;
  color: #1c1d21;
}
.tab-title1 {
  position: absolute;
  top: 0.79em;
  left: 1.6%;
  font-size: 0.88em;
}
.tabstextresting {
  position: relative;
  width: 3.38em;
  height: 2.5em;
}
.tab-title2 {
  position: absolute;
  top: 0.79em;
  left: 13.18%;
  font-size: 0.88em;
}
.tabstextresting1 {
  position: relative;
  width: 4em;
  height: 2.5em;
}
.title-frame,
.title3 {
  display: flex;
  align-items: flex-start;
}
.title3 {
  width: 21.38em;
  flex-direction: row;
  padding: 0 1.31em;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: -10;
}
.title-frame {
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  color: #8181a5;
}
.details1,
.number3 {
  position: relative;
  font-size: 0.75em;
  line-height: 1.5em;
}
.details1 {
  display: inline-block;
  width: 3.67em;
  flex-shrink: 0;
}
.descrioption {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(245, 245, 250, 0.4);
  height: 1.81em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  font-family: Lato;
}
.div16 {
  position: relative;
  font-size: 0.76em;
  line-height: 110%;
  font-weight: 600;
  background: linear-gradient(#8181a5, #8181a5), #a592dd;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.frame {
  width: 21.38em;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 0.38em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.group-icon1 {
  position: relative;
  width: 0.94em;
  height: 0.88em;
}
.svg-gobbler-2-11 {
  border-radius: 10px;
  background-color: rgba(165, 146, 221, 0.1);
  border: 0.5px solid rgba(165, 146, 221, 0.05);
  box-sizing: border-box;
  width: 2.38em;
  height: 2.38em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0.19em 0.06em;
  align-items: center;
  justify-content: center;
}
.invoice-aa-04-19-181,
.new-madieton-llc1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
}
.invoice-aa-04-19-181 {
  font-weight: 500;
  width: 13.75em;
}
.new-madieton-llc1 {
  color: #8181a5;
  width: 9.02em;
}
.icons-info,
.name1 {
  display: flex;
  justify-content: flex-start;
}
.name1 {
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.13em;
}
.icons-info {
  flex-direction: row;
  align-items: center;
  gap: 0.69em;
  z-index: 0;
}
.paid1,
.total1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.total1 {
  display: inline-block;
  width: 9em;
}
.paid1 {
  align-self: stretch;
  color: #70ca98;
}
.details2 {
  display: flex;
  flex-direction: column;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: center;
  gap: 0.13em;
  z-index: 1;
  text-align: right;
}
.chevron-right-icon2 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.arrows-table1,
.field-1 {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  z-index: -10;
}
.arrows-table1 {
  margin: 0 !important;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 0 4px 4px 0;
  background-color: #f6f4fb;
  width: 0.63em;
  flex-shrink: 0;
  padding: 0.25em;
  justify-content: center;
  z-index: 2;
}
.field-1 {
  border-radius: 10px;
  width: 21.38em;
  padding: 0.25em 0 0.25em 0.25em;
  justify-content: flex-start;
  position: relative;
}
.paid3,
.paid4 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.paid3 {
  color: #fdd674;
}
.paid4 {
  color: rgba(87, 126, 247, 0.96);
}
.pull {
  justify-content: flex-start;
  gap: 1.13em;
  color: #3b3b3b;
}
.descrioption-parent,
.pull,
.pull1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.descrioption-parent {
  border-bottom: 1px solid rgba(165, 146, 221, 0.08);
  padding: 0 0 1em;
  justify-content: flex-start;
  gap: 1em;
  z-index: -10;
  color: #8181a5;
}
.pull1 {
  gap: 1.13em;
}
.pull-wrapper,
.pull1 {
  justify-content: flex-start;
}
.frame-parent1,
.frame-parent2,
.pull-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.frame-parent2 {
  border-bottom: 1px solid rgba(165, 146, 221, 0.08);
  padding: 0 0 1em;
  justify-content: flex-start;
  gap: 1em;
  z-index: -10;
}
.frame-parent1 {
  justify-content: center;
  gap: 1.25em;
  color: #3b3b3b;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  border-radius: 24px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.span {
  letter-spacing: -1px;
}
.total-invoices {
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
  font-family: Lato;
  color: #656060;
  text-align: left;
}
.buttonnext-parent,
.tablesinvoices-list-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.buttonnext-parent {
  gap: 1em;
  text-align: center;
  color: #f3f3f3;
}
.tablesinvoices-list-widget {
  position: absolute;

  width: 90vw;
  gap: 1.5em;
  color: #000;
}
.job-title {
  position: relative;
  font-size: 1.13em;
  line-height: 1.17em;
  font-weight: 600;
}
.job-title-wrapper {
  position: absolute;
  top: 6.44em;
  left: 1.5em;
  background-color: #fff;
  width: 21.38em;
  display: flex;
  flex-direction: row;
  padding: 0 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.div19 {
  position: absolute;
  top: 0.43em;
  left: 3.29em;
  font-size: 0.88em;
  line-height: 2em;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}
.buttonback {
  position: absolute;
  height: 2.79%;
  width: 26.15%;
  top: 3.63%;
  right: 67.69%;
  bottom: 93.58%;
  left: 6.15%;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
}
.tablesinvoices-list-widget-parent {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
.home-icon {
  position: absolute;
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div20 {
  position: absolute;
  top: 3.6em;
  left: 1.1em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.container158,
.iconsmenu {
  width: 3.38em;
  height: 3.38em;
}
.container158 {
  position: relative;
}
.iconsmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 0;
  color: rgba(48, 51, 55, 0.9);
}
.basket-icon {
  position: absolute;
  top: 0.38em;
  left: 0.73em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div21 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu1 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.news-icon {
  position: absolute;
  top: 0.38em;
  left: 0.77em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div22 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu2 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.div23 {
  position: absolute;
  top: 3.6em;
  left: 0.05em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu3 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  color: rgba(48, 51, 55, 0.9);
}
.div24 {
  position: absolute;
  top: 3.6em;
  left: 0.6em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.wallet-money-cash-svgrepo-com-icon {
  position: absolute;
  top: 0.41em;
  left: 0.81em;
  width: 1.81em;
  height: 1.81em;
  overflow: hidden;
}
.iconsmenu4 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
.b1,
.mask-icon {
  position: absolute;
  left: 7.14%;
}
.mask-icon {
  height: 85.71%;
  width: 85.71%;
  top: 7.14%;
  right: 7.14%;
  bottom: 7.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.b1 {
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
  font-size: 0.41em;
  line-height: 120%;
  display: inline-block;
}
.status {
  top: 0.63em;
  left: 8em;
  opacity: 0;
  z-index: 5;
  color: rgba(255, 255, 255, 0.96);
}
.status,
.status-icon,
.status-icon1,
.status1 {
  position: absolute;
  margin: 0 !important;
  width: 0.88em;
  height: 0.88em;
}
.status1 {
  top: 0.63em;
  left: 8em;
  opacity: 0;
  z-index: 6;
  color: rgba(255, 255, 255, 0.96);
}
.status-icon,
.status-icon1 {
  top: 0.69em;
  left: 16.75em;
  z-index: 7;
}
.status-icon1 {
  left: 12.5em;
  opacity: 0;
  z-index: 8;
}
.nav-menu {
  position: absolute;
  bottom: 0;
  left: calc(50% - 195px);
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 24.38em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 2em 1.25em;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 300;
}
.iconchange {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.text-parent {
  align-self: stretch;
  border-bottom: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: row;
  padding: 0 0 0.56em;
  align-items: center;
  justify-content: space-between;
  color: rgba(46, 58, 89, 0.36);
}
.div26 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.handle,
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: #fff;
  width: 1.25em;
  height: 1.25em;
  z-index: 1;
}
.overlay {
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  border-radius: 100px;
  background-color: #6750a4;
  width: 1.5em;
  height: 1.5em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.handle-container,
.switch,
.text-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.switch {
  border-radius: 100px;
  background-color: #a592dd;
  width: 3.25em;
  height: 1.75em;
  justify-content: flex-end;
}
.text-icon {
  align-self: stretch;
  justify-content: space-between;
}
.field-item {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.07);
  height: 2.5em;
  display: none;
  flex-direction: column;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
}
.checkboxdone-icon {
  position: relative;
  border-radius: 4.14px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.field-item1,
.text-icon1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text-icon1 {
  flex: 1;
  justify-content: space-between;
}
.field-item1 {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.3);
  height: 2.5em;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  justify-content: flex-start;
}
.div30 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.field-item3,
.fields {
  align-self: stretch;
  justify-content: flex-start;
}
.field-item3 {
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.3);
  height: 2.5em;
  display: none;
  flex-direction: row;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: center;
}
.fields {
  gap: 0.25em;
  color: #262626;
}
.div25,
.field-item7,
.fields,
.fieldsinputchoise {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.div25 {
  align-self: stretch;
  justify-content: flex-start;
  gap: 0.75em;
}
.field-item7,
.fieldsinputchoise {
  box-sizing: border-box;
}
.fieldsinputchoise {
  top: 0;
  left: 0;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  width: 21.38em;
  height: 26.81em;
  overflow: hidden;
  padding: 0.88em 1.31em;
  justify-content: flex-start;
  gap: 1.5em;
}
.field-item7 {
  top: 23.5em;
  left: 1.31em;
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.07);
  width: 18.75em;
  height: 2.5em;
  padding: 0.63em 1.25em;
  justify-content: center;
  color: #262626;
}
.div37 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 300;
  color: rgba(38, 38, 38, 0.62);
  text-align: left;
  cursor: pointer;
}
.buttonnext-group {
  position: absolute;
  top: 28.56em;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  text-align: center;
  color: #f3f3f3;
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 2.63em;
  left: 1.5em;
  width: 21.38em;
  height: 31.38em;
}
.status-nav,
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.88em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.status-nav {
  top: 93.25em;
  left: 0;
  border-radius: 16px 0 0 16px;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  width: 24.38em;
  height: 43.75em;
  overflow: hidden;
  color: #2e3a59;
}
.div9,
.icon {
  position: relative;
}
.div9 {
  background-color: #fff;
  width: 90vw;
  height: 10em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.icon {
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 0;
}
.state-layer {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #49454f;
  display: none;
  opacity: 0;
  z-index: 1;
}
.close-icon-button,
.container1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container1 {
  border-radius: 100px;
  overflow: hidden;
  padding: 0.5em;
  position: relative;
  z-index: 0;
}
.close-icon-button {
  padding: 0.25em;
}
.leading-icon {
  position: relative;
  width: 1.13em;
  height: 1.13em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 3;
}
.label-text1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.1px;
  line-height: 1.43em;
  font-weight: 500;
}
.label-text {
  display: flex;
  flex-direction: row;
  padding: 0 0.25em;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.trailing-icon {
  position: relative;
  width: 1.13em;
  height: 1.13em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 1;
}
.state-layer1 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #6750a4;
  display: none;
  opacity: 0;
  z-index: 0;
}
.button,
.options {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.button {
  border-radius: 100px;
  height: 2.5em;
  overflow: hidden;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
  gap: 0.25em;
}
.options {
  align-self: stretch;
  padding: 0 0.75em 0 0;
  justify-content: space-between;
}
.section-header,
.selected-date {
  align-self: stretch;
  position: relative;
}
.section-header {
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.selected-date {
  font-size: 1.38em;
  line-height: 1.27em;
}
.label-date {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 0.25em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.labe-date-icon-button {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 1.63em 0.75em 1.56em;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5em;
  text-align: left;
  color: #3b3b3b;
}
.header {
  width: 22.5em;
  display: flex;
  flex-direction: column;
  padding: 0.75em 0 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}
.label-text3 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.label-text2 {
  margin: 0 !important;
  position: absolute;
  top: -0.5em;
  left: 0.75em;
  background-color: #eee8f4;
  display: flex;
  flex-direction: column;
  padding: 0 0.25em;
  align-items: flex-start;
  justify-content: center;
  z-index: 5;
}
.leading-icon1 {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 4;
}
.input-text1 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.cursor {
  position: relative;
  border-radius: 8px;
  background-color: #6750a4;
  width: 0.06em;
  height: 1em;
}
.delete-icon-button,
.input-text {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input-text {
  flex: 1;
  padding: 0 0.25em;
  justify-content: flex-start;
  z-index: 3;
  color: #1c1b1f;
}
.delete-icon-button {
  width: 1.5em;
  height: 1.5em;
  justify-content: center;
  z-index: 2;
}
.state-layer4 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #49454f;
  opacity: 0.12;
  z-index: 1;
}
.trailing-icon-button {
  width: 1.5em;
  height: 1.5em;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.supporting-text1 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.4px;
  line-height: 1.33em;
}
.supporting-text {
  margin: 0 !important;
  position: absolute;
  width: 100%;
  right: 0;
  bottom: -1.5em;
  left: 0;
  display: none;
  flex-direction: column;
  padding: 0.25em 1em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  z-index: 0;
  color: #49454f;
  font-family: Roboto;
}
.header-parent,
.text-field {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.text-field {
  border-radius: 16px;
  border: 0.5px solid #a592dd;
  box-sizing: border-box;
  width: 19.5em;
  flex-direction: row;
  padding: 1em 0.75em;
  position: relative;
  text-align: left;
  color: #3b3b3b;
}
.header-parent {
  border-bottom: 1px solid rgba(165, 146, 221, 0.4);
  flex-direction: column;
  padding: 0 0 2.38em;
}
.date {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.days-of-the-week,
.sunday {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.sunday {
  flex: 1;
  height: 3em;
}
.days-of-the-week {
  width: 22.5em;
  padding: 0 0.75em;
  box-sizing: border-box;
}
.august-2023 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.1px;
  line-height: 1.43em;
  font-weight: 500;
}
.header1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 1em 1.5em 0.75em;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #49454f;
  font-family: Roboto;
}
.sunday1 {
  flex: 1;
  height: 3em;
  overflow: hidden;
}
.day {
  position: relative;
  font-size: 0.75em;
  line-height: 1.33em;
  z-index: 1;
}
.state-layer5 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #1c1b1f;
  display: none;
  opacity: 0;
  z-index: 0;
}
.container5,
.tuesday1 {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container5 {
  border-radius: 100px;
  width: 2.5em;
  height: 2.5em;
  flex-shrink: 0;
  flex-direction: row;
  position: relative;
  z-index: 0;
}
.tuesday1 {
  flex: 1;
  height: 3em;
  flex-direction: column;
}
.day4 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.4px;
  line-height: 1.33em;
  z-index: 1;
}
.container9,
.state-layer9 {
  border-radius: 100px;
  z-index: 0;
}
.state-layer9 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #6750a4;
  opacity: 0;
}
.container9 {
  border: 1px solid #6750a4;
  box-sizing: border-box;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  position: relative;
}
.container9,
.saturday1,
.week-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.saturday1 {
  flex: 1;
  height: 3em;
  overflow: hidden;
  flex-direction: column;
  color: #6750a4;
  font-family: Roboto;
}
.week-1 {
  align-self: stretch;
  flex-direction: row;
}
.state-layer21 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #fff;
  opacity: 0;
  z-index: 0;
}
.container21 {
  border-radius: 100px;
  background-color: #a592dd;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.range-highlight-end,
.range-highlight-start {
  position: absolute;
  margin: 0 !important;
  width: 80%;
  top: calc(50% - 20px);
  background-color: #e8def8;
  height: 2.5em;
}
.range-highlight-end {
  right: 50%;
  left: -30%;
  display: none;
  z-index: 1;
}
.range-highlight-start {
  right: -30%;
  left: 50%;
  z-index: 0;
}
.thursday3 {
  flex: 1;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
}
.container22,
.range-highlight-left {
  background-color: #e8def8;
  height: 2.5em;
}
.container22 {
  border-radius: 100px;
  width: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.range-highlight-left {
  position: absolute;
  margin: 0 !important;
  width: 80%;
  top: calc(50% - 20px);
  right: 50%;
  left: -30%;
  z-index: 1;
}
.friday3 {
  flex: 1;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.friday3,
.saturday3 {
  color: #49454f;
}
.monday4,
.saturday3,
.sunday4 {
  flex: 1;
  height: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.monday4 {
  overflow: hidden;
}
.range-highlight-start1 {
  position: absolute;
  margin: 0 !important;
  width: 80%;
  top: calc(50% - 20px);
  right: -30%;
  left: 50%;
  background-color: #e8def8;
  height: 2.5em;
  display: none;
  z-index: 0;
}
.thursday4,
.week-4,
.week-6 {
  align-items: center;
  justify-content: center;
}
.thursday4 {
  flex: 1;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #3b3b3b;
}
.week-4,
.week-6 {
  flex-direction: row;
}
.week-4 {
  align-self: stretch;
  display: flex;
  color: #49454f;
}
.week-6 {
  display: none;
}
.header2,
.month,
.week-6 {
  align-self: stretch;
}
.month {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Inter;
}
.header2 {
  flex-direction: row;
  padding: 1em 1.5em 0.75em;
  justify-content: center;
  text-align: left;
  color: #49454f;
}
.header2,
.month1,
.months,
.week-11 {
  display: flex;
  align-items: center;
}
.week-11 {
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  font-family: Inter;
}
.month1,
.months {
  flex-direction: column;
  justify-content: flex-start;
}
.month1 {
  align-self: stretch;
}
.months {
  width: 22.5em;
  height: 25em;
  overflow-y: auto;
  flex-shrink: 0;
  padding: 0 0.75em;
  box-sizing: border-box;
  font-family: Roboto;
}
.label-text5 {
  position: relative;
  font-size: 0.88em;
  line-height: 1.43em;
  font-weight: 500;
}
.actions {
  border-top: 1px solid #cac4d0;
  box-sizing: border-box;
  width: 22.5em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.75em 0.75em;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
  color: #6750a4;
}
.days-of-the-week-parent,
.modal-date-picker {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.days-of-the-week-parent {
  padding: 0.63em 0;
  align-items: flex-start;
  color: #3b3b3b;
}
.modal-date-picker {
  position: absolute;
  top: 0;
  left: 0.13em;
  border-radius: 18px;
  background: linear-gradient(#ede9f8, #ede9f8), #fffbfe;
  width: 22.5em;
  height: 46.75em;
  overflow: hidden;
  align-items: center;
}
.div8 {
  position: relative;
  width: 22.63em;
  height: 46.75em;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  text-align: center;
  color: rgba(87, 126, 247, 0.96);
  font-family: Inter;
}
.bg,
.graph-icon {
  position: absolute;
}
.bg {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  background-color: #fff;
}
.graph-icon {
  height: 69.39%;
  width: 46.45%;
  top: 17.35%;
  right: 5.62%;
  bottom: 13.27%;
  left: 47.93%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.title {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 1.75em;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.number {
  position: absolute;
  top: calc(50% - 11.5px);
  left: 0;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.numbers {
  position: relative;
  width: 7.19em;
  height: 1.44em;
}
.title1 {
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
  font-family: Lato;
  color: rgba(59, 59, 59, 0.4);
  margin-top: -0.29em;
}
.frame-group,
.numbers-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.numbers-parent {
  color: #3b3b3b;
}
.frame-group {
  position: absolute;
  top: 0.81em;
  left: 1.75em;
  gap: 0.38em;
}
.counters-graph-web {
  position: absolute;
  top: 10.69em;
  left: 0.69em;
  width: 21.13em;
  height: 6.13em;
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.component-26,
.component-261 {
  position: absolute;
  top: 3.06em;
  left: 1.88em;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 8.38em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-261 {
  left: 10.94em;
}
.title-container {
  position: absolute;
  top: 0.81em;
  left: 1.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.counters-graph-web1 {
  position: absolute;
  top: 3.94em;
  left: 0.69em;
  width: 21.06em;
  height: 6.13em;
  color: rgba(59, 59, 59, 0.8);
}
.group-icon {
  position: relative;
  width: 0.94em;
  height: 0.88em;
}
.svg-gobbler-2-1 {
  border-radius: 10px;
  background-color: rgba(165, 146, 221, 0.1);
  border: 0.5px solid rgba(165, 146, 221, 0.05);
  box-sizing: border-box;
  width: 2.38em;
  height: 2.38em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0.19em 0.06em;
  align-items: center;
  justify-content: center;
}
.invoice-aa-04-19-18,
.new-madieton-llc {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
}
.invoice-aa-04-19-18 {
  font-weight: 500;
  width: 13.75em;
}
.new-madieton-llc {
  color: #8181a5;
  width: 9.02em;
}
.name,
.svg-gobbler-2-1-parent {
  display: flex;
  justify-content: flex-start;
}
.name {
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.13em;
}
.svg-gobbler-2-1-parent {
  flex-direction: row;
  align-items: center;
  gap: 0.69em;
  z-index: 0;
}
.paid,
.total {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.total {
  display: inline-block;
  width: 9em;
}
.paid {
  align-self: stretch;
  color: #70ca98;
}
.details {
  display: flex;
  flex-direction: column;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: center;
  gap: 0.13em;
  z-index: 1;
  text-align: right;
}
.arrows-table,
.chevron-right-icon {
  position: relative;
  width: 0.63em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.arrows-table {
  margin: 0 !important;
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 20.75em;
  border-radius: 0 4px 4px 0;
  background-color: #f1ecff;
  display: flex;
  flex-direction: row;
  padding: 0.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.field-,
.popup- {
  border-radius: 10px;
  overflow: hidden;
}
.field- {
  position: absolute;
  top: 0.5em;
  left: 0.44em;
  background-color: rgba(246, 244, 251, 0.5);
  width: 21.38em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0 0.25em 0.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.popup- {
  position: relative;
  background-color: #f6f4fc;
  width: 22.25em;
  height: 17.44em;
  max-width: 90%;
  max-height: 90%;
  text-align: left;
  color: rgba(87, 126, 247, 0.96);
  font-family: Inter;
}
.top-content {
  position: relative;
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  gap: 12em;
  margin-top: 1.665em;
}
@media (min-width: 500px) {
  .tablesinvoices-list-widget {
    width: 100%;
  }
  .top-content {
    justify-content: space-between;
    margin: 0em;
    width: 100%;
    padding: 20px 20px 0 20px;
  }
  .frame-wrapper_filter {
    justify-content: flex-start;
    padding: 0px 20px 20px 20px;
  }
}
</style>
