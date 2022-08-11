<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="geo-map-container root-node" ref="element">

  </div>

  <div class="display-info" v-if="info.name">
    <div class="head">{{ info.name }}</div>
    <div class="body">
      <div>项目总数</div>
      <span>{{ info.projects }}</span>
    </div>
    <div class="body">
      <div>商机总数</div>
      <span>{{ info.businesses }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue'
import geozj from './geo/zhejiang.json'
import geozjmock from './geo/zhejiang-mock.json'
import config from './config'

const element = ref()
let mapInstance: echarts.ECharts
const info = ref({
  name: '',
  projects: 0,
  businesses: 0
})

const get = async () => {
  return [
    {
      name: '杭州市',
      value: 1200,
      nBusiness: 200,
      nProject: 1000,
    },
    {
      name: '宁波市',
      value: 123,
      nBusiness: 23,
      nProject: 100,
    },
    {
      name: '温州市',
      value: 11,
      nBusiness: 1,
      nProject: 10,
    },
    {
      name: '嘉兴市',
      value: 122,
      nBusiness: 1,
      nProject: 121,
    },
    {
      name: '湖州市',
      value: 55,
      nBusiness: 1,
      nProject: 54,
    },
    {
      name: '绍兴市', value: 1000,
      nBusiness: 666,
      nProject: 334,
    },
    {
      name: '金华市',
      value: 222222,
      nBusiness: 111111,
      nProject: 111111,
    },
    {
      name: '衢州市',
      value: 76,
      nBusiness: 60,
      nProject: 16,
    },
    {
      name: '舟山市',
      value: 777,
      nBusiness: 60,
      nProject: 717,
    },
    {
      name: '台州市',
      value: 777,
      nBusiness: 60,
      nProject: 717,
    },
    {
      name: '丽水市',
      value: 1,
      nBusiness: 0,
      nProject: 1,
    },
  ]
}

const runService = async (instance: echarts.ECharts) => {
  const fn = async () => {
    let data = [];
    try {
      data = await get()
    } catch (err) {
      console.log('runService', err)
      return
    }

    instance.setOption({
      series: [
        {
          name: '浙江省',
          type: 'map',
          map: 'Province-ZJ',
          data
        },
      ]
    }, false)

  }

  fn()

  setInterval(fn, 1000 * 60)
}

const onResize = () => {
  mapInstance?.resize();
}

const addSerise = () => {
  const effectScatterDataIndex = 1
  const itemStyle = {
    color: '#fcac00',
    shadowColor: '#ffae00'
  }
  const label = {
    show: false,
  }

  config.series[effectScatterDataIndex].data = geozjmock.AirQuality.map(i => {
    return {
      name: i.name,
      value: [i.g[1], i.g[0], +i.aqi || 0],

      itemStyle,
      label,
    }
  }).slice(0, 20) as any

}

onMounted(() => {
  mapInstance = echarts.init(element.value as HTMLElement)
  echarts.registerMap('Province-ZJ', geozj as any)
  addSerise()
  console.log('geojson', config)
  mapInstance.setOption(config)
  mapInstance.on('click', (ev: any = {}) => {
    const { name, data } = ev

    if (name === info.value.name) {
      info.value.name = ''
      return
    }

    info.value.name = name ?? '?';
    info.value.projects = data?.nProject ?? '?'
    info.value.businesses = data?.nBusiness ?? '?'
  })

  window.addEventListener('resize', onResize)

  runService(mapInstance)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

</script>

<style lang="less" scoped>
.geo-map-container.root-node {
  width: 100%;
  height: 100%;
}

.display-info {
  background-image: url('~@/assets/images/S01_slices/A-01.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 183px;
  position: absolute;
  top: 208px;
  left: 344px;

  color: white;
  padding: 31px;
  box-sizing: border-box;

  .head {
    text-align: center;
  }

  .body {
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;

    div {
      color: #7FC4FF;
      font-size: 14px;
    }

    span {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>