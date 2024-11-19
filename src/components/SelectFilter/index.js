
import React, { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectFilter = ({newQueryParams}) => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (!from || !to || !date) {
            valid = false;
        }

        if (valid) {
            console.log({ from, to, date });
            newQueryParams(from, to, date )
        }
    };

    return (
        <div className="mx-20 my-12">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-2  rounded-lg p-2 bg-white shadow-md">
                <div className="flex items-center flex-grow border-r-2  pr-2">
                    <span className="text-gray-500 text-xl mr-2">🏨</span>
                    <input
                        type="text"
                        placeholder="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="flex-grow focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center flex-grow border-r-2  pr-2">
                    <span className="text-gray-500 text-xl mr-2">🏨</span>
                    <input
                        type="text"
                        placeholder="To"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="flex-grow focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center flex-grow border-r-2  pr-2">
                    <span className="text-gray-500 text-xl mr-2">📅</span>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        placeholderText="Select a date"
                        className="flex-grow focus:outline-none text-sm text-gray-700"
                        calendarClassName="rounded-lg shadow-lg "
                        minDate={date}
                        required
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Search
                </button>
            </form>
        </div>
    )
}

export default SelectFilter
