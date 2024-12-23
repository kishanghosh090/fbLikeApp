import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Route, createRoutesFromElements } from "react-router-dom";
import ProfilePage from "./Components/Profile/ProfilePage.jsx";
import Chats from "./Components/Chat/Chats.jsx";
import Friends from "./Components/Friends/Friends.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="" index element={<ProfilePage />} />
      <Route path="Chat" index element={<Chats />} />
      <Route path="Friends" index element={<Friends />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
