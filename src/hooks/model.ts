import {  reactive } from 'vue'

const formmodel =(meta:any)=>{
    const formModel:any = reactive({})
    meta.forEach((m:any) => {
        switch (m.controlType) {
            case 'input': // 文本类
            case 'textarea':
              formModel[m.colName] = ''
              break
            case 'date': // 日期
            case 'dateTime': // 日期时间
            case 'yearMonth': // 年月
            case 'year': // 年
            case 'yearWeek': // 年周
              formModel[m.colName] = null
              break
         
            case 'number': // 数字
              formModel[m.colName] = 0
              break
            case 150: // 勾选
            case 151: // 开关
              formModel[m.colName] = false
              break
            case 153: // 单选组
            case 160: // 下拉单选
            case 162: // 下拉联动
              formModel[m.colName] = null
              break
            case 152: // 多选组
            case 161: // 下拉多选
              formModel[m.colName] = []
              break
        }
    });
    return formModel
}

export default formmodel