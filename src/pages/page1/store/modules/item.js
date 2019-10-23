
const state = {
  //朗读对话弹框
  dialogMask: {
    type: "",
    pattern: ""
  },
};

// getters
const getters = {};

// mutations
const mutations = {

  updateDialogMask(state, dialogMask) {
    Object.keys(dialogMask).forEach(function (key) {
      if (typeof (state.dialogMask[key]) != undefined) {
        state.dialogMask[key] = dialogMask[key];
      }
    });
  },
};

// actions
const actions = {
  setDialogMask({commit}, dialogMask) {
    debugger
    commit('updateDialogMask', dialogMask);
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};
