import request from '../api/request'
export default {
  state:{
    isClassAdviser:false,//角色是否是班主任
    isSales:false,//角色是否是普通销售
    isTeachers:false,//角色是否是普通老师
    isRole:'',//sales销售，adviser班主任，tmk
    isTeacherAdmin:false,//角色是否是老师管理者
    isSaleAdmin:false,//角色是否是销售管理者
    isSummer:false,//判断是否是暑假期间
    isRoleManage:false,//角色是否是销售管理者或老师管理者
    isMyPool:false,//判断是否属于销售池子用户
    isLocked:false,//判断用户是否锁定
    isPoolWrite:false,//判断是否是池子进来的
    salesName:'',//当前登陆销售用户名
    customerRoute:'',//判断客户页面路由跳转样式
    booklist:[],//教材版本字典
    outboundnav:'my',
    exceptionnav:'agenda',
    studentId:'',
    studentStage:0,
    speechall:{},//话术
    speechallArr:[],
    stuGrade: 0, //学生年级(初中还是高中)
    difficultListData: [], //学生水平列表
    importantNoneResut:[], //下一个重要节点
    difficult: "", //学生水平
    astype: 0, //文理分科
    sectionsSortArray: [], //章节顺序模板
    stuClass: '',//学生年级
    textBookId:''
  },
  mutations:{//放同步函数


    // //根据年级获取教材版本
    textBookArr(state) {
        let url ="/tns/api/teachmaterial/list?with_other=1&with_unknown=1&grade=" +state.stuGrade;
        request.get(url, {}, "notoken").then(res => {
            if (res.data.code == 0) {
                state.textBook = res.data.data;
            }
        });
    },
    // 获取所有的教材版本
    textBookAllArr(state) {
        let url = "/tns/api/teachmaterial/list?with_other=1&with_unknown=1";
        
        request.get(url, {}, "notoken").then(res => {
            if (res.data.code == 0) {
                state.textBookAll = res.data.data;
            }
        });
    },
    // 获取章节顺序模板
    getChapterTemplates(state) {
        let gradeStage = parseInt(state.stuClass) > 9 && parseInt(state.stuClass) < 13,
            url = `/tns/courseware/api/sectiontemplate?student_id=${state.studentId}&teachmaterial=${state.textBookId}&astype=${state.astype}`;
        if (gradeStage) {
            request.get(url, {}, "notoken").then(res => {
                if (res.data.err_code === 0) {
                    state.sectionsSortArray = res.data.data;
                }
            });
        }
    }
  },
  actions:{
    textBookArr({ commit }) {
        commit("textBookArr");
    },
    textBookAllArr({ commit }) {
        commit("textBookAllArr");
    },
    getChapterTemplates({ commit }) {
        commit("getChapterTemplates");
    },
    speechall(store){
        let url='/sales-crm/speechcraft/findAll'
        let param={
          'tag':''
        }
        request.get(url,{params:param}).then((res)=>{
          let obj={}
          res.data.forEach(item => {
            obj[item.tag]=item
          })
          store.state.speechallArr=res.data
          store.state.speechall=obj
        })
    }
  }
}


//直接挪取actions里面的方法
// methods: {
//   updateVerison(){
//       this.$store.dispatch("updateVerison");
//   },
//   updateVerison1() {
//       this.$store.dispatch("updateVerison1")
//   }
// }
// methods: {
//   ...mapActions(['updateVerison', 'updateVerison1'])
// }
