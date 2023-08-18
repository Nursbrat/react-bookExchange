import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./pages/Auth/Auth.scss";
import SignUpForm from "./pages/Auth/components/SignUpForm/SignUpForm";
import LoginForm from "./pages/Auth/components/LoginForm/LoginForm";
import { Suspense, useEffect, useState } from "react";
import { ROUTES } from "./constants/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageLoader from "./components/PageLoader/PageLoader";

const FakeAsyncComponent = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader">
      <PageLoader />
    </div>
  ) : (
    children
  );
};

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <PageLoader />
        </div>
      }
    >
      <Header />
      <Routes>
        {ROUTES.map((page) =>
          page.link === "/auth" ? (
            <Route
              path={page.link}
              element={
                <FakeAsyncComponent>{<page.component />}</FakeAsyncComponent>
              }
              key={page.id}
            >
              <Route path="login" element={<LoginForm />} />
              <Route path="sign-up" element={<SignUpForm />} />
            </Route>
          ) : (
            <Route
              path={page.link}
              element={
                <FakeAsyncComponent>{<page.component />}</FakeAsyncComponent>
              }
              key={page.id}
            />
          )
        )}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
