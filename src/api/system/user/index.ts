import request  from '@/utils/request';

export function getUserListPage(data: any) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}

export function createUser(data: API.CreateUserParams) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}

export function getUserInfo(query: { userId: number }) {
  return request({
    url: '',
    method: 'post',
  
  });
}

export function updateUser(data: API.UpdateAdminInfoParams) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}

export function updateUserPassword(data: API.UpdateAdminUserPassword) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}

export function deleteUsers(data: { userIds: number[] }) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}
