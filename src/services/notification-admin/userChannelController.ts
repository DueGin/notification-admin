// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据用户订阅通知主键获取详细信息。 GET /api/userChannel/getInfo/${param0} */
export async function getUserChannelGetInfoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserChannelGetInfoIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserChannel>(`/api/userChannel/getInfo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有用户订阅通知 GET /api/userChannel/list */
export async function getUserChannelList(options?: { [key: string]: any }) {
  return request<API.UserChannel[]>('/api/userChannel/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页查询用户订阅通知 GET /api/userChannel/page */
export async function getUserChannelPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserChannelPageParams,
  options?: { [key: string]: any },
) {
  return request<API.PageC2ABUserChannelC2BB>('/api/userChannel/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据主键删除用户订阅通知 DELETE /api/userChannel/remove/${param0} */
export async function deleteUserChannelRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserChannelRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/userChannel/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加 用户订阅通知 POST /api/userChannel/save */
export async function postUserChannelSave(body: API.UserChannel, options?: { [key: string]: any }) {
  return request<boolean>('/api/userChannel/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据主键更新用户订阅通知 PUT /api/userChannel/update */
export async function putUserChannelUpdate(
  body: API.UserChannel,
  options?: { [key: string]: any },
) {
  return request<boolean>('/api/userChannel/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
