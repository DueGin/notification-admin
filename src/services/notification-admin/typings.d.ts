declare namespace API {
  type Channel = {
    id?: number;
    /** 订阅通知名称 */
    name?: string;
    /** UUID */
    uuid?: string;
    /** 创建人 */
    createUser?: number;
    createTime?: string;
    updateTime?: string;
  };

  type ChannelAcceptDTO = {
    name?: string;
    text?: string;
    callbackUrl?: string;
    token: string;
  };

  type ChannelAuthVO = {
    id?: number;
    channelId?: number;
    createTime?: string;
  };

  type ChannelSaveDTO = {
    /** 订阅通知名称 */
    name?: string;
  };

  type deleteChannelAuthRemoveIdParams = {
    /** 主键 */
    id: string;
  };

  type deleteChannelRemoveIdParams = {
    /** 主键 */
    id: string;
  };

  type deleteUserChannelRemoveIdParams = {
    /** 主键 */
    id: string;
  };

  type deleteUserRemoveIdParams = {
    /** 主键 */
    id: string;
  };

  type getChannelAuthListParams = {
    channelId: number;
  };

  type getChannelGetInfoIdParams = {
    /** notification主键 */
    id: string;
  };

  type getChannelPageParams = {
    'records[0].id'?: number;
    /** 订阅通知名称 */
    'records[0].name'?: string;
    /** UUID */
    'records[0].uuid'?: string;
    /** 创建人 */
    'records[0].createUser'?: number;
    'records[0].createTime'?: string;
    'records[0].updateTime'?: string;
    pageNumber?: number;
    pageSize?: number;
    maxPageSize?: number;
    totalPage?: number;
    totalRow?: number;
    optimizeCountQuery?: boolean;
  };

  type getUserChannelGetInfoIdParams = {
    /** userNotification主键 */
    id: string;
  };

  type getUserChannelPageParams = {
    'records[0].id'?: number;
    /** 用户ID */
    'records[0].userId'?: number;
    /** 通道ID */
    'records[0].channelId'?: number;
    pageNumber?: number;
    pageSize?: number;
    maxPageSize?: number;
    totalPage?: number;
    totalRow?: number;
    optimizeCountQuery?: boolean;
  };

  type getUserIdParams = {
    id: number;
  };

  type getUserPageParams = {
    'records[0].key'?: any;
    pageNumber?: number;
    pageSize?: number;
    maxPageSize?: number;
    totalPage?: number;
    totalRow?: number;
    optimizeCountQuery?: boolean;
    account?: string;
    username?: string;
    email?: string;
  };

  type LoginDTO = {
    username: string;
    password: string;
    isRememberMe?: boolean;
  };

  type PageUser = {
    records?: User[];
    pageNumber?: number;
    pageSize?: number;
    maxPageSize?: number;
    totalPage?: number;
    totalRow?: number;
    optimizeCountQuery?: boolean;
  };

  type PageUserChannel = {
    records?: UserChannel[];
    pageNumber?: number;
    pageSize?: number;
    maxPageSize?: number;
    totalPage?: number;
    totalRow?: number;
    optimizeCountQuery?: boolean;
  };

  type PageUserVO = {
    /** 当前页数据。 */
    records?: UserVO[];
    /** 当前页码。 */
    pageNumber?: number;
    /** 每页数据数量。 */
    pageSize?: number;
    /** 每页数据数量最大限制。 */
    maxPageSize?: number;
    /** 总页数。 */
    totalPage?: number;
    /** 总数据数量。 */
    totalRow?: number;
    /** 是否优化分页查询 COUNT 语句。 */
    optimizeCountQuery?: boolean;
  };

  type postChannelAuthCreateParams = {
    channelId: number;
  };

  type RegisterDTO = {
    email?: string;
    username?: string;
    password?: string;
  };

  type ResultInteger = {
    code?: number;
    msg?: string;
    data?: number;
  };

  type ResultPageUserVO = {
    code?: number;
    msg?: string;
    data?: PageUserVO;
  };

  type ResultUserVO = {
    code?: number;
    msg?: string;
    data?: UserVO;
  };

  type ResultVoid = {
    code?: number;
    msg?: string;
    data?: null;
  };

  type User = {
    id?: number;
    /** UID */
    account?: string;
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    createTime?: string;
    updateTime?: string;
    deleted?: number;
  };

  type UserChannel = {
    id?: number;
    /** 用户ID */
    userId?: number;
    /** 通道ID */
    channelId?: number;
  };

  type UserSaveDTO = {
    id?: number;
    /** 头像 */
    avatar?: string;
    /** 用户名 */
    username?: string;
    /** 邮箱 */
    email?: string;
  };

  type UserVO = {
    id?: number;
    /** UID */
    account?: string;
    /** 用户名 */
    username?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    createTime?: string;
    updateTime?: string;
  };
}
