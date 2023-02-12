import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

import HomePage from "./Pages/Home/Home";
import LogInPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import CoursesPage from "./Pages/Courses/Courses";
import CoursePage from "./Pages/Course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route index path="/courses/:id" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
