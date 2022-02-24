/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * 是否是url
 * @param input 
 * @returns 
 */
export function isURL(input: string) {
  const reg = /^http[s]?:\/\/.*/
  return reg.test(input)
}
/**
 * 验证电子邮箱格式
 */
export function email(value: string) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value)
}

/**
 * 验证手机格式
 */
export function mobile(value: string) {
  return /^1[3-9]\d{9}$/.test(value)
}

/**
 * 验证日期格式
 */
export function date(value: string) {
  return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证整数
 */
export function digits(value: string) {
  return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
export function idCard(value: string) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

/**
 * 金额,只允许2位小数
 */
export function amount(value: string) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

/**
 * 中文
 */
export function chinese(value: string) {
  const reg = /^[\u4e00-\u9fa5]+$/gi
  return reg.test(value)
}

/**
 * 只能输入字母
 */
export function letter(value: string) {
  return /^[a-zA-Z]*$/.test(value)
}

/**
 * 只能是字母或者数字
 */
export function enOrNum(value: string) {
  // 英文或者数字
  const reg = /^[0-9a-zA-Z]*$/g
  return reg.test(value)
}
/**
 * 整数或小数
 */
export function onlyNum(value: string) {
  const reg = /^(([^0][0-9]+|0)\.([0-9]+)$)|^(([^0][0-9]+|0)$)|^(([1-9]+)\.([0-9]+)$)|^(([1-9]+)$)/
  return reg.test(value)
}

/**
 * 验证是否包含某个值
 */
export function contains(value: string, param: string) {
  return value.indexOf(param) >= 0
}
/**
 * 10-12位数字
 */
export function phoneOr(value: string) {
  const reg = /\d{10,12}/
  return reg.test(value)
}
/**
 * 11位数字
 */
export function phoneO(value: string) {
  const reg = /\d{11}/
  return reg.test(value)
}

/**
 * 验证一个值范围[min, max]
 */
export function range(value: string, param: string) {
  return value >= param[0] && value <= param[1]
}

/**
 * 是否固定电话
 */
export function landline(value: string) {
  const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
  return reg.test(value)
}




