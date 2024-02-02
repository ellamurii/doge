"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { dislike, like } from "@/lib/slices/favorites";
import { Grid, Stack, Box, Button, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

const PAGE_SIZE = 9;
export default function Breed({
  breedName,
  images,
}: {
  breedName: string;
  images: string[];
}) {
  const [page, setPage] = useState(1);
  const [currentList, setCurrentList] = useState<string[]>([]);

  const count = Math.floor(images.length / PAGE_SIZE);

  const dispatch = useAppDispatch();
  const likes = useAppSelector(({ favorites }) => favorites);

  const likesDictionary = (likes[breedName] ?? []).reduce(
    (prev, curr) => ({ ...prev, [curr]: true }),
    {} as Record<string, boolean>
  );

  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = page * PAGE_SIZE;

    setCurrentList(images.slice(start, end));
  }, [images, page]);

  const onToggleLike = (image: string) => {
    const isLiked = likesDictionary[image];
    if (isLiked) {
      dispatch(dislike({ breed: breedName, image }));
    } else {
      dispatch(like({ breed: breedName, image }));
    }
  };

  return (
    <Stack p={2} width="100%" height="100%" overflow="auto">
      <Grid container spacing={2}>
        {currentList.map((image) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`${breedName}-${image}`}
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
              <Button
                sx={{ mt: 1 }}
                variant={likesDictionary[image] ? "text" : "outlined"}
                onClick={() => onToggleLike(image)}
                color={likesDictionary[image] ? "error" : "primary"}
              >
                {likesDictionary[image] ? "Dislike" : "Like"}
              </Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="end" mt={2}>
        <Pagination
          color="primary"
          count={count}
          page={page}
          onChange={(_, val) => setPage(val)}
        />
      </Box>
    </Stack>
  );
}
