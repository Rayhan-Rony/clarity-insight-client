import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllArticles from "../Pages/AllArticles";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PostArticle from "../Pages/PostArticle";
import ArticleDetails from "../Pages/ArticleDetails";
import NotFoundPage from "../Pages/NotFoundPage";
import LoadingPage from "../Pages/LoadingPage";
import MyArticle from "../Pages/MyArticle";
import MyArticles from "../Pages/MyArticle";
import PrivateRouter from "./PrivateRouter";
import ProfileDetails from "../Pages/ProfileDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFoundPage></NotFoundPage>,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allArticles",
        loader: () => fetch("http://localhost:3000/allInsights"),
        Component: AllArticles,
      },
      {
        path: "/insights/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/insights/${params.id}`),
        Component: ArticleDetails,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/postArticle",
        element: (
          <PrivateRouter>
            <PostArticle></PostArticle>
          </PrivateRouter>
        ),
      },
      {
        path: "/myArticles",
        element: (
          <PrivateRouter>
            <MyArticle></MyArticle>
          </PrivateRouter>
        ),
      },
      {
        path: "/profileDetails",
        element: <ProfileDetails></ProfileDetails>,
      },
    ],
  },
]);
