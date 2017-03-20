import Vue from 'vue'
import Vuex from 'vuex'
import session from 'utilities/session'

Vue.use(Vuex)

const state = {
  auth: session.getAuth(),
  userinfo: session.getUserInfo(),
  settings: session.getSettings() || {
    taskView: {
      sort: [{
        name: 'Priority',
        code: 'PriorityUp',
        icon: 'keyboard_arrow_up',
        enabled: false
      },
      {
        name: 'Priority',
        code: 'PriorityDown',
        icon: 'keyboard_arrow_down',
        enabled: false
      },
      {
        name: 'Due Time',
        code: 'DueTimeUp',
        icon: 'keyboard_arrow_down',
        enabled: false
      },
      {
        name: 'Due Time',
        code: 'DueTimeDown',
        icon: 'keyboard_arrow_down',
        enabled: true
      },
      {
        name: 'Assigned Time',
        code: 'AssignedTimeUp',
        icon: 'keyboard_arrow_down',
        enabled: false
      },
      {
        name: 'Assigned Time',
        code: 'AssignedTimeDown',
        icon: 'keyboard_arrow_down',
        enabled: false
      }
      ],
      view: [{
        name: 'Card',
        icon: 'view_module',
        enabled: true
      },
      {
        name: 'List',
        icon: 'view_list',
        enabled: false
      }]
    }
  }
}

const mutations = {
  setAuthentication (state, auth) {
    state.auth = auth
    session.setAuth(auth)
  },
  setUserInfo (state, userinfo) {
    state.userinfo = userinfo
    session.setUserInfo(userinfo)
  },
  removeAuthentication (state) {
    state.auth = null
    state.userinfo = null
    session.clear()
  },
  toggleViewMode (state) {
    for (var i = 0; i < state.settings.taskView.view.length; i++) {
      state.settings.taskView.view[i].enabled = !state.settings.taskView.view[i].enabled
    }
    session.setSettings(state.settings)
  }
}

const actions = {}

const getters = {
  isAuhtenticated (state) {
    return state.auth !== null && typeof state.auth !== 'undefined'
  },
  getUserInfo (state) {
    return state.userinfo
  },
  getAuth (state) {
    return state.auth
  },
  getViewMode () {
    return state.settings.view
  },
  getSettings () {
    return state.settings
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

// todo add qoates with different categories to display with empty data, error state or waiting screens!
