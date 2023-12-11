import { ZodType } from "zod";
import { ResponseError } from "../error/response-error";

export const validation = <T>(schema: ZodType<T, any, any>, request: any) => {
	const result = schema.safeParse(request);
	if (!result.success) {
		throw new ResponseError(400, JSON.parse(result.error.message)[0].message);
	}

	return result.data;
};
