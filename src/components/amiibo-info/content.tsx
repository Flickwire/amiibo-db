/* eslint-disable @next/next/no-img-element */
import { AmiiboEntity } from "@/types/types";
import { Box, Button, Chip, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


export default function AmiiboInfoContent({amiibo, setEditMode}: {amiibo: AmiiboEntity, setEditMode: (editMode: boolean) => void}) {
return <Container maxWidth="lg">
<Box
  sx={{
    my: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
    {amiibo.name}
  </Typography>
  <img alt={amiibo.name} src={amiibo.image}/>
  <Box
    sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'row',
      gap: 1,
      overflow: 'auto',
      maxWidth: '80vw'
    }}
  >
    <Chip label={amiibo.type} color="info" />
    <Chip label={amiibo.gameSeries} color="primary" />
    <Chip label={amiibo.character} color="secondary" />
    <Chip label={`${amiibo.head}${amiibo.tail}`} color="success" />
  </Box>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Region</TableCell>
          <TableCell align="right">Released</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              🇪🇺 EU
            </TableCell>
            <TableCell align="right">{amiibo.release?.eu ?? 'Unreleased'}</TableCell>
          </TableRow>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              🇺🇸 NA
            </TableCell>
            <TableCell align="right">{amiibo.release?.na ?? 'Unreleased'}</TableCell>
          </TableRow>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              🇯🇵 JP
            </TableCell>
            <TableCell align="right">{amiibo.release?.jp ?? 'Unreleased'}</TableCell>
          </TableRow>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              🇦🇺 AU
            </TableCell>
            <TableCell align="right">{amiibo.release?.au ?? 'Unreleased'}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  <Button sx={{mt: 1}} variant="contained" type="button" onClick={(e) => setEditMode(true)}>Edit</Button>
</Box>
</Container>
}