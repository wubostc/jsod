<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PanelWrap :title="'发展场景'" :style="{ height: '340px' }">
    <div class="container">
      <div class="a">
        <img src="@/assets/images/远程办公2.png" />
      </div>
      <div class="b">
        <img src="@/assets/images/远程医疗.png" />
      </div>
      <div class="c">
        <img src="@/assets/images/工作机.png" />
      </div>
      <div class="d">
        <img src="@/assets/images/远程办公.png" />
      </div>
    </div>
  </PanelWrap>
</template>

<script lang="ts" setup>
import PanelWrap from '../panel-wrap.vue'


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.container {
  margin: 43px 0 0;
  color: #7FC4FF;

  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 34px 76px; 
  grid-template-areas: 
    "a b"
    "c d";


  .c {
    grid-area: c;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .d {
    grid-area: d; 
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .b {
    grid-area: b; 
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .a {
    grid-area: a; 
    display: flex;
    align-content: center;
    justify-content: center;
  }
}

</style>
