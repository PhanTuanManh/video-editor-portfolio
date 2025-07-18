import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// MUI setup
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

// Tạo theme mặc định
const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
