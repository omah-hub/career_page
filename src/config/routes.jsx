import MainLayout from "../layout/main_layout";
import BlogComp from "../domain/blog_page/blog_comp/blog_comp";
import JobDetails from "../domain/blog_page/job_details/job_details";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,   // 👈 this makes Blog the default
        element: <BlogComp />,
      },
      {
        path: "job-details",
        element: <JobDetails />,
      },
      // {
      //   path: "developer",
      //   element: <Developer />,
      // },
    ],
  },
];

export default routes;
