"use client";
import { ReactNode } from "react";
import { RecoilEnv, RecoilRoot } from "recoil";

const RecoilProvider = ({ children }: { children: ReactNode }) => {
	RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

	return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
