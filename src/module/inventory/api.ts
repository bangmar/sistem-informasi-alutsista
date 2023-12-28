import api from "@/utils/api";
import { serialize } from "object-to-formdata";

export const getItemRequest = async () => {
	const { data } = await api.get("/items/all");
	return data;
};

export type createPayload = {
	name: string;
	status: string;
	place: string;
	description: string;
	history: string;
	category: string;
	image: File;
};

export const createRequest = async (payload: createPayload) => {
	const { data } = await api.post("/items", serialize(payload), {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	return data;
};
