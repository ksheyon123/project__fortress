import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import {
  InGamePage,
  CreateNFTPage
} from "./pages/index";
import {
  PATHNAME
} from "./constants/pathname";
function App() {
  return (
    <Routes>
      <Route path={PATHNAME.PATH__INGAME} element={<InGamePage />} />
      <Route path={PATHNAME.CREATE__NFT} element={<CreateNFTPage />} />
    </Routes>
  );
}

export default App;
