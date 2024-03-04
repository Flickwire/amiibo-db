'use client'

import { getAmiibo } from "@/data/get-amiibo" 
import { useQuery } from "@tanstack/react-query"
import Grid from '@mui/material/Unstable_Grid2';
import AmiiboCard from "./amiibo-card";
import { Alert, CircularProgress } from "@mui/material";

export default function AmiiboList() {
  const { data, isLoading, isFetching, isError, error } = useQuery({ queryKey: ['amiibo'], queryFn: getAmiibo });

  if (isLoading || isFetching) return <CircularProgress />

  if (isError) return <Alert severity="error">Something went wrong while loading Amiibo data.<br />{error.message}</Alert>

  let amiibo = data?.amiibo;

  if (typeof amiibo === 'undefined' || amiibo === null) return <Alert severity="error">Something went wrong while loading Amiibo data.</Alert>

  if (!Array.isArray(amiibo)) amiibo = [amiibo]

  return <Grid container spacing={2}>
    {amiibo.map((item) => 
      <Grid xs={4} key={`${item.head}${item.tail}`}>
        <AmiiboCard amiibo={item} />
      </Grid>
    )}
  </Grid>
}
