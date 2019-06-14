export interface BaseAction<T> {
	type: string;
	payload?: T;
}
