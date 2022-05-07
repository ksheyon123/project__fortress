import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import {
  LoginPage,
  InGamePage,
  CreateNFTPage
} from "./pages/index";
import {
  PATHNAME
} from "./constants/index";

const App = () => {
  return (
    <Routes>
      <Route path={PATHNAME.LOGIN} element={<LoginPage />} />
      <Route path={PATHNAME.INGAME} element={<InGamePage />} />
      <Route path={PATHNAME.CREATE__NFT} element={<CreateNFTPage />} />
    </Routes>
  );
}

export default App;
