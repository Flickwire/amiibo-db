import { AmiiboEntity } from "@/types/types";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

export default function AmiiboCard({amiibo}: {amiibo: AmiiboEntity}) {
  return <Card variant="outlined">
    <CardMedia
      sx={{ height: 140 }}
      image={amiibo.image}
      title={amiibo.name}
    />
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {amiibo.name}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Game: {amiibo.gameSeries}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Character: {amiibo.character}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Info</Button>
    </CardActions>
  </Card>
}
