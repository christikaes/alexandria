import { Box, Button, Sheet, Typography } from "@mui/joy";

export const Header = () => {
  return (
    <Sheet
      color="primary"
      variant="solid"
      sx={{ p: 2, mb: 4, display: "flex" }}
    >
      <Typography level="h3" component="h1">
        Alexandria
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Button>Login</Button>
    </Sheet>
  );
};
