<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PanelWrap :title="'九大行业'" :style="{ height: '948px' }">
    <div class="container" ref="echartsRef">
      <div class="head">
        <div class="legend proj">项目数量</div>
        <div class="legend buss">商机数量</div>
      </div>


      <div class="myechart" v-for="(item, idx) of arr" :key="item.name">
        <div :style="{ display: 'flex', marginBottom: '12px' }">
          <img :src='item.iconSrc' />
          <span>{{ item.name }}</span>
        </div>
        <div :style="{ display: 'flex' }">
          <div class="aechart" :ref="dom => doms[idx] = dom"></div>
          <div :style="{ display: 'flex', flexDirection: 'column', lineHeight: '16px' }">
            <span :style="{ fontSize: '14px' }">{{ item.nProject }}</span>
            <span :style="{ fontSize: '14px' }">{{ item.nBusiness }}</span>
          </div>
        </div>
      </div>

    </div>
  </PanelWrap>
</template>

<script lang="ts" setup>
import PanelWrap from '../panel-wrap.vue';
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue';
import { config } from './config'
import * as omgService from '@/api/service/omg.service'

type Obj = {
  name: string,
  nBusiness: number,
  nProject: number,
  iconSrc: string,
  instance?: echarts.ECharts,
}

const arr = ref<Obj[]>([
  {
    name: '党政',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/数译_政府.png')
  },
  {
    name: '军警司法',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/公安盾牌,安全,保护.png')
  },
  {
    name: '交通',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/交通.png')
  },
  {
    name: '互联网',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/网络.png')

  },
  {
    name: '医疗卫生',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/医疗服务.png')

  },
  {
    name: '工业能源',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/材料与能源.png')

  },
  {
    name: '教育',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/教育.png')
  },
  {
    name: '金融业',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/金融.png')
  },
  {
    name: '农商',
    nBusiness: 0,
    nProject: 0,
    iconSrc: require('@/assets/images/农商.png')
  }
])

const doms: any[] = []

const echartsRef = ref<HTMLElement>()

const runService = () => {
  const fn = async () => {
    try {
      const { data } = await omgService.getIndustroies()
      const obj: Record<string, any> = {}
      data?.data?.RULE?.forEach((item: any) => {
        obj[item.industry_name] = item
      })
      arr.value.forEach((item) => {
        item.nBusiness = obj[item.name].business_num
        item.nProject = obj[item.name].proj_num
      })
    } catch (err) {
      //
    }
  }

  fn()
  setInterval(fn, 1000 * 30)
}

onMounted(() => {
  arr.value.forEach((item, idx) => {
    const instance = echarts.init(doms[idx])
    instance.setOption(config)
    item.instance = instance
  })

  runService()
})

</script>

<style lang="less" scoped>
.container {
  padding: 18px 31px;
}

.legend {

  // line-height: 0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
}

.proj {
  color: #7FFFFF;

  &:after {
    content: ' ';
    width: 12px;
    height: 12px;
    background: linear-gradient(90deg, #177171 0%, #00FFFF 100%);

    top: 3px;
    left: 10px;
    position: relative;
  }
}

.buss {
  color: #F1FFBA;
  margin-left: 80px;

  &:after {
    content: ' ';
    width: 12px;
    height: 12px;
    background: linear-gradient(90deg, #5C6C1B 0%, #E7FF85 100%);

    top: 3px;
    left: 10px;
    position: relative;
  }
}

.head {
  display: flex;
  margin-bottom: 36px;

}

.myechart {
  color: #A3D1FF;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  img {
    width: 18px;
    height: 18px;
  }

  span {
    margin-left: 10px;
  }

  .aechart {
    width: 200px;
    height: 42px;
    padding-left: 10px;
  }

  &+& {
    margin: 20px 0 0;
  }

  &:nth-of-type(1) {}

}
</style>