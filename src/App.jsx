import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserContextProvider } from "./context/UserContext";
import { UserPostsPage } from "./pages/UserPostsPage";
import { UserPage } from "./pages/UserPage";
import { LoginPage } from "./pages/LoginPage";

// Login Komponent - Post til en server og få en bruger tilbage
// User Komponent - Se brugeres email og navn

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage title="HOME"/>}/>
            <Route path="/about" element={<AboutPage title="ABOUT"/>}/>
            <Route path="/user" element={<UserPage title="USER"/>}/>
            <Route path="/userposts" element={<UserPostsPage title="POSTS"/>}/>
            <Route path="/login" element={<LoginPage title="LOGIN"/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
