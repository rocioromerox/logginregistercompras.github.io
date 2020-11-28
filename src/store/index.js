import Vue from 'vue'
import Vuex from 'vuex'

//llamada al método
import {auth} from './../firebase'
import router from './../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null
  },
  mutations: {
    crearUsuarioMutation (state, payload){
      state.usuario = payload
    },
    crearUsuarioMutationError(state, payload){
      state.error = payload
    }
  },
  actions: {
    crearUsuarioAction({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.name, usuario.email, usuario.password)
      .then ( res => {
        //console.log(res)
        const usuario = {
          name: res.user.name,
          email: res.user.email,
          uid: res.user.uid
        }

        commit('crearUsuarioMutation', usuario)
        router.push('/')

      })

      .catch(error=>{
        console.log(error)
        commit('crearUsuarioMutationError', error)
      })
    }
  },
  modules: {
  }
})
