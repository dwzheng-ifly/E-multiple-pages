// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false
import jitter  from '../../components/jitter/jitter.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      userName: '',
      passWord: '',
      code: '',
      identifyCode: '',
      tips:'',
      beginX:false,
      beginY:false,
      checked:false
    }
  },
  computed: {

  },
  components: {
    jitter
  },
  mounted () {
    let self = this
    self.getCookie()

  },
  methods: {
    login () {
      let self = this
      if (!self.userName || !self.passWord) {
        self.jitterX()
        self.tips = "账号密码不能为空"
        return
      }
      this.userName = this.userName.replace(/(^\s*)|(\s*$)/g, "");
      this.passWord= this.passWord.replace(/(^\s*)|(\s*$)/g, "");
      debugger
      window.location.href="page1.html"
//        requestLogin({
//          userAccount: self.userName,
//          password: self.passWord
//        }).then(function (res) {
//          if (res.flag) {
//            let userInfo = JSON.parse(res.data)
//            userInfo.token = res.token
//            globalStore.dispatch('setTssUserInfo', userInfo)
//            axios.defaults.headers.common['token'] = globalStore.state.common.tssUserInfo ? globalStore.state.common.tssUserInfo.token : ''
//            if (userInfo.status == constants.statusType.status) {
//              globalRouter.push({path: '/changePassword'})
//            } else {
//              if(self.checked){
//                self.setCookie(self.userName,self.passWord,7)
//              }
//              if (userInfo.userType == constants.userType.manager) {
//                globalRouter.push({path: '/homePage'})
//              } else if (userInfo.userType == constants.userType.scorer) {
//                globalRouter.push({path: '/arbitrator', query: {type: 'login'}})
//              } else if (userInfo.userType == constants.userType.arbitrator) {
//                globalRouter.push({path: '/arbitrator',query: {type: 'login'}})
//              }
//            }
//          } else {
//            self.jitterX()
//            self.tips = res.message
//          }
//        });
    },
    jitterX() {
      this.beginX = true;
      this.beginY = true;
    },
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie = "markUserName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "markUserPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    getCookie: function() {
      let self=this
      try {
        if (document.cookie.length > 0) {
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            if(arr2.length){
              //判断查找相对应的值
              if (arr2[0] == 'markUserName') {
                this.userName = arr2[1]; //保存到保存数据的地方
              } else if (arr2[0] == 'markUserPwd') {
                this.passWord = arr2[1];
              }
            }
          }
        }
      }
      catch (e){
        self.clearCookie()
      }
    },
    remember(){
      this.checked=!this.checked
    },
    clearCookie: function() {
      this.setCookie("", "", -1, ""); //修改2值都为空，天数为负1天就好了
    },
  }

})
