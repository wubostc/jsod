<template>
  <div>
    <div class="header">
      <div class="date-1">
        <div class="datetime">{{datatime}}</div>
        <div class="weekdays">{{weekdays}}</div>
      </div>

      <div class="logo-title-wrapper">
        <div class="title">
          <img src="@/assets/images/白色logo.png" alt="">
          <span>5G双域专网业务看板</span>
        </div>
      </div>

      <div class="time">
        {{time}}
      </div>
    </div>

    <div class="panel-flow">
      <PanelFlow />
    </div>

    <div class="panel-dev-scene">
      <PanelDevScene />
    </div>

    <div class="panel-current-loc">
      <PanelCurrentLoc />
    </div>

    
    <div class="panel-industries">
      <PanelIndustries />
    </div>

    <div class="geo-map"><GeoMap /></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import PanelFlow from '@/components/panel-flow/index.vue'
import PanelDevScene from '@/components/panel-dev-scene/index.vue'
import PanelCurrentLoc from './components/panel-current-loc/index.vue'
import PanelIndustries from './components/panel-industries/index.vue'
import GeoMap from './components/geo-map/index.vue'

/////////////////////////
const datatime = ref('')
const weekdays = ref('')
const time = ref('')

/////////////////////////
onMounted(() => {
  setInterval(() => {
    const day = dayjs();
    datatime.value = day.format('YYYY 年 M 月 D 日')
    weekdays.value = day.format('dddd')
    time.value = day.format('HH:mm:ss')
  }, 1000)
})

</script>

<style lang="less" scoped>

@text-color: #99E4FF;

.header {
  width: 100%;
  height: 127px;
  background-image: url('~@/assets/images/S01_slices/title.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  .date-1 {
    margin: 36px 0 0 0;
    padding: 8px 0 0;
    display: flex;
    font-size: 18px;
    .datetime {
      padding: 0 0 0 115px;
      color: @text-color;
    }

    .weekdays {
      padding: 0 0 0 31px;
      color: @text-color;
    }
  }

  .logo-title-wrapper {
    display: flex;
    margin: 27px 0 0;
    flex-grow: 1;
    .title {
      margin: 0 auto;
      color: #DCECFF;

      img {
        top: 10px;
        position: relative;
      }

      span {
        font-size: 32px;
        font-weight: bold;
        padding-left: 20px;
      }
    }
  }


  .time {
    padding-top: 41px;
    color: @text-color;
    font-size: 28px;
    padding-right: 190px;
  }
}


.panel-flow {
  position: absolute;
  left: 10px;
  top: 120px;
}

.panel-dev-scene {
  position: absolute;
  left: 10px;
  top: 728px;
}

.panel-industries {
  position: absolute;
  right: 12px;
  top: 120px;
}

.geo-map {
  width: 65vw;
  height: calc(100vh - 150px);
  margin: 0 auto;
}
</style>

<style>
body {
  background-color: #010101;
  height: 100%;
  position: relative;
  /* opacity: 0.5; */
  overflow: hidden;
}
</style>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; } 
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; } 
h1, h2, h3, h4, h5, h6{ font-size:100%; } 
address, cite, dfn, em, var { font-style:normal; } 
code, kbd, pre, samp { font-family:couriernew, courier, monospace; } 
small{ font-size:12px; } 
ul, ol { list-style:none; } 
a { text-decoration:none; } 
a:hover { text-decoration:underline; } 
sup { vertical-align:text-top; } 
sub{ vertical-align:text-bottom; } 
legend { color:#000; } 
fieldset, img { border:0; } 
button, input, select, textarea { font-size:100%; } 
table { border-collapse:collapse; border-spacing:0; }
</style>