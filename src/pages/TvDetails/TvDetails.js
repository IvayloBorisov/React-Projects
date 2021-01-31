import { useParams } from "react-router-dom";
import { MoviesContainer, PageLayout } from "../../components";

const TvDetails = () => {
  const tvId = useParams().id;
  return (
    <PageLayout>
      <MoviesContainer
       urlParam={[`tv/${tvId}`]}
       title={"About the show"} 
      />
    </PageLayout>
  );
};

export default TvDetails;
