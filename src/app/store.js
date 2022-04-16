import manageReports from '../reducers/reportReducer';
import { createStore } from 'redux';

const store = createStore(manageReports);

export default store;
