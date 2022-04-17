import React, { useState } from 'react';
import { createReport } from '../actions/reportActions';

const ReportFormContainer = () => {
    const [formData, setFormData] = useState(
        {
            occurence: "",
            city: "",
            state: "",
            vicinity: "",
            conditions: "",
            witnesses: "",
            evidence: "",
            account: "",
            prints: "",
            sounds: "",
            additionalInfo: "",
            error: false,
            errorMessage: {}
        }
}



export default ReportFormContainer;
