import axios from 'axios';
import moment from "moment";
import React, { useState, useEffect } from 'react';
import { getDataWithQuery } from '../api/apiClient';
import SearchForm from '../components/SearchBox';
import SelectFilter from '../components/SelectFilter';
import { FlightCard } from '../components/FlightCard';
import Loader from '../components/Loader';
const API_BASE_GEOAPIFY = process.env.REACT_APP_GEOAPIFY_BASE_URL_API_KEY;

function SearchFlights() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState()
    const [travelDetails, setTravelDetails] = useState({
        from: '',
        to: '',
        date: ''
    });

    const searchAirports = (params, headers) => {
        return getDataWithQuery('v1/flights/searchAirport', params, headers);
    };
    const searchFlights = (params, headers) => {
        return getDataWithQuery('v2/flights/searchFlights', params, headers);
    };
    useEffect(() => {

        async function fetchData() {
            const headers = {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST
            };

            try {
                const fromParams = {
                    query: travelDetails.from || 'lahore'
                };
                const fromResponse = await searchAirports(fromParams, headers);
                const fromData = fromResponse.data.data?.pop();

                const toParams = {
                    query: travelDetails.to || 'lahore'
                };
                const toResponse = await searchAirports(toParams, headers);
                const toData = toResponse.data.data?.pop();
                const flightsQuery = {
                    originSkyId: travelDetails.from.length !== 0 ? fromData.skyId : 'LOND',
                    destinationSkyId: travelDetails.to.length !== 0 ? toData.skyId : 'NYCA',
                    originEntityId: travelDetails.from.length !== 0 ? fromData.entityId : '27544008',
                    destinationEntityId: travelDetails.to.length !== 0 ? toData.entityId : '27537542',
                    date: !travelDetails.date ? '2024-11-19' : moment(travelDetails.date)
                        .format("YYYY-MM-DD")

                }
                if (flightsQuery) {
                    try {
                        const response = await searchFlights(flightsQuery, headers);
                        console.log(response?.data?.data)
                        setData(response?.data?.data)

                    }
                    catch (error) {
                        console.error(error);
                    }

                }
                else {
                    return
                }

            } catch (error) {
                console.error(error);
            }
        }

        fetchData()

    }, [travelDetails]);
    const newQueryParams = (from, to, date) => {
        setTravelDetails(() => ({
            from,
            to,
            date
        }));
    }
    return (
        <div id='searchFlight'>
            <h1 className="mx-10 text-3xl font-bold mt-8">
                <span className="text-[#5527d7] font-extrabold">Search Flights</span>
            </h1>
            <SelectFilter newQueryParams={newQueryParams}></SelectFilter>
            {data.length <= 0 ? <div>
                <h1 className="text-2xl font-bold mt-8">
                    <span className="text-black font-extrabold"><Loader></Loader></span>
                </h1></div>:<div className="space-y-6">
                {data?.itineraries?.map((flight, index) => (
                    <FlightCard key={index} flight={flight} />
                ))}
            </div>  }
        </div>

    );
}
export default SearchFlights;
