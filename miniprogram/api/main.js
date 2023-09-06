import createRequest from '../utils/request'

export function loginRequest(data){
    return createRequest({
        url:'/WxUser/wx_logon',
        method:'POST',
        data,
        needLogin:false
    })
}

export function getClass(yx,nj,zy,bj,weeks){
  return createRequest({
      url:'/Class/getClass?yx='+yx+'&nj='+nj+'&zy='+zy+'&bj='+bj+'&weeks='+weeks+'',
      method:'GET',
      header:{
        "Content-Type":null,
      },
      needLogin:false
  })
}

