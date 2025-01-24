// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 用户详情 GET /api/user/${param0} */
export async function getUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultUserVO>(`/api/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前登录用户信息 GET /api/user/currentUser */
export async function getUserCurrentUser(options?: { [key: string]: any }) {
  return request<API.ResultUserVO>('/api/user/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /api/user/login */
export async function postUserLogin(body: API.LoginDTO, options?: { [key: string]: any }) {
  return request<API.ResultUserVO>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 GET /api/user/page */
export async function getUserPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserPageParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUserVO>('/api/user/page', {
    method: 'GET',
    params: {
      // pageNumber has a default value: 1
      pageNumber: '1',

      // totalPage has a default value: -1
      totalPage: '-1',
      // totalRow has a default value: -1
      totalRow: '-1',
      // optimizeCountQuery has a default value: true
      optimizeCountQuery: 'true',

      ...params,
    },
    ...(options || {}),
  });
}

/** 注册 POST /api/user/register */
export async function postUserRegister(body: API.RegisterDTO, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 DELETE /api/user/remove/${param0} */
export async function deleteUserRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/user/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存用户 POST /api/user/save */
export async function postUserSave(body: API.UserSaveDTO, options?: { [key: string]: any }) {
  return request<API.ResultInteger>('/api/user/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
