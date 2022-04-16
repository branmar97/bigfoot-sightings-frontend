import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../actions/reportActions';

import Reports from '../components/Reports';

const ReportsContainer = ({ fetchReports, reports }) => {
    useEffect(() => {
        fetchReports()
    }, [])
     
    return ( 
        <div>
            <h2>All Reports</h2>
            <Reports reports={reports} />
        </div>
    );

}

const mapStateToProps = state => {
    return {
        reports: state.all
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReports: () => dispatch(fetchReports())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);