import { useEffect, useState } from 'react'
import {
	Button,
	Form,
	Input,
	Picker,
	Popup,
	Toast,
	Typography,
} from 'react-vant'
import { cityArr } from './addressMap'
import { addressParams, useUploadAddress } from '../../api/address'
import { useLocalStorageState } from 'ahooks'
import { useLocation } from 'react-router-dom'
import { lineBox } from '../../pages/goodDetail/components/lineModalShow'

export function useAddressSelect() {
	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const goodId = query.get('goodId')
	const [show, setShow] = useState<boolean>(false)
	const [form] = Form.useForm()
	const [goodAddress, setGoodAddress] = useLocalStorageState<addressParams>(
		`snow-has-prize-${goodId}`,
		{
			defaultValue: undefined,
		}
	)

	const isIphone = goodId === '6'

	const [inviteCode] = useLocalStorageState<string>('snow-invite-code', {
		defaultValue: '',
	})

	const { mutateAsync } = useUploadAddress()

	useEffect(() => {
		if (goodAddress) {
			form.setFieldsValue(goodAddress)
		}
	}, [goodAddress])

	const node = (
		<Popup
			visible={show}
			closeable
			title="填寫收貨地址"
			position="bottom"
			round
			onClose={() => {
				setShow(false)
			}}
			description={
				<Form
					className=" pb-2"
					colon
					form={form}
					onFinish={async values => {
						const params = {
							...values,
							province: '台灣省',
							area: '',
							memberCode: inviteCode,
							productType: isIphone ? 2 : 1,
						}
						await mutateAsync(params)
						fbq('trackCustom', 'confirmAddress')
						Toast.success('填寫成功，等待送貨上門')
						setGoodAddress(params)
						setShow(false)
						setTimeout(() => {
							lineBox.showModal(isIphone)
						}, 200)
					}}
					footer={
						!goodAddress ? (
							<div className=" bg-white" style={{ margin: '16px 16px 0' }}>
								<Button round nativeType="submit" type="danger" block>
									提交
								</Button>
							</div>
						) : (
							<div className=" bg-white" style={{ margin: '16px 16px 0' }}>
								<Button
									round
									type="danger"
									block
									onClick={() => {
										fbq('trackCustom', 'confirmAddressAgain')
										// 到这里的时候 hasUploadAddressCount 一定是至少为1的
										setShow(false)
										// const canNavigate = (hasUploadAddressCount || 0) + 1 >= 3
										// lineBox.showModal(canNavigate)
										lineBox.showModal(false)
									}}
								>
									確定
								</Button>
							</div>
						)
					}
				>
					<Form.Item
						key="phone"
						name="phone"
						label="手機號"
						rules={[{ required: true, message: '請填寫手機號碼' }]}
					>
						<Input placeholder="請輸入手機號" />
					</Form.Item>
					<Form.Item
						key="username"
						name="username"
						label="聯絡人"
						rules={[{ required: true, message: '請填寫聯絡人' }]}
					>
						<Input placeholder="請輸入聯絡人" />
					</Form.Item>
					<Form.Item
						name="city"
						label="區域"
						trigger="onConfirm"
						rules={[{ required: true, message: '請選擇區域' }]}
						onClick={(_, actions: any) => actions.current?.open()}
					>
						<Picker
							popup
							columns={cityArr}
							confirmButtonText="確認"
							cancelButtonText="取消"
							placeholder="請選擇"
						>
							{val =>
								val ? <Typography.Text>{val}</Typography.Text> : '請選擇區域'
							}
						</Picker>
					</Form.Item>
					<Form.Item
						name="detail"
						label="詳細地址"
						rules={[{ required: true, message: '請填寫詳細地址' }]}
					>
						<Input.TextArea placeholder="地址一定要詳細" />
					</Form.Item>
					<Form.Item
						name="shop"
						label="超商門市"
						rules={[{ required: true, message: '請輸入7-11/全家門市' }]}
					>
						<Input placeholder="請輸入7-11/全家門市" />
					</Form.Item>
				</Form>
			}
		></Popup>
	)

	const showAddressNode = () => {
		setShow(true)
	}

	return { addressNode: node, showAddressNode }
}
