import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useLogin, useLogout } from "../utils/login";

interface AppbarProps {
  currentUser: string | null;
}

export default function TodoListAppBar({ currentUser }: AppbarProps) {
  console.log(currentUser);
  const button = currentUser ? (
    <Button color="inherit" onClick={useLogout}>
      Logout
    </Button>
  ) : (
    <Button color="inherit" onClick={useLogin}>
      Login
    </Button>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>
          {button}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
