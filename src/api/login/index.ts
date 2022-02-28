import request  from '@/utils/request';
import {loginApi} from '@/api'

export function login(data:any){
  return request({
      url: loginApi,
      method: 'post',
      data
    });
}

/**
 * @description 获取验证码
 */
 export function getImageCaptcha(params?: API.CaptchaParams) {
    return request({
      url: 'captcha/img',
      method: 'get',
      params,
    });
  }
  /**
   * 退出登录
   * @returns 
   */
  export function logout() {
    return request({
      url: 'account/logout',
      method: 'post',
    });
  }


/**
 * 本地mock测试
 * @returns 
 */
export function mockrequest(){
  return request({
    url: "/api/get",
    method: "get",
  });
}