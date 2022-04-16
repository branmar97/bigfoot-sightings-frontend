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

export default ReportsContainer;