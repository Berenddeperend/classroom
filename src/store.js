import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { cloneDeep } from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
  // ...
  plugins: [createPersistedState()],

  state: {
    activeClass: null,
    classes: {
    }
  },
  getters: {
    classNames(state) {
      return Object.keys(state.classes)
    }
  },
  mutations: {
    setActiveClass(state, className) {
      state.activeClass = className
    },
    addClass(state, payload) {
      Vue.set(state.classes, payload.className, new Array(payload.length))
    },
    setStudent(state, payload) {
      const newClasses = cloneDeep(state.classes);
      newClasses[state.activeClass][payload.index] = payload.student;
      state.classes = newClasses
      // Vue.set(state.classes[state.activeClass][payload.index], payload.student)
    },
    removeClass(state, className) {
      // Vue.delete(state.classes, className)
      const newClasses = cloneDeep(state.classes);
      delete newClasses[className]
      console.log('newClasses: ', newClasses);
      state.classes = newClasses
      
      state.activeClass = Object.keys(state.classes)[0];
    }
  }
});

export default store;
