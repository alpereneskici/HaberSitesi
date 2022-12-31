import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter, Outlet } from "react-router-dom";

import PrivateRoute from "./PrivateRouter";
import PublicRoute from "./PublicRouter";

import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register"
import Haberler from "../pages/main/Haberler"

import history from "./history";



const MyRouters = () => {

  return (
    <React.Fragment>
    <Suspense fallback={<Outlet />}>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
        <Route exact path="/" element={<Haberler />} />
        </Route>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/home" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
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
