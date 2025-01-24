// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据通知通道配置主键获取详细信息。 GET /api/channel/getInfo/${param0} */
export async function getChannelGetInfoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelGetInfoIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Channel>(`/api/channel/getInfo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询通知通道配置 GET /api/channel/page */
export async function getChannelPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelPageParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/channel/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据主键删除通知通道配置 DELETE /api/channel/remove/${param0} */
export async function deleteChannelRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChannelRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/channel/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加 通知通道配置 POST /api/channel/save */
export async function postChannelSave(body: API.ChannelSaveDTO, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/api/channel/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
