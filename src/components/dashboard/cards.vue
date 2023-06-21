<template>
  <div class="div9">
    <div class="col-titles-bg"></div>
    <div class="header6">
      <div class="div10">Дашбоард</div>
    </div>
    <div class="menu-2-parent">
      <img class="menu-2-icon" alt="" src="@/assets/images/iconssort.svg" />

      <div class="div11">(1)</div>
    </div>
    <div class="cardsdashboard">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="frame-group">
            <div class="checkboxdone-parent">
              <div class="checkboxdone"></div>
              <div class="group">
                <div class="div12">Алексей Иванов</div>
                <div class="id-100">ID #100</div>
              </div>
            </div>
            <div class="statusapplication">
              <div class="div13">ROI 60%</div>
            </div>
          </div>
        </div>
        <div class="buttonsslider-dashboard">
          <button-slider
            :variantIndex="2"
            :tabs="['Кол-вл займов', 'Займы в TON']"
          ></button-slider>
        </div>
        <div class="info">
          <div class="field">
            <div class="field1">
              <div class="div15">Всего пуллов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div16">160</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div18">30</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов активно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div16">105</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов погашено:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click3">
                <div class="div22">10</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов пророченно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div24">7</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов на продаже:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">6</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов продано:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <div class="text-and-button" @click="toAnalytics">
            <div class="buttons-tabs" id="buttonsTabsContainer">
              <div class="text">
                <span class="span">См</span>
                <span class="span1">. д</span>
                <span class="span">етальную аналитику</span>
              </div>
            </div>
            <div class="buttons-tabs1">
              <div class="text1">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardsdashboard1">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="frame-group">
            <div class="checkboxdone-parent">
              <div class="checkboxdone"></div>
              <div class="group">
                <div class="div12">Алексей Иванов</div>
                <div class="id-100">ID #100</div>
              </div>
            </div>
            <div class="statusapplication">
              <div class="div13">ROI 60%</div>
            </div>
          </div>
        </div>
        <div class="buttonsslider-dashboard">
          <div class="button-slider">
            <div class="fill"></div>
            <div class="div14">Кол-во займов</div>
            <div class="ton" id="tONText1">Займы в TON</div>
          </div>
        </div>
        <div class="info">
          <div class="field">
            <div class="field1">
              <div class="div15">Всего пуллов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div16">160</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div18">30</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов активно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div16">105</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов погашено:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click3">
                <div class="div22">10</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов пророченно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div24">7</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов на продаже:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">6</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов продано:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <div class="text-and-button" @click="toAnalytics">
            <div class="buttons-tabs" id="buttonsTabsContainer2">
              <div class="text">
                <span class="span">См</span>
                <span class="span1">. д</span>
                <span class="span">етальную аналитику</span>
              </div>
            </div>
            <div class="buttons-tabs1">
              <div class="text1">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardsdashboard2">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="frame-group">
            <div class="checkboxdone-parent">
              <div class="checkboxdone"></div>
              <div class="group">
                <div class="div12">Алексей Иванов</div>
                <div class="id-100">ID #100</div>
              </div>
            </div>
            <div class="statusapplication">
              <div class="div13">ROI 60%</div>
            </div>
          </div>
        </div>
        <div class="buttonsslider-dashboard">
          <div class="button-slider">
            <div class="fill"></div>
            <div class="div14">Кол-во займов</div>
            <div class="ton" id="tONText2">Займы в TON</div>
          </div>
        </div>
        <div class="info">
          <div class="field">
            <div class="field1">
              <div class="div15">Всего пуллов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div16">160</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div18">30</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов активно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div16">105</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов погашено:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click3">
                <div class="div22">10</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов пророченно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div24">7</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов на продаже:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">6</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов продано:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <div class="text-and-button" @click="toAnalytics">
            <div class="buttons-tabs" id="buttonsTabsContainer4">
              <div class="text">
                <span class="span">См</span>
                <span class="span1">. д</span>
                <span class="span">етальную аналитику</span>
              </div>
            </div>
            <div class="buttons-tabs1">
              <div class="text1">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardsdashboard3">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="frame-group">
            <div class="checkboxdone-parent">
              <div class="checkboxdone"></div>
              <div class="group">
                <div class="div12">Алексей Иванов</div>
                <div class="id-100">ID #100</div>
              </div>
            </div>
            <div class="statusapplication">
              <div class="div13">ROI 60%</div>
            </div>
          </div>
        </div>
        <div class="buttonsslider-dashboard">
          <div class="button-slider">
            <div class="fill"></div>
            <div class="div14">Кол-во займов</div>
            <div class="ton" id="tONText3">Займы в TON</div>
          </div>
        </div>
        <div class="info">
          <div class="field">
            <div class="field1">
              <div class="div15">Всего пуллов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div16">160</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click">
                <div class="div18">30</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов активно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div16">105</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов погашено:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click3">
                <div class="div22">10</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов пророченно:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div24">7</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Займов на продаже:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">6</div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field1">
              <div class="div15">Займов продано:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
          <div class="field2">
            <div class="field1">
              <div class="div15">Выдано займов:</div>
              <div class="col-titles-bg1"></div>
              <div class="container-click2">
                <div class="div26">2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <div class="text-and-button" @click="toAnalytics">
            <div class="buttons-tabs" id="buttonsTabsContainer6">
              <div class="text">
                <span class="span">См</span>
                <span class="span1">. д</span>
                <span class="span">етальную аналитику</span>
              </div>
            </div>
            <div class="buttons-tabs1">
              <div class="text1">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--ДОБАВИТЬ ПАГИНАЦИЮ-->
    <!--<div class="paginationfield">
      <div class="numbers">
        <div class="paginationnumber">
          <div class="div88">1</div>
        </div>
        <div class="paginationnumber1">
          <div class="div88">2</div>
        </div>
        <div class="paginationnumber">
          <div class="div88">3</div>
        </div>
        <div class="paginationnumber">
          <div class="div88">4</div>
        </div>
        <div class="paginationnumber">
          <div class="div88">5</div>
        </div>
      </div>
      <div class="active-bg"></div>
      <button-icon ></button-icon>
      <img class="buttonback-icon" alt="" src="./public/buttonback.svg" />
    </div>-->
    <div class="filter-2">
      <div class="col-titles-bg33"></div>
      <div class="div93">Фильтр:</div>
      <div class="filter-2-inner">
        <div class="frame-wrapper">
          <div class="frame-parent3">
            <div class="parent3">
              <div class="div94">Выберите статус:</div>
              <div class="fields-password-and-mail2">
                <div class="parent4">
                  <div class="div95">Все пуллы</div>
                  <img
                    class="menu-2-icon"
                    alt=""
                    src="@/assets/images/chevron-right.svg"
                  />
                </div>
              </div>
            </div>
            <div class="parent3">
              <div class="div94">Выберите дату:</div>
              <div class="fields-password-and-mail-container">
                <div class="fields-password-and-mail3">
                  <div class="parent4">
                    <div class="div95">08.17.2023</div>
                  </div>
                </div>
                <div class="iconscalendar-wrapper" id="frameContainer16">
                  <img
                    class="menu-2-icon"
                    alt=""
                    src="@/assets/images/iconscalendar.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-2-child"></div>
      <div class="vector-wrapper" id="frameContainer22"></div>
    </div>

    <div class="buttonback" @click="toBack">
      <div class="div105">Назад</div>
      <img class="search-icon" alt="" src="@/assets/images/search-icon.svg" />
    </div>
  </div>

  <div id="container" class="popup-overlay" style="display: none">
    <div class="div8">
      <div class="modal-date-picker">
        <div class="header-parent">
          <div class="header">
            <div class="options">
              <div class="close-icon-button">
                <div class="container1">
                  <div class="state-layer"></div>
                </div>
              </div>
              <div class="button">
                <div class="label-text">
                  <div class="label-text1">Сохранить</div>
                </div>

                <div class="state-layer1"></div>
              </div>
            </div>
            <div class="labe-date-icon-button">
              <div class="label-date">
                <div class="section-header">Выберите дату или введите:</div>
                <div class="selected-date">Авг 23 – Авг 23</div>
              </div>
              <div class="close-icon-button">
                <div class="container1">
                  <div class="state-layer"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-field">
            <div class="label-text2">
              <div class="label-text3">Дата</div>
            </div>

            <div class="input-text">
              <div class="input-text1">08.17.2023</div>
              <div class="cursor"></div>
            </div>
            <div class="delete-icon-button">
              <div class="close-icon-button">
                <div class="container1">
                  <div class="state-layer"></div>
                </div>
              </div>
            </div>
            <div class="trailing-icon-button">
              <div class="close-icon-button">
                <div class="container1">
                  <div class="state-layer4"></div>
                </div>
              </div>
            </div>
            <div class="supporting-text">
              <div class="supporting-text1">MM/DD/YYYY</div>
            </div>
          </div>
        </div>
        <div class="days-of-the-week-parent">
          <div class="days-of-the-week">
            <div class="sunday">
              <div class="date">ПН</div>
            </div>
            <div class="sunday">
              <div class="date">ВТ</div>
            </div>
            <div class="sunday">
              <div class="date">СР</div>
            </div>
            <div class="sunday">
              <div class="date">ЧТ</div>
            </div>
            <div class="sunday">
              <div class="date">ПТ</div>
            </div>
            <div class="sunday">
              <div class="date">СБ</div>
            </div>
            <div class="sunday">
              <div class="date">ВС</div>
            </div>
          </div>
          <div class="months">
            <div class="month">
              <div class="header1">
                <div class="august-2023">Август 2023</div>
              </div>
              <div class="week-1">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">1</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">2</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">3</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">4</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="saturday1">
                  <div class="container9">
                    <div class="day4">5</div>
                    <div class="state-layer9"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">6</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">7</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">8</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">9</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">10</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">11</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">12</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">13</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">14</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">15</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">16</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="thursday3">
                  <div class="container21">
                    <div class="day">17</div>
                    <div class="state-layer21"></div>
                  </div>
                  <div class="range-highlight-end"></div>
                  <div class="range-highlight-start"></div>
                </div>
                <div class="friday3">
                  <div class="container22">
                    <div class="day">18</div>
                    <div class="state-layer5"></div>
                  </div>
                  <div class="range-highlight-left"></div>
                  <div class="range-highlight-start"></div>
                </div>
                <div class="saturday3">
                  <div class="container22">
                    <div class="day">19</div>
                    <div class="state-layer5"></div>
                  </div>
                  <div class="range-highlight-left"></div>
                  <div class="range-highlight-start"></div>
                </div>
              </div>
              <div class="week-4">
                <div class="sunday4">
                  <div class="container22">
                    <div class="day">20</div>
                    <div class="state-layer5"></div>
                  </div>
                  <div class="range-highlight-left"></div>
                  <div class="range-highlight-start"></div>
                </div>
                <div class="monday4">
                  <div class="container22">
                    <div class="day">21</div>
                    <div class="state-layer5"></div>
                  </div>
                  <div class="range-highlight-left"></div>
                  <div class="range-highlight-start"></div>
                </div>
                <div class="monday4">
                  <div class="container22">
                    <div class="day">22</div>
                    <div class="state-layer5"></div>
                  </div>
                  <div class="range-highlight-left"></div>
                  <div class="range-highlight-start"></div>
                </div>
                <div class="thursday3">
                  <div class="container21">
                    <div class="day">23</div>
                    <div class="state-layer21"></div>
                  </div>
                  <div class="range-highlight-left"></div>
                  <div class="range-highlight-start1"></div>
                </div>
                <div class="thursday4">
                  <div class="container5">
                    <div class="day">24</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="thursday4">
                  <div class="container5">
                    <div class="day">25</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="thursday4">
                  <div class="container5">
                    <div class="day">26</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">27</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">28</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">29</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">30</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">31</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
              <div class="week-6">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
            </div>
            <div class="month1">
              <div class="header2">
                <div class="august-2023">Сентябрь 2023</div>
              </div>
              <div class="week-11">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">1</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day">2</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">3</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">4</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">5</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">6</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">7</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">8</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">9</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">10</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">11</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">12</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">13</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">14</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">15</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">16</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">17</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">18</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">19</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">20</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">21</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">22</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">23</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">24</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">25</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">26</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">27</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">28</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">29</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">30</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-6">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
            </div>
            <div class="month1">
              <div class="header2">
                <div class="august-2023">October 2023</div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">1</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">2</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">3</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">4</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">5</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">6</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">7</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">8</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">9</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">10</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">11</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">12</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">13</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">14</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">15</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">16</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">17</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">18</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">19</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">20</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">21</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">22</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">23</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">24</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">25</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">26</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">27</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">28</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">29</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">30</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">31</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
              <div class="week-6">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
            </div>
            <div class="month1">
              <div class="header2">
                <div class="august-2023">November 2023</div>
              </div>
              <div class="week-1">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">1</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">2</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">3</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">4</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">5</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">6</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">7</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">8</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">9</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">10</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">11</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">12</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">13</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">14</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">15</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">16</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">17</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">18</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">19</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">20</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">21</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">22</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">23</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">24</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">25</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">26</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">27</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">28</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">29</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">30</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
              <div class="week-6">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
            </div>
            <div class="month1">
              <div class="header2">
                <div class="august-2023">December 2023</div>
              </div>
              <div class="week-1">
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">1</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">2</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">3</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">4</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">5</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">6</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">7</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">8</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">9</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">10</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">11</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">12</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">13</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">14</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">15</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">16</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">17</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">18</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">19</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">20</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">21</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">22</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">23</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">24</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">25</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">26</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">27</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">28</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">29</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">30</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
              </div>
              <div class="week-1">
                <div class="tuesday1">
                  <div class="container5">
                    <div class="day4">31</div>
                    <div class="state-layer5"></div>
                  </div>
                </div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
                <div class="sunday1"></div>
              </div>
            </div>
          </div>
          <div class="actions">
            <div class="button">
              <div class="label-text">
                <div class="label-text5">Закрыть</div>
              </div>

              <div class="state-layer1"></div>
            </div>
            <div class="button">
              <div class="label-text">
                <div class="label-text5">OK</div>
              </div>

              <div class="state-layer1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-bar></app-bar>
</template>

<script setup lang="ts">
import buttonSlider from "@/components/ui-kit/buttons/button-slider.vue";
import { useRouter } from "vue-router";
import buttonIcon from "@/components/ui-kit/buttons/button-icon.vue";
import appBar from "@/components/ui-kit/app-bar.vue";
const router = useRouter();
const toAnalytics = () => {
  router.push({ name: "dashboard-analytics" });
};
const toBack = () => {
  router.push({ name: "dashboard" });
};
</script>

<style scoped>
.col-titles-bg {
  position: absolute;
  width: calc(100% - 358px);
  top: 27.63em;
  right: -0.75em;
  left: 23.13em;
  border-radius: 18px;
  background-color: #f6f4fc;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
}
.div10 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header6 {
  position: relative;
  top: 5.81em;

  border-radius: 7px;
  width: 77vw;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 0.71em;
  font-weight: 300;
}
.menu-2-parent {
  position: relative;
  /* top: 9.81em; */
  /* left: 18.56em; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
  top: 7.8em;
  right: 12vw;
  z-index: 1;
  color: #5d83f7;
}
.checkboxdone {
  position: relative;
  border-radius: 4.14px;
  border: 0.8px solid #a592dd;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.div12,
.id-100 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div12 {
  font-weight: 600;
  display: inline-block;
  width: 8.43em;
}
.id-100 {
  color: #b5b5c3;
}
.checkboxdone-parent,
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.checkboxdone-parent {
  position: relative;
  top: 0.03em;
  left: 0;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}
.div13 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.statusapplication {
  position: relative;
  /* left: 10.38em; */
  border-radius: 24px;
  background-color: #a592dd;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 32.1vw;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.frame-group {
  position: relative;
  width: 100%;
  height: 2.5em;
  display: flex;
  justify-content: space-between;
}
.header-info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 77vw;
}
.fill {
  position: absolute;
  top: 0.13em;
  left: 0.13em;
  border-radius: 16px;
  background-color: #fdd674;
  width: 9.19em;
  height: 1.94em;
}
.div14,
.ton {
  position: absolute;
  top: 0.71em;
  left: 1.79em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.ton {
  left: 13.29em;
  color: #8181a5;
  cursor: pointer;
}
.button-slider {
  align-self: stretch;
  position: relative;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  height: 2.19em;
  overflow: hidden;
  flex-shrink: 0;
}
.buttonsslider-dashboard {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
}
.div15 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
  z-index: 0;
}
.col-titles-bg1 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: 9.44em;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 1.25em;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
  z-index: 1;
}
.div16 {
  position: absolute;
  top: calc(50% - 9px);
  right: 7em;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.container-click {
  position: absolute;
  margin: 0 !important;
  top: -0.56em;
  left: 9.44em;
  width: 40vw;
  height: 2.38em;
  z-index: 2;
  color: #577ef7;
}
.field1 {
  width: 18.75em;
  height: 1.25em;
  display: flex;
  flex-direction: row;
  padding: 0 0.56em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 1.63em;
}
.field {
  align-self: stretch;
  border-radius: 6px;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.div18 {
  position: absolute;
  top: calc(50% - 9px);
  right: 7.5em;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.field2 {
  align-self: stretch;
  border-radius: 6px;
  background-color: rgba(165, 146, 221, 0.04);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.container-click2 {
  position: absolute;
  margin: 0 !important;
  top: -0.62em;
  left: 9.44em;
  width: 40vw;
  height: 2.5em;
  z-index: 2;
  color: #577ef7;
}
.div22 {
  position: absolute;
  top: calc(50% - 9px);
  right: 7.64em;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.container-click3 {
  position: absolute;
  margin: 0 !important;
  top: -0.62em;
  left: 9.44em;
  width: 40vw;
  height: 2.5em;
  z-index: 2;
  color: rgba(87, 126, 247, 0.96);
}
.div24,
.div26 {
  position: absolute;
  top: calc(50% - 9px);
  right: 8.21em;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div26 {
  right: 8.14em;
}
.info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  color: #737373;
}
.span {
  letter-spacing: 0.02em;
}
.span1 {
  letter-spacing: 0.03em;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  height: 2em;
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.text1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
  color: #555562;
}
.text-and-button {
  flex: 1;
  width: 71vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.des-and-bbn {
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 77vw;
  padding: 0.75em;
  text-align: right;
  color: #fefefe;
}
.cardsdashboard,
.cardsdashboard1,
.cardsdashboard2,
.cardsdashboard3,
.des-and-bbn,
.full-ifo-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.full-ifo-card {
  width: 77vw;
  gap: 1em;
}
.cardsdashboard,
.cardsdashboard1,
.cardsdashboard2,
.cardsdashboard3 {
  position: absolute;
  top: 20em;
  left: 1.5em;
  border-radius: 24px;
  background-color: #fbf9fd;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 87.7vw;
  overflow: hidden;
  padding: 1.25em 1.31em;
}
.cardsdashboard1,
.cardsdashboard2,
.cardsdashboard3 {
  top: 58em;
}
.cardsdashboard2,
.cardsdashboard3 {
  top: 96em;
}
.cardsdashboard3 {
  top: 134em;
}
.div88 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
}
.paginationnumber,
.paginationnumber1 {
  border-radius: 6px;
  border: 1px solid rgba(46, 58, 89, 0.04);
  box-sizing: border-box;
  width: 2.56em;
  height: 2.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.paginationnumber {
  background-color: #fff;
}
.paginationnumber1 {
  background: linear-gradient(#f5f9ff, #f5f9ff),
    linear-gradient(rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #fff;
  color: rgba(87, 126, 247, 0.96);
}
.numbers {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.06em 0;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.active-bg {
  position: absolute;
  margin: 0 !important;
  top: 3em;
  right: 12.62em;
  border-radius: 1px;
  background-color: #5e81f4;
  width: 2.31em;
  height: 0.13em;
  z-index: 1;
}
.buttonback-icon {
  position: relative;
  border-radius: 9px;
  width: 2.5em;
  height: 2.5em;
  z-index: 2;
}
.paginationfield {
  position: absolute;
  top: 172.75em;
  left: calc(50% - 144px);
  height: 3.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  text-align: center;
}
.col-titles-bg33 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 18px 18px 16px 16px;
  background-color: rgba(246, 244, 252, 0.5);
}
.div93 {
  position: absolute;
  top: 16.13%;
  left: 6.14%;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 500;
}
.div94,
.div95 {
  position: relative;
}
.div94 {
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.div95 {
  font-size: 0.88em;
  line-height: 120%;
}
.parent4 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail2,
.parent3 {
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
}
.parent3 {
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
.fields-password-and-mail3,
.iconscalendar-wrapper {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fields-password-and-mail3 {
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  border: 0.5px solid #f2f2f2;
  flex-direction: column;
  padding: 0.5em 0.75em;
}
.iconscalendar-wrapper {
  border-radius: 14px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  padding: 0.63em;
}
.fields-password-and-mail-container {
  align-self: stretch;
  align-items: flex-start;
  gap: 0.38em;
}
.fields-password-and-mail-container,
.filter-2-inner,
.frame-parent3,
.frame-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.frame-parent3 {
  align-self: stretch;
  width: 100%;
  align-items: flex-start;
  gap: 0.75em;
}
.filter-2-inner,
.frame-wrapper {
  align-items: center;
  width: 100%;
}
.filter-2-inner {
  position: relative;
  height: 41.29%;
  width: 77vw;
  top: 46.45%;
  /* right: 6.14%; */
  bottom: 12.26%;
  /* left: 6.14%; */
  text-align: left;
  margin: 0 auto;
  justify-content: space-between;
}
.filter-2-child {
  position: absolute;
  height: 0.65%;
  width: 88.01%;
  top: 35.81%;
  right: 5.7%;
  bottom: 63.55%;
  left: 6.29%;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
}
.vector-icon {
  position: relative;
  width: 1.13em;
  height: 0.75em;
}
.vector-wrapper {
  position: absolute;
  height: 7.74%;
  width: 5.26%;
  top: 17.42%;
  right: 8.48%;
  bottom: 74.84%;
  left: 86.26%;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
.filter-2 {
  position: absolute;
  top: 8.56em;
  left: 1.5em;
  width: 87.7vw;
  height: 9.69em;
  text-align: center;
}
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.4%;
  right: 7.61%;
  bottom: 34.85%;
  left: 86.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.wifi-icon {
  position: relative;
  width: 0.95em;
  height: 0.69em;
}
.mobile-signal-icon {
  position: relative;
  width: 1.06em;
  height: 0.67em;
}
.div98 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style,
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 24.38em;
  height: 2.75em;
  text-align: center;
  color: #1c1c1c;
}
.home-icon {
  position: absolute;
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div100 {
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
.div101 {
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
  cursor: pointer;
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
.div102 {
  position: absolute;
  top: 3.6em;
  left: 0.18em;
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
  cursor: pointer;
  z-index: 2;
  color: rgba(48, 51, 55, 0.9);
}
.div103 {
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
  cursor: pointer;
  z-index: 3;
}
.div104 {
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
  opacity: 0;
}
.status1 {
  top: 0.63em;
  left: 8em;
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
  z-index: 8;
}

.div105 {
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
  height: 1.37%;
  width: 102px;
  top: 1.78%;
  right: 67.69%;
  bottom: 96.85%;
  left: 6.15%;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.div9,
.icon {
  position: relative;
}
.div9 {
  background-color: #fff;
  width: 100%;
  height: 182.75em;
  overflow: hidden;
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
</style>
