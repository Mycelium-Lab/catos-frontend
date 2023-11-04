<template>
  <div class="info-user">
    <div class="nav-bar">
      <div class="tags-grey">
        <b class="tag">Администратор</b>
      </div>
      <div class="buttons-icon-outline-arr-parent">
        <div class="buttons-icon-outline-arr">
          <div class="bg" />
          <img
            class="bell-icon"
            alt=""
            src="@/assets/desktop/fallback/bell.svg"
          />
          <div class="status">
            <img class="mask-icon" alt="" src="@/assets/desktop/mask.svg" />
            <b class="b">+1 </b>
          </div>
        </div>
        <div class="buttons-icon-outline-arr">
          <div class="bg" />
          <img class="icon" alt="" src="@/assets/desktop/more.svg" />
        </div>
      </div>
    </div>

    <div class="fields-and-photo-and-name">
      <div class="photo-and-name">
        <div class="photo">
          <img
            class="img-icon"
            alt=""
            src="@/assets/desktop/fallback/img@2x.png"
          />
          <!--<img class="status-icon" alt="" src="/status.svg" />-->
          <div class="vector-parent">
            <!--<img class="frame-child" alt="" src="/rectangle-327.svg" />-->
            <div class="upload-cloud-parent">
              <!-- <img class="upload-cloud-icon" alt="" src="/uploadcloud.svg" />-->
              <div class="div">Загрузить фото</div>
            </div>
          </div>
        </div>
        <div class="name">
          <b class="name1">Валентин Иванович Бабаев</b>
          <div class="job-title">Кредитор</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.bg-hover-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.tag {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.1em;
  font-size: 0.88em;
  line-height: 1.5em;
  font-family: Inter;
}
.tags-grey {
  position: relative;
  width: 145px;
  height: 2.25em;
  background: #f5f5fa;
  border-radius: 8px;
}
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  box-sizing: border-box;
}
.bell-icon {
  position: absolute;
  height: 55.56%;
  width: 55.56%;
  top: 22.22%;
  right: 22.22%;
  bottom: 22.22%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.mask-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.b {
  position: absolute;
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
  left: 7.14%;
  font-size: 0.41em;
  line-height: 120%;
  display: none;
}
.status {
  position: absolute;
  height: 38.89%;
  width: 38.89%;
  top: 8.33%;
  right: 8.33%;
  bottom: 52.78%;
  left: 52.78%;
}
.buttons-icon-outline-arr {
  position: relative;
  width: 2.25em;
  height: 2.25em;
}
.icon {
  position: absolute;
  top: calc(50% - 0.88px);
  left: calc(50% - 6.75px);
  width: 0.84em;
  height: 0.14em;
}
.buttons-icon-outline-arr-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
  text-align: right;
  color: rgba(255, 255, 255, 0.96);
  font-family: Inter;
}
.nav-bar {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.tag1 {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.21em;
  font-size: 0.88em;
  line-height: 1.5em;
}
.tags-grey1 {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
}
.img-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 16px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}
.status-icon {
  position: absolute;
  top: calc(50% + 12px);
  left: calc(50% + 13px);
  width: 0.75em;
  height: 0.75em;
  display: none;
}
.frame-child {
  position: absolute;
  top: 0em;
  left: 0em;
  border-radius: 26px;
  width: 4.63em;
  height: 4.63em;
}
.upload-cloud-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
  display: inline-block;
  width: 6.6em;
}
.upload-cloud-parent {
  position: absolute;
  top: 1.13em;
  left: 0.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.vector-parent {
  position: absolute;
  top: 5em;
  left: 0em;
  width: 4.63em;
  height: 4.63em;
}
.photo {
  position: relative;
  border-radius: 16px;
  width: 4.63em;
  height: 4.63em;
  overflow: hidden;
  flex-shrink: 0;
}
.name1 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 130%;
}
.job-title {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #8181a5;
}
.name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
  color: #3b3b3b;
}
.photo-and-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.56em;
}
.fields-and-photo-and-name {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
  font-family: Inter;
}
.info-user {
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
  text-align: center;
  color: #8181a5;
  font-family: Lato;
}
</style>
