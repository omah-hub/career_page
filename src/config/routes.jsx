import MainLayout from "../layout/main_layout";
import Blog from "../domain/hero_page/blog";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,   // 👈 this makes Blog the default
        element: <Blog />,
      },
      // {
      //   path: "merchant",
      //   element: <Merchant />,
      // },
      // {
      //   path: "developer",
      //   element: <Developer />,
      // },
    ],
  },
];

export default routes;
