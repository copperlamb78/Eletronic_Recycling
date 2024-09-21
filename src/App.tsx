import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./Style/DefaultTheme";
import { Header } from "./components/Header";
import { GlobalStyle } from "./Style/GlobalStyle";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Address } from "./pages/Address";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Router>
        <div>
          <GlobalStyle />
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

