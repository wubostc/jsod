import api from "../api"


export const getFlow = async () => api.get(`/api/omg/flow`)

export const getIndustroies = async () => api.get(`/api/omg/industries`)
