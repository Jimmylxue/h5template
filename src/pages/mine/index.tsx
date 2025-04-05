import React, { useState } from 'react'
import {
	Form,
	Input,
	Button,
	Select,
	Upload,
	message,
	Card,
	Avatar,
	Descriptions,
	Tag,
	Divider,
	Space,
	List,
} from 'antd'
import {
	UserOutlined,
	EditOutlined,
	SaveOutlined,
	CloseOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import type { UploadProps } from 'antd'

const { Option } = Select

// 模拟数据
const mockGuardians = [
	{ id: '1', name: '张三 (父亲)', relation: '父子' },
	{ id: '2', name: '李四 (母亲)', relation: '母子' },
	{ id: '3', name: '王五 (配偶)', relation: '夫妻' },
]

const mockElderly = [
	{ id: '101', name: '李爷爷', relation: '祖父' },
	{ id: '102', name: '王奶奶', relation: '祖母' },
]

type UserRole = 'guardian' | 'elderly'

interface UserProfileProps {
	role: UserRole
}

const UserProfile: React.FC<UserProfileProps> = ({ role }) => {
	const [editing, setEditing] = useState(false)
	const [form] = Form.useForm()
	const [avatarUrl, setAvatarUrl] = useState(
		'https://randomuser.me/api/portraits/women/43.jpg'
	)

	// 初始化表单值
	const initialValues = {
		name: '王小明',
		relation: '父子',
		role: role,
		avatar: [],
	}

	// 头像上传处理
	const uploadProps: UploadProps = {
		name: 'avatar',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status === 'done') {
				message.success(`${info.file.name} 上传成功`)
				// 模拟获取图片URL
				setAvatarUrl('https://randomuser.me/api/portraits/men/32.jpg')
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} 上传失败`)
			}
		},
		maxCount: 1,
	}

	const onFinish = (values: string) => {
		console.log('更新信息:', values)
		message.success('个人信息更新成功！')
		setEditing(false)
	}

	const handleCancel = () => {
		form.resetFields()
		setEditing(false)
	}

	return (
		<Card
			title="个人信息"
			className="w-full max-w-3xl"
			extra={
				!editing ? (
					<Button
						type="link"
						icon={<EditOutlined />}
						onClick={() => setEditing(true)}
						className="text-blue-500"
					>
						编辑
					</Button>
				) : null
			}
		>
			{editing ? (
				<Form
					form={form}
					initialValues={initialValues}
					onFinish={onFinish}
					layout="vertical"
				>
					<div className="flex flex-col md:flex-row gap-6">
						<div className="w-full md:w-1/3 flex flex-col items-center">
							<Form.Item name="avatar" valuePropName="fileList">
								<Upload
									{...uploadProps}
									listType="picture"
									className="avatar-uploader"
								>
									<Avatar
										size={120}
										src={avatarUrl}
										icon={<UserOutlined />}
										className="mb-4"
									/>
									<Button icon={<UploadOutlined />}>更换头像</Button>
								</Upload>
							</Form.Item>
						</div>

						<div className="w-full md:w-2/3">
							<Form.Item
								name="name"
								label="姓名"
								rules={[{ required: true, message: '请输入姓名！' }]}
							>
								<Input placeholder="请输入姓名" size="large" />
							</Form.Item>

							<Form.Item
								name="relation"
								label="亲属关系"
								rules={[{ required: true, message: '请选择亲属关系！' }]}
							>
								<Select placeholder="请选择亲属关系" size="large">
									<Option value="父子">父子</Option>
									<Option value="母子">母子</Option>
									<Option value="夫妻">夫妻</Option>
									<Option value="子女">子女</Option>
									<Option value="其他亲属">其他亲属</Option>
								</Select>
							</Form.Item>

							<Form.Item name="role" label="用户角色">
								<Select disabled size="large">
									<Option value="guardian">监护人</Option>
									<Option value="elderly">老人</Option>
								</Select>
							</Form.Item>

							<Form.Item className="mt-6">
								<Space>
									<Button
										type="primary"
										htmlType="submit"
										icon={<SaveOutlined />}
										className="bg-blue-500 hover:bg-blue-600 border-none"
									>
										保存
									</Button>
									<Button icon={<CloseOutlined />} onClick={handleCancel}>
										取消
									</Button>
								</Space>
							</Form.Item>
						</div>
					</div>
				</Form>
			) : (
				<div className="flex flex-col md:flex-row gap-6">
					<div className="w-full md:w-1/3 flex flex-col items-center">
						<Avatar
							size={120}
							src={avatarUrl}
							icon={<UserOutlined />}
							className="mb-4"
						/>
						<Tag
							color={role === 'guardian' ? 'blue' : 'purple'}
							className="text-sm"
						>
							{role === 'guardian' ? '监护人' : '老人'}
						</Tag>
					</div>

					<div className="w-full md:w-2/3">
						<Descriptions column={1} className="profile-description">
							<Descriptions.Item label="姓名">王小明</Descriptions.Item>
							<Descriptions.Item label="亲属关系">父子</Descriptions.Item>
							<Descriptions.Item label="手机号码">
								138****1234
							</Descriptions.Item>
							<Descriptions.Item label="注册时间">2023-05-15</Descriptions.Item>
						</Descriptions>
					</div>
				</div>
			)}
		</Card>
	)
}

export const Mine: React.FC<{ role: UserRole }> = ({ role }) => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
			<div className="max-w-6xl mx-auto">
				<div className="mb-6">
					<h1 className="text-2xl md:text-3xl font-bold text-gray-800">
						个人中心
					</h1>
					<p className="text-gray-600">管理您的个人信息和监护关系</p>
				</div>

				<UserProfile role={role} />

				<Divider className="my-6" />

				<div className="grid grid-cols-1 gap-6">
					{role === 'guardian' ? (
						<Card title="我监护的老人">
							<List
								itemLayout="horizontal"
								dataSource={mockElderly}
								renderItem={item => (
									<List.Item
										actions={[
											<Button type="link" className="text-blue-500">
												查看详情
											</Button>,
											<Button type="link" className="text-red-500">
												解除监护
											</Button>,
										]}
									>
										<List.Item.Meta
											avatar={
												<Avatar
													src={`https://randomuser.me/api/portraits/men/${item.id.slice(
														-2
													)}.jpg`}
												/>
											}
											title={<span className="font-medium">{item.name}</span>}
											description={`关系: ${item.relation}`}
										/>
									</List.Item>
								)}
							/>
							<div className="mt-4">
								<Button
									type="primary"
									className="bg-purple-500 hover:bg-purple-600 border-none"
								>
									添加监护老人
								</Button>
							</div>
						</Card>
					) : (
						<Card title="我的监护人">
							<List
								itemLayout="horizontal"
								dataSource={mockGuardians}
								renderItem={item => (
									<List.Item
										actions={[
											<Button type="link" className="text-blue-500">
												联系TA
											</Button>,
										]}
									>
										<List.Item.Meta
											avatar={
												<Avatar
													src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}
												/>
											}
											title={<span className="font-medium">{item.name}</span>}
											description={`关系: ${item.relation}`}
										/>
									</List.Item>
								)}
							/>
						</Card>
					)}
				</div>
			</div>
		</div>
	)
}
