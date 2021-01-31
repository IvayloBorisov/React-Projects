import { MoviesContainer, PageLayout } from "../../components/index";

const NowPlaying = () => {
  return (
    <PageLayout>
      <MoviesContainer
        urlParam={["movie/now_playing"]}
        title={"Now in theatres"}
      />
    </PageLayout>
  );
};

export default NowPlaying;
