import {
	UseMutationResult,
	UseQueryResult,
	useMutation,
	useQuery,
} from "react-query";
import {
	getAllRequest,
	registerPaylaod,
	registerRequest,
	removeRequest,
	updateRequest,
} from "./api";

export const useGetAll = (): UseQueryResult<any, any> => {
	return useQuery({
		queryKey: ["get-all-user"],
		queryFn: async () => await getAllRequest(),
	});
};

export const useRegister = (): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["register-user"],
		mutationFn: async (payload: registerPaylaod) =>
			await registerRequest(payload),
	});
};
export const useUpdate = (
	id: string
): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["updaye-user", id],
		mutationFn: async (payload: registerPaylaod) =>
			await updateRequest(payload, id),
	});
};

export const useRemove = (): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["remove-user"],
		mutationFn: async (id: string) => await removeRequest(id),
	});
};
