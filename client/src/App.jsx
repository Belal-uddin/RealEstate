import HomePage from "./routes/homePage/HomePage";
import  {Layout, RequiredAuth } from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ListingPage from "./routes/listingPage/ListingPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
// import UploadWidget from "../../components/uploadWidget/UploadWidget";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
// import { singlePageLoader } from "./lib/loaders";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListingPage/>,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path:"/",
      element:<RequiredAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader: profilePageLoader
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        }
      ]
    }
   
  ]);
  return (
    
    <RouterProvider router = {router}/>
  )
};

export default App;
