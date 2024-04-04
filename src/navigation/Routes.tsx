import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/home';

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}