import React, { useState, useEffect } from 'react';
import { getDataWithQuery } from '../api/apiClient';
import SearchForm from '../components/SearchBox';

function Airports() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState()
    const getNearbyAirports = (params, headers) => {
        return getDataWithQuery('v1/flights/searchAirport', params, headers);
    };
    useEffect(() => {
        async function fetchData() {
            const params = {
                query: location || 'lahore'
            }
            const headers = {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST
            }
            try {
                const response = await getNearbyAirports(params, headers)
                setData(response.data.data);
            } catch (error) {
                console.error(error);
            }

        }
        fetchData()

    }, [location]);
    const newLocation = (newLocation) => {
        console.log(newLocation)
        setLocation(newLocation)
    }
    return (
        <div id="searchAirport">
            <h1 className="mx-10 text-3xl font-bold mt-8">
                <span className="text-[#5527d7] font-extrabold">Search Airports</span>
            </h1>
            <SearchForm newLocation={newLocation} ></SearchForm>
            {
                data.length <= 0 ? <div>
                    <h1 className="text-2xl font-bold mt-8">
                        <span className="text-black font-extrabold">Loading..</span>
                    </h1></div> :
                    <div className='py-8'>
                        <div className="flex flex-wrap gap-6 justify-center mt-8">
                            {data?.map((item) => (
                                <div key={item?.entityId} className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                                    <a href={`#${item.skyId}`} className="block mb-4">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.presentation.suggestionTitle}
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">{item.presentation.subtitle}</p>
                                    </a>

                                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                                        <p className="text-sm">Airport Code: {item.skyId}</p>
                                        <p className="text-sm">Entity ID: {item.navigation.entityId}</p>
                                    </div>
                                </div>
                            ))}
                        </div></div>

            }
        </div>

    );
}
export default Airports;
