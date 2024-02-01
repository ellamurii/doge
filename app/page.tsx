"use client";
import { Paper, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Paper>
        <Typography>Doge 1</Typography>
      </Paper>
      <Paper>
        <Typography>Doge 2</Typography>
      </Paper>
      <Paper>
        <Typography>Doge 3</Typography>
      </Paper>
      <Paper>
        <Typography>Doge 4</Typography>
      </Paper>
    </Stack>
  );
}
