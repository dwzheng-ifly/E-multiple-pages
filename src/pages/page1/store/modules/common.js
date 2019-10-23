
export default {
  state: {
    //登录用户名，密码
    loginInfo: {
      userName: '',
      password: ''
    },
  },

  //store 的计算属性,视情况可有可无
  getters: {
    // doneList: state => {
    //   return state.list.filter(todo => todo.done)
    // }
  },

  //dispatch分发
  actions: {
    setLoginInfo ({commit}, loginInfo) {
      commit('updateLoginInfo', loginInfo);
    },
  },

  //更改state的唯一方法
  mutations: {
    updateLoginInfo (state, loginInfo) {
      state.loginInfo.userName = loginInfo.userName;
      state.loginInfo.password = loginInfo.password;
    }
  }
};
