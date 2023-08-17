import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Account/Account";
import Requests from "./pages/Requests/Requests";
import Addbook from "./pages/Addbook/Addbook";
import Footer from "./components/Footer/Footer";
import MyBooks from "./pages/MyBooks/MyBooks";

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Account />
      <Requests />
      <Addbook />
      <MyBooks />
      <Footer />
    </div>
  );
}

export default App;
