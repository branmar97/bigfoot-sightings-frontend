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
            errorMessage: {} // holds error messages from the database received by rejected Report promise
        }
    )

    const handleOnSubmit = event => {
        event.preventDefault()
        // create report object to post to database
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
        // submit report to database
        createReport(report)
        .then(() => {
            event.target.reset() // reset all form fields
        })
        // used to display error messages on reject
        .catch((error) => {
            setFormData({
                ...formData,
                error: true,
                errorMessage: error
            })
        })
    }

    const handleOnChange = event => {
        // DRY form change handler
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h2 className="text-2xl font-bold underline mb-5">Report a Sighting</h2>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    {/* Report form opening tag */}
                    <form onSubmit={handleOnSubmit}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                {/* Date field */}
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

                                {/* City input field */}
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="city" id="city-field" value={formData.city}  onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* State input field */}
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="state" className="block text-sm font-medium text-gray-700">State</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="state" id="state-field" value={formData.state} onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* Witnesses input field */}
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="witnesses" className="block text-sm font-medium text-gray-700"># Witnesses</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="number" id="witnesses-field" name="witnesses" value={formData.witnesses} onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* Vicinity input field */}
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
                                
                                {/* Conditions textarea field */}
                                <div>
                                    <label htmlFor="conditions" className="block text-sm font-medium text-gray-700">Conditions</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="conditions"
                                        placeholder="Weather, visibility, etc."
                                        value={formData.conditions}
                                        onChange={handleOnChange}
                                        rows="2" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Evidence textarea field */}
                                <div>
                                    <label htmlFor="evidence" className="block text-sm font-medium text-gray-700">Evidence</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="evidence"
                                        value={formData.evidence}
                                        onChange={handleOnChange}
                                        rows="4" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                
                                {/* Account textarea field */}
                                <div>
                                    <label htmlFor="account" className="block text-sm font-medium text-gray-700">Account</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="account"
                                        placeholder="General details about the sighting"
                                        value={formData.account}
                                        onChange={handleOnChange}
                                        rows="4" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Prints textarea field */}
                                <div>
                                    <label htmlFor="prints" className="block text-sm font-medium text-gray-700">Prints</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="prints"
                                        placeholder="If no prints, enter 'N/A'"
                                        value={formData.prints}
                                        onChange={handleOnChange}
                                        rows="2" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Sounds textarea field */}
                                <div>
                                    <label htmlFor="sounds" className="block text-sm font-medium text-gray-700">Sounds</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="sounds"
                                        placeholder="If no sounds, enter 'N/A'"
                                        value={formData.sounds}
                                        onChange={handleOnChange}
                                        rows="2" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Additional details textarea field */}
                                <div>
                                    <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700">Additional Details</label>
                                    <div className="mt-1">
                                        <textarea 
                                        name="additionalInfo"
                                        placeholder="If no additional details, enter 'N/A'"
                                        value={formData.additionalInfo}
                                        onChange={handleOnChange}
                                        rows="4" 
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div class="px-4 py-3 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Report</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default ReportFormContainer;
