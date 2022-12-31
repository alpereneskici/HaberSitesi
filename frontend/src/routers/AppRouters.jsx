import React, { Suspense } from "react";
import {useSelector} from "react-redux"
import { Route, Routes, Navigate } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter, Outlet } from "react-router-dom";

import PrivateRoute from "./PrivateRouter";
import AdminRoute from "./AdminRouter";
import PublicRoute from "./PublicRouter";

import {  Loadable } from "../components";

import history from "./history";

const Login = Loadable(React.lazy(() => import("../pages/auth/login/Login")));
const Register = Loadable(React.lazy(() => import("../pages/auth/register/Register")));
const ForgetPassword = Loadable(React.lazy(() => import("../pages/auth/forgatpass/ForgetPassword")));
const ForgotPasswordConfirm = Loadable(React.lazy(() => import("../pages/auth/forgatpass/ForgotPasswordConfirm")));
const Haberler = Loadable(React.lazy(() => import("../pages/main/Haberler")));
const HaberlerAdmin = Loadable(React.lazy(() => import("../pages/main/HaberlerAdmin")));

const MyRouters = () => {
  const is_admin = useSelector(state=>state.auth.user.Message[0].is_admin)
  return (
    <React.Fragment>
    <Suspense fallback={<Outlet />}>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={is_admin ? <HaberlerAdmin/>:<Haberler /> } />
        </Route>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/home" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/login/securecode/:token" element={<ForgotPasswordConfirm />} />
        </Route>
      </Routes>
    </Suspense>
  </React.Fragment>
  );
};

const AppRouter = () => {
  return (
    <HistoryRouter history={history}>
        <MyRouters/>
    </HistoryRouter>
  );
};

export default AppRouter;
