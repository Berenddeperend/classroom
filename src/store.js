import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { cloneDeep } from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
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
    },
    renameClass(state, payload) {
      const newClasses = cloneDeep(state.classes);
      newClasses[payload.newName] = newClasses[payload.oldName]
      delete newClasses[payload.oldName]

      state.classes = newClasses
      state.activeClass = payload.newName
    },
    removeClass(state, className) {
      const newClasses = cloneDeep(state.classes);
      delete newClasses[className]
      const classes = Object.keys(state.classes)

      if(classes[0] === state.activeClass) {
        if(classes[1]) {
          state.activeClass = classes[1]
        } else {
          state.activeClass = null
        }
      } else {
        state.activeClass = classes[0]
      }
      
      state.classes = newClasses;
    }
  }
});

export default store;
