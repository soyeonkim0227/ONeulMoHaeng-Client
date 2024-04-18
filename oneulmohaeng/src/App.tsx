import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import MyDiary from "./pages/MyDiary";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/my" element={<MyDiary />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/my-page" element={<MyPage />} />
    </Routes>
  );
}

export default App;
