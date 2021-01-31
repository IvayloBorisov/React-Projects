import { MoviesContainer, PageLayout } from "../../components/index";

const TopRated = () => {
  return (
    <PageLayout>
      <MoviesContainer
       urlParam={["movie/top_rated"]}
       title={"Top rated"} 
      />
    </PageLayout>
  );
};

export default TopRated;
