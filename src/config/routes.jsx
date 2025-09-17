import MainLayout from "../layout/main_layout";
import BlogComp from "../domain/blog_page/blog_comp/blog_comp";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,   // 👈 this makes Blog the default
        element: <BlogComp />,
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
