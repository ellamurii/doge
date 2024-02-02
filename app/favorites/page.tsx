"use client";
import { useAppSelector } from "@/lib/hooks";
import { favoritesByBreed } from "@/lib/selectors/favoritesByBreed";
import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Favorites() {
  const [filter, setFilter] = useState<string | null>(null);
  const likes = useAppSelector(({ favorites }) => favorites);
  const filtered = useAppSelector(favoritesByBreed(filter ?? ""));
  const breeds = Object.keys(likes);

  return (
    <Stack p={2} width="100%" height="100%" overflow="auto">
      <Autocomplete
        options={breeds}
        sx={{ width: 300, mb: 2 }}
        value={filter}
        onChange={(_, val) => setFilter(val)}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
      {breeds?.length ? (
        <Grid container spacing={4}>
          {filter?.length
            ? filtered.map((image) => (
                <Card key={`${filter}-${image}`} breed={filter} image={image} />
              ))
            : breeds.map((breed) =>
                likes[breed]?.map((image) => (
                  <Card key={`${breed}-${image}`} breed={breed} image={image} />
                ))
              )}
        </Grid>
      ) : (
        <></>
      )}
    </Stack>
  );
}

const Card = ({ breed, image }: { breed: string; image: string }) => (
  <Grid item xs={12} sm={6} md={4} height="300px">
    <Stack height="100%" gap={1}>
      <Box
        flex={1}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box display="flex">
        <Chip label={breed} variant="outlined" color="primary" />
      </Box>
    </Stack>
  </Grid>
);
