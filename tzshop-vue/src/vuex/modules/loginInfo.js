const state = {
  loginInfo: {
    isLogin: false
  }
};

const getters = {
  loginInfo: state => state.loginInfo
};

export default {
  state,
  getters
};
