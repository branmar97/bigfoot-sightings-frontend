import React from 'react';

const ReportCard = ({ id, caseNum, occurence, city, state, vicinity, conditions, // all report params
                        witnesses, evidence, account, prints, sounds,
                        additionalInfo, timeCreated, lastUpdated }) => {
    
    // display individual report data
    return (
        <div> 
            <h3><strong>Case #</strong>: {caseNum}</h3>
            <ul>
                <li>{city}, {state}</li>
                <li><strong>Occurence</strong>: {occurence}</li>
                <li><strong>Vicinity</strong>: {vicinity}</li>
                <li><strong>Witnesses</strong>: {witnesses}</li>
            </ul>
            <p><strong>Conditions</strong>: {conditions}</p>
            <p><strong>Evidence</strong>: {evidence}</p>
            <p><strong>Account</strong>: {account}</p>
            <p><strong>Prints</strong>: {prints}</p>
            <p><strong>Sounds</strong>: {sounds}</p>
            <p><strong>Additional Info</strong>: {additionalInfo}</p>
        </div>
    );
}

export default ReportCard;