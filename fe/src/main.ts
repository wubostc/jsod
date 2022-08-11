import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

;(() => {
  console.log('VUE_APP_VERSION', process.env.VUE_APP_VERSION)
  console.log('VUE_APP_HOST', process.env.VUE_APP_HOST)
  console.log('VUE_APP_API_HOST', process.env.VUE_APP_API_HOST)
  console.log('VUE_APP_DOCUMENT_TITLE', process.env.VUE_APP_DOCUMENT_TITLE)

  document.title = process.env.VUE_APP_DOCUMENT_TITLE
})()

createApp(App)
// .use(store)
// .use(router)
.mount('#app')
