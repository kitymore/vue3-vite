<template>
<EagleContainer>
  <div class="useMult wrapBg">
     <EagleTitle :title="'阿里矢量图标'"></EagleTitle>
    
  </div>
<div class="iconfont-container">
    <el-card shadow="hover" :header="`iconfont 字体图标(自动载入)：${state.sheetsIconList.length}个`">
        <el-row class="iconfont-row">
            <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="2" v-for="(v, k) in state.sheetsIconList" :key="k">
                <div class="iconfont-warp">
                    <div class="flex-margin">
                        <div class="iconfont-warp-value">
                            <i :class="v" class="iconfont"></i>
                        </div>
                        <div class="iconfont-warp-label mt10">{{ v }}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-card>
</div>
<div class="awesome-container">
		<el-card shadow="hover" :header="`fontawesome 字体图标(自动载入)：${state.awesheetsIconList.length - 24}个`">
			<el-row class="iconfont-row">
				<el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="2" v-for="(v, k) in state.awesheetsIconList" :key="k">
					<div class="iconfont-warp">
						<div class="flex-margin">
							<div class="iconfont-warp-value">
								<i :class="v" class="fa"></i>
							</div>
							<div class="iconfont-warp-label mt10">{{ v }}</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div>
    <!-- <div class="element-container">
		<el-card shadow="hover" :header="`element plus 字体图标(自动载入，增加了 ele- 前缀，使用时：ele-Aim)：${state.elementSheetsIconList.length}个`">
			<el-row class="iconfont-row">
				<el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="2" v-for="(v, k) in state.elementSheetsIconList" :key="k">
					<div class="iconfont-warp">
						<div class="flex-margin">
							<div class="iconfont-warp-value">
								<SvgIcon :name="v" :size="30" />
							</div>
							<div class="iconfont-warp-label mt10">{{ v }}</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div> -->
</EagleContainer>
  
</template>
<script setup lang="ts">
// ref声明响应式数据，用于声明基本数据类型
 // reactive声明响应式数据，用于声明引用数据类型
 // 使用toRefs解构
import {ref, reactive,  computed,  onMounted, onActivated, onUpdated, onErrorCaptured,onBeforeMount,  onBeforeUpdate,
onBeforeUnmount, onUnmounted, onRenderTracked,
onRenderTriggered 
} from 'vue'
///import { useInfoStore } from '@/stores/user'
import EagleContainer from '@/components/eagle-container.vue'
import EagleTitle from '@/components/eagle-title.vue'
import EagleTable from '@/components/eagle-table.vue'
import initIconfont from '@/utils/getStyleSheets';
import SvgIcon from '@/components/svgIcon/index.vue'
import useTable from '@/hooks/table'
const dialogVisible = ref(false)
// const store = useInfoStore()
const state = reactive({
	sheetsIconList: [],
    awesheetsIconList:[ ],
    elementSheetsIconList:[]
});

// 初始化获取 css 样式，这里使用阿里的图标(记得加上前缀 `iconfont`)，其它第三方请自行做判断
const initGetStyleSheets = () => {
    initIconfont.ali().then((res: any) => (state.sheetsIconList = res));
};
const initGetStyleAweSheets = () => {
        initIconfont.awe().then((res: any) => (state.awesheetsIconList = res));
};
const initGetElementStyleSheets = () => {
			initIconfont.ele().then((res: any) => {
				state.elementSheetsIconList = res;
			});
		};
// 页面加载时
onMounted(() => {
    // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onMounted')
  initGetStyleSheets();
  initGetStyleAweSheets()
  initGetElementStyleSheets()
});

onUpdated(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onUpdated')
});
onErrorCaptured(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onErrorCaptured')
});
onActivated(() => {
  console.log('onActivated')
});

const settStore = ()=>{
 // store.$patch({ count: counter.count + 1 })
 // store.setName('tick')
}
</script>
<style scoped lang="scss">
.iconfont-container {
	.iconfont-row {
		border-top: 1px solid var(--next-border-color-light);
		border-left: 1px solid var(--next-border-color-light);
		.iconfont-warp {
			text-align: center;
			border-right: 1px solid var(--next-border-color-light);
			border-bottom: 1px solid var(--next-border-color-light);
			height: 120px;
			overflow: hidden;
			display: flex;
			transition: all 0.3s ease;
			&:hover {
				box-shadow: 0 2px 12px var(--next-color-dark-hover);
				cursor: pointer;
				transition: all 0.3s ease;
				.iconfont-warp-value {
					i {
						color: var(--el-color-primary);
						transition: all 0.3s ease;
					}
				}
				.iconfont-warp-label {
					color: var(--el-color-primary);
					transition: all 0.3s ease;
				}
			}
			.iconfont-warp-value {
				i {
					color: #606266;
					font-size: 32px;
					transition: all 0.3s ease;
				}
			}
			.iconfont-warp-label {
				color: #99a9bf;
				transition: all 0.3s ease;
			}
		}
	}
}
.awesome-container {
	.iconfont-row {
		border-top: 1px solid var(--next-border-color-light);
		border-left: 1px solid var(--next-border-color-light);
		.iconfont-warp {
			text-align: center;
			border-right: 1px solid var(--next-border-color-light);
			border-bottom: 1px solid var(--next-border-color-light);
			height: 120px;
			overflow: hidden;
			display: flex;
			transition: all 0.3s ease;
			&:hover {
				box-shadow: 0 2px 12px var(--next-color-dark-hover);
				cursor: pointer;
				transition: all 0.3s ease;
				.iconfont-warp-value {
					i {
						color: var(--el-color-primary);
						transition: all 0.3s ease;
					}
				}
				.iconfont-warp-label {
					color: var(--el-color-primary);
					transition: all 0.3s ease;
				}
			}
			.iconfont-warp-value {
				i {
					color: #606266;
					font-size: 32px;
					transition: all 0.3s ease;
				}
			}
			.iconfont-warp-label {
				color: #99a9bf;
				transition: all 0.3s ease;
			}
		}
	}
}
.element-container {
	.iconfont-row {
		border-top: 1px solid var(--next-border-color-light);
		border-left: 1px solid var(--next-border-color-light);
		.iconfont-warp {
			text-align: center;
			border-right: 1px solid var(--next-border-color-light);
			border-bottom: 1px solid var(--next-border-color-light);
			height: 120px;
			overflow: hidden;
			display: flex;
			transition: all 0.3s ease;
			&:hover {
				box-shadow: 0 2px 12px var(--next-color-dark-hover);
				cursor: pointer;
				transition: all 0.3s ease;
				.iconfont-warp-value {
					i {
						color: var(--el-color-primary);
						transition: all 0.3s ease;
					}
				}
				.iconfont-warp-label {
					color: var(--el-color-primary);
					transition: all 0.3s ease;
				}
			}
			.iconfont-warp-value {
				i {
					color: #606266;
					font-size: 32px;
					transition: all 0.3s ease;
				}
			}
			.iconfont-warp-label {
				color: #99a9bf;
				transition: all 0.3s ease;
			}
		}
	}
}
</style>