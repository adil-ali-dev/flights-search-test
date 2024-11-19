import axios from 'axios';
const API_BASE = process.env.REACT_APP_BASE_URL;

export const responseHandler = (response) => {
	return { data: response.data, timestamp: response.data.timestamp, status: response.status };
}

// -------------------------------------------------------------------------//
// GET REQUEST
export const getData = async (END_POINT, id = null) => {
	let response;

	if (id) {
		response = await axios.get(API_BASE + END_POINT, {
			params: { id }
		});
	} else {
		response = await axios.get(API_BASE + END_POINT);
	}
	return responseHandler(response);
};


// -------------------------------------------------------------------------//
// get request with support of query
export const getDataWithQuery = async (END_POINT, queries = {}, headers = {}) => {
	let response;
	if (queries) {
		response = await axios.get(API_BASE + END_POINT, {
			params: queries,
			headers:headers
		});
	} else {
		response = await axios.get(API_BASE + END_POINT);
	}
	return responseHandler(response);
};









