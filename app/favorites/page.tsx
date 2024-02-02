"use client";
import { useAppSelector } from "@/lib/hooks";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Favorites() {
  const likes = useAppSelector(({ favorites }) => favorites);
  const breeds = Object.keys(likes);

  return breeds.length ? (
    <Stack p={2} width="100%" height="100%" overflow="auto">
      <Grid container spacing={2}>
        {breeds.map((breed) =>
          likes[breed]?.map((image) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${breed}-${image}`}
              height="300px"
            >
              <Stack height="100%">
                <Box
                  flex={1}
                  sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <Typography textAlign="center">{breed}</Typography>
              </Stack>
            </Grid>
          ))
        )}
      </Grid>
    </Stack>
  ) : (
    <Typography>No favorites yet.</Typography>
  );
}
