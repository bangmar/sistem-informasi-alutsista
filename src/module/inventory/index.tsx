"use client";
import { Fragment, useEffect } from "react";
import HeaderSection from "./header-section";
import ItemSection from "./item-section";
import { useSetRecoilState } from "recoil";
import { allItems, filteredItem } from "./store";
import { useGetItem } from "./hook";

const InventoryModule = () => {
	const setAllItems = useSetRecoilState(allItems);
	const setFilteredItem = useSetRecoilState(filteredItem);
	const { data } = useGetItem();

	useEffect(() => {
		setAllItems(data?.data);
		setFilteredItem(data?.data);
	}, [data, setAllItems, setFilteredItem]);

	return (
		<Fragment>
			<HeaderSection />
			<ItemSection />
		</Fragment>
	);
};

export default InventoryModule;
