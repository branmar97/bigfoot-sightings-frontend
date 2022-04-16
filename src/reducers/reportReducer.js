const manageReports = (state = { all: [], current: {} }, action) => {
    switch(action.type) {
        case 'ADD_REPORTS':
            return {
                ...state,
                all: action.reports,
            }
        default:
            return state;
    }
}

export default manageReports;
