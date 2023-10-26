export type handleToggleSelectionFn = (value: string) => void;

export type IFilterTagForConditionProps = {
	label: string;
	value: string;
	selected: boolean;
	handleToggleSelection: handleToggleSelectionFn;
};
