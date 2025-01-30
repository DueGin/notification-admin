// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页 GET /api/channel/user/page */
export async function getChannelUserPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelUserPageParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageChannelUserVO>('/api/channel/user/page', {
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

/** 删除用户订阅 DELETE /api/channel/user/remove/${param0} */
export async function deleteChannelUserRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChannelUserRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVoid>(`/api/channel/user/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加用户订阅通知 POST /api/channel/user/save */
export async function postChannelUserSave(
  body: API.ChannelUserSaveDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultInteger>('/api/channel/user/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户自己订阅列表 GET /api/channel/user/selfSubscribeList */
export async function getChannelUserSelfSubscribeList(options?: { [key: string]: any }) {
  return request<API.ResultListChannelUserVO>('/api/channel/user/selfSubscribeList', {
    method: 'GET',
    ...(options || {}),
  });
}
