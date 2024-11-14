'use client';

import {  createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#f00',
    },
    secondary: {
      main: '#0f0',
    },
  },
});

type Props = {
  children: ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider;