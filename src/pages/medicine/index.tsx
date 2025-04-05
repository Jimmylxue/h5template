import React, { useState } from 'react'
import {
	Card,
	Input,
	Button,
	Modal,
	Form,
	Select,
	DatePicker,
	Tag,
	Divider,
	Descriptions,
	Space,
	Switch,
	message,
} from 'antd'
import {
	SearchOutlined,
	PlusOutlined,
	DeleteOutlined,
	EditOutlined,
} from '@ant-design/icons'
import dayjs from 'dayjs'
import DrugPng from '@/assets/drug.png'

const { Search } = Input
const { Option } = Select

const { Meta } = Card

// 模拟药品数据
const mockMedicines = [
	{
		id: '1',
		name: '阿司匹林肠溶片',
		description:
			'用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经',
		expiryDate: '2024-12-31',
		remaining: 15,
		isTaking: true,
		times: ['morning', 'evening'],
		period: 'afterMeal',
		image: DrugPng,
	},
	{
		id: '2',
		name: '盐酸二甲双胍片',
		description:
			'用于单纯饮食控制不满意的Ⅱ型糖尿病病人，尤其是肥胖和伴高胰岛素血症者',
		expiryDate: '2025-06-30',
		remaining: 8,
		isTaking: true,
		times: ['morning', 'noon', 'evening'],
		period: 'beforeMeal',
		image: DrugPng,
	},
	{
		id: '3',
		name: '氨氯地平片',
		description: '高血压、慢性稳定性心绞痛及变异型心绞痛的治疗',
		expiryDate: '2023-11-30',
		remaining: 0,
		isTaking: false,
		times: ['morning'],
		period: 'afterMeal',
		image: DrugPng,
	},
	{
		id: '4',
		name: '阿托伐他汀钙片',
		description: '用于治疗高胆固醇血症和混合型高脂血症',
		expiryDate: '2024-09-15',
		remaining: 20,
		isTaking: true,
		times: ['evening'],
		period: 'afterMeal',
		image: DrugPng,
	},
]

export const Medicine: React.FC = () => {
	const [medicines, setMedicines] = useState(mockMedicines)
	const [filteredMedicines, setFilteredMedicines] = useState(mockMedicines)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [form] = Form.useForm()
	const [currentMedicine, setCurrentMedicine] = useState<any>(null)

	// 搜索药品
	const handleSearch = (value: string) => {
		if (!value) {
			setFilteredMedicines(medicines)
			return
		}
		const filtered = medicines.filter(
			med =>
				med.name.toLowerCase().includes(value.toLowerCase()) ||
				med.description.toLowerCase().includes(value.toLowerCase())
		)
		setFilteredMedicines(filtered)
	}

	// 添加/编辑药品
	const handleAddOrEditMedicine = (values: any) => {
		const newMedicine = {
			id: currentMedicine ? currentMedicine.id : `${medicines.length + 1}`,
			name: values.name,
			description: values.description,
			expiryDate: values.expiryDate.format('YYYY-MM-DD'),
			remaining: values.remaining || 0,
			isTaking: values.isTaking,
			times: values.times,
			period: values.period,
			image:
				'https://img.yao.95095.com/upload/202007/10/1594361798_1594361798.jpg',
		}

		if (currentMedicine) {
			// 编辑药品
			const updated = medicines.map(med =>
				med.id === currentMedicine.id ? newMedicine : med
			)
			setMedicines(updated)
			setFilteredMedicines(updated)
			message.success('药品信息更新成功')
		} else {
			// 添加药品
			setMedicines([...medicines, newMedicine])
			setFilteredMedicines([...medicines, newMedicine])
			message.success('药品添加成功')
		}

		setIsModalVisible(false)
		form.resetFields()
		setCurrentMedicine(null)
	}

	// 删除药品
	const handleDelete = (id: string) => {
		const updated = medicines.filter(med => med.id !== id)
		setMedicines(updated)
		setFilteredMedicines(updated)
		message.success('药品删除成功')
	}

	// 打开编辑模态框
	const handleEdit = (medicine: any) => {
		setCurrentMedicine(medicine)
		form.setFieldsValue({
			...medicine,
			expiryDate: dayjs(medicine.expiryDate),
		})
		setIsModalVisible(true)
	}

	// 渲染用药时间标签
	const renderTimeTags = (times: string[]) => {
		const timeMap: Record<string, string> = {
			morning: '早晨',
			noon: '中午',
			evening: '晚上',
		}

		return times.map(time => (
			<Tag key={time} color="blue" className="m-1">
				{timeMap[time]}
			</Tag>
		))
	}

	// 渲染用药时段标签
	const renderPeriodTag = (period: string) => {
		const periodMap: Record<string, { text: string; color: string }> = {
			beforeMeal: { text: '饭前', color: 'green' },
			afterMeal: { text: '饭后', color: 'orange' },
		}

		const periodInfo = periodMap[period] || { text: '其他', color: 'gray' }
		return (
			<Tag color={periodInfo.color} className="m-1">
				{periodInfo.text}
			</Tag>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
			<div className="max-w-6xl mx-auto">
				<div className="mb-6">
					<h1 className="text-2xl md:text-3xl font-bold text-gray-800">
						我的药箱
					</h1>
					<p className="text-gray-600">管理您的药品信息和用药计划</p>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
					<Search
						placeholder="搜索药品名称或功能描述"
						allowClear
						enterButton={
							<Button type="primary" icon={<SearchOutlined />}>
								搜索
							</Button>
						}
						size="large"
						className="w-full md:w-96"
						onSearch={handleSearch}
					/>
					<Button
						type="primary"
						icon={<PlusOutlined />}
						size="large"
						className="bg-blue-500 hover:bg-blue-600 border-none"
						onClick={() => setIsModalVisible(true)}
					>
						添加药品
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredMedicines.map(medicine => (
						<Card
							key={medicine.id}
							className="shadow-md hover:shadow-lg transition-shadow"
							cover={
								<img
									alt={medicine.name}
									src={medicine.image}
									className="max-h-full max-w-full object-contain"
								/>
							}
							actions={[
								<Button
									type="text"
									icon={<EditOutlined />}
									onClick={() => handleEdit(medicine)}
									className="text-blue-500"
								/>,
								<Button
									type="text"
									icon={<DeleteOutlined />}
									onClick={() => handleDelete(medicine.id)}
									className="text-red-500"
								/>,
							]}
						>
							<Meta
								title={
									<div className="flex justify-between items-center">
										<span className="text-lg font-semibold">
											{medicine.name}
										</span>
										<Tag color={medicine.isTaking ? 'green' : 'red'}>
											{medicine.isTaking ? '服用中' : '已停用'}
										</Tag>
									</div>
								}
								description={
									<div className="space-y-2 mt-2">
										<div className="text-gray-600 line-clamp-2">
											{medicine.description}
										</div>
										<Divider className="my-2" />
										<Descriptions column={1} size="small">
											<Descriptions.Item label="保质期">
												{medicine.expiryDate}
												{new Date(medicine.expiryDate) < new Date() && (
													<Tag color="red" className="ml-2">
														已过期
													</Tag>
												)}
											</Descriptions.Item>
											<Descriptions.Item label="剩余量">
												{medicine.remaining || '未填写'}
											</Descriptions.Item>
											<Descriptions.Item label="用药时间">
												<Space size={[0, 8]} wrap>
													{renderTimeTags(medicine.times)}
													{renderPeriodTag(medicine.period)}
												</Space>
											</Descriptions.Item>
										</Descriptions>
									</div>
								}
							/>
						</Card>
					))}
				</div>

				{/* 添加/编辑药品模态框 */}
				<Modal
					title={currentMedicine ? '编辑药品信息' : '添加新药品'}
					visible={isModalVisible}
					onCancel={() => {
						setIsModalVisible(false)
						form.resetFields()
						setCurrentMedicine(null)
					}}
					footer={null}
					width={800}
					centered
				>
					<Form
						form={form}
						layout="vertical"
						onFinish={handleAddOrEditMedicine}
						initialValues={{
							isTaking: true,
							times: ['morning'],
							period: 'afterMeal',
						}}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<Form.Item
									name="name"
									label="药品名称"
									rules={[{ required: true, message: '请输入药品名称' }]}
								>
									<Input placeholder="请输入药品名称" size="large" />
								</Form.Item>

								<Form.Item
									name="description"
									label="功能描述"
									rules={[{ required: true, message: '请输入药品功能描述' }]}
								>
									<Input.TextArea placeholder="请输入药品功能描述" rows={4} />
								</Form.Item>

								<Form.Item
									name="isTaking"
									label="是否正在服用"
									valuePropName="checked"
								>
									<Switch checkedChildren="是" unCheckedChildren="否" />
								</Form.Item>
							</div>

							<div>
								<Form.Item
									name="expiryDate"
									label="保质期"
									rules={[{ required: true, message: '请选择保质期' }]}
								>
									<DatePicker
										style={{ width: '100%' }}
										size="large"
										placeholder="请选择保质期"
									/>
								</Form.Item>

								<Form.Item name="remaining" label="剩余量">
									<Input
										type="number"
										placeholder="请输入剩余药量"
										size="large"
										addonAfter="粒/片"
									/>
								</Form.Item>

								<Form.Item
									name="times"
									label="用药时间"
									rules={[{ required: true, message: '请选择用药时间' }]}
								>
									<Select
										mode="multiple"
										placeholder="请选择用药时间"
										size="large"
									>
										<Option value="morning">早晨</Option>
										<Option value="noon">中午</Option>
										<Option value="evening">晚上</Option>
									</Select>
								</Form.Item>

								<Form.Item
									name="period"
									label="用药时段"
									rules={[{ required: true, message: '请选择用药时段' }]}
								>
									<Select placeholder="请选择用药时段" size="large">
										<Option value="beforeMeal">饭前</Option>
										<Option value="afterMeal">饭后</Option>
									</Select>
								</Form.Item>
							</div>
						</div>

						<Divider />

						<div className="flex justify-end gap-4">
							<Button
								onClick={() => {
									setIsModalVisible(false)
									form.resetFields()
									setCurrentMedicine(null)
								}}
							>
								取消
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								className="bg-blue-500 hover:bg-blue-600 border-none"
							>
								{currentMedicine ? '更新药品' : '添加药品'}
							</Button>
						</div>
					</Form>
				</Modal>
			</div>
		</div>
	)
}
