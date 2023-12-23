import { UseQueryResult, useQuery } from "react-query";
import { getDetailRequest } from "./api";

export const useGetItemDetail = (id: string): UseQueryResult<any, any> => {
	return useQuery({
		queryKey: ["get-items-detail-by-id"],
		queryFn: async () => await getDetailRequest(id),
	});
};
