/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home/page";
import NotFound from "./notfound";
import About from "./pages/about/about";
import Watch from "./pages/watch/page";
import Cities from "./pages/cities/city";
import ContactUs from "./pages/contactUs/contact_us";
import SignUp from "./pages/signUp/signup";
import Login from "./pages/login/login";



const App = () => {
  const token = localStorage.getItem('adesina_token')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/"  >
           <Route path="/" element={<HomePage/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/watch" element={ token? <Watch/> : <Navigate to="/login" />} />
           <Route path="/Cities" element={<Cities/>} />
           <Route path="/contact" element={<ContactUs/>} />
           <Route path="/signup" element={ <SignUp/> } />
           <Route path="/login" element={<Login/> }/>
           <Route path="*" element={<NotFound/>} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <div className="pop-modal my-d-none bg-black" id="isSending">
        <div className="my-mother down-40 xs-down-30vh">
          {/* <div className="img-container-2 fa-fade"><img src="/logo-2.png" alt="" /></div> */}
          <div className="my-mother xs-top-10 down-1">
            <span className="InterSemiBold px12 xs-px13 alice" id="sending-msg"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
