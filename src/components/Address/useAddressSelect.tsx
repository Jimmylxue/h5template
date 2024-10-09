import { useEffect, useRef, useState } from 'react'
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
import { useTranslation } from 'react-i18next'
const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

export function useAddressSelect() {
	const { t } = useTranslation()
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

	const isSubmitting = useRef<boolean>(false)

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
			title={t('addressSelect.pleaseText')}
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
						if (isSubmitting.current) {
							return
						}
						isSubmitting.current = true
						const params = {
							...values,
							province: lang === 'en' ? '马来西亚' : '台湾省',
							area: '',
							memberCode: inviteCode || '-',
							productType: isIphone ? 2 : 1,
						}
						await mutateAsync(params)
						fbq('trackCustom', 'confirmAddress')
						// if (isIphone) {
						// 	// @ts-ignore
						// 	fbq('track', 'Purchase', { value: 0.0, currency: 'USD' })
						// } else {
						// 	fbq('track', 'AddPaymentInfo')
						// }
						Toast.success(t('addressSelect.subSuccess'))
						setGoodAddress(params)
						setShow(false)
						setTimeout(() => {
							lineBox.showModal(isIphone)
							isSubmitting.current = false
						}, 200)
					}}
					footer={
						!goodAddress ? (
							<div className=" bg-white" style={{ margin: '16px 16px 0' }}>
								<Button round nativeType="submit" type="danger" block>
									{t('addressSelect.submitText')}
								</Button>
							</div>
						) : (
							<div className=" bg-white" style={{ margin: '16px 16px 0' }}>
								<Button
									round
									type="danger"
									block
									// nativeType="submit"
									onClick={() => {
										fbq('trackCustom', 'confirmAddressAgain')
										// 到这里的时候 hasUploadAddressCount 一定是至少为1的
										setShow(false)
										// const canNavigate = (hasUploadAddressCount || 0) + 1 >= 3
										// lineBox.showModal(canNavigate)
										lineBox.showModal(false)
									}}
								>
									{t('addressSelect.confirmText')}
								</Button>
							</div>
						)
					}
				>
					<Form.Item
						key="phone"
						name="phone"
						label={t('addressSelect.phoneLabel')}
						rules={[{ required: true, message: t('addressSelect.phoneRule') }]}
					>
						<Input placeholder={t('addressSelect.phoneRule')} />
					</Form.Item>
					<Form.Item
						key="username"
						name="username"
						label={t('addressSelect.userNameLabel')}
						rules={[
							{ required: true, message: t('addressSelect.userNameRule') },
						]}
					>
						<Input placeholder={t('addressSelect.userNameRule')} />
					</Form.Item>
					<Form.Item
						name="city"
						label={t('addressSelect.cityLabel')}
						trigger="onConfirm"
						rules={[{ required: true, message: t('addressSelect.cityRule') }]}
						onClick={(_, actions: any) => actions.current?.open()}
					>
						<Picker
							popup
							columns={cityArr}
							confirmButtonText={t('addressSelect.confirmText')}
							cancelButtonText={t('addressSelect.cancelText')}
							placeholder={t('addressSelect.placeHolderText')}
						>
							{val =>
								val ? (
									<Typography.Text>{val}</Typography.Text>
								) : (
									t('addressSelect.placeHolderText')
								)
							}
						</Picker>
					</Form.Item>
					<Form.Item
						name="detail"
						label={t('addressSelect.detailLabel')}
						rules={[{ required: true, message: t('addressSelect.detailRule') }]}
					>
						<Input.TextArea placeholder={t('addressSelect.detailRule')} />
					</Form.Item>
					<Form.Item
						name="shop"
						label={t('addressSelect.shopLabel')}
						rules={[{ required: true, message: t('addressSelect.shopRule') }]}
					>
						<Input placeholder={t('addressSelect.shopRule')} />
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
