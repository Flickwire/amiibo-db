import AmiiboInfo from "@/components/amiibo-info";
import { getAmiiboById } from "@/data/get-amiibo";
import { Box, Container, Typography } from "@mui/material";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function AmiiboInfoPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['amiibo', id],
    queryFn: (context) => getAmiiboById(id, context),
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
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AmiiboInfo id={id} />
        </HydrationBoundary>
      </Box>
    </Container>
  );
}
