import React, { useState } from 'react'
import {
	Form,
	Input,
	Button,
	Select,
	Upload,
	message,
	Divider,
	Tabs,
} from 'antd'
import {
	UserOutlined,
	PhoneOutlined,
	LockOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import type { UploadProps } from 'antd'

const { TabPane } = Tabs
const { Option } = Select

// 模拟监护人数据
const mockGuardians = [
	{ id: '1', name: '张三 (父亲)' },
	{ id: '2', name: '李四 (母亲)' },
	{ id: '3', name: '王五 (配偶)' },
	{ id: '4', name: '赵六 (子女)' },
]

export const Login: React.FC = () => {
	const [activeTab, setActiveTab] = useState('login')
	const [countdown, setCountdown] = useState(0)
	const [form] = Form.useForm()

	// 验证码倒计时
	const startCountdown = () => {
		setCountdown(60)
		const timer = setInterval(() => {
			setCountdown(prev => {
				if (prev <= 1) {
					clearInterval(timer)
					return 0
				}
				return prev - 1
			})
		}, 1000)
	}

	// 头像上传处理
	const uploadProps: UploadProps = {
		name: 'avatar',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList)
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} 上传成功`)
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} 上传失败`)
			}
		},
		maxCount: 1,
	}

	const onFinish = (values: any) => {
		console.log('Received values:', values)
		message.success(activeTab === 'login' ? '登录成功！' : '注册成功！')
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
				<div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white text-center">
					<h1 className="text-2xl font-bold">药品管理平台</h1>
					<p className="opacity-80">为监护人提供便捷的药品管理服务</p>
				</div>

				<Tabs
					activeKey={activeTab}
					onChange={setActiveTab}
					centered
					className="px-6 pt-4"
					tabBarStyle={{ marginBottom: 24 }}
				>
					<TabPane tab="登录" key="login">
						<Form
							name="login_form"
							initialValues={{ remember: true }}
							onFinish={onFinish}
							layout="vertical"
						>
							<Form.Item
								name="phone"
								label="手机号码"
								rules={[
									{ required: true, message: '请输入手机号码！' },
									{
										pattern: /^1[3-9]\d{9}$/,
										message: '请输入正确的手机号码！',
									},
								]}
							>
								<Input
									prefix={<PhoneOutlined className="text-gray-400" />}
									placeholder="请输入手机号码"
									size="large"
								/>
							</Form.Item>

							<Form.Item
								name="code"
								label="验证码"
								rules={[{ required: true, message: '请输入验证码！' }]}
							>
								<div className="flex gap-2">
									<Input
										prefix={<LockOutlined className="text-gray-400" />}
										placeholder="请输入验证码"
										size="large"
										className="flex-1"
									/>
									<Button
										size="large"
										disabled={countdown > 0}
										onClick={startCountdown}
										className="w-32"
									>
										{countdown > 0 ? `${countdown}秒后重试` : '获取验证码'}
									</Button>
								</div>
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									size="large"
									block
									className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none"
								>
									登录
								</Button>
							</Form.Item>
						</Form>
					</TabPane>

					<TabPane tab="注册" key="register">
						<Form
							form={form}
							name="register_form"
							onFinish={onFinish}
							layout="vertical"
							scrollToFirstError
						>
							<Form.Item
								name="phone"
								label="手机号码"
								rules={[
									{ required: true, message: '请输入手机号码！' },
									{
										pattern: /^1[3-9]\d{9}$/,
										message: '请输入正确的手机号码！',
									},
								]}
							>
								<Input
									prefix={<PhoneOutlined className="text-gray-400" />}
									placeholder="请输入手机号码"
									size="large"
								/>
							</Form.Item>

							<Form.Item
								name="name"
								label="姓名"
								rules={[{ required: true, message: '请输入您的姓名！' }]}
							>
								<Input
									prefix={<UserOutlined className="text-gray-400" />}
									placeholder="请输入您的姓名"
									size="large"
								/>
							</Form.Item>

							<Form.Item
								name="avatar"
								label="头像"
								valuePropName="fileList"
								getValueFromEvent={e => e.fileList}
							>
								<Upload {...uploadProps} listType="picture">
									<Button icon={<UploadOutlined />} size="large" block>
										点击上传头像
									</Button>
								</Upload>
							</Form.Item>

							<Form.Item
								name="guardian"
								label="选择监护人"
								rules={[{ required: true, message: '请选择监护人！' }]}
							>
								<Select
									placeholder="请选择监护人"
									size="large"
									showSearch
									optionFilterProp="children"
									filterOption={(input, option) =>
										(option?.children as string)
											.toLowerCase()
											.includes(input.toLowerCase())
									}
								>
									{mockGuardians.map(guardian => (
										<Option key={guardian.id} value={guardian.id}>
											{guardian.name}
										</Option>
									))}
								</Select>
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									size="large"
									block
									className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none"
								>
									注册
								</Button>
							</Form.Item>
						</Form>
					</TabPane>
				</Tabs>

				<Divider className="my-0" />
				<div className="p-4 text-center text-gray-500">
					{activeTab === 'login' ? (
						<span>
							还没有账号？{' '}
							<Button
								type="link"
								onClick={() => setActiveTab('register')}
								className="p-0"
							>
								立即注册
							</Button>
						</span>
					) : (
						<span>
							已有账号？{' '}
							<Button
								type="link"
								onClick={() => setActiveTab('login')}
								className="p-0"
							>
								立即登录
							</Button>
						</span>
					)}
				</div>
			</div>
		</div>
	)
}
