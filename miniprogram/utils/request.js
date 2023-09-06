export default function createRequest(option){
    return new Promise((resolve)=>{
        const token=wx.getStorageSync('token')
        if(option.needLogin!=false&&!token){
            wx.showToast({
              title: '请先登陆',
            })
            setTimeout(() => {
                url:'../pages/login/index.wxml'
            }, 1500);
            return
        }
        const baseUrl="http://43.138.45.28:5204/api"
        const url = `${baseUrl}${option.url}`
        const header = {token}
        let showLoading = false
        if(option.loading!=false){
            showLoading =true
            wx.showLoading({
              title: '正在加载',
              mask:true
            })
        }
        wx.request({
          url,
          method:option.method||'GET',
          timeout:option.timeout||20000,
          header,
          data:option.data||{},
          success(res){
              return resolve(res)
          },
          fail(res){
            return resolve(res)
          },
          complete(res){
              if(showLoading){
                  wx.hideLoading()
              }
          }
        })
    })
}