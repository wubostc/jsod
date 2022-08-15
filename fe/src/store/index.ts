import { createStore } from 'vuex'
import { getToken } from '@/api/service/omg.service'


export enum AuthState {
  OK = 100,
  INVALID,
  PENDING
}

const defaultAuth = () => ({
  authorization: '',
  authState: AuthState.INVALID,
})

export default createStore({
  state: {
    authorization: '',
    authState: AuthState.INVALID,
  },
  getters: {
  },
  mutations: {
    setToken(state, auth = defaultAuth()) {
      state.authorization = auth.authorization
      state.authState = auth.authState
    }
  },
  actions: {
    async setToken({ commit, state }, payload: {
      authorization: string
      authState: AuthState
    }) {
      if (payload) {
        state.authState = AuthState.OK
        return commit('setToken', payload)
      }

      let newToken: string

      try {
        state.authState = AuthState.PENDING
        const { data } = await getToken()
        newToken = data?.data?.token || ''
        console.log('newToken', newToken.slice(0, 20) + '...')
        commit('setToken', {
          authorization: newToken,
          authState: AuthState.OK
        })
      } catch (err) {
        //
        console.log('err newToken', err)
      }
    }
  },
  modules: {
  }
})
