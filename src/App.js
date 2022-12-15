import { Route, Routes, Navigate } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import Main from "./pages/home/Main";
import ApiServices from "./services/ApiServices/ApiServices";

function App() {
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const apiServices = new ApiServices();
  //   apiServices.getUserById(12).then((res) => setUser(res.data));
  // }, []);

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
