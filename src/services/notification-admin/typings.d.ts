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
    token?: string;
    createTime?: string;
  };

  type ChannelSaveDTO = {
    /** 订阅通知名称 */
    name?: string;
  };

  type ChannelUserSaveDTO = {
    channelId?: number;
    userId?: number;
  };

  type ChannelUserVO = {
    id?: number;
    /** 用户ID */
    userId?: number;
    /** 用户名 */
    username?: string;
    /** 通道ID */
    channelId?: number;
    /** 通道名称 */
    channelName?: string;
    /** 加入时间 */
    createTime?: string;
  };

  type ChannelVO = {
    createUsername?: string;
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

  type deleteChannelAuthRemoveIdParams = {
    id: number;
  };

  type deleteChannelRemoveIdParams = {
    /** 主键 */
    id: number;
  };

  type deleteChannelUserRemoveIdParams = {
    id: number;
  };

  type deleteUserRemoveIdParams = {
    /** 主键 */
    id: number;
  };

  type getChannelAuthListParams = {
    channelId: number;
  };

  type getChannelGetInfoIdParams = {
    /** notification主键 */
    id: number;
  };

  type getChannelPageParams = {
    'records[0].key'?: any;
    pageNumber?: number;
    pageSize?: number;
    maxPageSize?: number;
    totalPage?: number;
    totalRow?: number;
    optimizeCountQuery?: boolean;
    uuid?: string;
    name?: string;
    createUserId?: number;
  };

  type getChannelUserPageParams = {
    'records[0].key'?: any;
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
    uuid?: string;
    channelId?: number;
    userId?: number;
    createTimeFrom?: string;
    createTimeTo?: string;
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

  type PageChannelUserVO = {
    /** 当前页数据。 */
    records?: ChannelUserVO[];
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

  type PageChannelVO = {
    /** 当前页数据。 */
    records?: ChannelVO[];
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

  type ResultChannelVO = {
    code?: number;
    msg?: string;
    data?: ChannelVO;
  };

  type ResultInteger = {
    code?: number;
    msg?: string;
    data?: number;
  };

  type ResultListChannelAuthVO = {
    code?: number;
    msg?: string;
    data?: ChannelAuthVO[];
  };

  type ResultListChannelUserVO = {
    code?: number;
    msg?: string;
    data?: ChannelUserVO[];
  };

  type ResultPageChannelUserVO = {
    code?: number;
    msg?: string;
    data?: PageChannelUserVO;
  };

  type ResultPageChannelVO = {
    code?: number;
    msg?: string;
    data?: PageChannelVO;
  };

  type ResultPageUserVO = {
    code?: number;
    msg?: string;
    data?: PageUserVO;
  };

  type ResultString = {
    code?: number;
    msg?: string;
    data?: string;
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
    /** 手机号 */
    phone?: string;
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
