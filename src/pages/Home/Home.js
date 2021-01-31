import { MoviesContainer, PageLayout } from "../../components/index";

const Home = () => {

  return(
    <PageLayout>
      <MoviesContainer
       urlParam={[ "movie/popular" ]}
       title={ "Most popular films" } 
      />
    </PageLayout>
  )
};

export default Home;
