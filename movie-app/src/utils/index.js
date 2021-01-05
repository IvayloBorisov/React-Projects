
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

export const formatDate = input => {
    const date = new Date(input);
    return date.getFullYear();
} 

export const formatGenres = (allGenres, tvGenre) => {
    const result = allGenres.filter(({ id }) => tvGenre.includes(parseInt(id)))
                             .map(object => object.name);
    return result.length > 0 ? result.join(' | ') : result;
}


