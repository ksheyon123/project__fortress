import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import {
  InGamePage
} from "./pages/index";
import {
  PATHNAME
} from "./constants/pathname";
function App() {
  return (
    <Routes>
      <Route path={PATHNAME.PATH__INGAME} element={<InGamePage />} />
    </Routes>
  );
}

export default App;
