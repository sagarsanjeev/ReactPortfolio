import AboutPage from "../pages/about";
import ExperiencePage from "../pages/experience";
import HomePage from "../pages/homepage";
import ProjectsPage from "../pages/projects";
import NotFoundPage from "../pages/404";
import MainPage from "../pages/main";
const routes = [
  {
    Component: MainPage,
    path: "/",
  },
  {
    Component: AboutPage,
    path: "about",
  },
  {
    Component: ExperiencePage,
    path: "experience",
  },
  {
    Component: HomePage,
    path: "homepage",
  },
  {
    Component: ProjectsPage,
    path: "projects",
  },
  {
    Component: NotFoundPage,
    path: "404",
  },
];

export default routes;
