import manageReports from '../reducers/reportReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(manageReports, applyMiddleware(thunk));

export default store;
