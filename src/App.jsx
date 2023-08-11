import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Account/Account";
import Requests from "./pages/Requests/Requests";
import Addbook from "./pages/Addbook/Addbook";
import Addbook2 from "./pages/Addbook2/Addbook2";
import MyBooks from "./pages/MyBooks/MyBooks";

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Account />
      <Requests />
      <Addbook />
      <Addbook2 />
      <MyBooks />
    </div>
  );
}

export default App;
