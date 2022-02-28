export const pages = {
    title:'检查计划【列表】',
    searchList: {
        btns:[
            {
                id:'1',
                title:'状态',
                data:[
                    {
                        label:'不限',
                        value:''
                    },
                    {
                        label:'未发布',
                        value:'2'
                    },
                    {
                        label:'审批中',
                        value:'3'
                    },
                    {
                        label:'进行中',
                        value:'4'
                    },
                    {
                        label:'已结束',
                        value:'5'
                    }
                ]
            },
            {
                id:'2',
                title:'类型',
                data:[
                    {
                        label:'不限',
                        value:''
                    },
                    {
                        label:'综合检查',
                        value:'2'
                    },
                    {
                        label:'专项检查',
                        value:'3'
                    },
                    {
                        label:'日常检查',
                        value:'4'
                    },
                    {
                        label:'季节性检查',
                        value:'5'
                    },
                    {
                        label:'年度检查',
                        value:'6'
                    },
                    {
                        label:'双重预防机制检查',
                        value:'7'
                    }
                ]
            },
        ],
        input:  {
            title:'筛选条件',
            placeholder:'请输入计划名称进行模糊查询'
        },
    },
    Tcoloums:[
//         AllowAbolish: true
// AllowDelete: false
// AllowEdit: false
// AllowEnd: false
// AllowPublish: false
// AllowRevoke: false
// AllowTrack: true
// AllowUserManagement: false
// CType: "1"
// CheckFrequency: "N"
// CheckFrequencyName: "不重复"
// CheckNames: "赵高"
// CheckPlanName: "我的检查6"
// CheckType: "ZCLX0001"
// CheckTypeName: "综合检查"
// CreateChnName: "赵高"
// CreateDate: "2022-02-21 19:57:17"
// CreateUserName: "00001_zhaogao"
// EndDate: "2022-02-21 00:00:00"
// EndTime: null
// EnterpriseCnt: null
// EnterpriseCode: "00001"
// EnterpriseCodes: "00001"
// ID: 7341
// ItemType: 1
// SourceID: 0
// SourceType: null
// StartDate: "2022-02-21 00:00:00"
// StartTime: null
// Status: 20
// StatusName: "已结束"
       
        {prop: 'CheckPlanName', label: '计划名称',width:180, sortable: true},
        {prop: 'CheckNames', label: '检查人', sortable: true},
        {prop: 'address', label: '检查类型', sortable: true},
        {prop: 'StartDate', label: '开始时间', sortable: true},
        {prop: 'EndDate', label: '结束时间', sortable: true},
        {prop: 'StartTime', label: '时间段(起)'},
        {prop: 'EndTime', label: '时间段(止)'},
        {prop: 'EnterpriseCnt', label: '检查频次', sortable: true},
        {prop: 'StatusName', label: '状态', sortable: true},
        {prop: 'CreateChnName', label: '创建人', sortable: true},
        {prop: 'CreateDate', label: '创建日期', sortable: true},
        {label: '操作', slot:'operate'}
    ]  
       
    
}
export const dangerState = []

export const dangerType = []
