import api from "@/utils/api";

export const getDetailRequest = async (id: string) => {
	const { data } = await api.get(`/items/${id}`);

	return data;
};
