import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReports, createReport } from '../actions/reportActions';
import ReportFormContainer from './ReportFormContainer';

import Reports from '../components/Reports';

const ReportsContainer = ({ fetchReports, createReport, reports }) => {
    useEffect(() => {
        fetchReports()
    }, [])
     
    return ( 
        <div>
            <ReportFormContainer createReport={createReport} />
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
        fetchReports: () => dispatch(fetchReports()),
        createReport: report => dispatch(createReport(report))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);