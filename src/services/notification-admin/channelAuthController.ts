// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建频道授权 POST /api/channel/auth/create */
export async function postChannelAuthCreate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postChannelAuthCreateParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultString>('/api/channel/auth/create', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询当前用户指定频道的授权列表 GET /api/channel/auth/list */
export async function getChannelAuthList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelAuthListParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListChannelAuthVO>('/api/channel/auth/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据主键删除频道授权 DELETE /api/channel/auth/remove/${param0} */
export async function deleteChannelAuthRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChannelAuthRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/channel/auth/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
