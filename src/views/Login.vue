<template>
<div>
    <Frame></Frame>
    <div v-if="$route.query.code">
        <h1>Oauth 授权中……</h1>
    </div>
    <div v-else>
        <h1>点击下方按钮使用纸飞机账号登录。</h1>
        <md-button class="md-raised md-primary" @click="goToSsoPage">登录</md-button>
    </div>
</div>

</template>

<script>
import resource from '../utils/resource';

export default {
  data(){
    return {
      code:'',
      user:[],
    };
  },

  async mounted() {
    if (this.$route.query.code) {
      const user = await resource.get(`/api/?s=User.getSsoOauthInfo&code=${this.$route.query.code}`);
      console.log(user);
      if (!user) {
        console.log('没有user信息， 返回login重新获取');
        this.$router.push({name: 'login'});
      } else {
        this.user = user;
        console.log('this.user:'+this.user);
        this.setUserInfo();
        // this.$router.push({name: 'index', params:{ user: this.user}});
        this.$router.push(this.getCookie('redirectUrl')); 

      }

    } else {
      const user = await resource.get('api/?s=User.Current');
      if (user) {
        console.log('Current')
        this.user = user;
        this.setUserInfo();
        this.$router.push(this.getCookie('redirectUrl'));
      }
    }
  },

  methods:{
    async goToSsoPage() {
      // const data = await resource.get('/api/user/getSsoOauthInfo?redirect_uri=/office-v2/login');
      const data = await resource.get('/api/?s=User.getSsoOauthInfo');
      console.log(data);
      if (data.user_id) {

        this.$router.push(this.getCookie('redirectUrl'));
      } else {
        // location.href = data.href;
        const code = await resource.get(data.href);
        this.code = code;
        console.log('code:'+this.code);
        location.href='/login?code='+this.code;

      }
    },
    setUserInfo: function(user) {
      this.$store.commit('setUserInfo', this.user);
    },
    getCookie: function(c_name){
      if (document.cookie.length>0){
        var c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){ 
          c_start=c_start + c_name.length+1 
          var c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
          } 
      }
      return ""
    },
  },
}
</script>

