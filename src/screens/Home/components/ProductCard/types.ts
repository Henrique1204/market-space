export type ProductStatusEnum = 'new' | 'used';

export type ProductCardProps = {
	name: string;
	status: ProductStatusEnum;
	price: number;
};
