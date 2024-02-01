import { Typography } from "@mui/material";

export default function Breed({ params }: { params: { breedName: string } }) {
  return <Typography>Specific Breed: {params.breedName}</Typography>;
}
