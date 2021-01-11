
export const getData = async (keyWord, pageNumber = 1) => {

    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'edf097a9f6396e85fc55d09bd44e9169';
    const QUERY = `&language=en-US&page=${ pageNumber }`

    const response = await fetch(`${ BASE_URL }${ keyWord }?api_key=${ API_KEY }${ QUERY }`);
    const fetchedData = await response.json();

    return fetchedData;
}

// https://api.themoviedb.org/3/search/movie?api_key=edf097a9f6396e85fc55d09bd44e9169&query=Brad

