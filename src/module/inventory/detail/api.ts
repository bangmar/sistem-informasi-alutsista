import api from "@/utils/api";
import { serialize } from "object-to-formdata";

export type updatePayload = {
	history: string;
};

export const getDetailRequest = async (id: string) => {
	const { data } = await api.get(`/items/${id}`);

	return data;
};

export type UpdatePayload = {
	name: string;
	status: string;
	place: string;
	description: string;
	history: string;
	category: string;
	image?: File;
};
export const updateDetailRequest = async (
	id: string,
	payload: updatePayload
) => {
	const { data } = await api.put(`/items/${id}`, serialize(payload), {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	return data;
};

export const addHistoryRequest = async (id: string, payload: string) => {
	const { data } = await api.post(`/items/${id}/history`, payload);
	return data;
};

export const removeHistoryRequest = async (
	itemid: string,
	historyId: string
) => {
	const { data } = await api.delete(`/items/${itemid}/history?id=${historyId}`);

	return data;
};

export const editHistoryRequest = async (
	itemId: string,
	historyId: string,
	payload: updatePayload
) => {
	console.log("history :", history);
	const { data } = await api.put(
		`/items/${itemId}/history?id=${historyId}`,
		payload
	);

	return data;
};

export const removeItemRequest = async (itemId: string) => {
	const { data } = await api.delete(`/items/${itemId}`);

	return data;
};
