import {

  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom/dist";
import Header from "./components/Header";
import Academy from "./components/Academy";

function App() {
  return (
    <div style={{ height: "150vh" }}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/academy" replace />} />
          <Route path="/academy" element={<Academy />} />
        </Routes>
      </BrowserRouter> */}

      <Header />
      <Academy />

    </div>
  );
}

export default App;
