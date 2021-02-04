import { useParams } from "react-router-dom";
import { MoviesContainer, PageLayout } from "../../components/index";

const Search = () => {
  const { query } = useParams();
  return (
    <PageLayout>
      <MoviesContainer
        urlParam={["search/movie", `&query=${query}`]}
        title={"Results"}
      />
    </PageLayout>
  );
};

export default Search;
