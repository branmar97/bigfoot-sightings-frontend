import React from 'react';

const ReportCard = ({ id, caseNum, occurence, city, state, vicinity, conditions, // all report params
                        witnesses, evidence, account, prints, sounds,
                        additionalInfo, timeCreated, lastUpdated }) => {
    
    // display individual report data
    return (
        <div className="mt-5 mb-5"> 
            <ul className="bg-white p-4 rounded divide-y divide-gray-700 divide-opacity-25">
                <li className="px-4 py-2"><h3><strong>Case #</strong>: {caseNum}</h3></li>
                <li className="px-4 py-2">{city}, {state}</li>
                <li className="px-4 py-2"><strong>Occurence</strong>: {occurence}</li>
                <li className="px-4 py-2"><strong>Vicinity</strong>: {vicinity}</li>
                <li className="px-4 py-2"><strong>Witnesses</strong>: {witnesses}</li>
                <li className="px-4 py-2"><strong>Conditions</strong>: {conditions}</li>
                <li className="px-4 py-2"><strong>Evidence</strong>: {evidence}</li>
                <li className="px-4 py-2"><strong>Account</strong>: {account}</li>
                <li className="px-4 py-2"><strong>Prints</strong>: {prints}</li>
                <li className="px-4 py-2"><strong>Sounds</strong>: {sounds}</li>
                <li className="px-4 py-2"><strong>Additional Info</strong>: {additionalInfo}</li>
            </ul>
        </div>
    );
}

export default ReportCard;