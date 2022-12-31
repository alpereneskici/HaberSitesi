import React from "react";
import { Route, Routes } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import App from "../pages/App";

import history from "./history";



const MyRouters = () => {

  return (

    <React.Fragment>
        <Routes>
        <Route exact path="/" element={<App />} />
        </Routes>
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
