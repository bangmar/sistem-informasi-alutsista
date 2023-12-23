import { UseQueryResult, useQuery } from "react-query";
import { getMeRequest } from "./api";

export const useGetMe = (): UseQueryResult<any, any> => {
	return useQuery({
		queryKey: ["get-me"],
		queryFn: async () => await getMeRequest(),
	});
};
