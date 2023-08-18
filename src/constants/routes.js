import Account from "../pages/Account/Account";
import Addbook from "../pages/Addbook/Addbook";
import Addbook2 from "../pages/Addbook2/Addbook2";
import Auth from "../pages/Auth/Auth";
import LoginForm from "../pages/Auth/components/LoginForm/LoginForm";
import SignUpForm from "../pages/Auth/components/SignUpForm/SignUpForm";
import BookInfo from "../pages/BookInfo/BookInfo";
import Home from "../pages/Home/Home";
import MainPage from "../pages/MainPage/MainPage";
import MyBooks from "../pages/MyBooks/MyBooks";
import Profile from "../pages/Profile/Profile";
import Requests from "../pages/Requests/Requests";
import SubMainPage from "../pages/SubMainPage/SubMainPage";

export const ROUTES = [
  { link: "/", component: MainPage, id: 1 },
  { link: "/home", component: Home, id: 2 },
  { link: "/auth", component: Auth, id: 3 },
  { link: "/login", component: LoginForm, id: 4 },
  { link: "/sign-up", component: SignUpForm, id: 5 },
  { link: "/my-books", component: MyBooks, id: 6 },
  { link: "/requests", component: Requests, id: 7 },
  { link: "/account", component: Account, id: 8 },
  { link: "/add-book", component: Addbook, id: 9 },
  { link: "/add-book-two", component: Addbook2, id: 10 },
  { link: "/book-info", component: BookInfo, id: 11 },
  { link: "/submain-page", component: SubMainPage, id: 12 },
  { link: "/profile", component: Profile, id: 13 },
];
