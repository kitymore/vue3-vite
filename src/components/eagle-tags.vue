

<template>
   <div class="tags" v-if="showTags">
        <div  class="tag-ul">
            <!-- <el-tag
                v-for="tag in tagsList"
                :key="tag.title"
                class="mx-1"
                closable
                :type="tag.type"
                  effect="plain"
            >
                {{ tag.title }}
            </el-tag> -->
            <div class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
                <span class="tags-li-icon" @click="closeTags(index)" >
                     <el-icon :size="12" :color="!isActive(item.path)? '#333': '#fff'"><close-bold /></el-icon>
                </span>
            </div>
        </div>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button type="primary">
                    标签选项
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu size="small">
                        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import {useTagsStore} from '@/stores/tags'
import {  CloseBold,} from '@element-plus/icons-vue'

const route = useRoute();
const router = useRouter();
const store = useTagsStore();
const isActive = (path:string) => {
    return path === route.fullPath;
};

console.log(111, store.gettagsList)      
const tagsList:any = computed(() => store.gettagsList);
const showTags = computed(() => tagsList.value.length > 0);

// 关闭单个标签
const closeTags = (index:number) => {
    const delItem:any = tagsList.value[index];
    store.delTagsItem(index)
    const item:any = tagsList.value[index]
        ? tagsList.value[index]
        : tagsList.value[index - 1];
    if (item) {
        delItem.path === route.fullPath && router.push(item.path);
    } else {
        router.push("/");
    }
};

// 设置标签
const setTags = (route:any) => {
    console.log(45678,  tagsList.value)
    const isExist = tagsList.value.some((item:any) => {
        return item.path === route.fullPath;
    });
    if (!isExist) {
        if (tagsList.value.length >= 8) {
            store.delTagsItem(0)
        }
        store.setTagsItem({
            name: route.name,
            title: route.meta.title,
            path: route.fullPath,
        })
      
    }
};
setTags(route);
onBeforeRouteUpdate((to) => {
    setTags(to);
});

// 关闭全部标签
const closeAll = () => {
    store.clearTags()
    router.push("/");
};
// 关闭其他标签
const closeOther = () => {
    const curItem = tagsList.value.filter((item:any) => {
        return item.path === route.fullPath;
    });
    store.closeTagsOther(curItem)
};
const handleTags = (command:string) => {
    command === "other" ? closeOther() : closeAll();
};

</script>
<style scoped lang="scss">
.tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    .tag-ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    }
  
.router-link-active {
    text-decoration: none;
}
.tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
    background: #f8f8f8;
}

.tags-li.active {
    color: #fff;
   border: 1px solid #409EFF;
    background-color: #409EFF;
}

.tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
}

.tags-li.active .tags-li-title {
    color: #fff;
}

.tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
}


</style>
