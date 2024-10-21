import {
	UndefinedInitialDataOptions,
	useMutation,
	UseMutationOptions,
	useQuery,
} from '@tanstack/react-query'
import { ClientError, post } from '.'
import { subPost } from './subIndex'
import { threePost } from './threeIndex'

const subSiteEnable = import.meta.env.VITE_APP_USE_SUB_SITE_ENABLED === 'true'

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

export function requestBySub(sub: number) {
	let _sub = subSiteEnable ? sub : 0
	const subRequestMap = {
		0: post,
		1: subPost,
		2: threePost,
	}
	// @ts-ignore
	return subRequestMap[_sub]
}

export const useUploadAddress = (
	config?: UseMutationOptions<boolean, ClientError, addressParams & TFbData>
) => {
	return useMutation<boolean, ClientError, addressParams & TFbData>({
		mutationFn: async data => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			return await requestBySub(isSubSite || 0)('/address/add', data)
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
		queryFn: async () => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			return await requestBySub(isSubSite || 0)(
				'/address/configList',
				config?.params
			)
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
			return await requestBySub(isSubSite || 0)('/address/chat', data)
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
			return await requestBySub(isSubSite || 0)('/address/addToCart', data)
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
		queryFn: async () => {
			const query = new URLSearchParams(location.hash.split('?')?.[1])
			const isSubSite = Number(query.get('subSite'))
			return await requestBySub(isSubSite || 0)(
				'/address/checkLink',
				config?.params
			)
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
			return await requestBySub(isSubSite || 0)('/address/updateLink', data)
		},
		...config,
	})
}
