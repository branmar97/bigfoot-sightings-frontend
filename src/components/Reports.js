import React from 'react';
import ReportCard from './ReportCard';

const Reports = ({ reports }) => {
    const listReports = () => {
        return reports.map(report => <ReportCard 
            id={report.id}
            caseNum={report.case_num}
            occurence={report.occurence}
            city={report.city}
            state={report.state}
            vicinity={report.vicinity}
            conditions={report.conditions}
            witnesses={report.witnesses}
            evidence={report.evidence}
            account={report.account}
            prints={report.prints}
            sounds={report.sounds}
            additionalInfo={report.additional_info}
            timeCreated={report.created_at}
            lastUpdated={report.updated_at}
        />)
    }

    return ( 
        <div>
            {listReports()}
        </div>
     );
}

export default Reports;