import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    ModalForm,
    PageContainer,
    ProFormText,
    ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message, Form } from 'antd';
import React, { useRef, useState } from 'react';
import { deleteChannelRemoveId, getChannelGetInfoId, getChannelPage, postChannelSave } from '@/services/notification-admin/channelController';

const handleGetPage = async (param: API.getChannelPageParams) => {
    const res = await getChannelPage(param);
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

const handleGetInfo = async (id: number) => {

    if (id) {
        const res = await getChannelGetInfoId({ id: id });
        if (res.data) {
            return res.data;
        }
    }
    return {}
}


/**
 * 保存频道数据
 * @param data 频道数据
 */
const handleSave = async (data: API.ChannelSaveDTO) => {

    const res = await postChannelSave(data);
    if (res.code === 200) {
        message.success(res.msg);
        return true;
    } else {
        message.error(res.msg);
        return false;
    }

};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRow
 */
const handleRemove = async (selectedRow: API.ChannelVO) => {
    if (!selectedRow) {
        return true;
    }
    const res = await deleteChannelRemoveId({ id: selectedRow.id } as API.deleteChannelRemoveIdParams);
    if (res.code === 200) {
        message.success(res.msg);
    } else {
        message.error(res.msg)
    }
    return true;
};

const channelManagerList: React.FC = () => {
    /**
     * @en-US Pop-up window of new window
     * @zh-CN 新建窗口的弹窗
     *  */
    const [modalOpen, handleModalOpen] = useState<boolean>(false);

    const [showDetail, setShowDetail] = useState<boolean>(false);

    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<API.ChannelVO>();

    const [tableKey, setTableKey] = useState<number>(0);

    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */
    const intl = useIntl();

    // 添加一个表单数据状态
    const [formData, setFormData] = useState<API.ChannelVO>();

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
    const handleEdit = (record: API.ChannelVO) => {
        form.resetFields();
        setCurrentRow(record);
        handleModalOpen(true);
    };

    const columns: ProColumns<API.ChannelVO>[] = [
        {
            title: 'UUID',
            dataIndex: 'uuid',
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
            title: '频道名称',
            dataIndex: 'name',
        },
        {
            title: '创建人',
            dataIndex: 'createUsername',
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
                <a
                    key="config"
                    onClick={() => handleEdit(record)}
                >
                    编辑
                </a>,
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
            <ProTable<API.ChannelVO, API.getChannelPageParams>
                headerTitle="频道列表"
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
                title={currentRow?.id ? "编辑频道信息" : "新建频道"}
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
                    } as API.ChannelSaveDTO);
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
                            message: "频道名称不能为空",
                        },
                    ]}
                    label="频道名称"
                    width="md"
                    name="name"
                />
            </ModalForm>
        </PageContainer>
    );
};

export default channelManagerList;
