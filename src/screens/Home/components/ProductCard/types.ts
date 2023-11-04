export type ProductStatusEnum = 'new' | 'used';

export type ProductCardProps = {
	id: number;
	name: string;
	status: ProductStatusEnum;
	price: number;
};
