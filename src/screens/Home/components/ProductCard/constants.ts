import { ProductStatusEnum } from './types';

export const STATUS_TAG_LABEL_ENUM: Record<ProductStatusEnum, string> = {
	new: 'NOVO',
	used: 'USADO',
};

export const STATUS_TAG_BG_ENUM: Record<ProductStatusEnum, string> = {
	new: 'blue.500',
	used: 'gray.600',
};
