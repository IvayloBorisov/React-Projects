import { useParams } from 'react-router-dom';
import { MoviesContainer, PageLayout } from "../../components/index";

const CategoriesPage = () => {
  const {id} = useParams();
  const urlParam = `&sort_by=popularity.desc&with_genres=${ id }`

    return(
      <PageLayout>
        <MoviesContainer 
         urlParam={[ "discover/movie", urlParam ]} 
         title={ "Similar movies" }
        />
      </PageLayout>
    )
}

export default CategoriesPage;