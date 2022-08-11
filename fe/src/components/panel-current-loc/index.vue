<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">

    <span>当期位置</span>
    <span>杭州市</span>

  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.container {
  background-image: url('~@/assets/images/loc.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 290px;
  height: 80px;

  position: absolute;
  left: 350px;
  top: 122px;

  display: flex;

  span:nth-child(1) {
    color: #A3D1FF;
    font-size: 18px;
    position: absolute;
    left: 65px;
    top: 31px;
  }

  span:nth-child(2) {
    color: #5CF5FF;
    font-size: 18px;
    position: absolute;

    left: 183px;
    top: 31px;
  }
}

</style>