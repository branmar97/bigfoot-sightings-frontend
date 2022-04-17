import React, { useState } from 'react';
import { createReport } from '../actions/reportActions';

const ReportFormContainer = () => {
    // Use to track the current input of the form
    const [formData, setFormData] = useState(
        {
            occurence: "2018-06-12T19:30",
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
    )

    return (
        <div>
            <form>
                <h2>Report a Sighting</h2>
                <label for="occurence">Time of Occurence: </label>
                <input type="datetime-local" id="occurence-field"
                name="occurence" value={formData.occurence}
                min="2018-06-07T00:00" max="2018-06-14T00:00" />

                <label for="city">City: </label>
                <input type="text" name="city" id="city-field" value={formData.city} />

                <label for="state">State: </label>
                <input type="text" name="state" id="state-field" value={formData.state} />

                <label for="witnesses">Number of Witnesses: </label>
                <input type="number" id="witnesses-field" name="witnesses" value={formData.witnesses} />

                <label htmlFor='vicinity'>Vicinity: </label>
                <textarea 
                name="vicinity"
                placeholder="Details on relative location"
                value={formData.vicinity}
                />

                <label htmlFor="conditions">Conditions: </label>
                <textarea 
                name="conditions"
                placeholder="Weather, visibility, etc."
                value={formData.conditions}
                />

                <label htmlFor="evidence">Evidence: </label>
                <textarea 
                name="evidence"
                value={formData.evidence}
                />

                <label htmlFor="account">Account: </label>
                <textarea 
                name="account"
                placeholder="General details about the sighting"
                value={formData.account}
                />

                <label htmlFor="prints">Prints: </label>
                <textarea 
                name="prints"
                placeholder="If no prints, enter 'None'"
                value={formData.prints}
                />

                <label htmlFor="sounds">Sounds: </label>
                <textarea 
                name="sounds"
                placeholder="If no sounds, enter 'None'"
                value={formData.sounds}
                />

                <label htmlFor="additional-info">Additional Details: </label>
                <textarea 
                name="additional-info"
                placeholder="If no additional details, enter 'None'"
                value={formData.additionalInfo}
                />

                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
}



export default ReportFormContainer;
