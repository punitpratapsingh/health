/**
 * action reducer for users listing admin page
 */
import { APPLICATION_ROUTES } from '../../constants';
import {
	ERROR,
	SUCCESS,
	TRANSIENT_TOGGLE,

} from '../actions/actionTypes';

const defaultState = {
	data: undefined,
	page: 0,
	limit: 30,
	length: 0,
	editing: true,
	error: undefined,
	success: undefined,
};
/**
 * default state handler/reducer for entity
 */
export default (state = defaultState, {
	type,
	data = [],
	page = 1,
	limit = 10,
	toggleId,
	length = 0,
	error,
	success,
}) => {
	switch (type) {
		case APPLICATION_ROUTES.SYMPTOMS_LIST:
			return Object.assign({}, state, {
				data,
				page,
				limit,
				length: data.length,
			});
		case APPLICATION_ROUTES.ADD_SYMPTOMS:
			return Object.assign({}, state, {
				data,
				page,
				limit,
				length: data.length,
			});
		case APPLICATION_ROUTES.UPDATE_SYMPTOMS:
			return Object.assign({}, state, {
				data,
				page,
				limit,
				length: data.length,
			});
		case APPLICATION_ROUTES.SYMPTOMS_DELETE:
			return Object.assign({}, state, {
				data,
				page,
				limit,
				length: data.length,
			});
		case TRANSIENT_TOGGLE:
			return Object.assign({}, state, {
				editing: toggleId,
			});
		case ERROR:
			return Object.assign({}, state, { error });
		case SUCCESS:
			return Object.assign({}, state, { success });
		default:
			return state;
	}
};
