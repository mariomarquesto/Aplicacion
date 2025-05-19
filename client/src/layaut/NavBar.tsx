import { AppBar, Toolbar, Typography, Switch, } from "@mui/material";


interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function NavBar({ darkMode, handleThemeChange }: Props) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Tienda
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>

     
    </>
  );
}
