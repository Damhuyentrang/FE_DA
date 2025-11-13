import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import React from "react";

function CustomThemeProvider(props) {
  const themeOptions = {
    palette: {
      primary: {
        main: "#e63946",
      },
      newPrimary: {
        main: "rgb(11,83,148)",
      },
      oldPrimary: {
        main: "#42a5f5",
      },
      oldPrimaryDarker: {
        main: "#064374",
      },
      teal: {
        darker: "#033A2A",
        main: "#006451",
        lighter: "#86C8BC",
      },
      green: {
        main: "#EAFFD0",
      },
      peach: {
        main: "#F38181",
      },
      yellow: {
        darker: "#6C5604",
        main: "#FCE38A",
      },
      template: {
        darker: "#9b1c26",
        main: "#e63946",
        normal1: "#f28b91",
        normal2: "#ff5c5c",
        normal3: "#ff8a8a",
        lighter1: "#fcdcdc",
        lighter2: "#f9b3b7",
        lightest: "#ffe5e6",
      },
      normal1: {
        main: "	#0094d4",
      },
      normal2: {
        main: "#00a9dd",
      },
      delete: {
        main: "#f0857f",
      },
      black: {
        main: "#46555e",
      },
      text: {
        main: "#003553",
        teal: "#006451",
        green: "#EAFFD0",
        peach: "#F38181",
        yellow: "#FCE38A",
        oldPrimary: "#42a5f5",
      },
      white: {
        main: "#fff",
      },
      red: {
        main: "#d21818",
      },
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
  };

  let theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
