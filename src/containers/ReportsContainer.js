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
        <div className="bg-gray-200 p-16 rounded w-11/12">
            <div>
                <ReportFormContainer createReport={createReport} />
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold underline mb-5">All Reports</h2>
                <Reports reports={reports} />
            </div>
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