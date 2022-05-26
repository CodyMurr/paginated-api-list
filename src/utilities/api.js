const BASE_URL = 'https://api.publicapis.org';

export async function fetchData(endpoint, contextCb) {
	const response = await fetch(`${BASE_URL}/${endpoint}`);
	const data = await response.json();
	contextCb(data);
}
