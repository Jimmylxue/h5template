import React, { useState, useEffect } from 'react'
import {
	Button,
	Upload,
	Modal,
	Card,
	Avatar,
	Progress,
	Tag,
	notification,
	Image,
	List,
} from 'antd'
import {
	UploadOutlined,
	BellOutlined,
	MedicineBoxOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
} from '@ant-design/icons'
import type { UploadProps } from 'antd'
import DrugPng from '@/assets/drug.png'
import CodePng from '@/assets/code.png'

const { Meta } = Card

// 模拟药品数据
const mockMedicines = [
	{
		id: '1',
		name: '阿司匹林肠溶片',
		dosage: '100mg',
		time: ['08:00', '12:00', '20:00'],
		remaining: 15,
		total: 30,
		image: DrugPng,
	},
	{
		id: '2',
		name: '盐酸二甲双胍片',
		dosage: '0.5g',
		time: ['08:00', '20:00'],
		remaining: 8,
		total: 30,
		image: DrugPng,
	},
]

const mockGuardians = [
	{ id: '1', name: '张先生', relation: '儿子' },
	{ id: '2', name: '李女士', relation: '女儿' },
	{ id: '3', name: '王医生', relation: '家庭医生' },
]

export const Home: React.FC = () => {
	const [isEmergencyModalVisible, setIsEmergencyModalVisible] = useState(false)
	const [isReminderModalVisible, setIsReminderModalVisible] = useState(false)
	const [currentMedicine, setCurrentMedicine] = useState('')
	const [timeLeft, setTimeLeft] = useState({
		morning: '',
		noon: '',
		evening: '',
	})

	// 计算剩余时间
	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes()

			// 早上8点
			const morningTime = new Date()
			morningTime.setHours(8, 0, 0, 0)

			// 中午12点
			const noonTime = new Date()
			noonTime.setHours(12, 0, 0, 0)

			// 晚上8点
			const eveningTime = new Date()
			eveningTime.setHours(20, 0, 0, 0)

			const formatTimeDiff = (targetTime: Date) => {
				let diff = targetTime.getTime() - now.getTime()
				if (diff < 0) {
					// 如果已经过了今天的时间，计算明天的
					targetTime.setDate(targetTime.getDate() + 1)
					diff = targetTime.getTime() - now.getTime()
				}
				const hoursLeft = Math.floor(diff / (1000 * 60 * 60))
				const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
				return `${hoursLeft}小时${minutesLeft}分钟`
			}

			setTimeLeft({
				morning: formatTimeDiff(morningTime),
				noon: formatTimeDiff(noonTime),
				evening: formatTimeDiff(eveningTime),
			})

			// 检查是否需要提醒
			mockMedicines.forEach(med => {
				med.time.forEach(t => {
					const [h, m] = t.split(':').map(Number)
					if (hours === h && Math.abs(minutes - m) <= 1) {
						setCurrentMedicine(med.name)
						setIsReminderModalVisible(true)
					}
				})
			})
		}

		calculateTimeLeft()
		const timer = setInterval(calculateTimeLeft, 60000) // 每分钟更新一次

		return () => clearInterval(timer)
	}, [])

	// 条形码上传处理
	const uploadProps: UploadProps = {
		name: 'barcode',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status === 'done') {
				notification.success({
					message: '药品识别成功',
					description: '阿司匹林肠溶片 100mg 已添加到您的药品列表',
				})
			} else if (info.file.status === 'error') {
				notification.error({
					message: '识别失败',
					description: '未能识别药品条形码，请尝试手动输入',
				})
			}
		},
		showUploadList: false,
		accept: 'image/*',
	}

	const handleEmergencyCall = () => {
		setIsEmergencyModalVisible(true)
		// 模拟拨打110
		setTimeout(() => {
			notification.warning({
				message: '紧急呼救已发送',
				description: '110已收到您的求助信息，请保持电话畅通',
				duration: 0,
			})
		}, 1500)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
			<div className="max-w-6xl mx-auto">
				<div className="mb-6 flex justify-between items-center">
					<div>
						<h1 className="text-2xl md:text-3xl font-bold text-gray-800">
							药品管理
						</h1>
						<p className="text-gray-600">今日用药提醒与药品管理</p>
					</div>
					<Button
						danger
						icon={<ExclamationCircleOutlined />}
						onClick={handleEmergencyCall}
						className="bg-red-500 hover:bg-red-600 border-none text-red-500"
					>
						一键呼救 (110)
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
					{/* 药品扫码录入 */}
					<Card
						title="药品扫码录入"
						className="shadow-md"
						actions={[
							<Upload {...uploadProps}>
								<Button type="link" icon={<UploadOutlined />}>
									上传条形码
								</Button>
							</Upload>,
						]}
					>
						<div className="flex flex-col items-center p-4">
							<Image
								src={CodePng}
								alt="条形码示例"
								preview={false}
								width={200}
							/>
							<p className="mt-4 text-gray-500 text-center">
								拍摄或上传药品条形码图片，自动识别药品信息
							</p>
						</div>
					</Card>

					{/* 用药提醒概览 */}
					<Card title="用药提醒" className="shadow-md">
						<div className="space-y-4">
							<div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
								<div className="flex items-center">
									<ClockCircleOutlined className="text-blue-500 text-xl mr-3" />
									<span className="font-medium">早餐后</span>
								</div>
								<Tag color="blue">{timeLeft.morning}</Tag>
							</div>

							<div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
								<div className="flex items-center">
									<ClockCircleOutlined className="text-yellow-500 text-xl mr-3" />
									<span className="font-medium">午餐后</span>
								</div>
								<Tag color="gold">{timeLeft.noon}</Tag>
							</div>

							<div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
								<div className="flex items-center">
									<ClockCircleOutlined className="text-purple-500 text-xl mr-3" />
									<span className="font-medium">晚餐后</span>
								</div>
								<Tag color="purple">{timeLeft.evening}</Tag>
							</div>
						</div>
					</Card>

					{/* 紧急联系信息 */}
					<Card title="紧急联系人" className="shadow-md">
						<List
							itemLayout="horizontal"
							dataSource={mockGuardians.slice(0, 2)}
							renderItem={item => (
								<List.Item
									actions={[
										<Button type="link" className="text-blue-500">
											联系
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
				</div>

				{/* 药品列表 */}
				<Card title="我的药品" className="shadow-md mb-6">
					<List
						grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
						dataSource={mockMedicines}
						renderItem={item => (
							<List.Item>
								<Card
									cover={
										<div className="h-40 flex items-center justify-center bg-gray-50">
											<img
												alt={item.name}
												src={item.image}
												className=" w-[240px] h-[160px]"
											/>
										</div>
									}
									actions={[
										<Button type="link" icon={<BellOutlined />}>
											设置提醒
										</Button>,
										<Button type="link" danger>
											删除
										</Button>,
									]}
								>
									<Meta
										title={item.name}
										description={
											<div className="space-y-2">
												<div>规格: {item.dosage}</div>
												<div>用药时间: {item.time.join(', ')}</div>
												<div className="flex items-center">
													<span className="mr-2">剩余量:</span>
													<Progress
														percent={Math.round(
															(item.remaining / item.total) * 100
														)}
														size="small"
														status={item.remaining < 5 ? 'exception' : 'normal'}
														className="w-24"
													/>
													<span className="ml-2">
														{item.remaining}/{item.total}
													</span>
												</div>
											</div>
										}
									/>
								</Card>
							</List.Item>
						)}
					/>
				</Card>

				{/* 紧急呼救模态框 */}
				<Modal
					title={
						<span className="text-red-500">
							<ExclamationCircleOutlined /> 紧急呼救
						</span>
					}
					visible={isEmergencyModalVisible}
					onOk={() => setIsEmergencyModalVisible(false)}
					onCancel={() => setIsEmergencyModalVisible(false)}
					footer={[
						<Button
							key="back"
							onClick={() => setIsEmergencyModalVisible(false)}
						>
							我已安全
						</Button>,
						<Button
							key="submit"
							type="primary"
							danger
							onClick={() => setIsEmergencyModalVisible(false)}
						>
							确认呼救
						</Button>,
					]}
					centered
				>
					<div className="text-center py-6">
						<ExclamationCircleOutlined className="text-red-500 text-4xl mb-4" />
						<h3 className="text-xl font-bold mb-2">正在呼叫110报警电话</h3>
						<p className="text-gray-600">请保持冷静，等待救援人员到达</p>
						<p className="text-gray-600 mt-4">您的当前位置已发送给紧急联系人</p>
					</div>
				</Modal>

				{/* 用药提醒模态框 */}
				<Modal
					title={
						<span className="text-blue-500">
							<MedicineBoxOutlined /> 用药提醒
						</span>
					}
					visible={isReminderModalVisible}
					onOk={() => setIsReminderModalVisible(false)}
					onCancel={() => setIsReminderModalVisible(false)}
					footer={[
						<Button key="back" onClick={() => setIsReminderModalVisible(false)}>
							稍后提醒
						</Button>,
						<Button
							key="submit"
							type="primary"
							onClick={() => setIsReminderModalVisible(false)}
							className="bg-blue-500 hover:bg-blue-600 border-none"
						>
							已服药
						</Button>,
					]}
					centered
				>
					<div className="text-center py-6">
						<MedicineBoxOutlined className="text-blue-500 text-4xl mb-4" />
						<h3 className="text-xl font-bold mb-2">该吃药了！</h3>
						<p className="text-lg">{currentMedicine}</p>
						<p className="text-gray-600 mt-4">请按时服药，保持健康</p>
					</div>
				</Modal>
			</div>
		</div>
	)
}
