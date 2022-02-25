

<template>
   <div class="header">
        <!-- 折叠按钮 -->
        <!-- <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div> -->
        <div class="logo">风险后台管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <div class="setting headerIcon"  @click="setingFun">
                     <el-tooltip effect="dark" :content="'常用配置'" placement="bottom">
                         <el-icon style="vertical-align: middle;" color="#fff"><setting /></el-icon>
                    </el-tooltip>
                </div>
                <div class="language headerIcon"  @click="changeLanguage">
                     <el-tooltip effect="dark" :content="'中英文切换'" placement="bottom">
                        <span v-if="local==='zhCn'">中</span>
                        <span v-else>英</span>
                    </el-tooltip>
                </div>
                <div class="fullscreen headerIcon"  @click="fullscreen">
                    <el-tooltip effect="dark" :content="'全屏切换'" placement="bottom">
                        <el-icon style="vertical-align: middle;" color="#fff" v-if="!isfullScreenShow"><crop /></el-icon>
                        <el-icon style="vertical-align: middle;" color="#fff" v-else><full-screen /></el-icon>
                     
                    </el-tooltip>
                   
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell headerIcon">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <!-- <i class="el-icon-bell"></i> -->
                            <el-icon style="vertical-align: middle;" color="#fff"><bell /></el-icon>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../assets/img/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username|| 'admin'}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>               
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import {  Bell, FullScreen,Connection,Setting, Crop} from '@element-plus/icons-vue'
import screenfull from 'screenfull';
import {useLanguageStore} from '@/stores/language'
import {themeStore } from '@/stores/theme'

import { useI18n } from "vue-i18n";
const username = localStorage.getItem("ms_username");
const message = 2;
const isfullScreenShow = ref(true)
const store =useLanguageStore();
const setStore = themeStore()
const setingFun = ()=>{
    const isDraw = !setStore.getDrawer
    setStore.setDrawer(isDraw)
}
const i18n = useI18n();
const changeLanguage= ()=>{
  i18n.locale.value = store.getLanguage==='zhCn'?'en':'zh';
  store.setLanguage(store.getLanguage==='zhCn'?'en':'zhCn')
}
const fullscreen = ()=>{
    isfullScreenShow.value = !isfullScreenShow.value
    if (screenfull.isEnabled) {
        screenfull.toggle()
    }
}
const collapse = computed(() => {return null});
const local = computed(()=>{
    return store.getLanguage
})
// 侧边栏折叠
const collapseChage = () => {
    // store.commit("handleCollapse", !collapse.value);
};

onMounted(() => {
    if (document.body.clientWidth < 1500) {
        collapseChage();
    }
});

// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command:string) => {
    if (command == "loginout") {
        localStorage.removeItem("ms_username");
        router.push("/login");
    } else if (command == "user") {
        router.push("/user");
    }
};

</script>
<style scoped lang="scss">
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    font-size: 22px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .collapse-btn {
  
    padding: 0 21px;
    cursor: pointer;
    
}
.header .logo {
  
    width: 250px;
    
}
.header-right {
    .headerIcon{
        margin-right: 20px;
        cursor: pointer;
    }
   .language{
       font-size: 16px;
       cursor: pointer;
   }
    // padding-right: 50px;
}
.header-user-con {
    display: flex;
   
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    line-height: 30px;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
}

</style>
