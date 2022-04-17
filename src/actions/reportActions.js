// Request all reports from the API
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

// Create a new report
export const createReport = (data) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/reports`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({report: data}),
    })
    .then(res => {
      // If response is okay, create report
      if (res.ok) {
        return res
          .json()
          .then(data =>
            dispatch({ type: 'CREATE_REPORT', report: data })
          );
      // Otherwise reject the Promise and pass over the errors
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors);
        });
      }
    })
  }
}