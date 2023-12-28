"use client";
import { Fragment, useEffect } from "react";
import HeaderSection from "./header-section";
import ItemSection from "./item-section";
import { useSetRecoilState } from "recoil";
import { allItems, filteredItem } from "./store";
import { useGetItem } from "./hook";
import ItemLoading from "./item-loading";

const InventoryModule = () => {
	const setAllItems = useSetRecoilState(allItems);
	const setFilteredItem = useSetRecoilState(filteredItem);
	const { data, isLoading } = useGetItem();

	useEffect(() => {
		setAllItems(data?.data);
		setFilteredItem(data?.data);
	}, [data, setAllItems, setFilteredItem]);

	return (
		<Fragment>
			<HeaderSection />
			{isLoading ? <ItemLoading /> : <ItemSection />}
		</Fragment>
	);
};

export default InventoryModule;
