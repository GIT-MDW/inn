import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Routing } from "../../routes/Routes";
import { Content } from "../Content/Content";

export const Board = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Link to={"/user"}>
            <Button variant="contained">User</Button>
          </Link>
          <Link to={"/shop"}>
            <Button variant="contained">Shop</Button>
          </Link>
          <Link to={"/admin"}>
            <Button variant="contained">Admin</Button>
          </Link>
        </Stack>
      </AppBar>

      <Content maxWidth="lg">
        <Routing />
      </Content>
    </>
  );
};
