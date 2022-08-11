// import * as echarts from 'echarts'

export const mapName = 'Province-ZJ'

const tooltipStyle = {
  head: `'
    font-size: 18px;
    line-height: 36px;
  '`,
  body: `'
    font-size: 16px;
  '`,
}

const config = {
  title: {
    // text: 'Population Density of Hong Kong （2011）',
    // subtext: 'Data from Wikipedia',
    // sublink:
    //   'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
  },
  tooltip: {
    trigger: 'item',
    textStyle: {
      fontSize: '14px'
    },
    formatter: (params: any) => {
      return `
        <div>
          <div style=${tooltipStyle.head}>${params.name}</div>
          <div style=${tooltipStyle.body}>项目数：${params.data.nProject}</div>
          <div style=${tooltipStyle.body}>商机数：${params.data.nBusiness}</div>
        </div>
      `
    }
  },
  visualMap: {
    bottom: 0,
    right: 100,
    textStyle:
    {
      color: '#7FC4FF'
    },
    pieces: [
      {
        gt: 0,
        lte: 500,
        color: '#27438D'
      },
      {
        gte: 501,
        lte: 1000,
        color: '#00578C'
      },
      {
        gte: 1001,
        lte: 1500,
        color: '#00228D'
      },
      {
        gte: 1001,
        lte: 1500,
        color: '#00228D'
      },
      {
        gte: 1501,
        color: '#25008E'
      }
    ]
  },
  geo: [
    {
      show: true,
      map: mapName,
      zoom: 1.2,
      aspectScale: 1, // 地图的长宽比
      itemStyle: {
        areaColor: '#004c81',
        shadowColor: '#0098d9',
        shadowBlur: 2,
        shadowOffsetX: 1,
        shadowOffsetY: 8,
      }
    },

  ],
  series: [
    {
      name: '浙江省',
      type: 'map',
      map: mapName,
      zoom: 1.2,
      aspectScale: 1, // 地图的长宽比
      label: {
 
          show: true,
          color: 'white',
          fontSize: 14,
          textShadowColor: 'black',
          textShadowBlur: 10,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2,
  

      },
      itemStyle: {
        borderColor: '#33a5cd',
        borderWidth: 1,
      },
      emphasis: {
        label: {
          fontSize: 16,
          color: '#fff',
        },
        itemStyle: {
          areaColor: '#611dc6',
        }
      },
      select: {
        label: {
          color: '#fff',
        },
        itemStyle: {
          areaColor: '#611dc6',
          borderColor: '#2ab9ee',
          borderWidth: 2,
        }
      },
      data: [
        {
          name: '杭州市', value: 0,
        },
        {
          name: '宁波市', value: 0,
        },
        {
          name: '温州市', value: 0,
        },
        {
          name: '嘉兴市', value: 0,
        },
        {
          name: '湖州市', value: 0,
        },
        {
          name: '绍兴市', value: 0,
        },
        {
          name: '金华市', value: 0,
        },
        {
          name: '衢州市', value: 0,
        },
        {
          name: '舟山市', value: 0,
        },
        {
          name: '台州市', value: 0,
        },
        {
          name: '丽水市', value: 0,
        },
      ]
    },

  ]
}

export default config
