import {
	UseMutationResult,
	UseQueryResult,
	useMutation,
	useQuery,
} from "react-query";
import {
	UpdatePayload,
	addHistoryRequest,
	editHistoryRequest,
	getDetailRequest,
	removeHistoryRequest,
	removeItemRequest,
	updateDetailRequest,
	updatePayload,
} from "./api";

export const useGetItemDetail = (id: string): UseQueryResult<any, any> => {
	return useQuery({
		queryKey: ["get-items-detail-by-id"],
		queryFn: async () => await getDetailRequest(id),
	});
};

export const useUpdateDetail = (
	id: string
): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["update-item"],
		mutationFn: async (payload: UpdatePayload) =>
			await updateDetailRequest(id, payload),
	});
};

export const useAddHistory = (
	id: string
): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["add-history"],
		mutationFn: async (payload: string) => await addHistoryRequest(id, payload),
	});
};

export const useRemoveHistory = (
	itemId: string
): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["remove-history"],
		mutationFn: async (historyId: string) =>
			await removeHistoryRequest(itemId, historyId),
	});
};

export const useUpdateHistory = (
	itemId: string,
	historyId: string
): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["update-history"],
		mutationFn: async (history: updatePayload) => {
			console.log("params : ", history);
			await editHistoryRequest(itemId, historyId, history);
		},
	});
};

export const useRemoveitem = (): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["remove-item"],
		mutationFn: async (itemId: string) => await removeItemRequest(itemId),
	});
};
