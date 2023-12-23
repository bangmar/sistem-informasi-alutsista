import { UseMutationResult, useMutation } from "react-query";
import { loginRequest } from "./api";

export const useLogin = (): UseMutationResult<any, any, any, any> => {
	return useMutation({
		mutationKey: ["login-lautsista"],
		mutationFn: (params) => loginRequest(params),
	});
};
