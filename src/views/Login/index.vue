<template>
   <div id='login'>
      <div class="login-warp">
         <ul class="menu-tab">
            <li v-for="(item,index) in menuTab" :key="index" 
            @click="toggleMenu(item.current)"
            :class="{'current':item.current==isActive?true:false}">{{item.txt}}</li>
         </ul>
         <!-- 表单 -->
         <el-form :model="ruleForm" size="medium" status-icon :rules="rules"
          ref="ruleForm" class="login-form">
            <el-form-item prop="username" class="item-form">
               <label>邮箱</label>
               <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="item-form">
               <label>密码</label>
               <el-input type="text" v-model="ruleForm.password" minLength="6" maxLength="20" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item v-if="isActive==1" prop="passwords" class="item-form">
               <label>重复密码</label>
               <el-input type="text" v-model="ruleForm.passwords" minLength="6" maxLength="20" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="code" class="item-form">
               <label>验证码</label>
               <el-row :gutter="10">
                  <el-col :span="16">
                     <el-input maxLength="6" v-model.number="ruleForm.code"></el-input>
                  </el-col>
                  <el-col :span="8">
                     <el-button type="success" class="block" @click="getCode()" :disabled="!status.flag">{{status.text}}</el-button>
                  </el-col>
               </el-row>
            </el-form-item>
            <el-form-item>
               <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
            </el-form-item>
         </el-form>  
      </div>
      
   </div>
</template>

<script>
import { getsms, Login } from '@/api/login.js'
import { stripscript,validateForm } from '@/utils/validate'
export default {
   name:'login',
   data(){
      //检验邮箱
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        }if(validateForm(value,'Email')){
          callback(new Error('请输入正确的邮箱'));
        } else {
          callback();
        }
      };
      //校验密码
      var validatePass = (rule, value, callback) => {
        console.log(stripscript(value))
        this.ruleForm.password = stripscript(value)
        value = this.ruleForm.password
        if (value === '') {
          callback(new Error('请输入密码'));
        }if(validateForm(value,'password')){
          callback(new Error('密码为6-20位的数字加字母'));
        } else {
          callback();
        }
      };
      //校验重复密码
      var validatePass2 = (rule, value, callback) => {
        console.log(stripscript(value))
        this.ruleForm.passwords = stripscript(value)
        value = this.ruleForm.passwords
        if (value === '') {
          callback(new Error('请再次输入密码'));
        }if(value!=this.ruleForm.password){
          callback(new Error('两次密码不一致'));
        } else {
          callback();
        }
      };
      //校验验证码
      var validateCode = (rule, value, callback) => {
      //   this.ruleForm.code = stripscript(value)
      //   value = this.ruleForm.code
        if (value === '') {
          callback(new Error('请输入验证码'));
        }if(validateForm(value,'code')){
          callback(new Error('验证码格式错误'));
        } else {
          callback();
        }
      };
      return{
         menuTab:[
            {txt:'登录',current:0},
            {txt:'注册',current:1},
         ],
         isActive:0,
         ruleForm: {
          username: '123@qq.com',
          password: '123456aa',
          passwords: '',
          code: '123422'
        },
        status:{
           text:'发送验证码',
           flag:true,
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwords: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        }
      }
   },
   methods: {
      toggleMenu(id){
         this.isActive = id;
         this.$refs['ruleForm'].resetFields();

      },
       submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            
            this.$store.dispatch('login/setLogin',{
               username:this.ruleForm.username,
               password:this.ruleForm.password,
               code:this.ruleForm.code,
            })
            .then(res=>{
               console.log(res)
            })
            .catch(err=>{
               this.$router.push({name:'Console'});
            })


            // Login({
            //    username:this.ruleForm.username,
            //    password:this.ruleForm.password,
            //    code:this.ruleForm.code,
            //    })
            // .then(res=>{
              
            // })
            // .catch(err=>{
            //    this.$message({
            //       message: err,
            //       type: 'success'
            //    });
            //    this.$router.push({name:'Console'});
            // })
            // this.$router.push({name:'Console'});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //获取验证吗
      getCode(){
         this.status.flag = true;
         this.statusTime(5);
         getsms({username:this.ruleForm.username} )
         .then(response=>{

         })
         .catch(error=>{
            console.log(error)
         })
      },
      //验证码倒计时
      statusTime(number){
         let time = number
         let intervalFunc = window.setInterval(() => {
            time = time - 1
            if (time < 1) {
               window.clearInterval(intervalFunc);
               this.status.text = "重新发送";
               this.status.flag = true;
            }else{
               this.status.text = "倒计时"+time+"秒";
               this.status.flag = false;
            }
            console.log(time)
         }, 1000)
      },

   },
}
</script>
<style lang="scss" scoped>
   #login{
      height:100vh;
      background:#344a5f;
   }
   .login-warp{
      width:330px;
      margin:auto;
   }
   .menu-tab{
      text-align: center;
      li{
         display: inline-block;
         width: 88px;
         line-height: 36px;
         font-size: 14px;
         color: #fff;
         border-radius: 2px;
         cursor: pointer;
      }
      .current{
         background-color: rgba(0,0,0,.1);
      }
   }
   .login-form{
      margin-top: 29px;
      label{
         display: block;
         color: #fff;
         margin-bottom: 3px;
         font-size: 14px;
      }
      .item-form{
         margin-bottom: 13px;
      }
      .block{
         width: 100%;
         display: block;
      }
      .login-btn{
         margin-top:19px;
      }
   }
</style>