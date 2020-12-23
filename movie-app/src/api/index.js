
export const getFilmsData = async (keyWord) => {

    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'edf097a9f6396e85fc55d09bd44e9169';

    const response = await fetch(`${ BASE_URL }${ keyWord }?api_key=${ API_KEY }`);
    const fetchedData = await response.json();

    return fetchedData;
}