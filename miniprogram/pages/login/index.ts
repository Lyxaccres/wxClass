import { loginRequest } from '../../api/main'
// pages/login/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuId: "",
    password: "",
    value1: 0,
    yx:"",
    nj: "",
    zy:"",
    bj:"",
    option1: [
      { text: '学年学期', value: 0 },
      { text: '2023-2024学年', value: '2023' },
      { text: '2022-2023学年', value: '2022' },
      { text: '2021-2022学年', value: '2021' },
    ],
    option2: [
      { text: '专业', value: 0 },
      { text: '数据科学与大数据技术(专升本）', value: '数据科学与大数据技术(专升本）' },
    ],
    option3: [
      { text: ' 院(系)/部', value: 0 },
      {text:'信息工程学院',value:'信息工程学院'}
    ],
    option4: [
      { text: ' 班级', value: 0 },
      {text:'大数据本212（专升本）',value:'大数据本212（专升本）'}
    ],
  },
  onSwitch1Change: function (e) {
    this.setData({
      yx: e.detail
    })
  },
  onSwitch2Change: function (e) {
    this.setData({
      nj: e.detail
    })
  },
  onSwitch3Change: function (e) {
    this.setData({
      zy: e.detail
    })
  },
  onSwitch4Change: function (e) {
    this.setData({
      bj: e.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if(wx.getStorageSync('bj')!=null && wx.getStorageSync('nj')!=null && wx.getStorageSync('yx')!=null && wx.getStorageSync('zy')!=null){
      setTimeout(() => {
        wx.reLaunch({
          url: '../index/index',
        })
      }, 1000);
    }
  },

  sub(){
    wx.setStorageSync('bj',this.data.bj)
    wx.setStorageSync('nj',this.data.nj)
    wx.setStorageSync('yx',this.data.yx)
    wx.setStorageSync('zy',this.data.zy)
    setTimeout(() => {
      wx.reLaunch({
        url: '../index/index',
      })
    }, 1000);
  },

  login() {
    const postData = {
      stuId: this.data.stuId,
      password: this.data.password
    }
    wx.showLoading({
      title: '登陆中'
    })
    loginRequest(postData).then(res => {
      wx.hideLoading()

      if (res.data.code == 999) {
        wx.showToast({
          title: res.data.msg,
        })
        return
      }
      wx.setStorageSync('token', res.data.data.cookie)
      wx.showToast({
        title: '登陆成功',
        icon: 'success'
      })
      
    })
  }
})

