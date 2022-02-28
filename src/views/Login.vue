<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="loginref" label-width="0px" class="ms-content">
                <el-form-item prop="AccountCode">
                    <el-input v-model="param.AccountCode" placeholder="请输入用户名">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="PassWord">
                    <el-input type="password" placeholder="请输入密码" v-model="param.PassWord"
                        @keyup.enter="submitForm()">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import {login} from '@/api/login'
import { ElMessage } from "element-plus";

 const router = useRouter();
const param = reactive({
    AccountCode: "00001_admin",
    PassWord: "888888",
});

const rules = {
    AccountCode: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
        },
    ],
    PassWord: [
        { required: true, message: "请输入密码", trigger: "blur" },
    ],
};
        const loginref = ref();
        const submitForm = () => {
            loginref.value.validate((valid:any) => {
                if (valid) {
                    login(param).then((res:any)=>{
                        console.log(res)
                        if(res.code===0){
                             localStorage.setItem("ms_username", param.AccountCode);
                             router.push("/dashboard");
                             ElMessage.success("登录成功");
                        } else{
                            ElMessage.error("登录失败");
                        }
                         
                    })
                    
                  
                } else {
                    ElMessage.error("登录失败");
                    return false;
                }
            });
        };

</script>

<style scoped>
.login-wrap {
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
    /* position: relative; */
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>