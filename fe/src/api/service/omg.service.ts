import api from ".."


export const getToken = async (uid = 1) => api.get(`/api/step/usr/gettoken?uid=${uid}`)

export const getFlow = async () => api.post(`/api/step/dui`, {
  CODE: "RULE",
  SCRIPT: "prj.screen.loadflow",
  DATA: {}
})

export const getIndustroies = async () => api.post(`/api/step/dui`, {
  CODE: "RULE",
  SCRIPT: "prj.screen.getindustries",
  DATA: {}
})

export const getGeoPoint = async () => api.post(`/api/step/dui`, {
  CODE: "RULE",
  SCRIPT: "prj.screen.geopoint",
  DATA: {}
})

export const getGeoCityPoint = async () => api.post(`/api/step/dui`, {
  CODE: "RULE",
  SCRIPT: "prj.screen.geocitypoint",
  DATA: {}
})