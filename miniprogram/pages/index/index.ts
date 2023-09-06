// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    navList:[
        {
            title:'课表',
            icon:'../../asset/tab/分享.png',
            path:"../course/index"
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
  }
})
