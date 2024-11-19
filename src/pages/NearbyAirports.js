import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getDataWithQuery } from '../api/apiClient';
import SearchForm from '../components/SearchBox';
const API_BASE_GEOAPIFY = process.env.REACT_APP_GEOAPIFY_BASE_URL_API_KEY;

function NearByAirports() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState()
    const getNearbyAirports = (params, headers) => {
        return getDataWithQuery('v1/flights/getNearByAirports', params, headers);
    };
    async function fetchData() {
        const params = {
            lat: process.env.REACT_APP_DEFAULT_LAT,
            lng: process.env.REACT_APP_DEFAULT_LONG

        }
        const headers = {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST
        }
        if (location) {
            axios.get(API_BASE_GEOAPIFY + 'geocode/autocomplete', {
                params: {
                    text: location || 'lahore',
                    apiKey: process.env.REACT_APP_GEOAPIFY_API_KEY

                }

            }).then(async (response) => {
                console.log(response)
                const loc = response.data.features[0].properties
                console.log(response.data.features[0].properties)
                const params = {
                    lat: loc.lat,
                    lng: loc.lon

                }
                try {
                    const response = await getNearbyAirports(params, headers)
                    setData(response.data.data.nearby);
                } catch (error) {
                    console.error(error);
                }

            })

        }
        else {
            try {
                const response = await getNearbyAirports(params, headers)
                console.log(response.data.data.nearby)
                setData(response.data.data.nearby);
            } catch (error) {
                console.error(error);
            }


        }



    }
    useEffect(() => {

        fetchData()

    }, [location]);
    const newLocation = (newLocation) => {
        console.log(newLocation)
        setLocation(newLocation)
    }
    return (
        <div id='nearbyairport'>
            <h1 className="mx-10 text-3xl font-bold mt-8">
                <span className="text-[#5527d7] font-extrabold">Nearby Airports</span>
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
export default NearByAirports;
