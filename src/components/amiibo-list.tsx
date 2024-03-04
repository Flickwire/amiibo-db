'use client'

import { getAmiibo } from "@/data/get-amiibo" 
import { useQuery } from "@tanstack/react-query"
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";
import AmiiboCard from "./amiibo-card";
import { Alert, CircularProgress } from "@mui/material";

export default function AmiiboList() {
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['amiibo'], queryFn: getAmiibo });

  if (isLoading || isFetching) return <CircularProgress />

  if (isError) return <Alert severity="error">Something went wrong while loading Amiibo data.</Alert>

  return <Grid container spacing={2}>
    {data?.amiibo?.map((item) => 
      <Grid xs={4} key={`${item.head}${item.tail}`}>
        <AmiiboCard amiibo={item} />
      </Grid>
    )}
  </Grid>
}
