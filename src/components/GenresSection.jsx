import useGenres from "../hooks/useGenres";
import Stack from "@mui/material/Stack";
import GenreCardSkeleton from "./GenreCardSkeleton";
import Title from "./Title";
import GenreCard from "./GenreCard";

const GenresSection = () => {
  const { genres, isLoading, error } = useGenres();

  let loadingContent;

  if (isLoading) {
    loadingContent = [];
    for (let i = 0; i < 5; i++) {
      loadingContent.push(<GenreCardSkeleton key={i} />);
    }
  }

  if (error) return null;

  return (
    <Stack spacing={1} sx={{ width: "200px", padding: 2, paddingLeft: 3 }}>
      <Title>Genres</Title>
      {loadingContent ||
        genres.map((genre) => <GenreCard key={genre.id} genre={genre} />)}
    </Stack>
  );
};

export default GenresSection;
