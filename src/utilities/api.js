const BASE_URL = 'https://api.publicapis.org';

export async function fetchData(
	endpoint,
	loadCb,
	setterCb,
	pagesCb,
	results,
) {
	loadCb(true);
	const response = await fetch(`${BASE_URL}/${endpoint}`);
	const data = await response.json();
	setterCb(data.entries);
	pagesCb(Math.ceil(data.entries.length / results));
	loadCb(false);
}
