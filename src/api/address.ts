import {
	UndefinedInitialDataOptions,
	useMutation,
	UseMutationOptions,
	useQuery,
} from '@tanstack/react-query'
import { ClientError, post } from '.'

export type addressParams = {
	province: string
	city: string
	area: string
	detail: string
	name: string
	phone: string
	memberCode: string
}

export const useUploadAddress = (
	config?: UseMutationOptions<boolean, ClientError, addressParams>
) => {
	return useMutation<boolean, ClientError, addressParams>({
		mutationFn: async data => {
			const response: any = await post('/address/add', data)
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
		queryFn: () => post('/address/configList', config?.params),
		queryKey: config!.queryKey,
	})
}
