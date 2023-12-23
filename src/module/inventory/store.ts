import { atom } from "recoil";

export const allItems = atom({
	key: "all-items",
	default: [],
});

export const filteredItem = atom({
	key: "filter-by-name",
	default: [],
});
