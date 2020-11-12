import { createStore } from 'redux';

export default createStore(function(state, action) {
	if(state === undefined) {
		return {pageNum: 1};
	}
	if(action.type === 'PAGE_CHANGE') {
		return {...state, pageNum: action.pageNum};
	}
	return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())