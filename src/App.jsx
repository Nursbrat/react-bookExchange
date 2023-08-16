import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./pages/Auth/Auth";
import "./pages/Auth/Auth.scss";
import SignUpForm from "./pages/Auth/components/SignUpForm/SignUpForm";
import LoginForm from "./pages/Auth/components/LoginForm/LoginForm";
import Home from "./pages/Home/Home";
import MainPage from "./pages/MainPage/MainPage";
import MyBooks from "./pages/MyBooks/MyBooks";
import Profile from "./pages/Profile/Profile";
import Requests from "./pages/Requests/Requests";
import Account from "./pages/Account/Account";
import Addbook from "./pages/Addbook/Addbook";
import Addbook2 from "./pages/Addbook2/Addbook2";
import BookInfo from "./pages/BookInfo/BookInfo";
import SubMainPage from "./pages/SubMainPage/SubMainPage";
import { Suspense, useEffect, useState } from "react";
import Header from "./components/Header/Header";

const FakeAsyncComponent = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <div>Загрузка...</div> : children;
};

const App = () => {
  const ROUTES = [
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/home", element: <Home />, id: 2 },
    { link: "/auth", element: <Auth />, id: 3 },
    { link: "/login", element: <LoginForm />, id: 4 },
    { link: "/sign-up", element: <SignUpForm />, id: 5 },
    { link: "/my-books", element: <MyBooks />, id: 6 },
    { link: "/requests", element: <Requests />, id: 7 },
    { link: "/account", element: <Account />, id: 8 },
    { link: "/add-book", element: <Addbook />, id: 9 },
    { link: "/add-book-two", element: <Addbook2 />, id: 10 },
    { link: "/book-info", element: <BookInfo />, id: 11 },
    { link: "/submain-page", element: <SubMainPage />, id: 12 },
    { link: "/profile", element: <Profile />, id: 13 },
  ];

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {ROUTES.map((page) =>
          page.link === "/auth" ? (
            <Route
              path={page.link}
              element={<FakeAsyncComponent>{page.element}</FakeAsyncComponent>}
              key={page.id}
            >
              <Route path="login" element={<LoginForm />} />
              <Route path="sign-up" element={<SignUpForm />} />
            </Route>
          ) : (
            <Route
              path={page.link}
              element={<FakeAsyncComponent>{page.element}</FakeAsyncComponent>}
              key={page.id}
            />
          )
        )}
      </Routes>
    </Suspense>
  );
};

export default App;
