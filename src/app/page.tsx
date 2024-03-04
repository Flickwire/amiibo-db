import AmiiboList from "@/components/amiibo-list";
import { getAmiibo } from "@/data/get-amiibo";
import { Box, Container, Typography } from "@mui/material";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['amiibo'],
    queryFn: getAmiibo,
  })

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Amiibo DB
        </Typography>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AmiiboList />
        </HydrationBoundary>
      </Box>
    </Container>
  );
}
