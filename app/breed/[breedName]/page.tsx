"use client";
import { useGetBreedImgsQuery } from "@/services/dog";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Breed from "./breed";

export default function Page({ params }: { params: { breedName: string } }) {
  const { data, isLoading, error } = useGetBreedImgsQuery(
    params.breedName ?? ""
  );

  return (
    <>
      {isLoading && <CircularProgress />}
      {error && (
        <Box>
          <Typography>{(error as any)?.data.message}</Typography>
          <Button href="/" variant="outlined" size="small">
            Go back to Home Page.
          </Button>
        </Box>
      )}
      {!!data?.message.length && (
        <Breed breedName={params.breedName} images={data.message} />
      )}
    </>
  );
}
