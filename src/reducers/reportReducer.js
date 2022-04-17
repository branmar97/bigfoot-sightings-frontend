const manageReports = (state = { all: [], current: {} }, action) => {
    switch(action.type) {
        case 'ADD_REPORTS':
            return {
                ...state,
                all: action.reports,
            }
        case 'CREATE_REPORT':
            return {
                ...state,
                all: [ action.report, ...state.all ]
            }
        default:
            return state;
    }
}

export default manageReports;
