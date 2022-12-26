import { Route, Routes, Navigate } from "react-router-dom";
import React, { Fragment } from "react";
import Main from "./pages/home/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/user/12" />} />
        <Route path="/user/:id" element={<Main />} />
        <Route path="*" element={<Navigate to="/user/12" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
