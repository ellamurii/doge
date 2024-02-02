"use client";
import { useGetBreedsQuery } from "@/services/dog";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const { data, isLoading } = useGetBreedsQuery();

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Stack maxHeight="100%" flexDirection="row" flexWrap="wrap" gap={2}>
      <Box width="100%" display="flex" alignItems="center" gap={2}>
        <Typography variant="h1">🐶 Dog Breeds</Typography>
        <Button href={`/favorites`} color="primary" variant="outlined">
          View Favorites
        </Button>
      </Box>
      {data?.message.map((breed) => (
        <Button key={breed} href={`/breed/${breed}`} color="primary">
          {breed}
        </Button>
      ))}
    </Stack>
  );
}
