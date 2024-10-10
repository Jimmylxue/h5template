import { useEffect, useRef, useState } from 'react'
import { Dialog, Picker, Popup, Toast } from 'react-vant'
import bottom from '@/assets/img/goodDetail/bottom.png'
import { cityArr } from '@/components/Address/addressMap'
import { useTranslation } from 'react-i18next'
import { useCurrentGood } from '../../core/useCurrentGood'
import { useLocalStorageState } from 'ahooks'
import { addressParams, useUploadAddress } from '@/api/address'
import { useSku } from '../../SkuContext'
import { lineBox } from '../../components/lineModalShow'
import { useFbData } from '@/hooks/useFb'
const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

/**
 * 是否展示 选择城市
 */
const showCityChoose = import.meta.env.VITE_APP_CITY_CHOOSE === 'true'

type TProps = {
	visible: boolean
	onClose: () => void
}

export function AddressForm({ visible, onClose }: TProps) {
	const { t } = useTranslation()

	const { good, goodId } = useCurrentGood()

	const [city, setCity] = useState<string>('')
	const [cityChooseShow, setCityChooseShow] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>('')
	const [username, setusername] = useState<string>('')
	const [detail, setDetail] = useState<string>('')
	const [shop, setShop] = useState<string>('')

	const { fbc, fbp } = useFbData()

	const [_, setGoodAddress] = useLocalStorageState<addressParams>(
		`snow-has-prize-${goodId}`,
		{
			defaultValue: undefined,
		}
	)

	const { mutateAsync } = useUploadAddress()

	const { selectImage, selectText } = useSku()

	const [inviteCode] = useLocalStorageState<string>('snow-invite-code', {
		defaultValue: '',
	})

	const isSubmitting = useRef<boolean>(false)

	const isIphone = good?.id === 6

	useEffect(() => {
		const storageAddress = localStorage.getItem('storageAddress')
		if (visible && storageAddress && JSON.parse(storageAddress)) {
			Dialog.confirm({
				message: t('addressSelect.usePreAddressText'),
				confirmButtonText: t('addressSelect.usePreConfirm'),
				cancelButtonText: t('addressSelect.usePreCancel'),
				onConfirm: () => {
					const { phone, city, name, detail, shop } = JSON.parse(
						storageAddress
					) as unknown as addressParams

					console.log('storageAddress', storageAddress)
					setPhone(phone)
					setCity(city)
					setusername(name)
					setDetail(detail)
					setShop(shop)
				},
			})
		}
	}, [visible])

	return (
		<>
			<Popup
				visible={visible}
				closeable
				title={t('addressSelect.pleaseText')}
				position="bottom"
				description={
					<div className=" pb-4">
						<div
							className=" py-4 px-2 rounded-lg mt-2"
							style={{
								boxShadow: ' 0px 0px 4px 0px #D0D0D0',
							}}
						>
							<div className=" flex items-center">
								<div className=" flex items-center w-[70px]">
									<div className="text-[#FF4125]">*</div>
									<div>{t('addressSelect.phoneLabel')}</div>
								</div>
								<div className=" flex items-center">
									<div className=" flex items-center">
										<div className=" mr-2">
											{t('addressSelect.phonePreCode')}
										</div>
										<input
											type="text"
											placeholder={t('addressSelect.phoneRule')}
											value={phone}
											onChange={e => {
												setPhone(e.target.value)
											}}
										/>
									</div>
									<div></div>
								</div>
							</div>
						</div>
						<div
							className=" py-4 px-2 rounded-lg mt-2"
							style={{
								boxShadow: ' 0px 0px 4px 0px #D0D0D0',
							}}
						>
							<div className=" flex items-center">
								<div className=" flex items-center w-[70px]">
									<div className="text-[#FF4125]">*</div>
									<div>{t('addressSelect.userNameLabel')}</div>
								</div>
								<div className=" flex items-center">
									<div>
										<input
											type="text"
											placeholder={t('addressSelect.userNameRule')}
											value={username}
											onChange={e => {
												setusername(e.target.value)
											}}
										/>
									</div>
									<div></div>
								</div>
							</div>
						</div>
						{showCityChoose && (
							<div
								className=" py-4 px-2 rounded-lg mt-2"
								style={{
									boxShadow: ' 0px 0px 4px 0px #D0D0D0',
								}}
							>
								<div className=" flex items-center">
									<div className=" flex items-center w-[70px]">
										<div className="text-[#FF4125]">*</div>
										<div>{t('addressSelect.cityLabel')}</div>
									</div>
									<div
										className=" flex items-center flex-grow"
										onClick={() => {
											setCityChooseShow(true)
										}}
									>
										<div className=" flex-grow">
											<input
												value={city}
												type="text"
												placeholder={t('addressSelect.cityRule')}
												readOnly
											/>
										</div>
										<div>
											<img src={bottom} className=" w-[11px] h-[6px]" alt="" />
										</div>
									</div>
								</div>
							</div>
						)}

						<div
							className=" py-4 px-2 rounded-lg mt-2"
							style={{
								boxShadow: ' 0px 0px 4px 0px #D0D0D0',
							}}
						>
							<div className=" flex items-center">
								<div className=" flex items-center w-[70px]">
									<div className="text-[#FF4125]">*</div>
									<div>{t('addressSelect.detailLabel')}</div>
								</div>
								<div className=" flex items-center">
									<div>
										<input
											type="text"
											placeholder={t('addressSelect.detailRule')}
											value={detail}
											onChange={e => {
												setDetail(e.target.value)
											}}
										/>
									</div>
									<div></div>
								</div>
							</div>
						</div>
						<div
							className=" py-4 px-2 rounded-lg mt-2"
							style={{
								boxShadow: ' 0px 0px 4px 0px #D0D0D0',
							}}
						>
							<div className=" flex items-center">
								<div className=" flex items-center w-[70px]">
									<div className="text-[#FF4125]">*</div>
									<div>{t('addressSelect.shopLabel')}</div>
								</div>
								<div className=" flex items-center">
									<div>
										<input
											type="text"
											placeholder={t('addressSelect.shopRule')}
											value={shop}
											onChange={e => {
												setShop(e.target.value)
											}}
										/>
									</div>
									<div></div>
								</div>
							</div>
						</div>

						<div
							className=" w-full bg-[#FF4125] flex justify-center items-center text-white text-[13px] rounded-lg h-[50px] mt-6"
							onClick={async () => {
								if (!phone) {
									Toast.info(t('addressSelect.phoneRule'))
									return
								}
								if (!username) {
									Toast.info(t('addressSelect.userNameRule'))
									return
								}
								if (!detail) {
									Toast.info(t('addressSelect.detailRule'))
									return
								}
								if (!city && showCityChoose) {
									Toast.info(t('addressSelect.cityRule'))
									return
								}
								if (!shop) {
									Toast.info(t('addressSelect.shopRule'))
									return
								}
								if (isSubmitting.current) {
									return
								}
								isSubmitting.current = true
								const params = {
									province: lang === 'en' ? '马来西亚' : '台湾省',
									area: '',
									memberCode: inviteCode || '-',
									productType: isIphone ? 2 : 1,
									sku: JSON.stringify({ selectImage, selectText }),
									username,
									phone,
									detail,
									city: city || '--',
									shop,
									name: username,
								}
								await mutateAsync({ ...params, fbc, fbp })
								fbq('trackCustom', 'confirmAddress')
								// if (isIphone) {
								// 	// @ts-ignore
								// 	fbq('track', 'Purchase', { value: 0.0, currency: 'USD' })
								// } else {
								// 	fbq('track', 'AddPaymentInfo')
								// }
								Toast.success(t('addressSelect.subSuccess'))
								setGoodAddress(params)
								localStorage.setItem('storageAddress', JSON.stringify(params))
								// setStorageAddress(params)
								onClose()
								setTimeout(() => {
									lineBox.showModal(isIphone)
									isSubmitting.current = false
								}, 200)
							}}
						>
							{t('addressSelect.submitText')}
						</div>
					</div>
				}
				round
				onClose={onClose}
			/>

			<Picker
				visible={cityChooseShow}
				value={city}
				onConfirm={(val: string) => {
					setCity(val)
					setCityChooseShow(false)
				}}
				onCancel={() => {
					setCityChooseShow(false)
				}}
				popup
				columns={cityArr}
				confirmButtonText={t('addressSelect.confirmText')}
				cancelButtonText={t('addressSelect.cancelText')}
				placeholder={t('addressSelect.placeHolderText')}
			>
				{/* {val =>
					val ? (
						<Typography.Text>{val}</Typography.Text>
					) : (
						
					)
				} */}
			</Picker>
		</>
	)
}
