import { createStore } from 'redux';
import { reducer } from './02-Reducer';

export const store = createStore(reducer);