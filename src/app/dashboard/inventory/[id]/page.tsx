import ItemDetailModule from "@/module/inventory/detail";

const ItemDetailPage = ({ params }: { params: { id: string } }) => {
	return <ItemDetailModule params={params} />;
};

export default ItemDetailPage;
