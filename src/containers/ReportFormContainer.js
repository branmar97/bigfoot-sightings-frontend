import React, { useState } from 'react';

const ReportFormContainer = ({ createReport }) => {
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

    const handleOnSubmit = event => {
        event.preventDefault()
        const report = {
            occurence: formData.occurence,
            city: formData.city,
            state: formData.state,
            vicinity: formData.vicinity,
            conditions: formData.conditions,
            witnesses: formData.witnesses,
            evidence: formData.evidence,
            account: formData.account,
            prints: formData.prints,
            sounds: formData.sounds,
            additional_info: formData.additionalInfo
        }
        createReport(report)
        .then(() => {
            event.target.reset()
        })
        .catch((error) => {
            setFormData({
                ...formData,
                error: true,
                errorMessage: error
            })
        })
    }

    const handleOnChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h2 className="text-4xl font-bold underline">Report a Sighting</h2>
                <label for="occurence">Time of Occurence: </label>
                <input type="datetime-local" id="occurence-field"
                name="occurence" value={formData.occurence}
                onChange={handleOnChange} />

                <label for="city">City: </label>
                <input type="text" name="city" id="city-field" value={formData.city}  onChange={handleOnChange} />

                <label for="state">State: </label>
                <input type="text" name="state" id="state-field" value={formData.state} onChange={handleOnChange} />

                <label for="witnesses">Number of Witnesses: </label>
                <input type="number" id="witnesses-field" name="witnesses" value={formData.witnesses} onChange={handleOnChange} />

                <label htmlFor='vicinity'>Vicinity: </label>
                <textarea 
                name="vicinity"
                placeholder="Details on relative location"
                value={formData.vicinity}
                onChange={handleOnChange}
                />

                <label htmlFor="conditions">Conditions: </label>
                <textarea 
                name="conditions"
                placeholder="Weather, visibility, etc."
                value={formData.conditions}
                onChange={handleOnChange}
                />

                <label htmlFor="evidence">Evidence: </label>
                <textarea 
                name="evidence"
                value={formData.evidence}
                onChange={handleOnChange}
                />

                <label htmlFor="account">Account: </label>
                <textarea 
                name="account"
                placeholder="General details about the sighting"
                value={formData.account}
                onChange={handleOnChange}
                />

                <label htmlFor="prints">Prints: </label>
                <textarea 
                name="prints"
                placeholder="If no prints, enter 'None'"
                value={formData.prints}
                onChange={handleOnChange}
                />

                <label htmlFor="sounds">Sounds: </label>
                <textarea 
                name="sounds"
                placeholder="If no sounds, enter 'None'"
                value={formData.sounds}
                onChange={handleOnChange}
                />

                <label htmlFor="additional-info">Additional Details: </label>
                <textarea 
                name="additionalInfo"
                placeholder="If no additional details, enter 'None'"
                value={formData.additionalInfo}
                onChange={handleOnChange}
                />

                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
}



export default ReportFormContainer;
