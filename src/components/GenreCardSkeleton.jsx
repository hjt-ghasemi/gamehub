import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const GenreCardSkeleton = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton sx={{ flex: 1, marginX: 2 }} height={20} />
    </Stack>
  );
};

export default GenreCardSkeleton;
