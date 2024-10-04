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

export const useUploadAddress = (
	config?: UseMutationOptions<boolean, ClientError, addressParams>
) => {
	return useMutation<boolean, ClientError, addressParams>({
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
