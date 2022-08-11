import * as echarts from 'echarts'


export const config = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    show: false,
  },
  grid: {
    // left: '3%',
    // right: '4%',
    // bottom: '3%',
    // containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    show: false
  },
  yAxis: {
    type: 'category',
    data: [],
    show: false,
  },
  series: [
    {
      name: '项目数量',
      type: 'bar',
      barWidth: 12,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 1, color: '#177171' },
          { offset: 0, color: '#00FFFF' }
        ])
      },
      showBackground: true,
      data: [800]
    },
    {
      name: '商机数量',
      type: 'bar',
      barWidth: 12,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 1, color: '#5E7016' },
          { offset: 0, color: '#E4FF78' }
        ])
      },
      showBackground: true,
      data: [180]
    }
  ]
};

