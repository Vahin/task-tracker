import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Mainpage } from "./components/Mainpage/Mainpage";
import { Mytasks } from "./components/Mytasks/Mytasks";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path='tasks' element={<Mytasks />} />
      </Route>
    </Routes>
  );
}

export default App;
