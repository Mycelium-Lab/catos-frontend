<template>
  <div class="pull-parent" @click="() => (isDetail = true)">
    <div class="pull">
      <div class="pull-stats-wrapper">
        <div class="pull-stats">
          <div class="statusbar-cards">
            <div class="buttons-tabs">
              <div class="checkboxdone-parent">
                <catos-checkbox></catos-checkbox>
                <div class="txt1-parent">
                  <div class="txt1">Иван Иванов Иванович</div>
                  <div class="txt2">ID 12345</div>
                </div>
              </div>
              <div class="status-all-parent">
                <div class="status-all">
                  <div class="colors-graphsorders-parent">
                    <img
                      v-if="variant === 'approved'"
                      class="colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders1.svg"
                    />
                    <img
                      v-else-if="variant === 'rejected'"
                      class="colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders3.svg"
                    />
                    <img
                      v-else
                      class="colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders2.svg"
                    />
                    <div class="div">
                      {{
                        variant === "approved"
                          ? "Активен"
                          : variant === "rejected"
                          ? "Отклонен"
                          : "В ожидании одобрения"
                      }}
                    </div>
                  </div>
                  <img
                    class="iconchange"
                    alt=""
                    src="/src/views/public/iconchange.svg"
                  />
                </div>
                <div class="wrapper">
                  <div class="div">1д 1 ч</div>
                </div>
              </div>
            </div>
          </div>
          <div class="pull-stats-inner">
            <div class="frame-parent">
              <div class="field-parent">
                <div class="field">
                  <div class="div2">Роль:</div>
                  <div class="div3">Заемщик</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="div2">Статус:</div>
                  <div class="div3">Новая зявка</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="div2">Страна:</div>
                  <div class="div3">Россия</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="div2">Email:</div>
                  <a class="div9" href="mailto:someuser@mail.com"
                    >someuser@mail.com</a
                  >
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-wrapper">
                <div class="field">
                  <div class="div2">Телефон:</div>
                  <a class="div9" href="tel:+ 7 (999) 202-77-77"
                    >+ 7 (999) 202-77-77</a
                  >
                </div>
              </div>
            </div>
            <div class="button-wrapper">
              <catos-button
                variant="fourth"
                :style="{ width: '340px', height: '40px', margin: '0' }"
                @click="() => (isDetail = true)"
                >Подробнее</catos-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="filtr-wrapper">
        <div class="filtr">
          <div class="div11">Пользователь #1223</div>
        </div>
      </div>
    </div>
  </div>
  <desktop-modal v-if="isBlank" @close="() => (isBlank = false)">
    <template v-slot:title>Анкета пользователя #12345</template>
    <template v-slot:body>
      <user-blank @close="() => (isBlank = false)"></user-blank>
    </template>
  </desktop-modal>
  <desktop-modal
    v-if="isDetail && variant === 'rejected'"
    @close="() => (isDetail = false)"
  >
    <template v-slot:title>Анкета пользователя #12345</template>
    <template v-slot:body>
      <rejected-user-detail
        @close="() => (isDetail = false)"
      ></rejected-user-detail>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import userBlank from "./user-blank.vue";
// @ts-ignore
import desktopModal from "@/components/base/desktop-modal.vue";
// @ts-ignore
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import rejectedUserDetail from "../modal-body/rejected-user-detail.vue";

const { variant } = defineProps({
  variant: { type: String },
});
const isBlank = ref(false);
const isDetail = ref(false);
</script>
<style scoped lang="scss">
.checkboxdone-icon {
  position: relative;
  border-radius: 4.14px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.txt1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.txt2 {
  position: relative;
  font-size: 0.75em;
  line-height: 100%;
  font-weight: 300;
  color: #8181a5;
}
.txt1-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.19em;
}
.checkboxdone-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.status-all-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.buttons-tabs {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.statusbar-cards {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: flex-start;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.field-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.jjjxxx812300 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  height: 100%;
  overflow-y: auto;
}
.pull-stats-inner {
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.pull-stats {
  align-self: stretch;
  border-radius: 24px;
  background-color: #fff;
  border: 1px solid #abb0bd;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.63em 0.63em 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.pull-stats-wrapper {
  position: absolute;
  top: 0.97em;
  left: 0em;
  width: 23.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}
.div11 {
  position: relative;
  font-size: 0.75em;
}
.filtr {
  border-radius: 8.79px;
  background-color: #fff;
  border: 0.3px solid #656060;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  align-items: center;
  justify-content: center;
}
.filtr-wrapper {
  position: absolute;
  top: 0em;
  left: 0.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 0em 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
}
.pull {
  width: 23.75em;
  height: 22.94em;
}
.pull-parent {
  position: relative;
  width: 100%;
  height: 28em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  cursor: pointer;
  &:hover .pull-stats {
    background-color: #fcfcfe;
  }
}
.button-wrapper {
  margin-top: 20px;
  width: 357px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: #f9fbff;
  padding: 10px;
  display: flex;
}
</style>
