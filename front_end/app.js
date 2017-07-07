var app = new Vue({
  el: '#app',
  data: {
    histories: [],
    isLogin: false,
    friendList: [],
    lover_name: '',
    love_name: '',
    results: []
  },
  methods: {
    loveHistories: function(){
      var self = this
      // axios.get(`http://localhost:3000/api/lovers/history/read/${window.localStorage.getItem('id')}`)
      axios.get(`http://localhost:3000/api/lovers/history/read/${window.localStorage.getItem('id')}`)
      .then((response)=>{
        self.histories = response.data
        console.log(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    sendLove: function(){
      var self = this
      // axios.get(`http://localhost:3000/api/lovers/history/read/${window.localStorage.getItem('id')}`)
      axios.post(`http://localhost:3000/api/lovers/history/create`,{
        lover_name: self.lover_name,
        love_name: self.love_name,
        user_id: window.location.getItem('id')
      })
      .then((response)=>{
        console.log(response.data);
        self.results = response.data
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    loginFB () {
      const self = this
      FB.login(function(response) {
        console.log(response);
        self.apiMe()
        // window.location = '/'
        self.isLogin = true
        self.getAllFriends()
      }, {scope: 'email,user_likes,user_friends'});
    },
    apiMe () {
      FB.api('/me', function (response) {
        console.log(response);
      })
    },
    logoutdarifacebook () {
      FB.logout(function(response) {
        window.localStorage.clear()
        console.log(response);
        self.isLogin = false
        window.location.reload();
      })
    },
    getAllFriends(){
      //ini get Friends nya
      var self = this
      FB.api(
        '/me/friends',
        'GET',
        {"fields":"gender,name,relationship_status"},
        function(response) {
        console.log('ini list friend',response);
        self.friendList = response.data
        }
      );
    },
    checkLoginState () {
      console.log('invoked');
      FB.getLoginStatus(function(response) {
        // statusChangeCallback(response);
        console.log(response);
      });
    }
  },
  created(){
    this.loveHistories()
  }
})
