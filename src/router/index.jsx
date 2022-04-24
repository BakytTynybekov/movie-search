import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { MoviePage } from "../pages/Movie/Movie";

function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="movies/:id" element={<MoviePage />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
