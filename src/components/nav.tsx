import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
      <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button href='/' variant="contained">AmiiboDB</Button>
            </Typography>
        </Toolbar>
      </AppBar>
  );
}