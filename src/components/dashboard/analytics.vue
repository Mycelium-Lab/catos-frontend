<template>
  <div class="div9">
    <div class="header6">
      <div class="div10">Аналитика пула #123345</div>
    </div>
    <div class="tables-light-mode">
      <div class="header7">
        <div class="button3">
          <div class="delete">Delete</div>
        </div>
        <div class="search">
          <img
            class="search-icon"
            alt=""
            src="@/assets/images/iconssearch.svg"
          />

          <div class="div11">Найти пул</div>
        </div>
        <div class="button4">
          <img class="menu-2-icon" alt="" src="@/assets/images/iconssort.svg" />

          <div class="delete">Фильтр</div>
        </div>
        <div class="iconscalendar-wrapper" id="frameContainer">
          <img
            class="menu-2-icon"
            alt=""
            src="@/assets/images/iconscalendar.svg"
          />
        </div>
      </div>
      <div class="component-25-wrapper">
        <div class="component-25" @click="toPulls">
          <div class="div13">Выбрать другой пул</div>
          <img
            class="menu-2-icon"
            alt=""
            src="@/assets/images/chevron-right.svg"
          />
        </div>
      </div>
    </div>
    <div class="graphsorders-mobile-01-parent">
      <div class="graphsorders-mobile-01">
        <div class="master">
          <div class="content-frame">
            <div class="elements-textbox-tablerow">
              <div class="description">
                <div class="title">Финансы</div>
                <div class="subtitle">Catos</div>
              </div>
            </div>
            <div class="text-frame">
              <div class="info-right-side">
                <div class="content">
                  <div class="title">1 420 000 TON</div>
                  <div class="info">+1.215 %</div>
                </div>
                <img
                  class="arrows-down-arrow-right"
                  alt=""
                  src="@/assets/images/down-arrow-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="divider">
          <div class="line"></div>
        </div>
        <div class="table">
          <div class="tabs">
            <div class="tabstextactive">
              <div class="tab-title">День</div>
            </div>
            <div class="tabstextresting">
              <div class="tab-title">Неделя</div>
            </div>
            <div class="tabstextresting">
              <div class="tab-title">Месяц</div>
            </div>
          </div>
          <chart :chartPairs="[]" id="1" />

          <!--<div class="days">
            <div class="div14">Апр</div>
            <div class="div14">Май</div>
            <div class="div16">Июнь</div>
            <div class="div17">Авг</div>
            <div class="div16">Сент</div>
            <div class="div16">Окт</div>
            <div class="div16">Ноябрь</div>
            <div class="div16">Декабрь</div>
          </div>-->
        </div>
        <div class="divider">
          <div class="line"></div>
        </div>
        <div class="slider-buttons">
          <div class="buttons-graphsordersdown">
            <div class="div22">Прибыль</div>
          </div>
          <div class="buttons-graphsordersdown">
            <div class="div22">Доход</div>
          </div>
          <div class="buttons-graphsordersdown2">
            <div class="div22">Расход</div>
          </div>
          <div class="buttons-graphsordersdown2">
            <div class="div22">ROI</div>
          </div>
        </div>
      </div>
      <div class="graphsorders-mobile-01">
        <div class="master">
          <div class="content-frame">
            <div class="elements-textbox-tablerow">
              <div class="description">
                <div class="title">Финансы</div>
                <div class="subtitle">Catos</div>
              </div>
            </div>
            <div class="text-frame">
              <div class="info-right-side">
                <div class="content">
                  <div class="title">1 420 000 TON</div>
                  <div class="info">+1.215 %</div>
                </div>
                <img
                  class="arrows-down-arrow-right"
                  alt=""
                  src="@/assets/images/down-arrow-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="divider">
          <div class="line"></div>
        </div>
        <div class="table">
          <div class="tabs">
            <div class="tabstextactive">
              <div class="tab-title">День</div>
            </div>
            <div class="tabstextresting">
              <div class="tab-title">Неделя</div>
            </div>
            <div class="tabstextresting">
              <div class="tab-title">Месяц</div>
            </div>
          </div>
          <chart :chartPairs="[]" id="2" />

          <!--<div class="days">
            <div class="div14">Апр</div>
            <div class="div14">Май</div>
            <div class="div16">Июнь</div>
            <div class="div17">Авг</div>
            <div class="div16">Сент</div>
            <div class="div16">Окт</div>
            <div class="div16">Ноябрь</div>
            <div class="div16">Декабрь</div>
          </div>-->
        </div>
        <div class="divider">
          <div class="line"></div>
        </div>
        <div class="slider-buttons">
          <div class="buttons-graphsordersdown">
            <div class="div22">Прибыль</div>
          </div>
          <div class="buttons-graphsordersdown">
            <div class="div22">Доход</div>
          </div>
          <div class="buttons-graphsordersdown2">
            <div class="div22">Расход</div>
          </div>
          <div class="buttons-graphsordersdown2">
            <div class="div22">ROI</div>
          </div>
        </div>
      </div>
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
import appBar from "@/components/ui-kit/app-bar.vue";
import Chart from "./chart.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toPulls = () => {
  router.push({ name: "pulls" });
};
</script>

<style scoped>
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
  top: 3.5em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.trash-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.delete {
  position: relative;
  font-size: 0.75em;
  line-height: 1.33em;
}
.button3 {
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  display: none;
  flex-direction: row;
  padding: 0.5em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25em;
}
.search-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.search {
  flex: 1;
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(0, 0, 0, 0.4);
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.button4 {
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  height: 2.56em;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25em;
}
.header7,
.iconscalendar-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  padding: 0.63em;
  align-items: center;
}
.header7 {
  align-self: stretch;
  border-radius: 16px 16px 0 0;
  background-color: #f6f4fc;
  border-bottom: 1px solid #f2f2f2;
  padding: 1em;
  align-items: flex-start;
  gap: 1em;
}
.div13 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.component-25 {
  align-self: stretch;
  border-radius: 18px;
  background-color: rgba(193, 172, 255, 0.2);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 3.25em;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  gap: 0.63em;
}
.component-25-wrapper,
.tables-light-mode {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.component-25-wrapper {
  align-self: stretch;
  padding: 0.63em 1em;
  text-align: center;
  color: #3b3b3b;
}
.tables-light-mode {
  position: relative;
  top: 6em;
  /* left: 1.47em; */
  border-radius: 16px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 87.7vw;
  overflow: hidden;
  padding: 0 0 0.5em;
  gap: 0.44em;
  text-align: left;
  color: #807a7a;
  margin: 0 auto;
}
.subtitle,
.title {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.subtitle {
  font-size: 0.75em;
  font-weight: 300;
  color: #09101d;
}
.description,
.elements-textbox-tablerow {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.description {
  justify-content: flex-start;
  gap: 0.13em;
}
.elements-textbox-tablerow {
  border-radius: 14px;
  background: linear-gradient(#f4f6f9, #f4f6f9), #fff;
  width: 7em;
  height: 3.69em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0.25em 0 0.25em 1em;
  box-sizing: border-box;
  justify-content: center;
}
.info {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 1px;
  line-height: 130%;
  font-weight: 600;
  color: #70ca98;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.arrows-down-arrow-right {
  position: relative;
  border-radius: 10px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.info-right-side {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75em;
}
.text-frame {
  display: flex;
  flex-direction: column;
  padding: 0.63em 0;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}
.content-frame {
  align-self: stretch;
  height: 3.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.master {
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  align-items: flex-start;
  justify-content: flex-start;
}
.divider,
.line,
.master {
  align-self: stretch;
}
.line {
  position: relative;
  background-color: #ebeef2;
  height: 0.06em;
}
.divider {
  display: flex;
  flex-direction: column;
  padding: 1.25em 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.tab-title {
  position: relative;
  font-size: 0.88em;
  font-weight: 600;
}
.tabstextactive {
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  overflow: hidden;
  padding: 0.69em 1.25em;
  justify-content: flex-start;
  color: #3b3b3b;
}
.tabs,
.tabstextactive,
.tabstextresting {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.tabstextresting {
  padding: 0.69em 1.25em;
  justify-content: flex-start;
}
.tabs {
  width: 19.38em;
  justify-content: space-between;
  z-index: 0;
  text-align: center;
  color: #8181a5;
}
.graph-icon {
  position: relative;
  width: 21.38em;
  height: 14.25em;
  z-index: 1;
}
.pin-icon {
  position: absolute;
  height: 61.22%;
  width: 20.48%;
  top: 12.24%;
  right: 79.52%;
  bottom: 26.53%;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.bg-icon {
  position: relative;
  width: 8.69em;
  height: 3.06em;
}
.b1,
.june-16 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.b1 {
  font-family: Inter;
  color: #1c1d21;
}
.june-16-parent {
  position: absolute;
  top: 0.44em;
  left: 3.04em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.pin,
.pin1 {
  position: absolute;
  margin: 0 !important;
  top: 6.38em;
  left: 9.31em;
  border-radius: 2px;
  width: 8.69em;
  height: 3.06em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
  font-family: Lato;
}
.pin1 {
  top: 13.69em;
  z-index: 3;
}
.div14 {
  color: #8181a5;
}
.div14,
.div16,
.div17 {
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
}
.div17 {
  display: inline-block;
  width: 1.79em;
  flex-shrink: 0;
}
.days,
.table {
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
}
.days {
  overflow-x: auto;
  flex-direction: row;
  padding: 0 0 0 1em;
  align-items: flex-start;
  gap: 2.5em;
  z-index: 4;
  color: #1c1d21;
}
.table {
  border-radius: 16px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1.13em;
  color: #c1c4c9;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div22 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.buttons-graphsordersdown,
.buttons-graphsordersdown2,
.slider-buttons {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}
.buttons-graphsordersdown {
  border-radius: 6px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 2em;
  padding: 0.38em 0.63em;
  gap: 0.25em;
}
.buttons-graphsordersdown2,
.slider-buttons {
  height: 1.5em;
}
.buttons-graphsordersdown2 {
  border-radius: 6px;
  padding: 0.38em 0.63em;
  gap: 0.25em;
}
.slider-buttons {
  align-self: stretch;
  overflow-x: auto;
  flex-shrink: 0;
  padding: 0.06em 0.63em 0.06em 1em;
  gap: 0.38em;
  text-align: center;
}
.description1,
.graphsorders-mobile-01 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.graphsorders-mobile-01 {
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 100%;
  height: 33.31em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 1.38em 0;
  align-items: center;
}
.description1 {
  align-self: stretch;
  align-items: flex-start;
  gap: 0.13em;
}
.elements-textbox-tablerow1 {
  border-radius: 14px;
  background: linear-gradient(#f4f6f9, #f4f6f9), #fff;
  width: 8em;
  height: 3.69em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: column;
  padding: 0.25em 0 0.25em 1em;
  box-sizing: border-box;
  justify-content: center;
}
.elements-textbox-tablerow1,
.master1,
.tabs1 {
  display: flex;
  align-items: flex-start;
}
.master1 {
  align-self: stretch;
  flex-direction: column;
  padding: 0 1.31em;
  justify-content: flex-start;
}
.tabs1 {
  width: 18.75em;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;
  text-align: center;
  color: #8181a5;
}
.pin3 {
  position: absolute;
  margin: 0 !important;
  top: 12.25em;
  left: 9.31em;
  border-radius: 2px;
  width: 8.69em;
  height: 3.06em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 3;
  font-family: Lato;
}
.days1,
.description2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.days1 {
  align-self: stretch;
  overflow-x: auto;
  flex-direction: row;
  padding: 0 0 0 1.31em;
  gap: 2.5em;
  z-index: 4;
  color: #1c1d21;
}
.description2 {
  width: 4.44em;
  flex-direction: column;
  gap: 0.13em;
}
.info2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
  color: #70ca98;
}
.pin4,
.pin5 {
  position: absolute;
  margin: 0 !important;
  top: 10.13em;
  left: 9.31em;
  border-radius: 2px;
  width: 8.69em;
  height: 3.06em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
  font-family: Lato;
}
.pin5 {
  top: 13.56em;
  z-index: 3;
}
.slider-buttons2 {
  align-self: stretch;
  height: 1.5em;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.06em 0.63em 0.06em 1.31em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.38em;
  text-align: center;
}
.elements-textbox-tablerow3 {
  border-radius: 14px;
  background: linear-gradient(#f4f6f9, #f4f6f9), #fff;
  height: 3.69em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.25em 1em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
}
.graphsorders-mobile-01-parent {
  position: relative;
  top: 8em;
  /* left: 1.5em; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75em;
  text-align: left;
  margin: 0 auto;
  width: 87.7vw;
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
.div62 {
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
.div64 {
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
.div65 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  background: linear-gradient(rgba(48, 51, 55, 0.9), rgba(48, 51, 55, 0.9)),
    rgba(255, 255, 255, 0.9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
.div66 {
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
  cursor: pointer;
  z-index: 2;
}
.div67 {
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
.div68 {
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
.b9,
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
.b9 {
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
.div9,
.icon {
  position: relative;
}
.div9 {
  background-color: #fff;
  width: 100%;
  height: 100em;
  overflow-y: auto;
  text-align: center;
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
