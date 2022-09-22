import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, ShowDetail } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
