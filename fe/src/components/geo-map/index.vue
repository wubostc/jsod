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
import { onMounted, onUnmounted, reactive, ref, watch, watchEffect } from 'vue'
import geozj from './geo/zhejiang.json'
// import geozjmock from './geo/zhejiang-mock.json'
import config from './config'
import { getGeoCityPoint, getGeoPoint } from '@/api/service/omg.service'

const element = ref()
let mapInstance: echarts.ECharts
const info = ref({
  name: '浙江省',
  projects: 0,
  businesses: 0
})
let citiesData = reactive<any[]>([])

const getProvince = async () => {
  try {
    const { data } = await getGeoCityPoint()
    return data?.data?.RULE?.map((v: any) => {
      return {
        ...v,
        name: v.city_name,
        value: v.business_num + v.project_num,
        nBusiness: v.business_num ,
        nProject: v.project_num,
      }
    }) || []
  } catch (err) {
    //
  }

  return []
}

// 显示浙江省商机数/项目数
const showAggrCountCities = (data: any[], provinceName = '浙江省') => {
  info.value.name = provinceName
  let nBusiness = 0;
  let nProject = 0;
  data.forEach(d => {
    nBusiness += d.nBusiness
    nProject += d.nProject
  })
  info.value.projects = nProject
  info.value.businesses = nBusiness
}

const runService = async (instance: echarts.ECharts) => {
  const fn = async () => {
    let data1: any[] = [];
    let data2: any[] = [];
    try {
      const [_data1, _data2] = await Promise.allSettled([getProvince(), getGeoPoint()])


      /****************point **************/
      const itemStyle = {
        color: '#fcac00',
        shadowColor: '#ffae00'
      }
      const label = {
        show: false,
      }

      if (_data2.status === 'fulfilled') {
        const { data } = _data2.value
        data2 = data?.data.RULE

        data2 = data2.map((i: any) => {
          const [_, lng, lst] = i.gis.match(/\((\d+\.\d+) (\d+\.\d+)\)/)

          return {
            name: i.name,
            value: [+lng, +lst, i.value],

            itemStyle,
            label,
          }
        }).slice(0, 100)
      }
      /****************point **************/


      if (_data1.status === 'fulfilled') {
        data1 = _data1.value
        citiesData = data1
        showAggrCountCities(citiesData)
      }

      instance.setOption({
        series: [
          {
            data: data1,
          },
          {
            data: data2,
          }
        ]
      }, false)
    } catch (err) {
      console.log('err runService', err)
    }
  }

  fn()

  setInterval(fn, 1000 * 60)
}

const onResize = () => {
  mapInstance?.resize();
}


onMounted(() => {
  mapInstance = echarts.init(element.value as HTMLElement)
  echarts.registerMap('Province-ZJ', geozj as any)
  // addSerise()
  console.log('geojson', config)
  mapInstance.setOption(config)
  mapInstance.on('click', (ev: any = {}) => {
    const { name, data, seriesName } = ev
    if (seriesName === 'effectScatterData') {
      return
    }

    if (name === info.value.name) {
      showAggrCountCities(citiesData)
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