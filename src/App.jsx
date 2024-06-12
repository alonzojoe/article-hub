import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Feed from "./pages/Feed/Feed";
import Auth from "./pages/Auth/Auth";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Feed />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
