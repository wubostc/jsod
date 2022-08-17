<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PanelWrap :title="'双域流程'" :style="{ height: '590px' }">
    <div class="container">
      <div class="flow-wrap">
        <div class="flow-a">
          <div class="flow-value"><span>{{res[0]?.value}}</span></div>
          <div class="flow-name">{{res[0]?.name}}</div>
        </div>

        <div class="flow-a">
          <div class="flow-value">{{res[2]?.value}}</div>
          <div class="flow-name">{{res[2]?.name}}</div>
        </div>

        <div class="flow-a">
          <div class="flow-value">{{res[4]?.value}}</div>
          <div class="flow-name">{{res[4]?.name}}</div>
        </div>
      </div>

      <div class="flow-wrap central-pic">
        <img src="@/assets/images/A-05A.png" />
      </div>

      <div class="flow-wrap">
        <div class="flow-b">
          <div class="flow-value"><span>{{res[1]?.value}}</span></div>
          <div class="flow-name">{{res[1]?.name}}</div>
        </div>

        <div class="flow-b">
          <div class="flow-value">{{res[3]?.value}}</div>
          <div class="flow-name">{{res[3]?.name}}</div>
        </div>

        <div class="flow-b">
          <div class="flow-value">{{res[5]?.value}}</div>
          <div class="flow-name">{{res[5]?.name}}</div>
        </div>
      </div>

    </div>

  </PanelWrap>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as omgService from '@/api/service/omg.service'
import PanelWrap from '../panel-wrap.vue'

type Res = {
  name: string;
  value: string;
}[]

const res = ref<Res>([])


const runService = () => {
  const fn = async () => {
    try {
      const { data } = await omgService.getFlow()
      res.value = data.data.RULE
    } catch (err) {
      //
    }
  }

  fn()
  setInterval(fn, 1000 * 10)
}

onMounted(async () => {
  runService()
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.container {
  display: flex;
  margin: 43px 0 0;
  color: #7FC4FF;


}

.central-pic {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}


.flow-value {
  font-size: 26px;
  font-family: DigitaldreamFat;
  font-weight: 400;
  color: #CCE7FF;
  text-align: end;
  width: 86px;
}

.flow-name {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #7FC4FF;
}


.flow-a {
  background-image: url('~@/assets/images/S01_slices/组_1.png');
  background-repeat: no-repeat;
  width: 135px;
  height: 76px;
  margin: 75px 0 0 6px;

  display: flex;
  flex-direction: column;
  padding: 9px 21px;
  box-sizing: border-box;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  // &:nth-of-type(2) {
  //   // top: 194px;
  // }

  // &:nth-of-type(3) {
  //   // top: 345px;
  // }
}



.flow-b {
  background-image: url('~@/assets/images/S01_slices/组_2.png');
  background-repeat: no-repeat;
  width: 135px;
  height: 76px;
  margin: 75px 0 0;

  display: flex;
  flex-direction: column;
  padding: 9px 21px;
  box-sizing: border-box;
}

</style>
