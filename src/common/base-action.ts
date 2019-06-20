import { Action } from 'redux';

export interface BaseAction<T> extends Action<string> {
	type: string;
	payload?: T;
}
