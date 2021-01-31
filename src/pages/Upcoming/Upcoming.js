import { MoviesContainer, PageLayout } from "../../components/index";

const Upcoming = () => {
  return (
    <PageLayout>
      <MoviesContainer
       urlParam={["movie/upcoming"]}
       title={"Coming soon"}
      />
    </PageLayout>
  );
};

export default Upcoming;
