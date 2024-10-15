import {
	UndefinedInitialDataOptions,
	useMutation,
	UseMutationOptions,
	useQuery,
} from '@tanstack/react-query'
import { ClientError, post } from '.'
import { subPost } from './subIndex'

const subSiteEnable = import.meta.env.VITE_APP_USE_SUB_SITE_ENABLED

export type addressParams = {
	province: string
	city: string
	area: string
	detail: string
	name: string
	phone: string
	memberCode: string
	shop: string
	sku: string
}

type TFbData = {
	fbc: string
	fbp: string
}

export const useUploadAddress = (
	config?: UseMutationOptions<boolean, ClientError, addressParams & TFbData>
) => {
	return useMutation<boolean, ClientError, addressParams & TFbData>({
		mutationFn: async data => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			const useSubSite = isSubSite && subSiteEnable === 'true'
			const response: any = useSubSite
				? await subPost('/address/add', data)
				: await post('/address/add', data)
			console.log('response', response)
			return response
		},
		...config,
	})
}

export const useSystemConfig = (
	config?: Omit<
		UndefinedInitialDataOptions<
			{ result: { lineCode: string; inviteCode: string }[] },
			ClientError
		>,
		'queryFn'
	> & { params?: {} }
) => {
	return useQuery<
		{ result: { lineCode: string; inviteCode: string }[] },
		ClientError
	>({
		...config,
		queryFn: () => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			const useSubSite = isSubSite && subSiteEnable === 'true'
			console.log('isSubSite', location.hash, isSubSite, subSiteEnable)
			return useSubSite
				? subPost('/address/configList', config?.params)
				: post('/address/configList', config?.params)
		},
		queryKey: config!.queryKey,
	})
}

/**
 * 上报聊天
 */
export const useUploadChat = (
	config?: UseMutationOptions<any, ClientError, TFbData>
) => {
	return useMutation<any, ClientError, TFbData>({
		mutationFn: async data => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			const useSubSite = isSubSite && subSiteEnable === 'true'
			const response: any = useSubSite
				? await subPost('/address/chat', data)
				: await post('/address/chat', data)
			console.log('response', response)
			return response
		},
		...config,
	})
}

/**
 * 上报加购
 */
export const useUploadAddToCart = (
	config?: UseMutationOptions<any, ClientError, TFbData>
) => {
	return useMutation<any, ClientError, TFbData>({
		mutationFn: async data => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			const useSubSite = isSubSite && subSiteEnable === 'true'
			const response: any = useSubSite
				? await subPost('/address/addToCart', data)
				: await post('/address/addToCart', data)
			console.log('response', response)
			return response
		},
		...config,
	})
}

export const useCheckLink = (
	config?: Omit<
		UndefinedInitialDataOptions<{ result: boolean }, ClientError>,
		'queryFn'
	> & {
		params: {
			linkCode: string
		}
	}
) => {
	return useQuery<{ result: boolean }, ClientError>({
		...config,
		queryFn: () => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			const useSubSite = isSubSite && subSiteEnable === 'true'
			return useSubSite
				? subPost('/address/checkLink', config?.params)
				: post('/address/checkLink', config?.params)
		},
		queryKey: config!.queryKey,
	})
}

/**
 * 更新链接
 */
export const useUpdateLink = (
	config?: UseMutationOptions<
		any,
		ClientError,
		{
			linkCode: string
		}
	>
) => {
	return useMutation<
		any,
		ClientError,
		{
			linkCode: string
		}
	>({
		mutationFn: async data => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			const useSubSite = isSubSite && subSiteEnable === 'true'
			const response: any = useSubSite
				? await subPost('/address/updateLink', data)
				: await post('/address/updateLink', data)
			console.log('response', response)
			return response
		},
		...config,
	})
}
