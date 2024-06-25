import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import MyDiary from "./pages/MyDiary";
import MyPage from "./pages/MyPage";
import WritingDiary from "./pages/WritingDiary";
import DiaryDetail from "./pages/DiaryDetail";
import UserPage from "./pages/UserPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/my-diary" element={<MyDiary />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/write" element={<WritingDiary />} />
            <Route path="/diary-id" element={<DiaryDetail />} />
            <Route path="/user-id" element={<UserPage />} />
        </Routes>
    );
}

export default App;
