// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    ClassDateShow:false,
    navList:[
        {
            title:'课表',
            icon:'../../asset/tab/分享.png',
            path:"../course/index"
        },
        {
          title:'课程时间',
          icon:'../../asset/tab/时间戳.png',
          path:""
        },
        {
          title:'',
          icon:'',
          path:""
        },
        {
          title:'',
          icon:'',
          path:""
        },
        {
          title:'',
          icon:'',
          path:""
        },
        {
          title:'',
          icon:'',
          path:""
        }
    ]
  },
  onLoad(){
    if(wx.getStorageSync('bj')==null && wx.getStorageSync('nj')==null && wx.getStorageSync('yx')==null && wx.getStorageSync('zy')==null){
      setTimeout(() => {
        wx.reLaunch({
          url: '../login/index',
        })
      }, 500);
    }
  },
  nav(e){
    console.log(e)
      const index = e.currentTarget.dataset.index
      const path = this.data.navList[index].path
      wx.reLaunch({
          url:path
      })
  },
  dateClose(){
    this.setData({ ClassDateShow: false });
  },

  DateShow(event){
    const index = event.currentTarget.dataset.index
    if(index == 1){
      this.setData({ ClassDateShow: true });
    }
    
  }

})

