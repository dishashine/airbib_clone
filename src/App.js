import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import { Router } from "./routes";
import { baseTheme } from "./assets/global/theme-varible";

import "./assets/css/global.css";

const App = () => {
  const theme = createTheme(baseTheme);
  const routing = useRoutes(Router);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">{routing}</div>
    </ThemeProvider>
  );
};

export default App;
