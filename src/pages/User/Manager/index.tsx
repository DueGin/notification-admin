import { DeleteTwoTone, EditTwoTone, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  ModalForm,
  PageContainer,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message, Form, Avatar } from 'antd';
import React, { useRef, useState } from 'react';
import { deleteUserRemoveId, getUserId, getUserPage, postUserSave } from "@/services/notification-admin/userController";

const handleGetPage = async (param: API.getUserPageParams) => {
  const res = await getUserPage(param);
  if (res.data) {
    console.log(res.data.records);
    return {
      data: res.data.records,
      success: true,
      total: res.data.totalRow
    }
  }
  return {
    data: [],
    success: true,
    total: 0
  }
}

const handleGetInfo = async (id: number) => {
  if (id) {
    const res = await getUserId({ id: id });
    if (res.data) {
      return res.data;
    }
  }
  return {}
}

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param data
 */
const handleSave = async (data: API.UserSaveDTO) => {
  const hide = message.loading('正在添加');
  try {
    const res = await postUserSave(data);
    if (res.data) {
      message.success('保存成功');
      hide();
    } else {
      message.error('保存失败，再试多一次咯！');
    }
    return true;
  } catch (error) {
    hide();
    message.error('保存失败，再试多一次咯！');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRow
 */
const handleRemove = async (selectedRow: API.UserVO) => {
  if (!selectedRow) {
    return true;
  }
  const res = await deleteUserRemoveId({ id: selectedRow.id } as API.deleteUserRemoveIdParams);
  if (res.code === 200) {
    message.success(res.msg)
  } else {
    message.error(res.msg)
  }
  return true;
};

const UserManagerList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [modalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.UserVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserVO[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  // 添加一个表单数据状态
  const [formData, setFormData] = useState<API.UserVO>();

  const [form] = Form.useForm();

  // 添加一个处理新建按钮点击的函数
  const handleAdd = () => {
    form.resetFields();
    setCurrentRow(undefined);
    setFormData(undefined);
    // 确保状态更新后再打开模态框
    setTimeout(() => {
      handleModalOpen(true);
    }, 0);
  };

  // 添加一个处理编辑按钮点击的函数
  const handleEdit = (record: API.UserVO) => {
    form.resetFields();
    setCurrentRow(record);
    handleModalOpen(true);
  };

  const columns: ProColumns<API.UserVO>[] = [
    {
      title: 'UID',
      dataIndex: 'account',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   search: false,
    //   render: (dom, entity) => {
    //     return (
    //       <Avatar src={entity.avatar} size="large" shape="square" />
    //     )
    //   }
    // },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      search: false
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime'
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      search: false
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <EditTwoTone onClick={() => handleEdit(record)} />,
        <DeleteTwoTone onClick={() => handleRemove(record)} />
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserVO, API.getUserPageParams>
        headerTitle="查询用户"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={handleAdd}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={handleGetPage}
        columns={columns}
      />
      <ModalForm
        form={form}
        title={currentRow?.id ? "编辑用户" : "新建用户"}
        width="400px"
        open={modalOpen}
        modalProps={{
          destroyOnClose: true,
          afterClose: () => {
            form.resetFields();
            setFormData(undefined);
            setCurrentRow(undefined);
          }
        }}
        onOpenChange={(visible) => {
          handleModalOpen(visible);
          if (!visible) {
            form.resetFields();
            setFormData(undefined);
            setCurrentRow(undefined);
          }
          if (visible && currentRow?.id) {
            handleGetInfo(currentRow.id)
              .then((data) => {
                if (data) {
                  form.setFieldsValue(data);
                  setFormData(data);
                }
              });
          }
        }}
        onFinish={async (value) => {
          const success = await handleSave({
            ...value,
            id: currentRow?.id
          } as API.UserSaveDTO);
          if (success) {
            handleModalOpen(false);
            setFormData(undefined);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current?.reload();
            }
          }
          return success;
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: "用户名不能为空",
            },
          ]}
          label="用户名"
          width="md"
          name="username"
          tooltip="默认密码：123456"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: "手机号不能为空",
            },
          ]}
          label="手机号"
          width="md"
          name="phone"
        />
        <ProFormText label="邮箱" width="md" name="email" />
      </ModalForm>
    </PageContainer>
  );
};

export default UserManagerList;
