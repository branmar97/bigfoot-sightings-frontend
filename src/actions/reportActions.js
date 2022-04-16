export const fetchReports = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/reports')
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_REPORTS', reports: responseJSON })
        })
    }
} 