import api from "@/utils/api";

export type registerPaylaod = {
	fullname: string;
	email: string;
	nip: string;
	password: String;
};

export const getAllRequest = async () => {
	const { data } = await api.get("/user/all");

	return data;
};

export const registerRequest = async (payload: registerPaylaod) => {
	const { data } = await api.post("/auth", payload);
	return data;
};

export const updateRequest = async (payload: registerPaylaod, id: string) => {
	const { data } = await api.post(`/user?id=${id}`, payload);
	return data;
};

export const removeRequest = async (id: string) => {
	const { data } = await api.delete(`/user?id=${id}`);
	return data;
};
