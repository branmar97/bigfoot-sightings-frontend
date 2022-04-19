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
            <h2 className="text-2xl font-bold underline mb-5">Report a Sighting</h2>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleOnSubmit}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="occurence" className="block text-sm font-medium text-gray-700">Time of Occurence</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="datetime-local" id="occurence-field"
                                            name="occurence" value={formData.occurence}
                                            onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="city" id="city-field" value={formData.city}  onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="state" className="block text-sm font-medium text-gray-700">State</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="state" id="state-field" value={formData.state} onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="witnesses" className="block text-sm font-medium text-gray-700"># Witnesses</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="number" id="witnesses-field" name="witnesses" value={formData.witnesses} onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='vicinity' className="block text-sm font-medium text-gray-700">Vicinity</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="vicinity"
                                        placeholder="Details on relative location"
                                        value={formData.vicinity}
                                        onChange={handleOnChange}
                                        rows="2" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="conditions">Conditions: </label>
                                    <textarea 
                                    name="conditions"
                                    placeholder="Weather, visibility, etc."
                                    value={formData.conditions}
                                    onChange={handleOnChange}
                                    />
                                </div>

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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default ReportFormContainer;
