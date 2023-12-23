import api from "@/utils/api";

export const getItemRequest = async () => {
	const { data } = await api.get("/items/all");
	return data;
};
