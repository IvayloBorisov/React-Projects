import { useParams } from "react-router-dom";
import { MoviesContainer, PageLayout } from "../../components/index";

const MovieDetails = () => {
  const movieId = useParams().id;
  return (
    <PageLayout>
      <MoviesContainer
       urlParam={[ `movie/${movieId}` ]}
       title={ "About the movie" }
      />
    </PageLayout>
  );
};

export default MovieDetails;
