import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../actions/reportActions';

class ReportsContainer extends Component {

    render() { 
        return ( 
            <div>
                <h2>Reports Container</h2>
            </div>
         );
    }
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