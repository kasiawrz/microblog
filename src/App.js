import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsListingPage from "./pages/PostsListingPage";
import PostPage from "./pages/PostPage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/posts">
          <PostsListingPage />
        </Route>
        <Route path="/post/:name">
          <PostPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
