import { UseQueryResult, useQuery } from "react-query";
import { getItemRequest } from "./api";

export const useGetItem = (): UseQueryResult<any, any> => {
	return useQuery({
		queryKey: ["get-items"],
		queryFn: async () => await getItemRequest(),
	});
};
