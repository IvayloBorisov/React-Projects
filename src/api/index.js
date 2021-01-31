
export const getData = async (keyWord, pageNumber = 1) => {

    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'edf097a9f6396e85fc55d09bd44e9169';
    const QUERY = keyWord[1];
    let response = {};
    if(keyWord.length > 1) {
        response = await fetch(`${ BASE_URL }${ keyWord[0] }?api_key=${ API_KEY }&language=en-US${ QUERY }&page=${ pageNumber }`);
    } else {
        response = await fetch(`${ BASE_URL }${ keyWord[0] }?api_key=${ API_KEY }&language=en-US&page=${ pageNumber }`);
    }
    
    const fetchedData = await response.json();
    return fetchedData;
}


