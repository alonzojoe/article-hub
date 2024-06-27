import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Auth from "./pages/Auth/Auth";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Feed />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
