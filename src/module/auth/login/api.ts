import api from "@/utils/api";

export type TLoginPayload = {
	nip?: string;
	password?: string;
};

export const loginRequest = async (payload: TLoginPayload) => {
	const { data } = await api.post("/auth/login", payload);
	const token = data.data.token;
	sessionStorage.setItem("token-lautsista", token);
	return data;
};
