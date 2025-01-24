// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** createChannelAuth POST /api/channelAuth/create */
export async function postChannelAuthCreate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postChannelAuthCreateParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/channelAuth/create', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getList GET /api/channelAuth/list */
export async function getChannelAuthList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelAuthListParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/channelAuth/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据主键删除频道授权 DELETE /api/channelAuth/remove/${param0} */
export async function deleteChannelAuthRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChannelAuthRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/channelAuth/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
