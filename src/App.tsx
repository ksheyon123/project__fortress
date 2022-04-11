import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import {
  InGamePage,
  CreateNFTPage,
  LoginPage
} from "./pages/index";
import {
  PATHNAME
} from "./constants/pathname";

function App() {
  return (
    <Routes>
      <Route path={PATHNAME.PATH__INGAME} element={<InGamePage />} />
      <Route path={PATHNAME.CREATE__NFT} element={<CreateNFTPage />} />
      <Route path={PATHNAME.LOGIN} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
