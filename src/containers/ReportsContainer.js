import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../actions/reportActions';

const ReportsContainer = ({ fetchReports, reports }) => {
    useEffect(() => {
        fetchReports()
    }, [])
     
    return ( 
        <div>
            <h2>Reports Container</h2>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        reports: state.reports
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReports: () => dispatch(fetchReports())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);