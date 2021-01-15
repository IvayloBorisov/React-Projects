export const navLinksInfo = [
    {
        id: 1,
        title: 'Popular Films',
        path: '/',
    },
    {
        id: 2,
        title: 'Top Films',
        path: '/top_rated',
    },
    {
        id: 3,
        title: 'Upcoming',
        path: '/upcoming',
    },
    {
        id: 4,
        title: 'Now Playing',
        path: '/now_playing',
    },
    {
        id: 5,
        title: 'Categories',
        path: '',
    },
];

export const formatDate = (input, type = 'tv') => {
    const date = new Date(input);
    if(type === 'tv') {
     return date.getFullYear();
    }
    const token = date.toString().split(' ');
    const result = token.slice(1, 3).join(' ') + ", " + token.slice(3, 4);
    return result;
} 

export const formatGenres = (allGenres, tvGenre) => {
    const result = allGenres.filter(({ id }) => tvGenre.includes(parseInt(id)))
                             .map(object => extractGenreName(object.name));
    return result.length > 0 ? result.slice(0, 2).join(' | ') : result;
}

export const formatOverview = string => string.slice(0, 80) + "...";

export const extractGenreName = str => str.split(" ")[0].split("&")[0];


