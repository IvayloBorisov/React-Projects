import { useParams } from "react-router-dom";
import { MoviesContainer, PageLayout } from "../../components";

const TvDetails = () => {
  const tvId = useParams().id;
  return (
    <PageLayout>
      <MoviesContainer
       urlParam={[`tv/${tvId}`]}
       title={"About the tv serials"} 
      />
    </PageLayout>
  );
};

export default TvDetails;
