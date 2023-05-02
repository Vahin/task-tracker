import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Mainpage } from "./components/Mainpage/Mainpage";
import { Mytasks } from "./components/Mytasks/Mytasks";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./app/hooks";
import GlobalStyles from "./styles/global";

function App() {
  const theme = useAppSelector((store) => store.ui.theme);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path='tasks' element={<Mytasks />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
