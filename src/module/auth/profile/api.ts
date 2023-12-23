import api from "@/utils/api";

export const getMeRequest = async () => {
	const { data } = await api.get("user/me");

	return data;
};
