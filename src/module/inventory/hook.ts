import {
	UseMutationResult,
	UseQueryResult,
	useMutation,
	useQuery,
} from "react-query";
import { createPayload, createRequest, getItemRequest } from "./api";

export const useGetItem = (): UseQueryResult<any, any> => {
	return useQuery({
		queryKey: ["get-items"],
		queryFn: async () => await getItemRequest(),
	});
};

export const useCreateItem = (): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["create-item"],
		mutationFn: async (payload: createPayload) => await createRequest(payload),
	});
};
