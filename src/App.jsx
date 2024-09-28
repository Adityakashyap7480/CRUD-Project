import Create from "./components/Create/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
