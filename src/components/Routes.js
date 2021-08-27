/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import GifList from '../pages/GifList.jsx';
import SearchList from '../pages/SearchGifForm.jsx';
import '../styles/pages.css'

export default function App() {
  return (
      <>
      <Router>
        <Link to="/list" className="link">IRON MAN GIPHY</Link>
        <Link to="/search" className="link">SEARCH YOUR GIPHY</Link>
        <Switch>
            <Route exact path="/list">
                <GifList />
            </Route>
            <Route exact path="/search">
                <SearchList />
            </Route>
        </Switch>
      </Router>
      </>
  );
}