import {
	LOGIN_ATTEMPT,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REG_ATTEMPT,
	REG_SUCCESS,
	REG_FAILURE,
	LOGOUT
} from './actionTypes';

const initialState = {
	loginStatus: false,
	isLoading: false,
	isError: false
	// name
	// message
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ATTEMPT:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			return { ...state, isLoading: false, loginStatus: true };
		case LOGIN_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case REG_ATTEMPT:
			return { ...state, isLoading: true };
		case REG_SUCCESS:
			return { ...state, isLoading: false };
		case REG_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case LOGOUT:
			return { ...state, loginStatus: false };
		default:
			return state;
	}
};