<template>
    <div id="wrap">
        <div class="login-wrap">
            <div class="header"></div>
            <div class="main">
                <div class="img-wrapper"><img src="../../static/img/login/omc_logo1.png" alt=""></div>
                <div class="form-wrapper">
                    <img src="/static/img/login/fly.png" alt="" width="86" height="77" class="fly">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-content"  v-loading.fullscreen.lock="fullscreenLoading"  element-loading-text="登录中">
                        <span class="title">用户登录</span>
                        <el-form-item prop="username">
                            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" auto-complete="off"></el-input>
                        </el-form-item>
                        <!-- <el-form-item class="code-wrapper" prop="imageCode">
                            <el-input  placeholder="请输入验证码" class="last-input" v-model="ruleForm.imageCode" @keyup.enter.native="submitForm('ruleForm')" @focus="errorMsg=''"></el-input><span class="check-code" @click="changeCode"><img
                                :src="pic"></span>
                        </el-form-item> -->
                        <div class="error" v-show="errorMsg">{{errorMsg}}</div>
                        <el-button class="tijiao" @click="submitForm('ruleForm')">登录</el-button>
                        <a class="text" href="#" @click.prevent="fegetPassword">忘记密码</a>
                    </el-form>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </div>
            <div class="bottom">
                <span class="text">
                    潭州教育广州分公司版权所有 © CopyReserved. | 粤ICP备520886886号
                </span>
            </div>
        </div>

        <!--<toast></toast>-->
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                fullscreenLoading: false,
                pic:'',
                errorMsg: '',
                ruleForm: {
                    username: '',
                    password: '',
                    imageCode: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    imageCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                }
            }
        },
        created() {
          // if (localStorage.getItem("access_token")) {
          //   console.log(localStorage.getItem("access_token"));
          // }
        },
        components: {

        },
        methods: {
            changeCode(){},
            fegetPassword(){
                this.$alert('如忘记密码，请联系系统管理人员进行密码重置操作。', '温馨提示', {
		          confirmButtonText: '确定',
		          callback: action => {
		          }
		        });
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                      // 设置 登录信息
                     //  window.localStorage.setItem('access_token','登录成功');
                     //  this.$message({
                     //   message: '发送请求与后台对接',
                     //   type: 'success'
                     // });

                     //发送请求    后台返回一个uid值

                     var ref = this;
                     this.$axios.post('/api/login', {
                        userName: this.ruleForm.username,
                        userPwd: this.ruleForm.password
                      })
                      .then(function (response) {
                        alert('登录成功')
                        localStorage.setItem("access_token","登录成功")
                        ref.$router.push('home');
                        //ref.$router.addRoutes() 这里根据 后台返回的 数据 动态加载路由
                      })
                      .catch(function (error) {
                        console.log(error);
                      });

                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                })
            }
        }
    }
</script>

<style type="es6" scoped lang="scss">
    .el-loading-mask{
        background-color: rgba(0,0,0,.5);
    }
    #wrap .login-wrap{
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        position: relative;
        height: 800px;
    }
    #wrap .login-wrap .header{
        height: 480px;
        width: 100%;
        background: #363D47 url("../../static/img/login/bg_Bitmap.png") no-repeat left bottom;
        background-size: 100% ;
    }
    #wrap .login-wrap .main{
        position: absolute;
        top: 136px;
        left: 50%;
        transform: translate3d(-50%, 0 ,0);
    }
    #wrap .login-wrap .bottom{
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height: 320px;
        background: #F7F7F7 url("../../static/img/login/Rectangle_17.png") no-repeat top center;
    }
    #wrap .login-wrap .bottom .text{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: -0.29px;
        line-height: 12px;
        display: block;
        width: 540px;
        height: 12px;
        margin: 268px auto 40px auto;
        text-align: center;
    }
    #wrap .img-wrapper{
        text-align: center;
    }
    #wrap .img-wrapper>img{
        width: 260px;
        height: 64px;
    }
    #wrap .form-wrapper{
        position: relative;
        margin-top: 40px;
    }
    #wrap .form-wrapper .fly{
        position: absolute;
        right: -86px;
        top: -77px;
    }
    #wrap .form-wrapper .line1{
        width: 328px;
        height: 4px;
        background: #F1F1F1;
        margin: 0 auto;
    }
    #wrap .form-wrapper .line2{
        width: 308px;
        height: 4px;
        margin: 5px auto 5.5px auto;
        background: #F2F2F2;
    }
    #wrap .form-wrapper .line3{
        width: 288px;
        height: 4px;
        background: #F3F3F3;
        margin: 0 auto;
    }
    #wrap .el-form{
        width: 330px;
        height: 370px;
        background: #FFFFFF;
        overflow: hidden;
    }
    #wrap .form-content .title{
        display: block;
        margin:30px auto;
        width: 64px;
        height: 16px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #282828;
        letter-spacing: -0.39px;
        line-height: 16px;
    }
    #wrap .form-content .el-form-item{
        display: block;
        box-sizing: border-box;
        width: 260px;
        height: 40px;
        background: #FFFFFF;
        margin: 0 auto 20px auto;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
    }
    /*#wrap .form-content .el-form-item:nth-child(odd){*/
        /*letter-spacing:  -0.34px;*/
    /*}*/
    #wrap .el-form-item .el-input{
        /*width: 260px;*/
        /*height: 40px;*/
    }
    #wrap .el-form-item .el-input .el-input__inner{
        width: 260px;
        height: 40px;
    }
    #wrap .form-content .code-wrapper{
        /*margin: 0 auto 23px auto;*/
        margin-bottom: 23px;
        box-sizing: border-box;
        /*width: 260px;*/
    }
    #wrap .form-content .last-input{
        width: 160px;
        height: 40px;
        margin: 0 10px 0px 0px;
    }
    #wrap .form-content .last-input .el-input__inner{
        width: 160px;
        height: 40px;
        /*border: 1px solid #EEEEEE;*/
        /*border-radius: 4px;*/
        font-family: PingFangSC-Regular;
        /*font-size: 14px;*/
        color: #333333;
        /*letter-spacing: -0.34px;*/
        /*line-height: 14px;*/
    }
    #wrap .form-content .check-code{
        background: #F9F9F9;
        width: 90px;
        height: 40px;
        display: inline-block;
        /*vertical-align: middle;*/
        text-align: center;
        line-height: 40px;
        /*font-family: PingFangSC-Regular;*/
        /*font-size: 18px;*/
        /*color: #282828;*/
        /*letter-spacing: 4px;*/
    }
    #wrap .form-content .error{
        margin: -23px auto 10px 35px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FF6666;
        letter-spacing: -0.29px;
        height: 14px;
        line-height: 14px;
        /*transform: translateY(-23px);*/
        /*animation: slidedown .2s;*/
    }
    #wrap .form-content .tijiao{
        display: block;
        margin: 0 auto  20px auto;
        width: 260px;
        height: 40px;
        background: #FF9900;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.39px;
        line-height: 16px;
        border: none;
    }
    #wrap .form-content .text{
        display: block;
        width: 56px;
        height: 14px;
        margin: auto 35px 20px auto;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #282828;
        letter-spacing: -0.34px;
        line-height: 14px;
        text-align: center;
    }
    @keyframes slidedown
    {
        from {height:0;}
        to {height: 14px;}
    }
</style>
