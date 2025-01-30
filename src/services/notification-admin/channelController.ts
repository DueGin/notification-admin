// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 详情 GET /api/channel/getInfo/${param0} */
export async function getChannelGetInfoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelGetInfoIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultChannelVO>(`/api/channel/getInfo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取分页 GET /api/channel/page */
export async function getChannelPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelPageParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageChannelVO>('/api/channel/page', {
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

/** 删除 DELETE /api/channel/remove/${param0} */
export async function deleteChannelRemoveId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChannelRemoveIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVoid>(`/api/channel/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存 POST /api/channel/save */
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
