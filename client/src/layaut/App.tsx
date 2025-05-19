import {  useState } from "react";
import Catalog from "../feactures/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";



function App() {
 
  
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? '#eaeaea' : '#121212',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Box
        sx={{
          minHeight: '100vh',
          background: theme.palette.background.default,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 14 }}>
          <Catalog  />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
