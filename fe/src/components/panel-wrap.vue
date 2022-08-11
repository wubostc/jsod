<template>
  <div class="panel-wrapper" :style="style">
    <template v-if="title">
      <div class="title">
        <span>{{title}}</span>
      </div>
    </template>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, StyleValue} from 'vue'

interface Props {
  title?: string;
  style?: StyleValue;
}
defineProps<Props>()

</script>

<style lang="less" scoped>
@title-color: #A3D1FF;

.panel-wrapper {
  width: 330px;
  // background: linear-gradient(90deg, rgba(0,12,26,0.3000) 0%, rgba(0,41,86,0.1000) 100%);


  background-image: url('~@/assets/images/S01_slices/矩形\ 2\ 拷贝\ 12.png');
  background-repeat: no-repeat;
  padding: 14px 13px;
  box-sizing: border-box;

  border: 1px solid #011d26;

  box-shadow: inset 0px 0px 6px 2px #001e27;
}

.title {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('~@/assets/images/S01_slices/组\ 4\(1\).png');
  width: 175px;
  height: 21.7px;
  // margin: 14px 0 0 13px;

  span {
    color: @title-color;
    font-size: 18px;
    position: relative;
    left: 48px;
    line-height: 0;
    font-family: Source Han Sans CN;
    font-weight: 400;
  }
}
</style>