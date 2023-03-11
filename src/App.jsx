import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import NewPost from "./components/Post/NewPost";
import Search from "./components/Util/Search";
import Home from "./components/User/Home";
import Account from "./components/User/Account";
import Update from "./components/User/Update";
import SingleUser from "./components/User/SingleUser";
import ErrorPage from "./components/Util/ErrorPage";
import UpdatePost from "./components/Post/UpdatePost";
import Message from "./components/Util/Message";
import DeleteUser from "./components/User/DeleteUser";
import Users from "./components/apis/Users";
import Posts from "./components/apis/Posts";
import Footer from "./components/Header/Footer";

const App = () => {
  return (
    <>
      <Header />

      <div className="center">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home users={Users} posts={Posts} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<Account posts={Posts} />} />
          <Route path="/me/update" element={<Update />} />
          <Route path="/me/delete" element={<DeleteUser />} />
          <Route path="/users/:id" element={<SingleUser />} />

          <Route path="/new" element={<NewPost />} />
          <Route path="/post/update/:id" element={<UpdatePost />} />
          <Route path="/message" element={<Message />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
