<template>
    <md-toolbar>
        <div class="left-section">
            <md-button href="/" class="md-primary"><img height="48" width="48" src="../assets/logo.png"></md-button>
            <h3 class="md-title">RateMyNUAA</h3> 
        </div>   

        <div>
            <div class="user-info" v-if="userInfo.user_id" >
                <span>你好，{{userInfo.username}}</span>
                <md-button
                class="md-raised"
                @click="logout"
                >注销</md-button>
            </div>        
            <!-- <md-button
                v-else
                class="md-raised"
                @click="goToLoginPage"
            >登陆</md-button> -->
            <md-button
                v-else
                class="md-raised"
                @click="openLoginPage"
            >登陆</md-button>
            <md-button
                class="md-raised"
                @click="openRegisterPage"
            >注册</md-button>

        </div>

    </md-toolbar>
</div>

</template>

<style scoped>
.md-toolbar {
    background-color: #303030;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 300;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
md.button {
    float: left;
}
.left-section{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.user-info {
    display: flex;
    align-items: center;
}
</style>

<script>
import resource from '../utils/resource';
// import Register from './Register.vue'
import Login from './Login.vue'
export default {
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    methods: {
        async logout() {
            await resource.get('/api/?s=User.Logout');
            this.$store.commit('setUserInfo', []);
            },
            goToLoginPage: function(){
            var url = window.location.pathname;
            this.setCookie('redirectUrl',url,365);
            this.$router.push({
                name: 'login'
            });
        },

        setCookie: function(c_name,value,expiredays){
            var exdate=new Date()
            exdate.setDate(exdate.getDate()+expiredays)
            document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
        },
        // openRegisterPage: function(){
        //     const h = this.$createElement;
        //     this.$msgbox({
        //     title: '注册',
        //     message: (
        //         <Register />
        //     ),
        //     showCancelButton: true,
        //     confirmButtonText: '确定',
        //     cancelButtonText: '取消',
        //     beforeClose: (action, instance, done) => {
        //         if (action === 'confirm') {
        //         instance.confirmButtonLoading = true;
        //         instance.confirmButtonText = '执行中...';
        //         setTimeout(() => {
        //             done();
        //             setTimeout(() => {
        //             instance.confirmButtonLoading = false;
        //             }, 300);
        //         }, 3000);
        //         } else {
        //         done();
        //         }
        //     }
        //     }).then(action => {
        //     this.$message({
        //         type: 'info',
        //         message: 'action: ' + action
        //     });
        //     });
        // },
        // openLoginPage: function(){
        //     const h = this.$createElement;
        //     this.$msgbox({
        //     title: '登陆',
        //     message: (
        //         <Login></Login>
        //     ),
        //     showCancelButton: true,
        //     confirmButtonText: '确定',
        //     cancelButtonText: '取消',
        //     beforeClose: (action, instance, done) => {
        //         if (action === 'confirm') {
        //         instance.confirmButtonLoading = true;
        //         instance.confirmButtonText = '执行中...';
        //         setTimeout(() => {
        //             done();
        //             setTimeout(() => {
        //             instance.confirmButtonLoading = false;
        //             }, 300);
        //         }, 3000);
        //         } else {
        //         done();
        //         }
        //     }
        //     }).then(action => {
        //     this.$message({
        //         type: 'info',
        //         message: 'action: ' + action
        //     });
        //     });
        // },


    },
}
</script>
