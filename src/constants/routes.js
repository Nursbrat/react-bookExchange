import Account from "../pages/Account/Account";
import Addbook from "../pages/Addbook/Addbook";
import Auth from "../pages/Auth/Auth";
import LoginForm from "../pages/Auth/components/LoginForm/LoginForm";
import SignUpForm from "../pages/Auth/components/SignUpForm/SignUpForm";
import BookInfo from "../pages/BookInfo/BookInfo";
import MainPage from "../pages/MainPage/MainPage";
import MyBooks from "../pages/MyBooks/MyBooks";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Profile from "../pages/Profile/Profile";
import Requests from "../pages/Requests/Requests";
import RequestModel from "../pages/Requests/components/RequestModel/RequestModel";
import MyRequestModel from "../pages/Requests/components/MyRequestModel/MyRequestModel";

import SubMainPage from "../pages/SubMainPage/SubMainPage";
import EditPage from "../pages/EditPage/EditPage";
import Favorites from "../pages/Favorites/Favorites";

export const ROUTES = [
  { link: "/", component: MainPage, name: "Главная", id: 1 },

  {
    link: "/submain-page",
    component: SubMainPage,
    name: "Список книг",
    id: 2,
  },
  { link: "/auth", component: Auth, name: "Авторизация", id: 3 },
  { link: "/login", component: LoginForm, name: "Логин", id: 4 },
  { link: "/sign-up", component: SignUpForm, name: "Регистрация", id: 5 },
  { link: "/my-books", component: MyBooks, name: "Мои книги", id: 6 },
  { link: "/requests", component: Requests, name: "Запросы", id: 7 },
  { link: "/account", component: Account, name: "Аккаунт", id: 8 },
  { link: "/add-book", component: Addbook, name: "Добавить книгу", id: 9 },
  {
    link: "/book-info/:id",
    component: BookInfo,
    name: "Информация о книге",
    id: 10,
  },
  {
    link: "/submain-page/:genre",
    component: SubMainPage,
    name: "Список книг",
    id: 11,
  },
  { link: "/profile", component: Profile, name: "Профиль", id: 12 },
  { link: "*", component: NotFoundPage, name: "Не найден", id: 13 },
  { link: "/request-model", component: RequestModel, name: "", id: 14 },
  { link: "/myrequest-model", component: MyRequestModel, name: "", id: 15 },

  {
    link: "/submain-page/",
    component: SubMainPage,
    name: "Список книг",
    id: 16,
  },

  {
    link: "/edit-book/:id",
    component: EditPage,
    name: "Редактировать книгу",
    id: 17,
  },
  {
    link: "/favorites",
    component: Favorites,
    name: "Избранное",
    id: 18,
  },
];
