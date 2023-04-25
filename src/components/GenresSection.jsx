import { useRef, useEffect, useMemo } from "react";
import Stack from "@mui/material/Stack";
import GenreCardSkeleton from "./GenreCardSkeleton";
import GenreCard from "./GenreCard";
import Title from "./Title";
import useGenres from "../hooks/useGenres";

const GenresSection = () => {
  const { genres, isLoading, error } = useGenres();
  const section = useRef(null);

  useEffect(() => {
    const genreSection = section.current;
    const genreHeight = genreSection.clientHeight;
    const innerHeight = window.innerHeight;

    if (genreHeight > innerHeight) {
      const diff = Math.ceil(genreHeight - innerHeight);
      genreSection.style.position = "sticky";
      genreSection.style.top = `-${diff}px`;
    }
  }, [genres]);

  const loadingContent = useMemo(() => {
    let arr;
    if (isLoading) {
      arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(<GenreCardSkeleton key={i} />);
      }
    }

    return arr;
  }, [isLoading]);

  if (error) return null;

  return (
    <Stack
      spacing={1}
      sx={{
        width: "200px",
        padding: 2,
        paddingLeft: 3,
      }}
      ref={section}
    >
      <Title sx={{ marginBottom: 2 }}>Genres</Title>
      {loadingContent ||
        genres.map((genre) => <GenreCard key={genre.id} genre={genre} />)}
    </Stack>
  );
};

export default GenresSection;
