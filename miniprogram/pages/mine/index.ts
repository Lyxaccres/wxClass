// pages/mine/index.ts
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    actions: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
      },
    ],
    groupText:[]
  },

  // showsheet(){
  //   wx.setStorageSync('bj',null)
  //   wx.setStorageSync('nj',null)
  //   wx.setStorageSync('yx',null)
  //   wx.setStorageSync('zy',null)
  //   setTimeout(() => {
  //     wx.reLaunch({
  //       url: '../login/index',
  //     })
  //   }, 500);
  // },

  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log(event.detail);
  },

  showsheet(){
  Dialog.confirm({
    title: '提示',
    message: '是否清除掉当前个人信息重新选择？',
  })
    .then(() => {
      // on confirm
    wx.setStorageSync('bj',null)
    wx.setStorageSync('nj',null)
    wx.setStorageSync('yx',null)
    wx.setStorageSync('zy',null)
    setTimeout(() => {
      wx.reLaunch({
        url: '../login/index',
      })
    }, 500);
    })
    .catch(() => {
      // on cancel
    });
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const userdata = [
      {
        title:"院(系)/部",
        text:wx.getStorageSync('yx')
      },
      {
        title:"学年学期",
        text:wx.getStorageSync('nj')
      },
      {
        title:"专业",
        text:wx.getStorageSync('zy')
      },
      {
        title:"班级",
        text:wx.getStorageSync('bj')
      },
    ];
    this.setData({
      groupText:userdata
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})