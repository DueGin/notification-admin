import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    ModalForm,
    PageContainer,
    ProFormSelect,
    ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message, Form } from 'antd';
import React, { useRef, useState } from 'react';
import { deleteChannelUserRemoveId, getChannelUserPage, postChannelUserSave } from '@/services/notification-admin/channelUserController';
import { getChannelPage } from '@/services/notification-admin/channelController';
import { getUserPage } from '@/services/notification-admin/userController';

const handleGetPage = async (param: API.getChannelUserPageParams & { createTime?: [string, string] }) => {
    if (param.createTime) {
        param.createTimeFrom = param.createTime[0];
        param.createTimeTo = param.createTime[1];
        delete param.createTime;
    }
    const res = await getChannelUserPage(param);
    console.log(res);

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


const handleSave = async (data: API.ChannelUserSaveDTO) => {

    const res = await postChannelUserSave(data);
    if (res.code === 200) {
        message.success(res.msg);
        return true;
    } else {
        message.error(res.msg);
        return false;
    }

};


const handleRemove = async (selectedRow: API.ChannelUserVO) => {
    if (!selectedRow) {
        return true;
    }
    const res = await deleteChannelUserRemoveId({ id: selectedRow.id } as API.deleteChannelUserRemoveIdParams);
    if (res.code === 200) {
        message.success(res.msg);
    } else {
        message.error(res.msg)
    }
    return true;
};

const getChannelLookbackList = async (name?: string) => {
    const res = await getChannelPage({ name: name });
    if (res.data?.records) {
        return res.data.records.map(item => ({
            label: item.name,
            value: item.id
        }));
    }
    return [];
}

const getUserLookbackList = async (username?: string) => {
    const res = await getUserPage({ username: username });
    if (res.data?.records) {
        return res.data.records.map(item => ({
            label: item.username,
            value: item.id
        }));
    }
    return [];
}

const channelUserList: React.FC = () => {
    /**
     * @en-US Pop-up window of new window
     * @zh-CN 新建窗口的弹窗
     *  */
    const [modalOpen, handleModalOpen] = useState<boolean>(false);

    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<API.ChannelUserVO>();

    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */
    const intl = useIntl();

    // 添加一个表单数据状态
    const [formData, setFormData] = useState<API.ChannelUserVO>();

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

    const columns: ProColumns<API.ChannelUserVO>[] = [
        {
            title: '用户ID',
            dataIndex: 'userId',
            hideInTable: true,
            valueType: 'select',
            request: async ({ keyWords }) => {
                return await getUserLookbackList(keyWords);
            }
        },
        {
            title: '频道ID',
            dataIndex: 'channelId',
            hideInTable: true,
            valueType: 'select',
            request: async ({ keyWords }) => {
                return await getChannelLookbackList(keyWords);
            }
        },
        {
            title: '频道UUID',
            dataIndex: 'uuid',
            valueType: 'text',
            hideInTable: true
        },
        
        {
            title: '频道名称',
            dataIndex: 'channelName',
            search: false,
        },
        {
            title: '用户',
            dataIndex: 'username',
            search: false,
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            valueType: 'dateRange',
        },
        {
            title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                <a key="subscribeAlert" onClick={() => {
                    handleRemove(record).then(() => {
                        if (actionRef.current) {
                            actionRef.current?.reload();
                        }
                    });
                }}>
                    删除
                </a>,
            ],
        },
    ];

    return (
        <PageContainer>
            <ProTable<API.ChannelUserVO, API.getChannelUserPageParams>
                headerTitle="频道用户列表"
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
                title="保存频道用户"
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
                onFinish={async (value) => {
                    const success = await handleSave({
                        ...value,
                        id: currentRow?.id
                    } as API.ChannelUserSaveDTO);
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
                <ProFormSelect
                    label="频道"
                    name="channelId"
                    request={async ({ keyWords }) => {
                        return await getChannelLookbackList(keyWords);
                    }}
                />
                <ProFormSelect
                    label="用户"
                    name="userId"
                    request={async ({ keyWords }) => {
                        return await getUserLookbackList(keyWords);
                    }}
                />
            </ModalForm>
        </PageContainer>
    );
};

export default channelUserList;
