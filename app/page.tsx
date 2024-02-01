"use client";
import { useGetBreedsQuery } from "@/services/dog";
import { CircularProgress, Paper, Stack, Typography } from "@mui/material";

export default function Home() {
  const { data, isLoading } = useGetBreedsQuery();

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Stack spacing={2} paddingBlock={2} maxHeight="100%">
      {data?.message.map((breed) => (
        <Paper key={breed} sx={{ paddingInline: 2, paddingBlock: 1 }}>
          <Typography>{breed}</Typography>
        </Paper>
      ))}
    </Stack>
  );
}
