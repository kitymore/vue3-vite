import request  from '@/utils/request';

export function getUserListPage(data: any) {
    return request({
      url: '',
      method: 'post',
      data,
    });
}
export function getTableLists(url:string,  params:any) {
  return request({
    url,
    method: 'get',
    params
  });
}
export function deleteItem(url:string,  params:any) {
  return request({
    url,
    method: 'get',
    params
  });
}