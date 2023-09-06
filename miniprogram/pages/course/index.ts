// pages/course/index.ts
import { getClass } from '../../api/main'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowweek: 1,
    totaWeek: 20,
    showSwitchWeek: false,
    weekDayCount: 7,
    starDate: '2023/08/28',
    weekIndexText: ['一', '二', '三', '四', '五', '六', '日'],
    nowMonth: 1,
    courseList: []
  },


  getClassData(weeks) {
    // 懒
    const yx =  wx.getStorageSync("yx")
    const nj =  wx.getStorageSync("nj")
    const zy =  wx.getStorageSync("zy")
    const bj =  wx.getStorageSync("bj")
    getClass(yx,nj,zy,bj,weeks).then(res=>{
      console.log(res)
      if(res.data!=null){
        res.data.data.forEach(element => {
          element.color = this.makeColor()
        });
        this.setData({
          courseList:res.data.data
        })
      }
      else{
        wx.showToast({
          title: '暂无课程',
          icon:"none"
        })
        setTimeout(() => {
          wx.hideToast()
        }, 1000);
        this.setData({
          courseList:[]
        })
      }
      
    })
  },

  selectWeek() {
    this.setData({
      showSwitchWeek: true
    })
  },

  switchWeek(e: any) {
    const week = e.currentTarget.dataset.week
    this.getClassData(week)
    this.setData({
      nowweek: week,
      showSwitchWeek: false
    })
    this.getWeekDates()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

    const { windowWidth } = wx.getSystemInfoSync()
    this.setData({
      windowWidth
    })

    this.getWeekDates()
    this.getNowWeek()
  },
  hideSwicth() {
    this.setData({
      showSwitchWeek: false
    })
  },
  getWeekDates() {
    const starDate = new Date(this.data.starDate)
    const addTime = (this.data.nowweek - 1) * 7 * 24 * 60 * 60 * 1000
    const firstDate = starDate.getTime() + addTime
    const { month: nowMonth } = this.getDateObject(new Date(firstDate))
    const weekCalendar = []
    for (let i = 0; i < this.data.weekDayCount; i++) {
      const date = new Date(firstDate + i * 24 * 60 * 60 * 1000)
      const { day } = this.getDateObject(date)
      weekCalendar.push(day)
    }
    this.setData({
      nowMonth,
      weekCalendar
    })
  },

  getDateObject(date = new Date()) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return {
      year,
      month,
      day
    }
  },

  getNowWeek() {
    const nowDate = new Date().getTime()
    const starDate = new Date(this.data.starDate).getTime()
    const time = nowDate - starDate
    const nowweek = Math.ceil(time / 1000 / 60 / 60 / 24 / 7)
    this.getClassData(nowweek)
    this.setData({
      nowweek
    })
    this.getWeekDates()
  },

  makeColor() {
    let arr = ["#9933FF", "#6699FF", "#6699CC", "#339966", "#FFCCCC", "#FF6699", "#6600CC", "#0066CC", "#CC00CC", "#CC9900"];
    let color = "";
    color += arr[Math.floor(Math.random() * 10)];
    console.log(color)
    return color;
  },

})
