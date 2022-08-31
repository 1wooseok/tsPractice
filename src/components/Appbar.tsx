import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useAuth, useAuthAction } from "../context/AuthContext";

export default function TodoListAppBar() {
  const currentUser = useAuth();
  const actions = useAuthAction();

  const button = currentUser ? (
    <Button color="inherit" onClick={actions.logout}>
      Logout
    </Button>
  ) : (
    <Button color="inherit" onClick={actions.login}>
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
