export const fetchReports = () => {
    return (dispatch) => {
        dispatch({ type: 'ADD_REPORTS'})
        fetch('http://localhost:3000/api/v1/reports')
        .then(response => {
          return response.json()
        })
    }
} 