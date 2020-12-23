import { useState, useEffect } from 'react';

import { getFilmsData } from './api/index';


const App = () => {

  const keyWord = "popular";
  const [ films, setPopularFilms ] = useState([]);

  useEffect(() => {

      const getData = async () => {
        setPopularFilms(await getFilmsData(keyWord));
      }
      getData();

  }, []);

  console.log(films);

  return(
    <div>

    </div>
  )
}

export default App;