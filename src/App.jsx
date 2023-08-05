import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Account/Account";

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Account />
    </div>
  );
}

export default App;
