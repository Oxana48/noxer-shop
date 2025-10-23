import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
