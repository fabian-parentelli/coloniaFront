import { url } from '../utils.helpers.js';

const getNewsIsActiveApi = async () => {

    const response = await fetch(`${url}/api/news/isActive`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.error) return content.error;
    if (content.data) return content.data;
};

export { getNewsIsActiveApi };