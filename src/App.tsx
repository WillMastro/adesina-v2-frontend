/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home/page";
import NotFound from "./notfound";
import Form from "./pages/join/join";



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/"  >
           <Route path="/" element={<HomePage/>} />
           <Route path="/join" element={<Form/>} />
           <Route path="*" element={<NotFound/>} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <div className="pop-modal my-d-none bg-black" id="isSending">
        <div className="my-mother down-30 xs-down-30vh">
          <div className="img-container-loader fa-fade"><img src="/footer_logo.png" alt="" /></div>
          <div className="my-mother xs-top-10 down-1">
            <span className="InterSemiBold alice px12 xs-px13" id="sending-msg"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
